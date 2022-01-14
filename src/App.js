import './App.css';
import Travel from './components/Travel';
import Cart from './components/Cart';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';

function App() {

  const [panier, setPanier] = useState([
//     {
//     id: "0",
//     title: "test",
//     price: 1,
//     duration: "10 jours / 8 nuits",
//     departure_city: "",
//     short_description: "court texte de présentation",
//     hotel_list: "tableau des hotels",
//     main_photo: "https://viajeros-react.s3.eu-west-3.amazonaws.com/20191203_140508.jpg",
// }
]);
  return (
    <div>

    <Routes>
        <Route path="/" element={<Home changePanier={(toto) => { setPanier(toto) }} panier={panier}/>} />
        <Route path="/cart" element={<Cart changePanier={(toto) => { setPanier(toto) }} panier={panier}/>} />
        <Route path="/travel/:id" element={<Travel changePanier={(toto) => { setPanier(toto) }} panier={panier}/>} />
      </Routes>
    </div>
    
  );
}

export default App;