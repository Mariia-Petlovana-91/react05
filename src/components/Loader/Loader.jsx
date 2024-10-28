import css from '../Loader/Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';
import { useLoader } from '../LoaderContext/LoaderContext';

export default function Loader() {
   const { load } = useLoader();
   return (
      load ? <div className={css.load}>
         <ThreeCircles
            visible={true}
            height="40"
            width="40"
            color="white"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
         />
      </div> : null
	)
}
