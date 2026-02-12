import { useContext } from "react"
import { MainContext } from "../App"

export default function Buttonplay({children}) {
    const {toggleView} = useContext(MainContext)
    return (
        <button className="play-btn" onClick={() => toggleView('game_play_view')}>{children}</button>
    )
}