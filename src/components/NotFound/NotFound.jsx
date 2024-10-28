import css from '../NotFound/NotFound.module.css';

export default function NotFound() {
	return (
		<div className={css.container}>
			<p className={css.text}>Nothing was found for this query 🤷‍♂️</p>
		</div>
	)
}