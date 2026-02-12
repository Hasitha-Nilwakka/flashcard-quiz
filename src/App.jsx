import './App.css'
import logo from './assets/logo.png'
import FirstView from './components/FirstView'
import Addquestions from './components/Addquestions'
import GamePlay from './components/GamePlay'
import Score from './components/Score'
import { useState, createContext } from 'react'

const MainContext = createContext()


function App() {
  //Array state & functions
  const [questionsArray, setQuestionsArray] = useState(
      JSON.parse(localStorage.getItem('lsQArray')) || []
  )

  function addQuestionToArray( question, answer, id) {
     question = question.trim()[question.length -1] === '?' ? question : `${question} ?`
      setQuestionsArray((prevArray) => {
          return [...prevArray, {
              id : id,
              question : question,
              answer : answer,
              isCorrect : false
          }]
      })
  }

  function removeQuestionFromArray(id) {
    setQuestionsArray(prevArray => prevArray.filter(q => id !== q.id))
  }

  function deleteQuestionFromArray(id) {
    setQuestionsArray(prevArray => {
      return prevArray.filter(q => q.id !== id)
    })
  }

  //view state & functions
  const [view, setView] = useState(questionsArray.length > 0 ? 'game_play_view' : 'first_view')

  function toggleView(newView) {
    setView(newView)
  }

  return (
    <div className='main-container'>
      <header>
        <img src={logo} alt="two playing cards logo" className='logo-img'/>
        <h1 className='header-txt'>FlashCard Quiz</h1>
      </header>
      <MainContext.Provider value={{toggleView, addQuestionToArray, deleteQuestionFromArray,removeQuestionFromArray,questionsArray}}>
        {view === 'first_view' && <FirstView />}
        {view === 'add_questions_view' && <Addquestions />}
        {view === 'game_play_view' && <GamePlay />}
        {view === 'score_view' && <Score />}
      </MainContext.Provider>
    </div>
  )
}

export default App

export {MainContext}
