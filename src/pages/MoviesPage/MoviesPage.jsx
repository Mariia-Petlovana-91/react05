import css from '../MoviesPage/MoviesPage.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Link, Routes, Route, Outlet } from "react-router-dom";

export default function MoviesPage() {
	return (
		<div>
			<SearchBar />
			<Outlet />
		</div>
	)
}