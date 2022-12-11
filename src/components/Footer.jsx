import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-icons">
        <li>
          <FaTwitterSquare
            className="footer-icon"
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </li>
        <li>
          <FaFacebookSquare
            className="footer-icon"
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </li>
        <li>
          <FaInstagramSquare
            className="footer-icon"
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </li>
        <li>
          <FaGithubSquare
            className="footer-icon"
            onClick={() => {
              window.location.href = "https://github.com/dominicgaliano";
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
