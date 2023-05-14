const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  const query = `SELECT "movies".title ,"genres".name FROM 
  movies
  LEFT JOIN
  movies_genres ON
  movies_genres.movie_id= movies.id
  JOIN 
  genres
  ON
  genres.id=movies_genres.genre_id
  GROUP BY "movies".title, "genres".name
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