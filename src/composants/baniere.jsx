import '../styles/baniere.css';


export default function Baniere({titre, className}) {
    return (
        <div className="baniere__container">
            <div className={className} >
                <h1 className="baniere__title">{titre}</h1>
            </div>
        </div>
    )
}