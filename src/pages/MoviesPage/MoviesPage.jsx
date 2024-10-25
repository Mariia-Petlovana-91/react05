import css from '../MoviesPage/MoviesPage.module.css';

import SearchBar from '../../components/SearchBar/SearchBar';
import List from '../../components/List/List';

import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { Outlet, useSearchParams } from "react-router-dom";

import movieService from '../../utils/api';

export default function MoviesPage({ setLoad }) {

  const [searchArray, setSearchArray] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  async function fetch(searchValue) {
    try {
      setLoad(true);
      const data = await movieService.getSearchQuery(searchValue);

      if (data.results.length === 0) {
        toast.error('Nothing was found for your request🤷‍♀️.');
        return;
      }

      setSearchArray(data.results);
    } catch (error) {
      toast.error(`${error.message}🚨`);
    } finally {
      setLoad(false);
    }
  }

  function onSearchSubmit(inputValue) {
    setSearchArray([]);
    setSearchParams({ q: inputValue });
    fetch(inputValue);
  }
  
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      fetch(query);
    }
  }, [searchParams]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Outlet />
      {searchArray && <List array={searchArray} />}
    </div>
  );
}
