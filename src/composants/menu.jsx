import Arrow from '@/assets/arrow.svg'
import '../styles/menu.scss'


export default function Menu({ titre }) {
    return (
        <div className="menu-container">
            <div className="menu">
                <h3 className='menu__title'>{titre}</h3>
                <img className='menu__arrow' src={Arrow} alt="flèche menu" />
            </div>
        </div>
    )
}