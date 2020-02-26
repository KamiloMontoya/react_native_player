import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';

function mapStatesToProps(state) {
  return {
    list: state.suggestionList,
  };
}

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => (
    <Suggestion
      {...item}
      onPress={() => {
        this.viewMovie(item);
      }}
    />
  );
  keyExtractor = item => item.id.toString();

  viewMovie = ( item ) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      },
    });
  };

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStatesToProps)(SuggestionList);
