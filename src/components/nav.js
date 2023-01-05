import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return(
        <div className="nav">
            <Link to="/stocks">
                <div>iStocks</div>
            </Link>
            <Link to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}