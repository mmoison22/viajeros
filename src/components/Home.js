import "./Home.css";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Home = (props) => {

    return (
        <div className="App">
      <Header panier={props.panier}/>
      <Main panier={props.panier} changePanier={props.changePanier}/>
      <Footer />
    </div>
    );
};

export default Home;



