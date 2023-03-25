import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "swiper/css";

import CardActor from "./CardActor";

const Detail = () => {
  const { movieTitle } = useParams();
  const location = useLocation();
  const movie = location.state.movie;
  const [desc, setDesc] = useState("");
  const [trailer, setTrailer] = useState("");
  const [actor, setActor] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const [getData, getPlot, getTrailer] = await Promise.all([
          fetch(
            `https://imdb-api.com/en/API/FullCast/${process.env.REACT_APP_APIKEY}/${movie.id}`
          ),
          fetch(
            `https://imdb-api.com/en/API/Wikipedia/${process.env.REACT_APP_APIKEY}/${movie.id}`
          ),
          fetch(
            `https://imdb-api.com/API/YouTubeTrailer/${process.env.REACT_APP_APIKEY}/${movie.id}`
          ),
        ]);

        const result = await getData.json();
        const result2 = await getPlot.json();
        const result3 = await getTrailer.json();
        setActor(result.actors);
        setTrailer(result3.videoId);
        setDesc(result2.plotShort.plainText);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [movie.id]);

  const filteredActor = actor.slice(0, 10);

  return (
    <>
      <div className="header">
        <img src={movie.image} alt="" />
        <div className="overlay"></div>
        <Container maxWidth="lg" className="container">
          <div className="title-movie-detail">
            <h2>{movieTitle}</h2>
            <div className="rate-detail d-flex">
              <StarIcon className="star" />
              <h5>{movie.imDbRating}</h5>
            </div>
            <p>Release at : {movie.year}</p>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg" className="container">
        <div className="body-detail">
          <div className="actors">
            <h3>Actors</h3>
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              spaceBetween={5}
              slidesPerView={4}
              navigation
              scrollbar={{ draggable: true }}
              rewind={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {filteredActor.map(function (data, index) {
                return (
                  <SwiperSlide key={index} className="actor-item">
                    <CardActor img={data.image} name={data.name} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="trailer">
            <h3>Trailer</h3>
            <div className="trailer-vid">
              <iframe
                src={`https://www.youtube.com/embed/${trailer}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{desc}</p>
          </div>
          <Link
            to={"/home"}
            className="back-home d-flex"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ArrowBackIcon className="back-icon" fontSize="small" />
            <h6>Back to home</h6>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Detail;
