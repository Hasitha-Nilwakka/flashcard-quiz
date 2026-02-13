import '../assets/styles/addquestions.css'
import Buttonplay from './Buttonplaygame'
import Buttonaddquestions from "./Buttonaddquestions"
import deleteicon from '../assets/delete.svg'
import editicon from '../assets/edit.svg'
import { MainContext } from '../App'
import { useContext, useState } from 'react'
import { nanoid } from 'nanoid'


export default function Addquestions() {
    const [inputValue, setInputValue] = useState({id: '',question: '', answer : ''})
    const {addQuestionToArray ,questionsArray, removeQuestionFromArray} = useContext(MainContext)

    function handleformAction(formData) {
        const question = formData.get('question-input')
        const answer = formData.get('answer-input')
        const id = nanoid()
        addQuestionToArray(question, answer, id)
        setInputValue({
            id : '',
            question : '',
            answer : ''
        })
    }

    function handleSaveAndCancelEdit() {
        addQuestionToArray(inputValue.question, inputValue.answer, inputValue.id)
        setInputValue({
            id : '',
            question : '',
            answer : ''
        })
    }

    

    function handlEditButtonClick(id) {
        const questionToEdit = questionsArray.filter(q => q.id === id)[0]
        setInputValue({
            id : questionToEdit.id,
            question : questionToEdit.question,
            answer : questionToEdit.answer
        })
        removeQuestionFromArray(id)
    }

    return (
        <div className="questions-container">
            {questionsArray.length > 0 ? <Buttonplay>Play Now</Buttonplay> : null}
            <form action={handleformAction} className='qAndA'>
                <label htmlFor='question-input'>Question ?</label>
                <textarea 
                    value={inputValue.question}
                    onChange={(e) => setInputValue(prevInputValue => (
                        {
                            id: prevInputValue.id, 
                            question: e.target.value, 
                            answer: prevInputValue.answer
                        }))}
                    name="question-input" 
                    id="question-input" 
                    placeholder='e.g. Whats the capital of France?' 
                    required
                ></textarea>
                <label htmlFor='answer-input'>Answer</label>
                <textarea
                    value={inputValue.answer}
                    onChange={(e) => setInputValue(prevInputValue => (
                        {
                            id: prevInputValue.id, 
                            answer: e.target.value, 
                            question: prevInputValue.question
                        }))}
                    name="answer-input" 
                    id="answer-input" 
                    placeholder='e.g. Paris' 
                    required
                ></textarea>
                <div>
                    {inputValue.id === '' ? 
                        <Buttonaddquestions>{inputValue.id === '' ? 'Add Question' : 'Save Changes' }</Buttonaddquestions> : 
                        <button 
                            className='btn-save-edit' 
                            onClick={handleSaveAndCancelEdit} 
                            type='button'
                        >Save Changes</button>
                    }
                    {inputValue.id === '' ? null : 
                        <button 
                            onClick={handleSaveAndCancelEdit} 
                            type='button' 
                            className='btn-cancel-edit'
                        >Cancel</button>}
                </div>
            </form>
            {questionsArray.length > 0 ? <div className='questions-array'>
                <p>Your questions</p>
                {questionsArray.map(q => {
                    return (
                        <div className='question' key={q.id}>
                            <p className='q-q'>{q.question}</p>
                            <p className='q-a'>{q.answer}</p>
                            <div className='question-controls'>
                                <button onClick={() => handlEditButtonClick(q.id)}>
                                    <img 
                                        src={editicon} 
                                        alt="edit button" 
                                        className='icon-size'
                                    />
                                </button>
                                <button onClick={() => removeQuestionFromArray(q.id)}>
                                    <img 
                                        src={deleteicon} 
                                        alt="delete button" 
                                        className='icon-size'
                                    />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div> : null}
        </div>
    )
}