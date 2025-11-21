// import React from 'react';
// import banner from '../assets/banner.jpg';
// function Banner() {
//   return (
//     <div
//       className="h-[20vh] md:h-[75vh] bg-cover bg-center flex "
//       style={{
//         backgroundImage: `url(${banner})`,
//       }}
//     ></div>
//   );
// }

// export default Banner;

function Banner() {
  return (
    <div
      className="h-[40vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`
      }}
    >
      <div className="text-white text-0.5xl w-full text-center bg-blue-900/50 p-0.4 ">Avengers banner </div>
    </div>
    
  );
}

export default Banner;
