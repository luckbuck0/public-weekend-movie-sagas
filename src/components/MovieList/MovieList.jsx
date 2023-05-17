import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import DetailPage from '../DetailsPage/DetailsPage';
import MovieDisplay from './MovieDisplay';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
function MovieList() {

const [isFalse, setTrue] = useState(false);

const history = useHistory()

    const [movie,setMovie] = useState()

  

    
    

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieDisplay 
                        movie={movie}
                        />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;