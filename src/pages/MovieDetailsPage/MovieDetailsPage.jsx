import css from '../MovieDetailsPage/MovieDetailsPage.module.css';
import { Link, Routes, Route, Outlet } from "react-router-dom";
import GoBack from '../../components/GoBack/GoBack';

export default function MovieDetailsPage() {
	return (
		<div className={css.detalisContainer}>
			<GoBack />
			<div className={css.detalisArticle}>
				<img src="" alt="" className={css.img} />
				<div className={css.aboutContainer}>
					<h3 className={css.title}></h3>
					<p className={css.score}>User Score&#8201;</p>
					<h4 className={css.overview}>Overview</h4>
					<p className={css.overviewDescript}></p>
					<h4 className={css.genres}>Genres</h4>
					<p className={css.genresDescript}></p>
				</div>
			</div>
			<div className={css.detalisAdditionally}>
				<h4 className={css.titleAdditionally}>Additionally information</h4>
				<ul className={css.listAdditionally}>
					<li className={css.itemAdditionally}>
						<Link to="cast" className={css.linkAdditionally}>Cast</Link>
						<Link to="reviews" className={css.linkAdditionally}>Revievs</Link>
					</li>
				</ul>
			</div>
			<Outlet />
		</div>
		
	)
}