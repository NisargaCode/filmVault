function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className="text-gray w-full text-center bg-gray-400 p-3 mt-8">
        <div className="flex justify-center items-center gap-8 text-2xl">
           <div onClick={handlePrev} className="cursor-pointer"> <i className="fa-solid fa-arrow-left" ></i></div>
            <div>{pageNo}</div>
            
            <div onClick={handleNext} className="cursor-pointer"><i className="fa-solid fa-arrow-right" ></i></div>
        </div> 
    </div>
  );
}
export default Pagination;