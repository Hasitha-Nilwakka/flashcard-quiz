import Buttonaddquestions from "./Buttonaddquestions"
import brain from '../assets/brain.jpg'
import '../assets/styles/firstview.css'

export default function FirstView() {
    return (
        <>
            <main>
                <h2>Use this app to memorize things.</h2>
                <ul>
                <li>Setup questions and answers</li>
                <li>Start playing</li>
                <li>Answer a question</li>
                <li>Flip the card and mark your results</li>
                <li>Check your score</li>
                </ul>
            </main>
            <div className='btn-default-no-q-screen'>
                <Buttonaddquestions>Add Questions</Buttonaddquestions>
            </div>
            <div className='brain-img-div'>
                <img 
                    src={brain} 
                    alt="image of brain graphic" 
                    className='brain-img' 
                />
            </div>
        </>
    )
}