import css from "../MovieReviews/MovieReviews.module.css"
import movieService from '../../utils/api';
import { useLoader } from '../../components/LoaderContext/LoaderContext';
import NotFound from '../NotFound/NotFound';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import toast from "react-hot-toast";

export default function MovieReviews() {

	const { setLoad } = useLoader();
	const { movieId } = useParams();
	const [moviReviews, setMoviReviews] = useState(null);

	async function fetch(id) {
		try {
			setLoad(true);
			const data = await movieService.getReviews(id);
			setMoviReviews(data.results);
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
		moviReviews !== null && moviReviews.length > 0   ? (
			<ul className={css.list}>
				{moviReviews.map((moviReview) => {
					return (
						<li key={moviReview.id}
							className={css.item}
						>
							<p className={css.text}>
								{moviReview.content}
							</p>
						</li>
					);
				})}
			</ul>
		) : (
			<NotFound/>
		)
	);
}
