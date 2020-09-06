import React, { useState } from 'react'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'

import './Home.css'

const Home = () => {
  const [mode, setMode] = useState(0)
  const [temperature, setTemperature] = useState("")
  const [name, setName] = useState("")

  const sendPost = (e) => {
    e.preventDefault()
    request.post('/post')
      .type('form')
      .send({ name, temperature })
      .end((err, res) => {
        if (res.body.status) {
          setMode(1)
        }
      })
  }

  const back = (e) => {
    e.preventDefault()
    setMode(0)
  }

  return (
    <div className='home'>
      <div className='logo'>
        <Logo />
      </div>
      <div className='layout'>
        {mode === 0 && (
          <>
            <p>リリックホールの楽屋入口にて体温測定ができます</p>
            <div className="form">
              <label>本日の体温</label>
              <input onChange={(e) => setTemperature(e.target.value)} value={temperature} type="number" />
              <label>氏名</label>
              <input onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="button">
              <button onClick={(e) => sendPost(e)}>送信</button>
              <p>記録は3週間を目安に削除します</p>
            </div>
          </>
        )}
        {mode === 1 && (
          <>
            <p>ご協力ありがとうございました</p>
            <div className="button">
              <button onClick={(e) => back(e)}>戻る</button>
            </div>            
          </>
        )}
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