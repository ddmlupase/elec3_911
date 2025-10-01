import React from 'react';
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <div className="App">      
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <NavLink class="nav-brand" to="/home">PORTFOLIO PROJ</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <NavLink class="nav-link" to="/home" activeclassname="active">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/portfolio" activeclassname="active">Portfolio</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/recipe" activeclassname="active">Recipe</NavLink>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;
