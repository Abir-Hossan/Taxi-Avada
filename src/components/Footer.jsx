import bottomLogo from "../assets/bottom-logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="ta-footer">
      <div className="container ta-container text-center">
        <div className="ta-footer-brand">
          <img src={bottomLogo} alt="Taxi Avada Logo" />
        </div>

        <div className="ta-footer-icons mt-3">
          <a href="#">
            <i className="bi bi-facebook" />
          </a>
          <a href="#">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="#">
            <i className="bi bi-instagram" />
          </a>
        </div>

        <div className="ta-footer-copy mt-3">
          © Copyright 2012 - {new Date().getFullYear()} | Taxi Avada
        </div>
      </div>
    </footer>
  );
}
