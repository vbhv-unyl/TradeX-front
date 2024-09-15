import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import io from 'socket.io-client';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, TimeScale, Title, Tooltip, Legend);

const socket = io('http://localhost:3000'); // Replace with your Node.js server URL

const Graph = () => {
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        socket.on('stock_price', (data) => {
            console.log('Stock price data received:', data);

            const currentTime = new Date();
            setLabels((prevLabels) => [...prevLabels, currentTime]);
            setChartData((prevData) => [...prevData, data.price]);
        });

        return () => {
            socket.off('stock_price');
        };
    }, []);

    const data = {
        datasets: [
            {
                label: 'AAPL',
                data: chartData.map((value, index) => ({
                    x: labels[index],
                    y: value
                })),
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.5)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 2,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Price: ${tooltipItem.raw.y}`;
                    }
                }
            }
        },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'second',
                    stepSize: 5,
                    displayFormats: {
                        second: 'HH:mm:ss',
                    },
                    tooltipFormat: 'll HH:mm:ss',
                },
                title: {
                    display: true,
                    text: 'Time',
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price',
                },
            },
        },
    };

    return (
        <div className='rounded-lg'>
            <h1 className='p-10 text-3xl'>Live Chart : </h1>
            <Line data={data} options={options} />
        </div>
    );
};

export default Graph;
