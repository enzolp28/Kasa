import { useNavigate, useParams } from "react-router-dom"
import './ficheLogement.scss'
import Tag from "./composants/tag.jsx"
import Menu from "@/composants/menu.jsx"
import Rating from "./composants/rating.jsx"
import Carroussel from "@/pages/Fiche-logement/composants/carrousel.jsx"
import { useEffect, useState } from "react"

export default function FicheLogement() {

  const [logement, setLogement] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/logements.json")
        console.log(response);

        const data = await response.json()
        console.log(data);


        const logementEncour = data.find((logement) => logement.id === id)

        if (!logementEncour) {
          navigate("/404")
          return
        }

        setLogement(logementEncour)

      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  if (!logement) {
    return <div>Loading...</div>
  }

  return (
    <div className="fiche-logement">
      <div className="carroussel">
        <Carroussel image={logement.cover} alt={logement.title} data={logement.pictures} />
      </div>
      <div className="description-container">
        <div className="description">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} content={tag} />
            ))}
          </div>

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
      <div className="collapses-container">
        <Menu titre="Description" decription={logement.description} />
        <Menu titre="Équipements" decription={logement.equipments.join(", ")} />
      </div>
    </div>
  )
}
