import css from '../Item/Item.module.css';

import { Link } from "react-router-dom";

import { GiClick } from "react-icons/gi";

export default function Item({ backdrop_path, title, id }) {
	return (
		<>
			<img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
				alt={title}
				className={css.img}
			/>
			<Link to={`/movies/${id}`} className={css.link}>
				{title}
				<GiClick className={css.icon} size={24} />
			</Link>
		</>
	)
}