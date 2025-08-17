import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/requests'
const Banner = () => {
    const[movie,setmovie]=useState({});

    useEffect(()=>{
        (async() => {
            try{
const request= await axios.get(requests.fetchNetflixOriginals)
setmovie(request.data.results[
    Math.floor(Math.random()* request.data.results.length)
]);

            }
            catch(error){
                console.log("error",error)
            }
        })()
    },[])
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_titel">
          {movie?.titel || movie?.name || movie?.original_name}
        </h1>
        <div className="bunnet_buttons">
          <button className="bunner__button play">Play</button>
          <button className="bunner__button play">My List</button>
        </div>
        <h1 className='banner_description'>{/*truncate(movie?.overview,150)*/}</h1>
      </div>
      <div className='bannet__fadeBootom'/>
    </div>
  );
}

export default Banner
