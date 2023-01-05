import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>
            <Route path="" element={<Home/>}/>
            <Route path="/stocks" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/stocks/:symbol" element={<Stocks/>}/>
        </Route>
    )
)

export default router