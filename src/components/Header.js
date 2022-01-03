import "./Header.css";

const Header = () => {
    return (
        <div>

            <div className="container">
                <img src="https://cdn.pixabay.com/photo/2017/09/21/21/35/machu-picchu-2773629_960_720.jpg" alt="Macchu_Pichu"></img>
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
                </div>
            </div>
            <h1>Viajeros, votre agence de voyage spécialisée dans l'Amérique du Sud</h1>
            <h2>Découvrez les immensités sud-américaines avec nos voyages clés en main ou demandez nous de vous préparer un séjour selon vos envies !</h2>
        </div>
    );
};

export default Header;