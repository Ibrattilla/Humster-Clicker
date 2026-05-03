  import "../App.css"
import tick from "../assets/tick.svg" 
import japan from "../assets/japan.svg" 
import bug from "../assets/bug.svg" 
import meme from "../assets/meme.svg" 
import litimeme from "../assets/litimeme.svg" 
import M from "../assets/M.svg" 
import X from "../assets/X.svg" 
import coin from "../assets/Coin.svg" 
import Cards from '../Cards'
import React, { useState, useEffect } from 'react'


const Third = ({coins,setCoins}) => {
 const [showBuy, setShowBuy] = useState(false)

  function spend() {
    if (coins >= 156.92 * 1000) {
      setShowBuy(false)
      setCoins(prev => prev - 156.92 * 1000)
      alert("You have bought 'Top 10 cmc pairs' congrats!")
    } else {
      alert("You don't have enough money sorry :(")
    }
  }

  function buy() {
    setShowBuy(true)
  }

  function close() {
    setShowBuy(false)
  }
  return (
    <div>
       <div className="third">
        <div className="fourth"></div>
        <div className="fifth">
          <Cards/>
        <h1 className='coins p'><img src={coin}alt="" />{coins}</h1>
        <div className="combo">
          <p>Daily combo</p>
          <h1>
          <img src={coin} alt="" />
          +5,000,000
          <img src={tick} alt="" />
          </h1>
        </div>
        <div className="squares">
          <div className="square">
            <img src={japan} alt="" />
            <p>Licence Japan</p>
          </div>
          <div className="square">
            <img src={bug} alt="" />
            <p>QA team</p>
          </div>
          <div className="square">
            <img src={meme} alt="" />
            <p>Meme coins</p>
          </div>
        </div>
        <nav>
          <button>Markets</button>
          <button>PR&Team</button>
          <button>Legal</button>
          <button>Specials</button>
        </nav>
        <div className="ending">
          <button onClick={buy} className="end">
            <div className="ender">
              <img src={M} alt="" />
              <div className="text">
                <h1>Тоp 10 cmc pairs</h1>
                <div className="profit">
                  <p>Profit per hour</p>
                  <h2><img src={coin} alt="" />1.61K</h2>
                </div>
              </div>
            </div>
            <div className="level">
              <h3>lvl 13</h3>
              <h4><img src={coin} alt="" />156.93K</h4>
            </div>
          </button>
          <div className="end">
            <div className="ender">
              <img src={litimeme} alt="" />
              <div className="text">
                <h1>Meme coins</h1>
                <div className="profit">
                  <p>Profit per hour</p>
                  <h2><img src={coin} alt="" />2.2K</h2>
                </div>
              </div>
            </div>
            <div className="level">
              <h3>lvl 13</h3>
              <h4><img src={coin} alt="" />312.2K</h4>
            </div>
          </div>
          <div className="end">
            <div className="ender">
              <h6>x10</h6>
              <div className="text">
                <h1>Margin trading x10</h1>
                <div className="profit">
                  <p>Profit per hour</p>
                  <h2><img src={coin} alt="" />5.5K</h2>
                </div>
              </div>
            </div>
            <div className="level">
              <h3>lvl 13</h3>
              <h4><img src={coin} alt="" />156.93K</h4>
            </div>
          </div>
          <div className="end">
            <div className="ender">
              <h6>x20</h6>
              <div className="text">
                <h1>Margin trading x20</h1>
                <div className="profit">
                  <p>Profit per hour</p>
                  <h2><img src={coin} alt="" />11K</h2>
                </div>
              </div>
            </div>
            <div className="level">
              <h3>lvl 13</h3>
              <h4><img src={coin} alt="" />156.93K</h4>
            </div>
          </div>
        </div>
         {showBuy && (
            <div className="sixth" style={{display: "flex"}}>
              <div className="seventh"></div>
              <div className="buy">
                <img src={M} alt="" />
                <h1>Top 10 cmc pairs</h1>
                <h2>Most traded cryptocurrency pairs market capitalization</h2>
                <div className="profit">
                  <p>Profit per hour</p>
                  <h2><img src={coin} alt="" />1.61K</h2>
                </div>
                <h3><img src={coin} alt="" />156.92</h3>
                <button className='button' onClick={spend}>Go ahead</button>
                <button className='closer' onClick={close}><img src={X} alt="" /></button>
              </div>
            </div>
          )}
        </div>
       </div>
    </div>
  )
}

export default Third
