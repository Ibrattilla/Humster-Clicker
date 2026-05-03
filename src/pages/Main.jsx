import React, { useState,useEffect } from 'react'
import "../App.css"
import minh from "../assets/minhumster.svg" 
import union from "../assets/Union.svg" 
import M from "../assets/M.svg" 
import X from "../assets/X.svg" 
import coin from "../assets/Coin.svg" 
import humster from "../assets/humster.svg" 
import round from "../assets/round.svg" 
import Energy from "../assets/energy.svg" 
import line from "../assets/line.svg" 
import Cards from '../Cards'
  

const Main = ({coins,setCoins}) => {
  const [energy,setEnergy] = useState(6500)

   function clicker(){
     if (energy >= 15){
       setCoins(prev => prev + 12)
       setEnergy(prev => prev - 15)
     }
  }


useEffect(() => {
  if (energy < 6500) {
    const timer = setTimeout(() => {
      setEnergy(prev => prev + 1)
    }, 1000)

    return () => clearTimeout(timer)
  }
}, [energy])

  return (
    <div>
      <main>
       <div className="first">
         <h1 className='h1'>Hamster Kombat</h1>
        <div className="icons">
          <div className="icon">
            <img src={minh} alt="" />
            <h1>Nick Jau</h1>
          </div>
          <div className="icon bg">
            <img src={union} alt="" />
            <h1>Binance</h1>
          </div>
        </div>
       </div>
       <div className="second">
       <Cards/>
        <h1 className='coins'><img src={coin}alt="" />{coins}</h1>
        <img src={line} alt="" />
        <button onClick={clicker} className='btn'>
          <img className='round' src={round} alt="" />
          <img className='humster' src={humster} alt="" />
        </button>
        <div className="energy">
          <h1><img src={Energy} alt="" /> {energy}/6500</h1>
          <h1>Boost</h1>
        </div>  
       </div>
      </main>
    </div>
  )
}

export default Main
