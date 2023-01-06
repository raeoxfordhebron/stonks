import {useLoaderData} from "react-router-dom"

const Stocks = (props) => {
    const stock = useLoaderData()
    console.log(stock)
    return (
        <div>
            <h1>
                Symbol: {stock[0].symbol}
            </h1>
            <h2>
                Price: {stock[0].stockPrice}
            </h2>
        </div>
    )
}

export default Stocks