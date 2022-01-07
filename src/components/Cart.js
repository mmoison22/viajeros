import "./Cart.css";

const Cart = (props) => {

    return (
        <div className="mainContent">
            Cart
            <div>Le panier contient {props.panier.length} voyages.</div>
        </div>
    );
};

export default Cart;