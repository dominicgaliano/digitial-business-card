import Headshot from "../assets/square_profile_picture.jpeg";
import CardContent from "./CardContent";
import Footer from "./Footer";

function Card() {
  return (
    <div className="card-container">
      <img src={Headshot} alt="Dominic Galiano Headshot" className="headshot" />
      <CardContent />
      <Footer />
    </div>
  );
}

export default Card;
