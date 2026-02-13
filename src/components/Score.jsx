import Buttonaddquestions from "./Buttonaddquestions"
import Buttonplaygame from "./Buttonplaygame"
import '../assets/styles/score.css'
import alldoneImg from '../assets/alldone.png'
import { MainContext } from "../App"
import { useContext } from "react"

export default function Score() {
    const {questionsArray} = useContext(MainContext)

    const correctAnswers = questionsArray.filter(q => q.isCorrect)

    function determineCheerWord() {
        const percentage = (correctAnswers.length / questionsArray.length) * 100
        let cheerWord = ''
        if (percentage === 100) {
            cheerWord = 'You Rock!'
        } else if (percentage >= 75 && percentage < 100) {
            cheerWord = 'Awesome!'
        } else if (percentage < 75 && percentage >= 50) {
            cheerWord = 'Good Job!'
        } else if (percentage < 50 && percentage >= 25) {
            cheerWord = 'Keep Trying'
        } else {
            cheerWord = 'Good Luck Next Time'
        }

        return cheerWord
    }

    return (
        <div className="score-screen">
            <p>All Questions Finished</p>
            <img src={alldoneImg} alt="cartoon fox holding a star" className="ss-img"/>
            <div className="score-section">
                <p>Your Score</p>
                <p className="ss-score">{`${correctAnswers.length} / ${questionsArray.length}`}</p>
                <p className="ss-cheer">{determineCheerWord()}</p>
            </div>
            <Buttonplaygame>Play Again</Buttonplaygame>
            <Buttonaddquestions>Manage Questions</Buttonaddquestions>
        </div>
    )
}