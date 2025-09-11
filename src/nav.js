import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">Portfolio Project</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" activeclassname="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" activeclassname="active">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
