import Coins from "./Coins/Coins";

const CoinList = ({ filteredCoins }) => {
    return (
        <>  {filteredCoins.length === 0 && <h1>No Match found</h1>}
            {filteredCoins.map((coin) => {
                return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                )
            })}
        </>
    )
}

export default CoinList