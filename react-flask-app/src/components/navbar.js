import React from "react";
import Mycopag from "../images/copag.png";
import Mycss from "./logo.scss";
import Mysearch from "../images/search.svg";
const navbar = () => {
  return (
    <div>
      {/*nav then ul then li then a */}
      {/* start of the navbar */}
      <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top">
        {/* navbar brand*/}
        <a className="navbar-brand" href="/">
          <img src={Mycopag} />
        </a>
        {/* start of the navbar items */}
        <ul className="navbar-nav mr-auto">
          {/* start of the first dropdown item */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
              href="#"
            >
              Notre coopérative
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Mot de président
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Missions
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="#">
                  Visions et valeurs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Chiffres clés
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Histoire de Copag
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Présence de la territoire
                </a>
              </li>
            </ul>
          </li>
          {/* start of the second navbar */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
            >
              Nos activités
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item">Agrumes</a>
              </li>
              <li>
                <a className="dropdown-item">Primeurs</a>
              </li>
              <li>
                <a className="dropdown-item">Jus de fruits</a>
              </li>
              <li>
                <a className="dropdown-item">Produits litiers</a>
              </li>
              <li>
                <a className="dropdown-item">Viands</a>
              </li>
              <li>
                <a className="dropdown-item">Service rendus aux adhérents</a>
              </li>
            </ul>
          </li>
          {/* start of the third navbar */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
            >
              Nos marques
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item">Jaouda</a>
              </li>
              <li>
                <a className="dropdown-item">Copag delight</a>
              </li>
              <li>
                <a className="dropdown-item">Jayda</a>
              </li>
            </ul>
          </li>
          {/* start of fourth navbar */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
            >
              Développment durable
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item">Respect de environment</a>
              </li>
              <li>
                <a className="dropdown-item">Action sociale </a>
              </li>
              <li>
                <a className="dropdown-item">Énergie renouvelables</a>
              </li>
            </ul>
          </li>
          {/* start of the fifth navbard */}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
            >
              Contact
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/contact">
                  Contactez-nous{" "}
                </a>
              </li>
              <li>
                <a className="dropdown-item">Espace recruitment & stage </a>
              </li>
            </ul>
          </li>
          {/* start of the sixth navbard*/}
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href="#"
              className="nav-link dropdown-toggle text-white"
              data-toggle="dropdown"
              data-target="dropdown"
            >
              Liens utiles
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item">Copag magazine</a>
              </li>
              <li>
                <a className="dropdown-item">Stations de conditionnement</a>
              </li>
              <li>
                <a className="dropdown-item">Copag élevage et Copag viande</a>
              </li>
              <li>
                <a className="dropdown-item">Jaouda</a>
              </li>
            </ul>
          </li>
        </ul>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/*
          <button
            className="btn btn-outline-success class btn btn-light"
            type="submit"
          >

            Search
          </button>
          */}
          {/* this is to give spacing between the form and the button */}
          &nbsp;
          <button type="button" class="btn btn-light">
            <img src={Mysearch} />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default navbar;
