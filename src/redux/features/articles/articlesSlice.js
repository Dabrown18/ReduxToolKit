import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchArticlesApi } from '../../../service';

const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const fetchArticles = createAsyncThunk(
  FETCH_ARTICLES,
  async () => {
    return fetchArticlesApi();
  }
);

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: {
    [fetchArticles.fulfilled]: (state, { payload }) => {
      state.data = payload.results;
      state.isLoading = false;
      state.error = null;
    },
    [fetchArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchArticles.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export const {increment, decrement, incrementByAmount} = articlesSlice.actions;

export default articlesSlice.reducer;
