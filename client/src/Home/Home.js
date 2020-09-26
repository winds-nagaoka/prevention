import React, { useState } from 'react'
import request from 'superagent'
import Logo from '../Component/Logo/Logo'
import { Actions } from '../Component/Flux/Actions'

import './Home.css'

const Home = () => {
  const [mode, setMode] = useState(0)
  const [temperature, setTemperature] = useState("")

  const defaultName = localStorage.getItem("name") ? localStorage.getItem("name") : ""
  const [name, setName] = useState(defaultName)
  const updateName = (value) => {
    if (save) localStorage.setItem("name", name)
    setName(value)
  }
  const [save, setSave] = useState(defaultName === "" ? false : true)

  const sendPost = (e) => {
    e.preventDefault()
    if (temperature === "" || name === "") return false
    if (save) localStorage.setItem("name", name)
    if (!save) localStorage.clear()
    request.post('/post')
      .type('form')
      .send({ name, temperature })
      .end((err, res) => {
        if (res.body.status) {
          setMode(1)
          setTemperature("")
          setName(save ? localStorage.getItem("name") : "")
          window.scrollTo(0, 0)
          Actions.toastShow("送信しました")
        }
      })
  }

  const back = (e) => {
    e.preventDefault()
    setMode(0)
    window.scrollTo(0, 0)
  }

  const buttondisabled = (temperature === "" || name === "") ? true : false

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
              <input onChange={(e) => updateName(e.target.value)} value={name} type="text" />
              <label className="checkbox">
                <input type="checkbox" checked={save} onChange={() => setSave(!save)} />
                  氏名をブラウザに保存する
              </label>
            </div>
            <div className="button">
              <button onClick={(e) => sendPost(e)} onTouchStart={() => {}} disabled={buttondisabled}>送信</button>
              <p>記録は3週間を目安に削除します</p>
            </div>
          </>
        )}
        {mode === 1 && (
          <>
            <p>ご協力ありがとうございました</p>
            <div className="button">
              <button onClick={(e) => back(e)} onTouchStart={() => {}}>戻る</button>
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