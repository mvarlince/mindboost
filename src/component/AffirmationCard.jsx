export default function AffirmationCard({ element, content, setUpdatedContent }) {

    const id = element._id

    const removeAff = () => {
        fetch(`https://mindboost-api.web.app/aff/${id}`, {
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
                <p> {new Date (element.dateCreated).toLocaleDateString()} </p>
                <button onClick={() => { removeAff() }}> delete </button>
            </div>
        </>
    )
}