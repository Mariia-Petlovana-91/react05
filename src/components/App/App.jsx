import css from "../App/App.module.css";
import { Routes, Route} from "react-router-dom";
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

  return (
    <>
      <Navigation />
      
      <Section>
        <Loader/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:1" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast/> } />
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
  	    	<Route path="*" element={<NotFoundPage />} />
        </Routes>

      </Section>
      
    </>
  )
}
