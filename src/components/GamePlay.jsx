import prevIcon from '../assets/previous.svg'
import nextIcon from '../assets/next.svg'
import flipIcon from '../assets/flip.svg'
import '../assets/styles/gameplay.css'
import Buttonaddquestions from './Buttonaddquestions'

export default function GamePlay() {
    return (
        <div className='game-play-view'>
            <div className='question-play-screen'>
                <p>What is the most common surname in the USA ?</p>
            </div>
            <div className='flash-card-container'>
                <button className='control-btn'>
                <img src={prevIcon} alt="previous icon" className='control-icon'/>
                </button>
                <div className='flash-card' role='button'>
                    <img src={flipIcon} alt="flip icon" className='flip-icon'/>
                    <label>Flip the card</label>
                </div>
                <button className='control-btn'>
                    <img src={nextIcon} alt="next icon" className='control-icon'/> 
                </button>
            </div>
            <div className='answer-controls'>
                <button className='btn-correct'>Correct</button>
                <button className='btn-wrong'>Wrong</button>
            </div>
            <Buttonaddquestions />
        </div>
    )
}