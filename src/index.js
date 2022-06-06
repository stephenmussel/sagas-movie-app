import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_SELECT_OPTIONS', fetchSelectOptions);
    yield takeEvery('CREATE_MOVIE', createMovie);
    yield takeEvery('UPDATE_MOVIE', updateMovie);
    yield takeEvery('DELETE_MOVIE', deleteMovie);
}

function* deleteMovie(action) {
    try {
        console.log('deleteMovie saga wired!');
        const deleteId = action.payload;
        console.log('movie id to delete:', deleteId);
        yield axios.delete(`/api/movie/${deleteId}`);

        // GETs updates list
        yield put({ type: 'FETCH_MOVIES' });
        
    } catch(err) {
        console.log('err deleting movie:', err);  
    }
}

// Updates selected movie details
function* updateMovie(action) {
    try {
        console.log('updateMovie sage wired!');
        const movieUpdates = action.payload;
        console.log('movieUpdates:', movieUpdates);
        yield axios.put(`/api/movie/details/${movieUpdates.id}`, movieUpdates);
        
        // TODO: remove genre
        // yield axios.delete(`/api/genre/${movieUpdates.id}`, movieUpdates);

    } catch(err) {
        console.log('err in updateMovie:', err);    
    }
}

// Creates new movie
function* createMovie(action) {
    try {
        console.log('createMovie saga wired!');
        const newMovie = action.payload;
        console.log('newMovie:', newMovie);
        yield axios.post('/api/movie', newMovie)

        // NOTES: need this even though there's a useEffect to fetch on the list view. Why?
        yield put({ type: 'FETCH_MOVIES'});
        
    } catch(err) {
        console.log('err in createMovie:', err);
    }
}

// GETs genres from server and populates select options in AddMovieForm
function* fetchSelectOptions(action) {
    try {
        console.log('fetchSelectOptions wired!');

        const genres = yield axios.get('/api/genre');
        console.log('genres:', genres.data);

        // sends all genres select options to reducer
        yield put({ type: 'SET_SELECT_GENRES', payload: genres.data});
        
    } catch(err) {
        console.log('err in fetchSelect');
    }
}

// GETs genres of selected movies
function* fetchGenres(action) {
    try {
        console.log('fetchGenres saga wired!');
        const movieId = action.payload;
        console.log('movieId:', movieId);
        const genres = yield axios.get(`/api/genre/${movieId}`);
        console.log('movieGenre:', genres.data);

        // sends genres to genres reducer
        yield put({ type: 'SET_GENRES', payload: genres.data });
        
    } catch(err) {
        console.log('err in fetchGenres:', err);
    }
}

// NOTES why do you need to GET details when it's already sent from MovieItem?
function* fetchDetails(action) {
    try {
        console.log('fetchDetails saga wired!');
        const movie = action.payload; // details of selected movie
        console.log('movie id:', movie.id);
        const movieDetails = yield axios.get(`/api/movie/details/${movie.id}`) // GETs details of selected movie
        console.log('movieDetails:', movieDetails.data);

        // sends selected movie details to reducer
        yield put({ type: 'SET_DETAILS', payload: movieDetails.data });
        
    } catch(err) {
        console.log('err in fetchDetails:', err); 
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
        
    } catch {
        console.log('get all error');
    }   
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// stores select genre options
const select = (state = [], action) => {
    switch(action.type) {
        case 'SET_SELECT_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// stores genres of selected movie
const genres = (state = [], action) => {
    switch(action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// stores details of selected movie
const details = (state =[], action) => {
    switch(action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        genres,
        select,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
