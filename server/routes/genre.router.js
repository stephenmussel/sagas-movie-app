const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GETs all genres for select options
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM genres;`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('err in fetching genre options:', err);
      res.sendStatus(500);
    })
});

// GETs genres of selected movie
router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  console.log('movieId:', movieId);

  const queryText = `
    SELECT movies.title, genres.name
    FROM movies
    JOIN movies_genres
    ON movies.id = movies_genres.movie_id
    JOIN genres
    ON genres.id = movies_genres.genre_id
    WHERE movies.id = $1;`;
  pool.query(queryText, [movieId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('err in getting details:', err);
      res.sendStatus(500);
    });
});

module.exports = router;