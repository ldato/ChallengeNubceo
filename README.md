

# Backend challenge for Nubceo: A movies API.

### Functionality.
- Endpoints for authentication using JWT.
   - All the endpoints that deliver the data will require a x-access token sent in the header request.
 


### Model.
- Entities to consider:
- Movie. Has many actors, but one director.
   - Movie belongs to one director.
   - Movie has and belongs to many actors.
- TV Show. Has many actors, but one director. It also has seasons and episodes inside each of one.
   - Tv show has many episodes.
   - Tv show belongs to one director.
   - Tv show has and belongs to many actors.
- Actor. Can be on different movies and TV shows.
   - Actor has and belongs to many movies.
   - Actor has and belongs to many TV shows.
- Director. Can direct many movies and specific episodes of TV shows.
   - Director has many movies.
   - Director has many TV shows.
   - Director has many episodes.

- Modules used:
   - Express
   - node-fetch
   - nodemon
   - cors
   - dotenv
   - mongoose



- Model structure with MongoDb
- A movie
   - Belongs to one director. 
   - Has and belongs to many actors.
- A TV show
   - Has many episodes.
   - Belongs to one director.
   - Has and belongs many actors.
- A director
   - Has many movies.
   - Has many TV shows.
   - Has many episodes.
- An actor
   - Has and belongs to many movies.
   - Has and belongs to many TV shows.

- Endpoint:
Auth Routes
POST /api/auth/register
POST /api/auth/login

Genre Routes
POST /api/genres
GET /api/genres
GET /api/genres/genre name
DELETE /api/genres/genre name

Actors Routes
POST /api/actors
GET /api/actors
GET /api/actors/actor name
DELETE /api/actors/actor name

Directors Routes
POST /api/directors
GET /api/directos
GET /api/directors/director name
DELETE /api/directors/director name

Movies Routes
POST /api/movies
GET /api/movies
GET /api/movies/movie title
DELETE /api/movies/movie title

Tv Shows Routes
POST /api/tvshows
GET /api/tvshows
GET /api/tvshows/tvshow title
DELETE /api/tvshows/tvshow title
PATCH /api/tvshows/tvshow title




