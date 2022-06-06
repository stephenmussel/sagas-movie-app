const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GETs all movies
router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

// GETs details of selected movie
router.get('/details/:id', (req, res) => {
  const movieId = req.params.id;
  console.log('movieId:', movieId);
  
  const queryText = `SELECT * from movies WHERE id = $1`
  pool.query(queryText, [movieId])
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => {
      console.log('err in getting details:', err);
      res.sendStatus(500);
    });
});

// Updates details of selected movie
router.put('/details/:id', (req, res) => {
const detailsUpdate = req.body;
console.log('detailsUpdate:', detailsUpdate);
const detailsId = req.params.id;
console.log('detailsId:', detailsId);

const queryText = `
  UPDATE movies 
  SET title = $1, description = $2
  WHERE id = $3;`;
  pool.query(queryText, [detailsUpdate.title, detailsUpdate.description, detailsId])
    .then(results => {
      res.sendStatus(200)
    })
    .catch(err => {
      console.log('err in updating details', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

// DELETEs movie
router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;
  console.log('deleteId:', deleteId);

  const queryText = `DELETE FROM movies_genres WHERE movie_id = $1;`;
  pool.query(queryText, [deleteId])
    .then(result => {
      
      const newQuery = `DELETE FROM movies WHERE id = $1;`;
      pool.query(newQuery, [deleteId])
      res.sendStatus(204);
    })
    .catch(err => {
      console.log('err in deleting movie:', err);
      res.sendStatus(500);
    });
});

module.exports = router;