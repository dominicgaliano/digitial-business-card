import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function CardContentButtons() {
  return (
    <div className="card-content-buttons">
      <button className="card-content-button email-button">
        <div
          className="card-content-button-content"
          onClick={() => {
            window.location.href = "#";
          }}
        >
          <FaEnvelope size={20} />
          <p>Email</p>
        </div>
      </button>
      <button
        className="card-content-button linkedin-button"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/dominic-galiano/";
        }}
      >
        <div className="card-content-button-content">
          <FaLinkedin size={20} />
          <p>LinkedIn</p>
        </div>
      </button>
    </div>
  );
}

export default CardContentButtons;
