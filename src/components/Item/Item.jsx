import css from '../Item/Item.module.css';

import { Link } from "react-router-dom";

import { GiClick } from "react-icons/gi";

import defaultImage from "../../img/dafaultImg.png";

export default function Item({ backdrop_path, title, id }) {
	return (
		<>
			<img 
				src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : defaultImage}
				alt={title}
				className={css.img}
				onError={(e) => { e.target.src = defaultImage;  e.target.className = css.target.className = css.defaultImg;}} // Якщо зображення не завантажується
			/>
			<Link to={`/movies/${id}`} className={css.link}>
				{title}
				<GiClick className={css.icon} size={24} />
			</Link>
		</>
	)
}