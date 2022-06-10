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

Expanding on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including all genres associated with that movie. This is a very common pattern, to go from a list to showing more information about a single item. 

Your project description goes here. What problem did you solve? How did you solve it? 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam at massa in faucibus. Etiam volutpat, risus non mollis convallis, velit nisi pulvinar mi, eu faucibus orci nisi eget nibh. Integer a velit pretium, volutpat arcu eleifend, fringilla elit. Cras erat sapien, convallis venenatis tellus vitae, feugiat dictum felis.

Suspendisse euismod volutpat aliquet. Maecenas vulputate mauris in pellentesque facilisis. Phasellus varius malesuada semper. Cras sollicitudin diam mollis maximus aliquam.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Preview -->
## Preview  
<br />

![Home](/public/images/home-view.jpg)
<br /><br />

![Movie Details](/public/images/movie-details-view.jpg)
<br /><br />

![Edit Movie Details](/public/images/edit-movie-details-view.jpg)
<br /><br />

![Add Movie](/public/images/add-movie-view.jpg)
<br /><br />

<!-- [Giphy API]() -->
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
## Features

1. Home page displays all of the movies in the movie database. 
2. Details page shows all details for the selected movie, including title, poster, description, and genres.
3. Add movie form allows you to `Save` title, url (poster), description, and genre to database or `Cancel`.
4. Details page shows all details even after page refresh.
5. Edit details page allows user to update title and description of selected movie and `Save` to the database or `Cancel`.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Usage -->
## Usage
How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx  

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Updates -->
## Updates
 
- [ ] Material-UI
- [ ] Display all genres on movie list page. Research [array_agg](https://stackoverflow.com/questions/43458174/how-to-save-and-return-javascript-object-with-subarray-in-normalized-sql) to make this possible.
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