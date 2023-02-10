import { useState } from "react"
import AffirmationCard from "./AffirmationCard"
import "./Affirmation.css"

export default function Affirmation(){

    const [content, setContent] = useState([])
    const [title, setTitle] = useState()
    const [message, setMessage] = useState()

    const grabContent = () => {
        fetch('http://127.0.0.1:5000/getaff')
        .then(res => res.json())
        .then((data)=> {
            //console.log(data)
            setContent(data)
        })
        .catch(alert)

    const insertContent = () => {
        fetch('http://127.0.0.1:5000/newaff'), {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({title, message})
        }}


    return (
        <>
        <div className="ser">
            <div className="affirm-container">
                {
                content
                    ? content.map(affirm => <AffirmationCard key={affirm._id} affirm={affirm}/>)
                    : <p>NOT LOADED</p>
                }</div>
        </div>
        <button onClick={()=>{
                console.log(content)
                grabContent()
            }}>Click ME</button>

        <div>
        <form>
            <label for>

            </label>
        </form>
        <button onClick={()=> setContent()}></button>
        </div>
        
        </>
    )
} }