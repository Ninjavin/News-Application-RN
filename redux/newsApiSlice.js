import { createSlice } from "@reduxjs/toolkit";

export const newsApiSlice = createSlice({
  name: "news",
  initialState: {
    generalArticles: null,
    sportsArticles: null,
    businessArticles: null,
  },
  reducers: {
    updateGeneral: (state, action) => {
      console.log(action);
      console.log(state.generalArticles);
      state.generalArticles = action.payload;
    },
    updateSports: (state, action) => {
      state.sportsArticles = action.payload;
    },
    updateBusiness: (state, action) => {
      state.businessArticles = action.payload;
    },
  },
});

export const { updateBusiness, updateGeneral, updateSports } =
  newsApiSlice.actions;
export default newsApiSlice.reducer;
