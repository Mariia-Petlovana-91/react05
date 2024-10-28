import css from '../MovieCast/MovieCast.module.css';
import defaultImage from "../../img/dafaultImg.png";
import movieService from '../../utils/api';
import { useLoader } from '../../components/LoaderContext/LoaderContext';
import NotFound from '../NotFound/NotFound';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";



export default function MovieCast() {

	const { setLoad } = useLoader();
	const { movieId } = useParams();
	const [moviCast, setMoviCast] = useState(null);

	async function fetch(id) {
		try {
			setLoad(true);
			const data = await movieService.getCast(id);
			setMoviCast(data.cast);
		} catch (error) {
			toast.error(`${error.message}🚨`);
		} finally {
			setLoad(false);
		}
	}

	useEffect(() => {
		if (movieId) {
			fetch(movieId);
		}
	}, [movieId]);
	return (
		moviCast !== null && moviCast.length > 0   ? (
			<ul className={css.list}>
				{moviCast.map((cast) => {
					return (
						<li key={cast.id}
							className={css.item}
						>
							<img 
				                        src={
                                                    cast.profile_path ?
						                 `https://image.tmdb.org/t/p/w500${ cast.profile_path}` :
						                defaultImage}
				                            alt={cast.original_name}
				                            className={css.img}
				                            onError={(e) => { e.target.src = defaultImage;}}
			                              />
							<p className={css.text}>
								{cast.original_name}
							</p>
						</li>
					);
				})}
			</ul>
		) : (
			<NotFound/>
		)
	)
}