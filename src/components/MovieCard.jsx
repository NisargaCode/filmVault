import React from "react";

function MovieCard({ poster_path, name,addToWatchList, movieObj,removeFromWatchList,watchList}) {

    function isInWatchList(movieObj){
        for(let movie of watchList){
            if(movie.id===movieObj.id){
                return true;
            }
        }
        return false;
    }
  return (
    <div
      className="relative h-[30vh] w-[130px] bg-cover rounded-xl hover:scale-110 duration-200 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieObj.poster_path})`,
      }}
    >
        {isInWatchList(movieObj) ?(
      <div onClick={()=>(removeFromWatchList(movieObj))}   className="flex items-center justify-center absolute top-2 right-2 h-7 w-7 rounded-lg bg-gray-900/60 text-white text-sm">
        &#10060;
      </div>
  ):(
        <div onClick={()=>(addToWatchList(movieObj))}   className="flex items-center justify-center absolute top-2 right-2 h-7 w-7 rounded-lg bg-gray-900/60 text-white text-sm">
        &#128525;
      </div>
  )}
      
      <div className="absolute bottom-0 left-0 right-0 h-12 text-white text-sm  leading-tight line-clamp-2 text-0.3xl w-full text-center p-3  bg-gray-900/60 ">
        {name}
      </div>
    </div>
  );
}
export default MovieCard;

//https://www.tallengestore.com/cdn/shop/products/Pathan-ShahRukhKhan-BollywoodHindiMoviePoster_296b3b5c-b590-4a19-a1db-77e4638531ca.jpg?v=1675251720