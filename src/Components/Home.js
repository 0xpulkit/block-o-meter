import React from 'react'
import Card from './card'
import { v4 as uuidv4 } from 'uuid'

class Home extends React.Component {
    state = {
        coins: [
            {
                coinid: "bitcoin",
                coinName: "Bitcoin",
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnN6sBUYFsJt1xoAGws59kY76C2NosZBnSoS2CeEXwyrWTbZSKCApjMAzQxptp4GjHSF0&usqp=CAU"
            },
            {
                coinid: "ethereum",
                coinName: "Ethereum",
                imgUrl: "https://www.worldcryptoindex.com/wp-content/uploads/2018/01/ethereum-logo-300.jpg"
            },
            {
                coinid: "matic-network",   
                coinName: "Polygon",
                imgUrl: "data:image/png;base64,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"
            },
            {
                coinid: "cardano",
                coinName: "Cardano",
                imgUrl: "https://www.meme-arsenal.com/memes/688700b41a939acf4cad09e9c84bcff6.jpg"
            }
        ]
    }
    render() {
        return (
            <div className="pt-5 mt-5 mx-4 text-center">


                <div className="card-deck ">
                    {
                        this.state.coins.map((coin) => {
                            return(
                                <Card coinName={coin.coinName} coinid={coin.coinid} imgUrl={coin.imgUrl} key={uuidv4()} />
                            )
                        })
                    }
                </div>


            </div>




        )
    }
}
export default Home;