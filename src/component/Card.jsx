import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-img">
            <LazyLoadImage
              effect="blur"
              src={props.img}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="card-title">
            <div className="title-top">
              <h2>{props.title}</h2>
            </div>
            <div className="title-bot">
              {/* <h4>{props.year}</h4> */}
              <div className="rate d-flex">
                <StarIcon className="star" />
                <h5>{props.rate}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
