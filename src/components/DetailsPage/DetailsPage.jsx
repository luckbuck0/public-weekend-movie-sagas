
import { useSelector } from "react-redux";

function DetailPage(){

    const clickedMovie = useSelector((store) => store.movie)
    
    console.log('this is movie', clickedMovie);
    return (
        <div>
            hi
        </div>
    )
}

export default DetailPage;