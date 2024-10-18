import { useNavigate, useParams } from "react-router-dom"
import data from "@/data/logements.json"
import './ficheLogement.scss'
import Tag from "./composants/tag.jsx"
import Menu from "@/composants/menu.jsx"
import Rating from "./composants/rating.jsx"
import { useEffect, useState } from "react"

export default function FicheLogement() {

  const [logement, setLogement] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const logementEncour = data.find((logement) => logement.id === id)
  
    if (!logementEncour) {
      navigate("/404")
      return
    }

    setLogement(logementEncour)
    
  }, [])

  if (!logement) {
    return <div>Loading...</div>
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
            {logement.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>
          <Menu />
        </div>
        <div className="equipement">
          <div className="host">
            <div className="info">
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating note={logement.rating} />
          </div>


        </div>

      </div>
    </div>
  )
}
