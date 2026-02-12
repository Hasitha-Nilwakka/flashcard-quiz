import Buttonaddquestions from "./Buttonaddquestions"
import Buttonplaygame from "./Buttonplaygame"
import '../assets/styles/score.css'
import alldoneImg from '../assets/alldone.png'

export default function Score() {
    return (
        <div className="score-screen">
            <p>All Questions Finished</p>
            <img src={alldoneImg} alt="cartoon fox holding a star" className="ss-img"/>
            <div className="score-section">
                <p>Your Score</p>
                <p className="ss-score">10 / 10</p>
                <p className="ss-cheer">Awesome!</p>
            </div>
            <Buttonplaygame />
            <Buttonaddquestions />
        </div>
    )
}