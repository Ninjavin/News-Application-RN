import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "./newsApiSlice";

export default configureStore({
  reducer: {
    news: newsReducer,
  },
});
