import css from '../MoviesPage/MoviesPage.module.css';

import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';

import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import movieService from '../../utils/api';

export default function MoviesPage({ setLoad }) {
  const [searchArray, setSearchArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetch(searchValue) {
    try {
     setLoad(true);
     const data = await movieService.getSearchQuery(searchValue);
     if (data.results.length === 0) {
      return;
    }
    setSearchArray((prevImages) => prevImages ? [...prevImages, ...data.results] : data.results);

   } catch (error) {
     toast.error(`${error.message}🚨`);
   } finally {
     setLoad(false);
    }
  }
  
  useEffect(() => {
    if (searchTerm) {
      fetch(searchTerm);
    }
  }, [searchTerm]);

  function onSearchSubmit(inputValue) {
    setSearchTerm(inputValue);
    setSearchArray([]);
	  }



	return (
		<div>
			<SearchBar onSubmit={onSearchSubmit}/>
			<Outlet />
			<List array={searchArray}/>
		</div>
	)
}