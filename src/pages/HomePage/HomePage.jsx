import css from '../HomePage/HomePage.module.css';
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<div className={css.container}>
			<h2 className={css.tittle}></h2>
			<ul>
				<li>
					<Link to="/movies">n</Link>
				</li>
			</ul>
		</div>
	)
}