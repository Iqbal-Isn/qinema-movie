import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const Fetch = () => {
  const [film, setFilm] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getMovie() {
      try {
        const options = {
          method: "GET",
          redirect: "follow",
        };
        const getData = await fetch(
          `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_APIKEY}`,
          options
        );
        const result = await getData.json();
        setFilm(result.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, []);
  const filtered = film.filter((movie) => {
    return movie.title.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <>
      <div className="movie-list">
        <Container maxWidth="lg" className="container">
          <div className="search d-flex">
            <h3>Find your favorit movie</h3>
            <div className="search-bar">
              <SearchIcon className="icon-search" />
              <input
                type="text"
                placeholder="Find Out"
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        </Container>

        {!loading ? (
          <Container maxWidth="lg" className="container">
            <ul className="wrapper">
              {filtered.slice(0, 200).map((data, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={`/detail/${data.title}`}
                      state={{ movie: data }}
                      style={{ textDecoration: "none" }}
                    >
                      <Card
                        title={data.title}
                        img={data.image}
                        year={data.year}
                        rate={data.imDbRating}
                        lazyload
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!filtered.length ? (
              <Alert severity="error" className="alert">
                Not Found
              </Alert>
            ) : null}
          </Container>
        ) : (
          <div className="loading">
            <CircularProgress sx={{ color: "red" }} />
          </div>
        )}
      </div>
    </>
  );
};

export default Fetch;
