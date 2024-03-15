import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  books: [],
  error: null,
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await axios.get(
      "https://stephen-king-api.onrender.com/api/books"
    );
    const data = response.data;

    if (Array.isArray(data)) {
      // Iterate over each book object in the array
      data.forEach((book) => {
        // Iterate over the properties of each book
        Object.entries(book).forEach(([key, value]) => {
          // Log each property key and value
          console.log(`${key}: ${value}`);
        });
      });
    } else {
      console.error("Data is not an array:", data);
    }

    return data; // Return the data as needed
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Throw the error for handling in Redux
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = "";
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        (state.loading = false), (state.books = []);
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
