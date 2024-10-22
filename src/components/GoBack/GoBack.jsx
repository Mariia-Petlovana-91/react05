import css from '../GoBack/GoBack.module.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import {Link} from "react-router-dom";

export default function GoBack() {
	return (
		<div>
			<button type='button'
				className={css.btnBack}
			>
			<Link to="/" className={css.backLink}>
				<IoIosArrowRoundBack size={24}
					className={css.backIcon}
			      />
				Go back
			</Link>
			</button>
		</div>
	)
}