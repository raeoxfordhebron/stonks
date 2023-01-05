import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>
            <Route path="" element={<Main/>}/>
            <Route path="/stocks" element={<Dashboard/>}/>
        </Route>
    )
)

export default router