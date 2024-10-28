import css from '../GoBack/GoBack.module.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import {useNavigate} from "react-router-dom";

export default function GoBack({ address }) {
	const navigate = useNavigate();

	function goBack () {
		return navigate(address || "/");
	}
	return (
		<div>
			<button type='button'
				onClick={goBack}
				className={css.btnBack}
			>
				<IoIosArrowRoundBack size={24}
					className={css.backIcon}
			      />
				Go back
			</button>
		</div>
	)
}