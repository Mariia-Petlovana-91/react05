import css from './MovieList.module.css';
import MovieItem from '../MovieItem/MovieItem';

export default function MovieList({ array}) {
	return (
		<ul className={css.list}>
		{
			array.map((ar) => {
				
		return <li key={ar.id}
			className={css.item}
			>
			<MovieItem backdrop_path={ar.backdrop_path}
				title={ar.title}
				id={ar.id}
			/>
		</li>})
		}
		</ul>
	)
}