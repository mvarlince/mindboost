import { useEffect } from "react"
import AffirmationCard from "./AffirmationCard"

export default function Affirmation({ content, setContent, updatedContent, setUpdatedContent }) {

    const deployedUrl = "https://mindboost-api.web.app"
    const localUrl = "http://127.0.0.1:5002"

    useEffect(() => {
        fetch(`${deployedUrl}/getaff`)
            .then(res => res.json())
            .then(data => setContent(data))
    }, [updatedContent])

    console.log("affirm.jsx", content)

    return (
        <>
            <div className="ser">
                <div className="affirm-container">
                    {content?.map(element => (
                        <div key={element._id}>
                            <AffirmationCard element={element} setContent={setContent} content={content} updatedContent={updatedContent} setUpdatedContent={setUpdatedContent} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}