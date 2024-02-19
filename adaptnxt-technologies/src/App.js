import { BrowserRouter,Routes,Route } from "react-router-dom"
import DashBoard from "./components/DashBoard"
import Inventory from "./components/Inventory"
import Shipping from "./components/Shipping"
import Channel from "./components/Channel"
import Orders from "./components/Orders"
import './App.css'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Orders/>} />
      <Route path = "/dashboard" element = {<DashBoard />} />
      <Route path = "/inventory" element = {<Inventory/>} />
      <Route path = "/shipping" element = {<Shipping/>} />
      <Route path = "/channel" element = {<Channel/>} />

    </Routes>
  </BrowserRouter>
)

export default App