import '@/styles/cart.css';

export default function Cart(props) {
    return (
        <div className="cart">
            <a className="cart__link" href="">
                <img className="cart__image" src={props.image} alt="" />
                <div className="cart__title">
                    <h3>{props.titre}</h3>
                </div>
            </a>
        </div>
    )
}