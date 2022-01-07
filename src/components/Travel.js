import "./Travel.css";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const Travel = (props) => {
    const params = useParams();
    const id = params.id;
    console.log("id =" + id);

    const indexTravel = data.findIndex( travel=> travel.id===id );
    console.log("indexTravel =" + indexTravel);
    const currentTravel = data[indexTravel];
    console.log("currentTravel : " + JSON.stringify(currentTravel));
    console.log("panier : " +  JSON.stringify(props.panier));
    return (
        <div className="mainContent">
            <div>{currentTravel.title}</div>
            <div>{currentTravel.price}</div>
            <button onClick={()=>{
                props.changePanier([...props.panier, currentTravel]);
            }}>Ajouter au panier</button>

            <div>{props.panier.length}</div>
            {props.panier ? props.panier.map((item, i)=>{
                console.log(item);
                // key={i}
                return (
                    <div>{item.title}</div>
                );
            }): "panier vide"}
        </div>
    );
};

export default Travel;