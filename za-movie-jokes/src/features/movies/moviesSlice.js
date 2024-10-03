import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "./api";

// Define the initial state for the movies slice
const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

// Async thunk for fetching popular movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await fetchPopularMovies();
  return data.data; // Assuming `data.data` holds the required movie data
});

// Create the movies slice
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.results; // Assuming `results` holds the array of movies
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors to access the slice of state
export const selectAllMovies = (state) => state.movies.movies;
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;
export const selectMoviesById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === Number(movieId));

export default moviesSlice.reducer;
