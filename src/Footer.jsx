import React from 'react'
import "./App.css"
import Union from "./assets/Union.svg"
import gold from "./assets/gold.svg"
import friends from "./assets/friends.svg"
import pick from "./assets/pick.svg"
import earns from "./assets/earns.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <Link to="/main"  className="foot">
          <img src={Union} alt="" />
          <p>Exchange</p>
        </Link>
        <Link to="/third" className="foot">
          <img src={pick} alt="" />
          <p>Mine</p>
        </Link>
        <button className="foot">
          <img src={friends} alt="" />
          <p>Friends</p>
        </button>
        <button className="foot">
          <img src={earns} alt="" />
          <p>Earn</p>
        </button>
        <button className="foot">
          <img src={gold} alt="" />
          <p>Airdrop</p>
        </button>
      </footer>
    </div>
  )
}

export default Footer
