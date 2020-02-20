import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/vertical-separator';
import Suggestion from '../components/suggestion';

import API from '../../../utils/api';

class SuggestionList extends Component {
  state = {
    listSuggestion: [],
  };

  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => <Suggestion {...item} />;
  keyExtractor = item => item.id.toString();

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const movies = await API.getSuggesion(10);
    this.setState({
      listSuggestion: movies,
    });
  };

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.listSuggestion}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
