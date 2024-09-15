import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./components/Pages/Dashboard"
import Products from "./components/Pages/Products"
import LiveStock from "./components/Live/Live Stock"
import Home from "./components/Pages/Home"
import Form from "./components/Form/Form"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/live" element={<LiveStock />}/>
        <Route path="/login" element={<Form />}/>
      </Routes>
    </Router>
  )
}

export default App
