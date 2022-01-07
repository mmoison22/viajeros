import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="price">{props.price}</div>
            <button onClick={()=>{
                props.changePanier([...props.panier, props.travel]);
            }}>Ajouter au panier</button>
            
        </div>
    );
};

export default Card;