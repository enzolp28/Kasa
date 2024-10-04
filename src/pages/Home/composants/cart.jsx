import '@/styles/cart.css';

export default function Cart(props) {
    return (
        <div className="cart">
            <div className="cart__title">
                <h3>{props.titre}</h3>
            </div>
        </div>
    )
}