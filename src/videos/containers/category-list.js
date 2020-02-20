import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';

import API from '../../../utils/api';

class CategoryList extends Component {
  state = {
    listCategory: [],
  };

  renderEmpty = () => <Empty text="No hay Categorias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => <Category {...item} />;
  keyExtractor = item => item.id.toString();

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const categories = await API.getMovies();
    this.setState({
      listCategory: categories,
    });
  };

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.state.listCategory}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default CategoryList;
