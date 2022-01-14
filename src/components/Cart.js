import "./Cart.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = (props) => {
    let total = 0;
    return (
        <div className="principal">
            <div className="containerTravel">
                <img src="https://cdn.pixabay.com/photo/2017/03/29/11/29/nepal-2184940_960_720.jpg" alt="ciel"></img>
            </div>
            <div className="head">
                <div className="identity">
                    <div>
                        <img className="logoImg" src="https://viajeros-react.s3.eu-west-3.amazonaws.com/viajeros_logo.jpg" alt="logo"></img>
                    </div>
                </div>
                <div className="menu">
                    <div>Qui sommes-nous ?</div>
                    <div>Nos offres clés en main</div>
                    <div>Composez votre séjour sur-mesure</div>
                    <div>Contactez-nous</div>
                    <Link to="/cart">Panier ({props.panier.length})</Link>
                </div>
            </div>
            <div className="mainContentPanier">
                <h2 className="h2Panier">Votre panier</h2>
                <table>
                    <tr>
                        <th>Destination</th>
                        <th>Durée du séjour</th>
                        <th>Prix (TTC)</th>
                    </tr>

                {props.panier ? props.panier.map((item, i) => {
                    console.log(item);
                    total+= item.price;
                    // key={i}
                    return (<tr>
                        <td>{item.title}</td>
                        <td>{item.duration}</td>
                        <td>{item.price} €</td>
                        </tr>
                    );
                }) : <div>Le panier ne contient aucun voyage</div>}
                </table>
                    <div className="textPanier">Le panier contient : {props.panier.length} voyages.</div>
                <div className="textPanier">Total à payer : {total} €</div>
                <button className="textPanier">Etape suivante : Renseignements Voyageurs -></button>
            </div>
            <Footer />
        </div>

    );
};

export default Cart;