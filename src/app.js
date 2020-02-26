import React, {Component} from 'react';

import {Text} from 'react-native';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';

import {connect} from 'react-redux';
import API from '../utils/api';

function mapStatesToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  };
}

class AppLayout extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const categoriyList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoriyList,
      },
    });

    const suggestionList = await API.getSuggesion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  };

  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    }

    return (
      <Home>
        <Header />

        <Text> Buscador </Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

export default connect(mapStatesToProps)(AppLayout);
