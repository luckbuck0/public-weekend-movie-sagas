
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DetailsPage(){

    const history = useHistory()
    const dispatch = useDispatch()

    const clickedMovie = useSelector((store) => store.clickedMovie)
    

    const genres = useSelector((store) => store.genres)


    let genre=[]
    for (let each of genres){
        
        if(clickedMovie.title == each.title){
            genre.push(each.name)
        }
        }
        console.log('this is the genre of the clicked movie---->',genre);

    

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
                           {/* <p className="genres">{genre}</p> */}
                           {
                            genre.map((item) =>{
                                return (
                                    <p>{item}</p>
                                )
                            })
                           }
                           <p>{clickedMovie.description}</p>  
                           <button onClick={()=>{history.push('/')}}>BACK</button>     
        </div>
    )
}

export default DetailsPage;