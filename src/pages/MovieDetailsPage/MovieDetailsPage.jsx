import css from '../MovieDetailsPage/MovieDetailsPage.module.css';
import defaultImage from "../../img/dafaultImg.png";
import { useLoader } from '../../components/LoaderContext/LoaderContext';
import movieService from '../../utils/api';

import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import toast from "react-hot-toast";
import { GiClick } from "react-icons/gi";

import GoBack from '../../components/GoBack/GoBack';
import NotFound from '../../components/NotFound/NotFound';

export default function MovieDetailsPage() {
    const { setLoad } = useLoader();
    const elementId = useParams(null);
    const [moviElement, setMoviElement] = useState(null);
    const location = useLocation();

    
    const fromPage = location.state?.from || '/movies';

    async function fetch(id) {
        try {
            setLoad(true);
            const data = await movieService.getElementById(id);
            setMoviElement(data);
            return;
        } catch (error) {
            toast.error(`${error.message}🚨`);
        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        if (elementId && elementId.movieId) {
            fetch(elementId.movieId);
        }
    }, [elementId]);

    return (
        moviElement ? (
            <div className={css.detalisContainer}>
                <GoBack address={  fromPage} />
                <div className={css.detalisArticle}>
                    <img
                        src={moviElement.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${moviElement.backdrop_path}`
                            : defaultImage}
                        alt={moviElement.title}
                        className={css.img}
                        onError={(e) => { e.target.src = defaultImage; }}
                    />
                    <div className={css.aboutContainer}>
                        <div>
                            <h3 className={css.title}>
                                {moviElement.original_title}
                            </h3>
                            <p className={css.score}>
                                User Score&#8201;{moviElement.vote_average}%
                            </p>
                        </div>
                        <div>
                            <h4 className={css.secondaryTitle}>
                                Overview
                            </h4>
                            <p className={css.text}>
                                {moviElement.overview}
                            </p>
                        </div>
                        <div>
                            <h4 className={css.secondaryTitle}>
                                Genres
                            </h4>
                            <p className={css.text}>
                                {moviElement.genres.map((genre) => genre.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={css.containerAdditionally}>
                    <h4 className={css.secondaryTitle}>Additionally information</h4>
                    <ul className={css.listAdditionally}>
                        <li className={css.itemAdditionally}>
                            <Link
                                to={`cast`}
                                className={css.linkAdditionally}
                                state={{  from: location}}
                            >
                                Cast
                                <GiClick className={css.icon} size={24} />
                            </Link>
                        </li>
                        <li className={css.itemAdditionally}>
                            <Link
                                to={`reviews`}
                                className={css.linkAdditionally}
                                state={{ from: location}}
                            >
                                Reviews
                                <GiClick className={css.icon} size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        ) : <NotFound/>
    );
}


