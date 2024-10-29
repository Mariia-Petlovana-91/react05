import css from '../HomePage/HomePage.module.css'; 
import { useLoader } from '../../components/LoaderContext/LoaderContext';
import movieService from '../../utils/api';
import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";

export default function HomePage() {
   const { setLoad } = useLoader();
  const [trending, setTrending] = useState([]);

  async function fetch() {
    try {
     setLoad(true);
     const data = await movieService.getTrendingMovies();
     if (data.results === 0) {
      return;
    }
      setTrending(data.results);
   } catch (error) {
     toast.error(`${error.message}🚨`);
   } finally {
     setLoad(false);
    }
  }

  useEffect(() => {
    fetch();
  }, []);


	return (
		<div className={css.container}>
			<h2 className={css.title}>Tranding tooday</h2>
		      <MovieList array={trending} />
		</div>
	)
}