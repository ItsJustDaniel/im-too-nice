import React from "react";
import Mycss from "./scrollsnap.scss";

const cards = () => {
  return (
    <div className="divcontainer">
      <div className="card" id="test">
        <img src="..." class="card-img-top" alt="..."></img>
        <div className="card-body">
          <div>
            <h5 className="card-title">Card body</h5>
            <p className="card-text">
              Est consectetur ullamco nisi ut reprehenderit excepteur magna non
              voluptate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
