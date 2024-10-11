import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/nav.scss';

export default function Nav() {
    return (
        <div className='nav'>
            <div className="nav__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <div className="nav__links">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/apropos">A propos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}