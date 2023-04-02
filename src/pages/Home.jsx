import { useEffect, useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from "Api/Api";


export const Home = () => {
  const [movies, setMovies] = useState([]);
  
    useEffect(() => {
    (async function fetchData() {
      try {
        const data = await getMovies();
        const { results } = data;
        setMovies([...results]);
      } catch (err) {
        console.log(err.message);
      } 
    })();
  }, []);


  return (
    <main>
      <h2>Trending by Day</h2>
      <MoviesList movies={movies}/>
    </main>
  );
};


