
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'

//----------------------------------------------
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
        <CardActionArea sx={{ maxWidth: 345, display: 'flex' , justifyContent:'center' } }>
         <div  key={movie.id} >
                
                <Typography gutterBottom variant="h5" component="div">
           {movie.title}
          </Typography>
           
                <CardMedia
                component = "img"
                height ="fit-content"
                width= "fit-content"
                image = {movie.poster}
                alt = {movie.title}
                onClick={Details}
                />  
             
                            
           </div>  
           </CardActionArea>
    )
}

export default MovieDisplay;