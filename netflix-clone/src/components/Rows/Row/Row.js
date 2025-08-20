import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import requests from "../../../utils/requests";
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube'
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setmovies] = useState([]);
  const[trailerUrl, settrailerUrl]=useState("");
  const base_Url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setmovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick=(movie)=>{
  if(trailerUrl){
   settrailerUrl('')
  }else{
   movieTrailer(movie?.title|| movie?.name || movie?.original_name)
   .then((url)=>{
  console.log(url)
   const urlParams=new URLSearchParams(new URL(url).search)
   settrailerUrl(urlParams.get('v'))
   })
  }
  }
  const opts = {
   height: "390",
   width: "100%",
   playerVars: {
    autoPlay: 1,
   },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
             onClick={() => handleClick(movie)}
            key={index}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      <div style={{padding:"40px"}}>
{trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
};

export default Row;
