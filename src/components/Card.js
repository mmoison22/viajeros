import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="imgCard">
                <img class="pic" src={props.main_photo} alt="photoVoyage"></img>
            </div>
            <div className="infoVoyage">

                <div className="title">{props.title}</div>
                <div className="infosV"> Durée du séjour : {props.duration}</div>
                <div className="infosV">{props.short_description} </div>
                <div className="infosV">Tarif (par personne) : {props.price} euros TTC</div>
                <div className="boutons">
                    <div>
                        <Link to={`/travel/${props.id}`}>

                            <button>Voir les détails du voyage</button>
                        </Link>
                    </div>
                    <div>
                        <button onClick={() => {
                            props.changePanier([...props.panier, props.travel]);
                        }}>Ajouter au panier</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;