import Arrow from '@/assets/arrow.svg'
import '../styles/menu.scss'
import { useState } from 'react'

export default function Menu({ titre }) {

    const [open, setOpen] = useState(false)

    return (
        <div className={`menu-container ${open ? 'open' : ''}`} >
            <div className="menu-header" onClick={() => setOpen(!open)}>
                <h3 className='menu__title'>{titre}</h3>
                <img className="menu__arrow" src={Arrow} alt="flèche menu" />
            </div>
            <div className="menu-content" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet aliquam doloremque consectetur. Harum omnis fugit cupiditate repellendus aliquam explicabo.</p>
            </div>

        </div>
    )
}