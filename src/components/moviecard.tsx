
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Image src={movie.posterUrl} alt={movie.title} mb={4} />
      <Text fontSize="lg" fontWeight="bold">
        {movie.title}
      </Text>
      <Text>{movie.description}</Text>
    </Box>
  );
};

export default MovieCard;
