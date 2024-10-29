import { Toaster } from 'react-hot-toast';

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { LoaderProvider } from "../LoaderContext/LoaderContext";

const Navigation = lazy(() => import("../Navigation/Navigation"));
const Section = lazy(() => import("../Section/Section"));
const Loader = lazy(() => import("../Loader/Loader"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));



export default function App() {
  return (
    <>
    <LoaderProvider>
      <Navigation />
      <Section>
          <Toaster />
          <Loader/>
          <Suspense>
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReviews/>}/>
          </Route>
  	    	<Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </Section>
    </LoaderProvider>
    </>
  )
}
