import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "./article/ArticleSlice";
export const store = configureStore({
  reducer: {
    article: ArticleReducer,
  },
});
