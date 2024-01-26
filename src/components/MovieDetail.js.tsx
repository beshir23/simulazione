
import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </div>
      ) : (
        <p>Nessun dettaglio del film disponibile.</p>
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Image, Text } from '@chakra-ui/react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`URL_DEL_API_DEI_FILM/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Errore durante il recupero del film', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <Box p={4}>
      <Image src={movie.posterUrl} alt={movie.title} mb={4} />
      <Text fontSize="lg" fontWeight="bold">
        {movie.title}
      </Text>
      <Text>{movie.description}</Text>
    </Box>
  );
};

export default MovieDetail;
