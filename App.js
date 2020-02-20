import React from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import {Provider} from 'react-redux';
import store from './store';
import API from './utils/api';

class App extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const categoriyList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoriyList,
      },
    });

    const suggestionList = await API.getSuggesion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  };

  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text> Bucador </Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}

export default App;
