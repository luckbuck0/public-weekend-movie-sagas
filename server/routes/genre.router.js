const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  const query = `SELECT "movies".title,
  "genres".name ,
 "movies_genres".genre_id, "movies_genres".movie_id 
FROM movies
JOIN movies_genres
ON movies_genres.genre_id= movies.id
JOIN genres
ON genres.id=movies_genres.movie_id
GROUP BY "movies".id ,"movies".title ,"genres".id ,
 "genres".name , "movies_genres".genre_id,
  "movies_genres".movie_id 
 `;
  pool.query(query)
    .then( result => {
      console.log('this is the results', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
  
});

module.exports = router;