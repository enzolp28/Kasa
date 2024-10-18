import { useParams } from "react-router-dom"
import data from "../../data/logements.json"
import Error from "../Error/error"
import './ficheLogement.scss'
import Tag from "./composants/tag.jsx"
import Menu from "../../composants/menu.jsx"

export default function FicheLogement() {

  const { id } = useParams()
  const logement = data.find((logement) => logement.id === id)

  console.log(logement.host.name);
  

  if (!logement) {
    return <Error />
  }

  return (
    <div className="fiche-logement">
        <div className="carroussel">
          <img src={logement.cover} alt="" />
        </div>
        <div className="description-container">
            <div className="description">
                <h1>{logement.title}</h1>
                <h3>{logement.location}</h3>
                <div className="tags">
                  {logement.tags.map((tag) => (
                     <Tag content={tag} />
                  ))}
                </div>
                <Menu />
            </div>
            <div className="equipement">
              <div className="host">
                <h3>{logement.host.name}</h3>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>


            </div>

        </div>
    </div>
  )
}
