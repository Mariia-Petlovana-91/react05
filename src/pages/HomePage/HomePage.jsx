import css from '../HomePage/HomePage.module.css'; 

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";

import movieService  from '../../utils/api';

import List from '../../components/List/List';

export default function HomePage({setLoad}) {

  const [trending, setTrending] = useState([]);

  async function fetch() {
    try {
     setLoad(true);
     const data = await movieService.getTrendingMovies();
     if (data.results === 0) {
      return;
    }
      setTrending(data.results);
      console.log(data.results);
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
		      <List array={trending} />
		</div>
	)
}