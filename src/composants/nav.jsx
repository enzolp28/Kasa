import logo from '../assets/logo.svg';
import '../styles/nav.css';

export default function Nav() {
    return (
        <div className='nav'>
            <div className="nav__logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <div className="nav__links">
                <ul>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">À Propos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}