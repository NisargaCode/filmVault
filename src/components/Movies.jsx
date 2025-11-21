import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";


function Movies({addToWatchList,removeFromWatchList,watchList}) {
  const [movies, setMovies] = useState([]);
  const[pageNo,setPageNo]=useState(1);

  function prevPage(){
    if(pageNo===1) return;
    setPageNo(pageNo-1);
  }

  function nextPage(){
    setPageNo(pageNo+1);
  }




  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=34371a2182632db6ac8029de038dfd67&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pageNo]);

  return (
    <div className="movies-container p-6">
      <div className="text-center text-2xl text-red font-bold p-3">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} addToWatchList={addToWatchList}  movieObj={movieObj} removeFromWatchList={removeFromWatchList} watchList={watchList}/>;
        })}
      </div>
      <div><Pagination handlePrev={prevPage} handleNext={nextPage} pageNo={pageNo} /></div>
    </div>
  );
}
export default Movies;
