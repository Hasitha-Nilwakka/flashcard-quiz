import '../assets/styles/addquestions.css'
import Buttonplay from './Buttonplaygame'
import Buttonaddquestions from "./Buttonaddquestions"
import qArray from '../qArray'
import deleteicon from '../assets/delete.svg'
import editicon from '../assets/edit.svg'

export default function Addquestions() {
    return (
        <div className="questions-container">
            <Buttonplay />
            <form className='qAndA'>
                <p>Question ?</p>
                <textarea name="" id="" placeholder='e.g. Whats the capital of France?'></textarea>
                <p>Answer</p>
                <textarea name="" id="" placeholder='e.g. Paris'></textarea>
                <Buttonaddquestions />
            </form>
            <div className='questions-array'>
                <p>Your questions</p>
                {qArray.map(q => {
                    return (
                        <div className='question' key={q.id}>
                            <p className='q-q'>{q.question}</p>
                            <p className='q-a'>{q.answer}</p>
                            <div className='question-controls'>
                                <button><img src={editicon} alt="edit button" className='icon-size'/></button>
                                <button><img src={deleteicon} alt="delete button" className='icon-size'/></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}