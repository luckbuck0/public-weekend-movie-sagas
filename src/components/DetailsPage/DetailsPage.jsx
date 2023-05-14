
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { useEffect } from "react";

function DetailsPage(){

    const dispatch = useDispatch()

    const clickedMovie = useSelector((store) => store.clickedMovie)
    
    const genres = useSelector((store) => store.genres)
    console.log('this is genres', genres);
    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_GENRES',
        })
    }, [])
    

    return (
        <div>
           <h3>{clickedMovie.title}</h3>
                           
                           <img src={clickedMovie.poster} alt={clickedMovie.title}/>  
                           <p>{clickedMovie.description}</p>       
        </div>
    )
}

export default DetailsPage;