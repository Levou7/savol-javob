import React, { useState } from 'react'
import { links } from '../../data/links'
import { test } from '../../data/test'
import './Home.scss'

const color = [
    
]
function Home() {
  const [active, setActive] = useState('')
  const [id, setId] = useState('')
  const [ids, setIds] = useState('')

  window.addEventListener('mousedown', e=>{
    setId(e)
  })
  const name = document.getElementsByTagName('input')
  const label = document.getElementsByTagName('label')

  

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
              <a className={active === 1 ? 'spanAct' : ''} key={i} onClick={()=> setId(e.id)} href={e.href}>{e.title}</a>
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
                        e.variants.map((variant,i)=>(
                          <label onClick={()=> {
                            setActive(`${variant.vid}`)
                            setIds(ids + 1)
                            !color.includes(variant.vid) ? color.push(variant.vid) : color.push()
                            // console.log(color);
                          }} htmlFor={e.id} key={i}>
                            <b>{variant.variant}</b>
                            <input type="radio" hidden id={e.id}/>
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