import "./Travel.css";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Travel = (props) => {
    const params = useParams();
    const id = params.id;
    console.log("id =" + id);

    const indexTravel = data.findIndex(travel => travel.id === id);
    console.log("indexTravel =" + indexTravel);
    const currentTravel = data[indexTravel];
    console.log("currentTravel : " + JSON.stringify(currentTravel));
    console.log("panier : " + JSON.stringify(props.panier));
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



            <div className="mainContent">
                <div><h2>Voyage en {currentTravel.title}</h2></div>
                <div className="textPanier">Voyage en pension complète, {currentTravel.duration}</div>
                <div className="imgTravel">
                    <img class="pic" src={currentTravel.main_photo} alt="photoVoyage"></img>
                </div>
                <div className="textPanier">{currentTravel.short_description}</div>
                <div className="textPanier"> Programme du voyage</div>
                <div className="descriptionL">{currentTravel.long_description}</div>
                <div className="textPanier">Tarif par personne (TTC) : {currentTravel.price} euros</div>
                <button className="textPanier" onClick={() => {
                    props.changePanier([...props.panier, currentTravel]);
                }}>Ajouter au panier</button>

                
            </div>
            <Footer />
        </div>
    );
};

export default Travel;