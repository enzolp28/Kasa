import arrowRight from '@/assets/arrowCarroussel-right.svg'
import arrowLeft from '@/assets/arrowCarroussel-left.svg'
import './carrousel.scss'
import { useState } from "react"

export default function carrousel({ alt, data}) {

  const [currentSlide, setCurrentSlide] = useState(0)

  

  function nextSlide() {
    if (currentSlide === data.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }
  
  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }


  
  return (
    <div>

        <img className="carroussel__image" src={data[currentSlide]} alt={alt} />
        
        { data.length > 1 ? <>
          <img className="carrousel__arrow-left" src={arrowLeft} alt="fleche gauche" onClick={prevSlide}/>
          <img className="carrousel__arrow-right" src={arrowRight} alt="fleche droite" onClick={nextSlide} />
        
        </> : ""
          

        }

    </div>  
  )
}
