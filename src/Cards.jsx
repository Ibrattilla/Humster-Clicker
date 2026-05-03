import React from 'react'
import "./App.css"
import coin from "./assets/Coin.svg"

const Cards = () => {
  return (
    <div>
                <div className="cards">
                  <div className="card">
                    <h2 className='orange'>Eran per tap</h2>
                    <p><img src={coin} alt="" />+12</p>
                  </div>
                  <div className="card">
                    <h2 className='blue'>Coins to level up</h2>
                    <p>10 M</p>
                  </div>
                  <div className="card">
                    <h2 className='green'>Profit per our</h2>
                    <p><img src={coin} alt="" />+636.31K</p>
                  </div>
                </div> 
    </div>
  )
}

export default Cards
