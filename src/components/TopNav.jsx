import logo from "../assets/logo.png";

export default function TopNav() {
  return (
    <header className="ta-nav">
      <div className="container ta-container">
        <div className="d-flex align-items-center justify-content-between py-3">
          {/* Logo */}
          <a href="#home" className="ta-brand-img" aria-label="Taxi Avada">
            <img src={logo} alt="Taxi Avada" />
          </a>

          <nav className="d-none d-lg-flex ta-navlinks">
            <a href="#home">Home</a>
            <a href="#pricing">Pricing</a>
            <a href="#app">App</a>
            <a href="#news">News</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <a href="#book" className="btn ta-btn ta-btn-book">
            Book Online
          </a>
        </div>
      </div>
    </header>
  );
}
