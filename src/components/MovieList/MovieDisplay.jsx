import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieDisplay(props) {

    const dispatch = useDispatch()
    const history = useHistory()

    let movie = props.movie

    const Details = () => {

        dispatch({
            type: 'CLICKED_MOVIE',
            payload: movie
        })
            history.push('/DetailPage') 
        }

    return ( 
         <div  key={movie.id} >
                <h3>{movie.title}</h3>
                           
             <img onClick={ Details} src={movie.poster} alt={movie.title}/>
                            
           </div>  
    )
}

export default MovieDisplay;