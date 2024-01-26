
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@chakra-ui/react';
import MovieCard from './/home/kareem/simulazione/sim/simulazione/src/components/moviecard.tsx';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=it&api_key=2d6d8d1f0543c7be09efd1d0eaf1bd3c');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Errore durante il recupero dei film', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </Grid>
  );
};

export default MovieList;
