import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const movies = [
      
    {
      "id": 1,
      "title": "Inception",
      "poster": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
      "releaseYear": 2010,
      "rating": 8.8,
      "shortPlot": "A skilled thief enters people's dreams to steal secrets but is assigned the task of planting an idea.",
      "aiAudienceSummary": "Praised for its mind-bending concept and stunning visuals.",
      "overallSentiment": "positive"
    },
    {
      "id": 2,
      "title": "Interstellar",
      "poster": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNMq4eobH5h.jpg",
      "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      "releaseYear": 2014,
      "rating": 8.6,
      "shortPlot": "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
      "aiAudienceSummary": "Emotional and visually spectacular, though slightly lengthy.",
      "overallSentiment": "positive"
    },
    {
      "id": 3,
      "title": "The Dark Knight",
      "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "cast": ["Christian Bale", "Heath Ledger", "Gary Oldman"],
      "releaseYear": 2008,
      "rating": 9.0,
      "shortPlot": "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham.",
      "aiAudienceSummary": "Considered one of the best superhero movies ever made.",
      "overallSentiment": "positive"
    },
    {
      "id": 4,
      "title": "Avatar",
      "poster": "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      "cast": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      "releaseYear": 2009,
      "rating": 7.9,
      "shortPlot": "A marine on an alien planet becomes torn between following orders and protecting his new home.",
      "aiAudienceSummary": "Visually groundbreaking but story feels familiar.",
      "overallSentiment": "mixed"
    },
    {
      "id": 5,
      "title": "Titanic",
      "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      "cast": ["Leonardo DiCaprio", "Kate Winslet"],
      "releaseYear": 1997,
      "rating": 7.9,
      "shortPlot": "A love story unfolds aboard the ill-fated RMS Titanic.",
      "aiAudienceSummary": "Emotional and timeless romantic drama.",
      "overallSentiment": "positive"
    },
    {
      "id": 6,
      "title": "The Matrix",
      "poster": "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
      "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "releaseYear": 1999,
      "rating": 8.7,
      "shortPlot": "A hacker discovers the world is a simulated reality and joins a rebellion.",
      "aiAudienceSummary": "Revolutionary sci-fi with iconic action scenes.",
      "overallSentiment": "positive"
    },
    {
      "id": 7,
      "title": "Joker",
      "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "cast": ["Joaquin Phoenix", "Robert De Niro"],
      "releaseYear": 2019,
      "rating": 8.4,
      "shortPlot": "A failed comedian spirals into madness and becomes a criminal mastermind.",
      "aiAudienceSummary": "Dark and intense with a powerful lead performance.",
      "overallSentiment": "mixed"
    },
    {
      "id": 8,
      "title": "Avengers: Endgame",
      "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "cast": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      "releaseYear": 2019,
      "rating": 8.4,
      "shortPlot": "The Avengers assemble once more to undo the damage caused by Thanos.",
      "aiAudienceSummary": "Epic conclusion with emotional fan service.",
      "overallSentiment": "positive"
    },
    {
      "id": 9,
      "title": "The Shawshank Redemption",
      "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "cast": ["Tim Robbins", "Morgan Freeman"],
      "releaseYear": 1994,
      "rating": 9.3,
      "shortPlot": "Two imprisoned men bond over years, finding solace and redemption.",
      "aiAudienceSummary": "Highly inspiring and widely regarded as a masterpiece.",
      "overallSentiment": "positive"
    },
    {
      "id": 10,
      "title": "Gladiator",
      "poster": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      "cast": ["Russell Crowe", "Joaquin Phoenix"],
      "releaseYear": 2000,
      "rating": 8.5,
      "shortPlot": "A betrayed Roman general seeks revenge against the corrupt emperor.",
      "aiAudienceSummary": "Powerful performances and thrilling action sequences.",
      "overallSentiment": "positive"
    }
  
    ];
app.get("/api/movies/", (req, res) => {
 
    const serch = req.query.search?.toLowercase() || "";
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(serch));
    res.json(filteredMovies);

});


app.get("/api/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m => m.id === movieId);
    if(!movie){
      return res.status(400).json({message:"Movie not found"});
    }
    res.json(movie);
});
app.listen(5000,()=>{
  console.log("Server is running on port 5000");
});