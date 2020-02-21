import {createStore} from 'redux';
import reducer from './reducers/videos';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//import storage from 'redux-persist/lib/storage';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoriyList: [],
// });
// export default store;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
