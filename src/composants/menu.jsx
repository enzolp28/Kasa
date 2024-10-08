import Arrow from '@/assets/arrow.svg'
import '../styles/menu.scss'
import { useState } from 'react'


export default function Menu({ titre }) {

    const [open, setOpen] = useState(false)

    return (
        <div className="menu-container">
            <div className="menu" onClick={() => setOpen(!open)}>
                <h3 className='menu__title'>{titre}</h3>
                <img className={`menu__arrow${open ? '-clicked' : ''}`} src={Arrow} alt="flèche menu" />
            </div>
            <div className={`menu-liste ${open ? 'open' : ''}`} >
                <ul>
                    <li>
                        <a href="#">Chambre 1</a>
                    </li>
                    <li>
                        <a href="#">Chambre 1</a>
                    </li>
                    <li>
                        <a href="#">Chambre 1</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}