import '@/styles/cart.css';
import { Link } from 'react-router-dom';

export default function Cart({titre, image, url}) {
    return (
        <div className="cart">
            <Link className="cart__link" to={url}>
                <img className="cart__image" src={image} alt={titre} />
                <div className="cart__title">
                    <h3>{titre}</h3>
                </div>
            </Link>
        </div>
    )
}