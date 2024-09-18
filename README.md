# TradeX Frontend

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10.13.1-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4.4-FF6384?logo=chart.js)](https://www.chartjs.org/)

TradeX is a real-time stock trading platform with live market data and interactive charts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Key Components](#key-components)
- [Firebase Configuration](#firebase-configuration)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Live Stock Data**: Real-time updates on stock prices and market trends
- **Interactive Charts**: Visualize stock performance with dynamic, responsive charts
- **User Authentication**: Secure login and registration system with Google Sign-In option
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Real-time Updates**: Socket.io integration for live data streaming

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/TradeXfrontend.git
   ```

2. Navigate to the project directory:
   ```
   cd TradeXfrontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Project Structure

```
TradeXfrontend/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Form/
│ │ ├── GoogleButton/
│ │ ├── Live/
│ │ ├── Pages/
│ │ └── shared/
│ ├── lib/
│ ├── App.jsx
│ ├── firebase.js
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Firebase
- Chart.js
- Socket.io
- React Router
- Axios

## Key Components

### Live Stock View

```jsx
// TradeXfrontend/src/components/Live/LiveStock.jsx
import React, { useState, useEffect } from 'react';
import { getStockData } from '../../lib/api';

const LiveStock = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStockData();
      setStockData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Render stock data
  // ...
};

export default LiveStock;
```

### Interactive Graph

```jsx
// TradeXfrontend/src/components/Live/Graph.jsx
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Stock Price',
            data: data.prices,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Graph;
```

### Authentication Form

```jsx
// TradeXfrontend/src/components/Form/Form.jsx
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render form
  // ...
};

export default Form;
```

## Firebase Configuration

Update the configuration in `src/firebase.js`:

```javascript
// TradeXfrontend/src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Styling

This project uses Tailwind CSS for styling. The main configuration can be found in:

```javascript
// TradeXfrontend/tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Contact

Vaibhav  - email@example.com
Sahil  - email@example.com
Devashish  - devashishthapliyal1@gmail.com

Project Link: [https://github.com/your-username/TradeXfrontend](https://github.com/your-username/TradeXfrontend)