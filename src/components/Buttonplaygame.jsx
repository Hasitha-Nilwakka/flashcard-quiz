import { useContext } from "react"
import { MainContext } from "../App"

export default function Buttonplay({children}) {
    const {toggleView, resetAllQuestions} = useContext(MainContext)
    function handleClick() {
        toggleView('game_play_view')
        resetAllQuestions()
    }
    return (
        <button 
            className="play-btn" 
            onClick={handleClick}
        >{children}</button>
    )
}