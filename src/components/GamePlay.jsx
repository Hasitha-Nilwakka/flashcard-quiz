import prevIcon from '../assets/previous.svg'
import nextIcon from '../assets/next.svg'
import flipIcon from '../assets/flip.svg'
import '../assets/styles/gameplay.css'
import Buttonaddquestions from './Buttonaddquestions'
import { MainContext } from '../App'
import { useContext, useState } from 'react'

export default function GamePlay() {
    const {questionsArray, toggleView, markQuestion} = useContext(MainContext)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isAnswerHidden, setIsAnswerHidden] = useState(true)

    function toggleFlashCard() {
        setIsAnswerHidden(prevHidden => !prevHidden)
    }

    function moveCards(direction) {
        if (direction === 'prev') {
            setCurrentQuestionIndex(prevIndex => {
                if (prevIndex - 1 >= 0) {
                    prevIndex -1
                }
            })
        } else if (direction === 'next') {
            setCurrentQuestionIndex(prevIndex => {
                if (currentQuestionIndex + 1 <= (questionsArray.length -1)) {
                    prevIndex +1
                } else {
                    toggleView('score_view')
                }
            })
        }
        setIsAnswerHidden(true)
    }

    function handleAnswerControlButtonsclick(result, id) {
        markQuestion(result, id)
        moveCards('next')
    }
    return (
        <div className='game-play-view'>
            <div className='question-play-screen'>
                <p className='q-num'>{`Question ${currentQuestionIndex + 1} of ${questionsArray.length}`}</p>
                <p>{questionsArray[currentQuestionIndex].question}</p>
            </div>
            <div className='flash-card-container'>
                <button 
                    className='control-btn' 
                    onClick={() => moveCards('prev')}
                >
                <img 
                    src={prevIcon} 
                    alt="previous icon" 
                    className='control-icon'
                />
                </button>
                <div 
                    className= {isAnswerHidden ? 'flash-card' : 'answer-reveal' } 
                    role='button' 
                    onClick={toggleFlashCard}
                >
                    {isAnswerHidden ? <img src={flipIcon} alt="flip icon" className='flip-icon'/> : null}
                    <label>{isAnswerHidden ? 'Flip the card' : questionsArray[currentQuestionIndex].answer}</label>
                </div>
                <button 
                    className='control-btn' 
                    onClick={() => moveCards('next')}
                >
                    <img 
                        src={nextIcon} 
                        alt="next icon" 
                        className='control-icon'
                    /> 
                </button>
            </div>
            <div className='answer-controls'>
                <button 
                    className={isAnswerHidden ? 'btn-correct hidden' : 'btn-correct'} 
                    onClick={() => handleAnswerControlButtonsclick(true, questionsArray[currentQuestionIndex].id)}
                >Correct</button>
                <button 
                    className={isAnswerHidden ? 'btn-wrong hidden' : 'btn-wrong'} 
                    onClick={() => handleAnswerControlButtonsclick(false, questionsArray[currentQuestionIndex].id)}
                >Wrong</button>
            </div>
            <Buttonaddquestions>Manage Questions</Buttonaddquestions>
        </div>
    )
}