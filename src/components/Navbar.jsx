import { useLocation, useNavigate } from "react-router-dom";


const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/AddMovie');
  };

  const renderNavBarContent = () => {
    switch (location.pathname) {
      case "/":
        return (
          
          <div className="md:flex flex md:items-center  justify-around gap-2 md:gap-64 md:py-8 py-2 md:justify-between text-white px-8">
            <h3 className=" flex items-center text-xl   md:px-8">
      <span className="text-[#7379FF]"><a href="/">Enter-</a></span>Stream
            </h3>
            <ul className="md:flex flex items-center md:items-center gap-4">
            <li><a href="/LatestMovies">MOVIE</a></li>
            <li><a href="/LatestSeries">SERIES</a></li>
            </ul>
            <button className=" flex justify-center items-center bg-indigo-500 hover:bg-indigo-700 md:mr-16 mt-2 text-white font-bold md:py-2 px-6 rounded">
              <a className="text-1xl" href="/Subscribe">SUBSCRIBE</a> 
            </button>
          </div>
        );
      case "/LatestMovies":
        return (
          <>
            <nav>
            <div className="md:flex flex md:items-center  justify-around gap-2 md:gap-64 md:py-8 py-2 md:justify-between text-white px-8">
            <h3 className=" flex items-center text-xl   md:px-8">
      <span className="text-[#7379FF]"><a href="/">Enter-</a></span>Stream
            </h3>
            <ul className="md:flex flex items-center md:items-center gap-4">
                <li><a href="/LatestMovies">MOVIE</a></li>
                <li><a href="/LatestSeries">SERIES</a></li>
                </ul>
                <button className="subscribe-button bg-[#6388bc] text-white px-5 py-1 text-sm rounded-[12px] hover:bg-[#cbdeec] hover:text-black">SUBSCRIBE</button>
              </div>
              <div className="items-center px-96 py-16 w-full">
                <h1 className="text-white text-3xl text-center">LATEST MOVIES</h1>
              </div>
            </nav>
            <br/>
            <br/>
            <br/>
            <div className="pt-16 text-end">
              <button 
                onClick={handleAddClick} 
                className="bg-indigo-500 h-6 items-center m-4 hover:bg-indigo-700 ml-96 text-white w-16 rounded-3xl"
              >
                ADD
              </button>
            </div>
          </>
        );
      case "/LatestSeries":
        return (
          <>
            <nav>
            <div className="md:flex flex md:items-center  justify-around gap-2 md:gap-64 md:py-8 py-2 md:justify-between text-white px-8">
            <h3 className=" flex items-center text-xl   md:px-8">
      <span className="text-[#7379FF]"><a href="/">Enter-</a></span>Stream
            </h3>
            <ul className="md:flex flex items-center md:items-center gap-4">
                <li><a href="/LatestMovies">MOVIE</a></li>
                <li><a href="/LatestSeries">SERIES</a></li>
                </ul>
                <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
                  <a href="/Subscribe">SUBSCRIBE</a> 
                </button>
              </div>
              <div className="items-center px-96 py-16 w-full ">
                <h1 className="text-white text-3xl text-center ">LATEST SERIES</h1>
              </div>
            </nav>
            <div className="pt-32 text-end">
              <button 
                onClick={handleAddClick} 
                className="bg-indigo-500 h-6 items-center m-4 hover:bg-indigo-700 ml-96 text-white w-16 rounded-3xl"
              >
                ADD
              </button>
            </div>
          </>
        );
        case "/AddMovie":
          return (
            <>
              <nav>
              <div className="md:flex flex md:items-center  justify-around gap-2 md:gap-64 md:py-8 py-2 md:justify-between text-white px-8">
            <h3 className=" flex items-center text-xl   md:px-8">
      <span className="text-[#7379FF]"><a href="/">Enter-</a></span>Stream
            </h3>
            <ul className="md:flex flex items-center md:items-center gap-4">
                  <li><a href="/LatestMovies">MOVIE</a></li>
                <li><a href="/LatestSeries">SERIES</a></li>
                  </ul>
                  
                </div>
                <div className="items-center px-96 py-16 w-full ">
                  <h1 className="text-white text-3xl text-center ">Add Movie/Series</h1>
                </div>
              </nav>
             
            </>
          );
          case "/Subscribe":
            return (
              <>
                <nav>
                <div className="md:flex flex md:items-center  justify-around gap-2 md:gap-64 md:py-8 py-2 md:justify-between text-white px-8">
            <h3 className=" flex items-center text-xl   md:px-8">
      <span className="text-[#7379FF]"><a href="/">Enter-</a></span>Stream
            </h3>
            <ul className="md:flex flex items-center md:items-center gap-4">
            <li><a href="/LatestMovies">MOVIE</a></li>
            <li><a href="/LatestSeries">SERIES</a></li>
            </ul>
            <button className="bg-indigo-500 hover:bg-indigo-700 mr-16 text-white font-bold py-2 px-6 rounded">
              <a href="/Subscribe">SUBSCRIBE</a> 
            </button>
          </div>
          <div className="items-center px-96 py-16 w-full ">
                  <h1 className="text-white text-3xl text-center ">SUBSCRIBE</h1>
                </div>
                </nav>
               
              </>
            );
    }
  };

  return (
    <nav className=
      " bg-cover bg-center bg-no-repeat md:h-[390px] bg-[url('./assets/movies.jpg')]"
  
    >
      {renderNavBarContent()}
    </nav>
  );
};

export default NavBar;
