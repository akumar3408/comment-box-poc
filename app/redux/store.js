import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {thunk} from 'redux-thunk';

import {persistStore} from 'redux-persist';

import persistedReducer from './reducers';
import {config} from '../config';

const logger = createLogger();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk);
    if (config.IS_LOGGER_ENABLED) {
      middlewares.push(logger);
    }
    return middlewares;
  },
});

export const persistor = persistStore(store);
