import { useNavigate } from "react-router-dom";
import movieStore from "./moviesStorage.json";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function LatestMovies() {
  const navigate = useNavigate();

  const images = movieStore.movies.all.titles.map((movie) => ({
    src: movie.src, 
    id: movie.id,   
    title: movie.title 
  }));

  const rows = chunkArray(images, 4);

  const handleImageClick = (getId) => {
    navigate(`/ViewMovie/${getId}`);
  };

  return (
    <div className="flex flex-col items-center py-32">
      <table className="border-collapse">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((movie, cellIndex) => (
                <td key={cellIndex} className="p-2">
                 <img
                     src={movie.src}
                      alt={`Movie ${rowIndex * 4 + cellIndex + 1}`}
                       className="w-60 h-96 object-cover cursor-pointer"
                   onClick={() => handleImageClick(movie.id)} 
/>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatestMovies;