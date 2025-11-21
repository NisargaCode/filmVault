import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
  const[watchList,setwatchList]=useState([]);

  function addToWatchList(movie){
    setwatchList([...watchList,movie]);
    localStorage.setItem("watchList",JSON.stringify([...watchList,movie]));
    console.log(watchList);
  }

  function removeFromWatchList(movieObj){
    const updatedList=watchList.filter((movie)=>movie.id!==movieObj.id);
    localStorage.setItem("watchList",JSON.stringify(updatedList))
    setwatchList(updatedList);
  }

  useEffect(()=>{
    const storedList=localStorage.getItem("watchList");
    if(storedList){
      setwatchList(JSON.parse(storedList));
    }
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<><Banner/><Movies addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} watchList={watchList}  /></>}></Route>
      <Route path='/WatchList' element={<WatchList watchList={watchList} setwatchList={setwatchList} removeFromWatchList={removeFromWatchList}/>}></Route>
      
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
