import './App.css'
import logo from './assets/logo.png'
import FirstView from './components/FirstView'
import Addquestions from './components/Addquestions'
import { useState } from 'react'

function App() {
  const [view, setView] = useState('add-questions')
  return (
    <div className='main-container'>
      <header>
        <img src={logo} alt="two playing cards logo" className='logo-img'/>
        <h1 className='header-txt'>FlashCard Quiz</h1>
      </header>
      {view === 'first' && <FirstView />}
      {view === 'add-questions' && <Addquestions />}
    </div>
  )
}

export default App
