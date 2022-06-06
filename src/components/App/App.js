import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import EditMovie from '../EditMovie/EditMovie';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/add-movie" exact>
          <AddMovieForm />
        </Route>
        <Route path="/edit-movie">
          <EditMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
