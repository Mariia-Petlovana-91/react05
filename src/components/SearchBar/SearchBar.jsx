import css from '../SearchBar/SearchBar.module.css';
import { BsSearch } from "react-icons/bs";
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
	const [inputValue, setInputValue] = useState('');
	
	function onInputChange(e) {
       setInputValue(e.target.value);
	}
	
	function handleSubmit(e) {
	e.preventDefault();
		if (inputValue.trim() === '') {
             toast.error("The field cannot be empty!🛑");
             return;
            }
		onSubmit(inputValue);
		setInputValue('');
            e.target.reset();
	}

	return (
		<form className={css.form}
			onSubmit={handleSubmit}
		>
			<div className={css.form__inputEl}>
					<input 
                                className={css.form__input}
                                name="search"
                                type="text"
                                onChange={onInputChange}
                                value={inputValue}
					/>
				      <button className={css.form__btn}
					type='submit'
				      >
					<BsSearch className={css.form__btnIcon}
						size={20}
					/>
				      </button>	
			</div>
		</form>
	);
}
