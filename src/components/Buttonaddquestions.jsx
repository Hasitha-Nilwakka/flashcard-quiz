import { useContext } from "react"
import { MainContext } from "../App"

export default function Buttonaddquestions({children}) {
    const {toggleView} = useContext(MainContext)
    return (
        <button className='add-q-btn' onClick={() => toggleView('add_questions_view')}>{children}</button>
    )
}