import logoImg from "../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  const navItems = ["Home", "About", "Sevices", "Gallery", "Portfolio"];
  return (
    <nav className="navbar shodesh_navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="img-fluid" src={logoImg} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item navitem">
                <a className="nav-link navlink" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <form className="d-flex search_form" role="search">
            <input
              className="form-control me-2 search_input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn search_btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                fill="none"
                viewBox="0 0 19 18"
              >
                <path
                  fill="#fff"
                  d="m17.383 18-6.3-6.3a6.096 6.096 0 0 1-3.8 1.3c-1.816 0-3.354-.63-4.612-1.888C1.413 9.853.784 8.316.783 6.5c0-1.817.63-3.354 1.888-4.612C3.93.63 5.467.001 7.283 0c1.817 0 3.354.63 4.612 1.888 1.258 1.259 1.888 2.796 1.888 4.612a6.096 6.096 0 0 1-1.3 3.8l6.3 6.3-1.4 1.4Zm-10.1-7c1.25 0 2.313-.438 3.188-1.313.876-.875 1.313-1.938 1.312-3.187 0-1.25-.437-2.313-1.313-3.188C9.595 2.437 8.533 1.999 7.283 2c-1.25 0-2.312.438-3.188 1.313-.875.875-1.312 1.938-1.312 3.187 0 1.25.438 2.313 1.313 3.188.876.875 1.938 1.313 3.187 1.312Z"
                />
              </svg>
            </button>
          </form>
          <button className="contact_btn">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
