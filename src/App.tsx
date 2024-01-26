import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail'; 

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/movies" component={MovieList} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
