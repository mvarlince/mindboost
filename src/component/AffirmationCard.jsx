// import { useEffect } from "react"

export default function AffirmationCard ({element, setContent, content, updatedContent, setUpdatedContent}){

const id = element._id

     const removeAff = () => {
        console.log(id)
         fetch(`http://127.0.0.1:5002/aff/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(data => setUpdatedContent(data))
        console.log(content)
        }

    return (
        <>
        <div className="affirm-card">
            <h2>{element.title}</h2>
            <p>{element.quote}</p>
            <p> {element._id} </p>
            {/* <p> {date.toLocaleDateString()} </p> */}
            <button onClick={() => {removeAff()}}> delete </button>
        </div>
        </>
    )
}