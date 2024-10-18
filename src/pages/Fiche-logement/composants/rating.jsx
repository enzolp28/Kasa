import greyStar from '@/assets/grey-star.svg'
import redStar from '@/assets/red-star.svg'

export default function Rating({note}) {

    const ratings = [...Array(5)].map((_, index) => {
        if (index < note) {
            return <img src={redStar} key={index} alt="icone d'étoile rouge" />
        }
        return (
            <img src={greyStar} key={index} alt="icone d'étoile grise" />
        )
    })

  return (
    <div className="rating">{ratings}</div>
  )
}
