import css from "../App/App.module.css";
import { Toaster } from 'react-hot-toast';


import { Routes, Route } from "react-router-dom";
import { useState} from 'react';



import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";



export default function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <Navigation />
      
      <Section>
        <Toaster />
        {load && <Loader/>}
        
        <Routes>
          <Route path="/" element={<HomePage
            setLoad={setLoad}
          />} />
          <Route path="/movies" element={<MoviesPage
            setLoad={setLoad}
          />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage
          setLoad={setLoad}/>}>
            <Route path="cast" element={<MovieCast setLoad={setLoad} />} />
            <Route path="reviews" element={<MovieReviews setLoad={setLoad}/>}/>
          </Route>
  	    	<Route path="*" element={<NotFoundPage />} />
        </Routes>

      </Section>
      
    </>
  )
}
