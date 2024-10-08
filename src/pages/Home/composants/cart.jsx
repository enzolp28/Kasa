import '@/styles/cart.css';

export default function Cart({titre, image, url}) {
    return (
        <div className="cart">
            <a className="cart__link" href={url}>
                <img className="cart__image" src={image} alt={titre} />
                <div className="cart__title">
                    <h3>{titre}</h3>
                </div>
            </a>
        </div>
    )
}