import React from "react";
import Mycss from "./scrollsnap.scss";
import Myimage from "../images/arrow-down.svg";
import Myimage2 from "../images/133oranger.jpg";
import Myimage3 from "../images/133legumes.jpg";
import Myimage4 from "../images/133oranges.jpg";
import Myimage5 from "../images/133lai.jpg";
import Myimage6 from "../images/133viandes.jpg";
import Myimage7 from "../images/133adh.jpg";
const scrollsnaps = () => {
  const divStyle = {
    overflowY: "hidden",
  };
  return (
    <div className="divcontainer">
      <div className="image1">
        <center>
          <h2 id="position" className="bg-primary text-light">
            Des activités agricoles au service du consommateur
          </h2>
        </center>
        <center>
          <img src={Myimage} className="myimage" alt="" />
        </center>
      </div>
      <div className="image2">
        <center>
          <h2 id="position" className="bg-primary text-light">
            La copag, la plus grande coopérative intégrée du royaume
          </h2>
        </center>
      </div>
      <div className="image3">
        <center>
          <h2 id="position" className="bg-primary text-light">
            Pour une agriculture prospère et durable
          </h2>
        </center>
      </div>
      <div className="image4">
        <center>
          <h2 id="position" className="bg-primary text-light">
            Une coopérative orientée développement durable
          </h2>
        </center>
      </div>
      <div className="image5">
        <center>
          <h2 id="position" className="bg-primary text-light">
            Une agriculture au service du développement humain
          </h2>
        </center>
      </div>
      <div id="here">
        <center>
          <h2 id="position" className="bg-primary text-light">
            © copyright 2019 - Tous droits réservés
          </h2>
        </center>
        <div className="row">
          <div className="col">
            <div className="card text-primary" id="ho">
              <img className="card-img-top" id="ho" src={Myimage2} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Agrumes
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="ho">
              <img className="card-img-top" id="ho" src={Myimage3} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Primeurs
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="ho">
              <img className="card-img-top" id="ho" src={Myimage4} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Jus de fruits
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="ho">
              <img className="card-img-top" id="ho" src={Myimage5} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Produits latiers
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="ho">
              <img className="card-img-top" id="ho" src={Myimage6} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Viands
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="ho">
              <img className="card-img-top" id="ho" src={Myimage7} />
              <div className="card-body" id="text-primary">
                <a href="#" className="btn btn-primary">
                  Services rendus aux adhérents
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default scrollsnaps;

// this file is to get scrollsnap.css to app.js
// that's it that's why we are returning null
