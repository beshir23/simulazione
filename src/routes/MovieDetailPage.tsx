
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';

const MovieDetailPage = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=it&api_key=2d6d8d1f0543c7be09efd1d0eaf1bd3c');
        setMovieDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Errore durante il recupero dei dettagli del film:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.id]);

  if (loading) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <MovieDetail movie={movieDetails} />
    </div>
  );
};

export default MovieDetailPage;
