/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';

const App: () => React$Node = () => {
  return (
    <Home>
      <Header />
      <Player />
      <Text> Bucador </Text>
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

export default App;
