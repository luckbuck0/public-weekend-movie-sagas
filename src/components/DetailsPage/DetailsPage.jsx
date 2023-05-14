
import { useSelector } from "react-redux";

function DetailsPage(){

    const clickedMovie = useSelector((store) => store.clickedMovie)
    console.log('hi');
    console.log('this is movie', clickedMovie);
    console.log('this is the movie',clickedMovie);
    return (
        <div>
           <h3>{clickedMovie.title}</h3>
                           
                           <img src={clickedMovie.poster} alt={clickedMovie.title}/>  
                           <p>{clickedMovie.description}</p>       
        </div>
    )
}

export default DetailsPage;