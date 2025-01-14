import React, { useEffect } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({ onClickHandler,onClickOpenDialPad }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div id='demoVBotCallBtns'>
      <span onClick={() => onClickHandler('0383956xxx')}  id="clickToCallBtn">Bấm để gọi</span>
      <button onClick={() => onClickOpenDialPad()} id="customCallBtn">
        <svg t="1735870910733" className="icon" viewBox="0 0 1285 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6743" width="20" height="20"><path d="M633.66335 842.772291C723.643573 842.772291 792.07922 774.336644 792.07922 684.356421 792.07922 594.376263 723.643573 525.940616 633.66335 525.940616 543.683192 525.940616 475.247545 594.376263 475.247545 684.356421 475.247545 775.603972 543.683192 842.772291 633.66335 842.772291L633.66335 842.772291ZM89.980223 1001.188096C44.356479 140.673294 1221.702957 140.673294 1176.079214 1001.188096 1176.079214 1024 1176.079214 1024 1153.26731 1024L112.792126 1024C89.980223 1024 89.980223 1024 89.980223 1001.188096L89.980223 1001.188096ZM1267.326764 254.732684C973.306929-84.910895 294.019835-84.910895 0 254.732684L112.792126 413.148554 316.831675 300.356427C362.455482 277.544588 362.455482 187.564365 362.455482 187.564365 475.247545 119.128718 792.07922 119.128718 906.13861 187.564365 906.13861 187.564365 906.13861 277.544588 951.762353 300.356427L1155.801966 413.148554 1267.326764 254.732684 1267.326764 254.732684Z" fill="#ffffff" p-id="6744"></path></svg>
        <span>Bàn phím</span>
      </button>
      </div>
      
    </>
  )
}

export default App
