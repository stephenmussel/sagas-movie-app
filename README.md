<!-- 
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)
-->

# SAGAS MOVIE APP

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li>
      <a href="#preview">Preview</a></li>
      <ul>
        <li>
            <a href="#prerequisites">Prerequisites</a></li>
        </li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#updates">Updates</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgement">Acknowledgment</a></li>
    <li><a href="#support">Support</a></li>
  </ol>
</details>
<br />

<!-- Description -->
## Description

_Duration: 2 Day Sprint_

This is a movie management app. Click a movie to see more detailed information including: poster, genre(s), and descriptions. Maybe you don't like the movie, go ahead and delete it. Need to add to the description or spelled the title wrong, you can make edits. There's a classic movie missing from this list, you can add to it.

<!-- Your project description goes here. What problem did you solve? How did you solve it?  -->


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Preview -->
## Preview  
<br />

![Sagas Movie App Preview](/public/images/sagas-movie-app-preview.gif)
<br /> 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Prerequisites -->
### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](http://postgresql.org)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Setup -->
## Setup

1. Create a database named `saga-movies-app`
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. A new browser tab should open up, but if it doesn't you can enter: `localhost:3000` in a new tab.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Features -->
<!-- ## Features

1. Home page displays all of the movies in the movie database. 
2. Details page shows all details for the selected movie, including title, poster, description, and genres.
3. Add movie form allows you to `Save` title, url (poster), description, and genre to database or `Cancel`.
4. Details page shows all details even after page refresh.
5. Edit details page allows user to update title and description of selected movie and `Save` to the database or `Cancel`. -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Usage -->
## Usage
The home page displays a list of movies.
<br /> <br />

![Home](/public/images/home-view.jpg)
<br /><br />

Click on any movie to see more details.
<br /> <br />

![Movie Details](/public/images/movie-details-view.jpg)
<br /><br />

Maybe you'd like to add more info to the description or fix a misspelling in the tite you can edit the movie details.
<br /> <br />

![Edit Movie Details](/public/images/edit-movie-details-view.jpg)
<br /><br />

There's a classic movie that's missing from this collection, feel free to add it.
<br /> <br />

![Add Movie](/public/images/add-movie-view.jpg)
<br /><br />
 

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Updates -->
## Updates
 
- [x] Material-UI
- [ ] Details and edit modals open on home page
- [ ] Input validation for adding movie (fields can't be empty)
- [ ] Input confirmation for editing movie
- [x] Prompt user to confirm deleting movie
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql)
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [ ] Allow the user to refresh the edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Update readme


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->
## Built With

* [React.js](https://reactjs.org/)
* [Redux.js](https://redux.js.org/)
* [Redux-Saga](https://redux-saga.js.org/)
* [Axios](http://npmjs.com/package/axios)
* [Material-UI](https://mui.com/)
* HTML5
* CSS3
* [Express.js](http://expressjs.com)
* [Node.js](https://nodejs.org/en)
* [PostgreSQL](http://postgresql.org)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Acknowledgement -->
## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to my wife and our dog Laurel for their continued support and patience.  

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Support -->
## Support
If you have suggestions or issues, please contact me at:  

[LinkedIn](https://www.linkedin.com/in/phaydara-vongsavanthong/)  
[GitHub](https://github.com/stephenmussel)  

<p align="right">(<a href="#top">back to top</a>)</p>