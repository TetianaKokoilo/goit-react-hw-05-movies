import { useEffect, useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from "Api/Api";
import { Button } from "components/Button/Button";


export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  
    useEffect(() => {
    (async function fetchData() {
      try {
        const data = await getMovies(page);
        const { results, total_pages } = data;
        setShowBtn(page < Math.ceil(total_pages / 66));
        setMovies([...results]);
      } catch (err) {
        console.log(err.message);
      } 
    })();
    }, [page]);
  
    const clickBtn = () => {
    setPage(prevState => prevState + 1);
  };


  return (
    <main>
      <h2>Trending by Day</h2>
      <MoviesList movies={movies} />
      {showBtn && <Button clickBtn={clickBtn} />}
    </main>
  );
};


