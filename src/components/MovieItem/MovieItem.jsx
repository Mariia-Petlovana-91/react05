import css from '../MovieItem/MovieItem.module.css';
import { Link, useLocation } from "react-router-dom";
import { SiZcool } from "react-icons/si";
import defaultImage from "../../img/dafaultImg.png";

export default function MovieItem({ backdrop_path, title, id }) {
	const location = useLocation();
	
	return (
		<>
			<Link to={`/movies/${id}`}
				state={
					{
						from: location
					}
				}
				className={css.link}
			>
			<img 
				src={backdrop_path ?
						`https://image.tmdb.org/t/p/w500${backdrop_path}` :
						defaultImage}
				alt={title}
				className={css.img}
				onError={(e) => { e.target.src = defaultImage;}}
			/>
				<p className={css.text}>
				 	{title}
				    <SiZcool className={css.icon} size={24} />
				</p>
				
			</Link>
		</>
	)
}