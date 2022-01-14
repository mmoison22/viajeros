import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="principal">

            <div className="container">
                <img src="https://cdn.pixabay.com/photo/2020/05/15/14/03/lake-5173683_960_720.jpg" alt="andes"></img>
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
                    <Link to="./cart">Panier ({props.panier.length})</Link>
                </div>
            </div>
            <div className="textHeader">
                <h1>Viajeros, votre agence de voyage spécialisée dans l'Amérique du Sud</h1>
                <h2>Découvrez les immensités sud-américaines avec nos voyages clés en main ou demandez nous de vous préparer un séjour selon vos envies !</h2>
            </div>
        </div>
    );
};

export default Header;