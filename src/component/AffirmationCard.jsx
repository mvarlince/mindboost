

export default function AffirmationCard ({affirm}){
    //console.log('INSIDE: ', obj)
    return (
        <>
        <div className="affirm-card">
            <h2>{affirm.title}</h2>
            <p>{affirm.quote}</p>
        </div>
        </>
    )
}