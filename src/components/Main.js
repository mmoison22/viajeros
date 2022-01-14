import "./Main.css";
import { data } from "../assets/data";
import Card from "./Card";
// import { Link } from "react-router-dom";

const Main = (props) => {
    console.log(data);
    return (
        <div className="mainContent">
          <h2>

            Découvrez nos offres de voyage organisé !
          </h2>

            
            {console.log("panier : " + JSON.stringify(props.panier))}
            {/* <Link to="./cart">Page Panier</Link> */}
            {data ? data.map((travel, i) => {
                console.log(travel);
            return (
                
              <Card
                key={i}
                id={travel.id}
                travel={travel}
                panier={props.panier}
                title={travel.title}
                price={travel.price}
                duration={travel.duration}
                departure_city={travel.departure_city}
                short_description={travel.short_description}
                hotel_list={travel.hotel_list}
                main_photo={travel.main_photo}
                changePanier={props.changePanier}
              />
            );
          })
        : "NO DATA"}
        </div>
    );
};

export default Main;