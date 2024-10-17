import { useParams } from "react-router-dom"
import data from "../../data/logements.json"

export default function FicheLogement() {

  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  if (!logement) {
    return <Error />
  }

  return (
    <div>
        <div className="carroussel">
          <img src={logement.cover} alt="" />

        </div>
        <div className="description-container">
            <div className="description">
                <h1>{logement.title}</h1>
                <p>Lorem, ipsum.</p>
                
            </div>

        </div>
    </div>
  )
}
