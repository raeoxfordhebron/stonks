import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Stocks from "./pages/stocks"
import App from "./App"
import {stockLoader} from "./loaders"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route path="stocks" element={<Dashboard/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="stocks/:symbol" element={<Stocks/>} loader={stockLoader}/>
        </Route>
    )
)

export default router