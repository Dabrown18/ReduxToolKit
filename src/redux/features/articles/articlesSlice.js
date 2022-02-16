import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fetchArticlesApi } from '../../../service';

const FETCH_ARTICLES = 'fetchArticles';
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
    [fetchArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

// export const {increment, decrement, incrementByAmount} = articlesSlice.actions;

export default articlesSlice.reducer;
