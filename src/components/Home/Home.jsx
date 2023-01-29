import React, { useState } from 'react'
import { links } from '../../data/links'
import { test } from '../../data/test'
import './Home.scss'

function Home() {
  const [active, setActive] = useState('')
  const [id, setId] = useState('')

  test.forEach((e,i)=>{
    return (
      console.log(e.id === 1 ? e : 'err')
    )
  })
  return (
    <div>
      <div className="home container">
        <div className="home-title">
          <b>Kimyo</b>
        </div>
        <div className="home-timer">
          <b>2 : 40 : 50</b>
        </div>
        <div className="home-numbers">
          <b>Kimyo (3.1)</b>
          {
            links?.map((e,i)=>(
              <a key={i} onClick={()=> setId(e.id)} href={e.href}>{e.title}</a>
            ))
          }
        </div>
      </div>
      {
        test&&test.map((e, i)=>(
          <section key={i} id={e.id}>
            <div className={e.id === id && id === e.id ? 'bottomScale' : 'bottom'}>
                  <div className="tests">
                    <div className="tests-title">
                      <b>{e.num}</b>
                      <p>{e.title}</p>
                    </div>
                    <div className='tests-variants'>
                      {
                        e.variants.map((e,i)=>(
                          <label htmlFor="radio" key={i}>
                            <b onClick={()=> setActive(`${e.vid}`)} className={active === String(e.vid) ? 'labelAct' : ''}>{e.variant}</b>
                            <input type="radio" hidden id='radio'/>
                          </label>
                        ))
                      }
                    </div>
                  </div>
            </div>
          </section>
        ))
      }
  </div>
  )
}

export default Home