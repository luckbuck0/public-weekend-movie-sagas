
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'


//----------------------------------------------------------
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
        <section className="movies">
        <Card sx={{ maxWidth: 345, alignContent: 'center' } }>
        <div  key={clickedMovie.id}>
           <h3>{clickedMovie.title}</h3>
            <CardActionArea>   
                <CardMedia
                component = "img"
                height ="fit-content"
                width= "fit-content"
                image = {clickedMovie.poster}
                alt = "poster"
                />         
            <CardContent>
           
           {/* <p className="genres">{genre}</p> */}
           <Typography variant="body2" color="text.secondary">
           {
            genre.map((item) =>{
                return (
                    <p>{item}</p>
                )
           })
           }
          </Typography>
           
           <Typography gutterBottom variant="h5" component="div">
           {clickedMovie.description}
          </Typography>
          <Button onClick={()=>{history.push('/')}}  size="large" color="secondary">
          Back
        </Button>
           </CardContent>
           </CardActionArea>  
              
        </div>
        </Card>
        </section>
    )
}

export default DetailsPage;