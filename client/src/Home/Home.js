import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Component/Logo/Logo'

import './Home.css'

const Home = () => {
  const [temperature, setTemperature] = useState("")
  const [name, setName] = useName("")
  return (
    <div className='home'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='layout'>
        <div className='title'>
          <h2>Survey</h2>
          <h1>体温申請</h1>
        </div>
        <p>リリックホール入り口で体温測定ができます</p>
        <p>記録は3週間を目安に削除されます</p>
        <div>
          <label>本日の体温</label>
          <input onChange={(e) => setTemperature(e.target.value)} value={temperature} />
          <label>氏名</label>
          <input onChange={(e) => setName(e.target.value)} value={name} />
        </div>
      </div>
      <footer>
        <div>
          <div className='author'>
            <Logo />
            <small>&copy; The Wind Ensemble 1985-{new Date().getFullYear()} All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home