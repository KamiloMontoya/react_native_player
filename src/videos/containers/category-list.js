import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import {connect} from 'react-redux';

function mapStatesToProps(state) {
  return {
    list: state.categoriyList
  };
}

class CategoryList extends Component {
  state = {
    categoriyList: [],
  };

  renderEmpty = () => <Empty text="No hay Categorias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => <Category {...item} />;
  keyExtractor = item => item.id.toString();

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
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

export default connect(mapStatesToProps)(CategoryList);
