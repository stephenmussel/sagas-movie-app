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
}

function* fetchSelectOptions(action) {
    try {
        console.log('fetchSelectOptions wired!');

        const genres = yield axios.get('/api/genre');
        console.log('genres:', genres.data);
        
        

    } catch(err) {
        console.log('err in fetchSelect');
    }
}

function* fetchGenres(action) {
    try {
        console.log('fetchGenres saga wired!');
        const movieId = action.payload;
        console.log('movieId:', movieId);
        const genres = yield axios.get(`/api/genre/${movieId}`); // GETs genres of selected movie
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
