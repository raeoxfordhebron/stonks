export const stockLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "f1f0c0e436c5e9f5bb9ce39772b99831"
    return (await fetch(`https://financialmodelingprep.com/api/v3/enterprise-values/${symbol}?limit=40&apikey=${apiKey}`)).json()
}