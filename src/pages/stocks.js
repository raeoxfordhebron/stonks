import {useLoaderData} from "react-router-dom"

const Stocks = (props) => {
    const stock = useLoaderData()
    console.log(stock)
    return (
        <div>
            <h1>
                {stock[0].symbol}
            </h1>
            <h2>
                {stock[0].stockPrice}
            </h2>
        </div>
    )
}

export default Stocks