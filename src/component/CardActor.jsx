import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../App.css";

const CardActor = (props) => {
  return (
    <>
      <div className="card-actor">
        <div className="img-actor">
          <LazyLoadImage src={props.img} alt="" loading="lazy" effect="blur" />
        </div>
        <div className="name-actor">
          <h4>{props.name}</h4>
        </div>
      </div>
    </>
  );
};

export default CardActor;
