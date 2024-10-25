import axios from "axios";
import KEY_API from "./apiKey";

const movieInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		Authorization: `Bearer ${KEY_API}`
	},
})

const defaultParams= {
		include_adult: false,
		language:" en-US",
		page:1
	}

async function getTrendingMovies() {
      try {
        const response = await movieInstance.get('/trending/movie/day?language=en-US');
        return response.data;
      } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
      }
}

async function getSearchQuery(searchValue) {

    try {
	    const response = await movieInstance.get(`/search/movie?`, {
		    params: {
			query: searchValue,
                  ...defaultParams
		  }
	  });
        return response.data;
    } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
    }
}

async function getElementById(id) {

    try {
	    const response = await movieInstance.get(`/movie?`, {
		    params: {
			movie_id: id,
                  ...defaultParams
		  }
	  });
        return response.data;
    } catch (error) {
       console.error(`Error fetching data: ${error.message}`);;
    }
}

export default { getTrendingMovies, getSearchQuery, getElementById };