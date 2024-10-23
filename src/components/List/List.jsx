import css from '../List/List.module.css';

import Item from '../Item/Item';

export default function List({ array }) {
	return (
		<ul className={css.list}>
		{
			array.map((ar) => {
				
		return <li key={ar.id}
			className={css.item}
			>
			<Item backdrop_path={ar.backdrop_path}
				title={ar.title}
				id={ar.id}
			/>
		</li>})
		}
		</ul>
	)
}