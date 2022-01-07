import "./Main.css";
import { data } from "../assets/data";
import Card from "./Card";

const Main = (props) => {
    console.log(data);
    return (
        <div className="mainContent">
            Catalogue

            
            {console.log("panier : " + JSON.stringify(props.panier))}
            <a href="./cart">Page Panier</a>
            {data ? data.map((travel, i) => {
                console.log(travel);
            return (
                
              <Card
                key={i}
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