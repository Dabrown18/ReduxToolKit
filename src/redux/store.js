import {configureStore} from '@reduxjs/toolkit';
import articlesReducer from './features/articles/articlesSlice';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const middleware = [logger];

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

