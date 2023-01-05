import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h1>Hello World</h1>}>

        </Route>
    )
)

export default router