import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const App =()=>{
  return(
    <>
    <div>
      
      <input type="text" />
      <button>search</button>
    </div>
    <div>
      <div>
        
        <h2>ANBU A</h2>
        <p>Age:20</p>
        <p>course:Full Stack Development</p>
      </div>
      <div>
        <h2>AKASH S</h2>
        <p>Age:22</p>
        <p>course:Full Stack Development</p>
      </div>
      <div>
        <h2>CHANDRU </h2>
        <p>Age:21</p>
        <p>course:Java developer</p>
      </div>
    </div>
    </>
  )
}
export default App
