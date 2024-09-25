import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import commentsReducer from './commentsReducer';
import homeReducer from './homeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['home'],
};
const rootReducer = combineReducers({
    home: homeReducer,
    comments: commentsReducer,
  });
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;
