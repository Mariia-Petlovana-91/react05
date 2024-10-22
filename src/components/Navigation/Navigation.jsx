import css from './Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from "react-router-dom";

function onActiveClass ({ isActive }) {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
	return (
          <header className={css.header}>
               <nav>
		     	        <NavLink to="/" className={onActiveClass}>
                       Home
                    </NavLink>
                    <NavLink to="/movies" className={onActiveClass}>
                       Movies
                    </NavLink>
	      	</nav>
          </header>
	)
}