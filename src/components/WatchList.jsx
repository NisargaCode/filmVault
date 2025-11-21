import { React, useEffect, useState } from "react";
import genreId from "../utility/Genre";

function WatchList({ watchList, setwatchList,removeFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList] = useState(["All Genres"]);
  const [currentGenre, setcurrentGenre] = useState("All Genres");

  // ----------------------------
  // Search input
  // ----------------------------
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  // ----------------------------
  // Sorting functions
  // ----------------------------
  function sortIncreasing(e) {
    e.stopPropagation();
    let sortedList = [...watchList].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setwatchList(sortedList);
  }

  function sortDecreasing(e) {
    e.stopPropagation();
    let sortedList = [...watchList].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setwatchList(sortedList);
  }

  function increasingPopularity(e) {
    e.stopPropagation();
    let sortedList = [...watchList].sort(
      (a, b) => a.popularity - b.popularity
    );
    setwatchList(sortedList);
  }

  function decreasingPopularity(e) {
    e.stopPropagation();
    let sortedList = [...watchList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setwatchList(sortedList);
  }

  // ----------------------------
  // Generate Genre List
  // ----------------------------
  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreId[movieObj.genre_ids[0]];
    });

    temp = ["All Genres", ...new Set(temp.filter(Boolean))];

    setgenreList(temp);
  }, [watchList]);

  // ----------------------------
  // Handle Genre Selection
  // ----------------------------
  function handleFilter(genre) {
    setcurrentGenre(genre);
  }

  return (
    <>
      {/* -----------------------------
          GENRE PILLS 
      ------------------------------ */}
      <div className="flex justify-center flex-wrap gap-4 m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currentGenre === genre
                ? "flex justify-center items-center text-center bg-blue-600/50 h-[3rem] w-[6rem] rounded-xl text-white font-bold cursor-pointer"
                : "flex justify-center items-center bg-gray-400 text-center h-[3rem] w-[6rem] rounded-xl text-white font-bold cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* -----------------------------
          SEARCH BAR 
      ------------------------------ */}
      <div className="flex justify-center my-2 p-8">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-600/20 text-center text-sm outline-none"
        />
      </div>

      {/* -----------------------------
          MOVIES TABLE
      ------------------------------ */}
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full text-gray-400 text-center table-auto">
          <thead className="border-b-1">
            <tr>
              <th className="p-3">Name</th>

              <th className="p-3">
                <div className="flex justify-center items-center gap-2">
                  <i
                    onClick={sortIncreasing}
                    className="fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Rating</span>
                  <i
                    onClick={sortDecreasing}
                    className="fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>

              <th className="p-3">
                <div className="flex justify-center items-center gap-2">
                  <i
                    onClick={increasingPopularity}
                    className="fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Popularity</span>
                  <i
                    onClick={decreasingPopularity}
                    className="fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>

              <th className="p-3">Genre</th>
            </tr>
          </thead>

          {/* -----------------------------
              FILTER + MAP
          ------------------------------ */}
          <tbody>
            {watchList
              .filter((movieObj) => {
                const matchesSearch = movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());

                const movieGenre = genreId[movieObj.genre_ids[0]];
                const matchesGenre =
                  currentGenre === "All Genres" ||
                  movieGenre === currentGenre;

                return matchesSearch && matchesGenre;
              })
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-[0.5px]">
                  <td className="flex items-center px-6 py-3">
                    <img
                      className="h-[6rem] w-[8rem]"
                      src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
                    />
                    <div className="mx-10">{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreId[movieObj.genre_ids[0]]}</td>

                  <td onClick={()=>removeFromWatchList(movieObj)} className="text-red-800 cursor-pointer">delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
