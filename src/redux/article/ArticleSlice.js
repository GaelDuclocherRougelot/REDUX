import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  articles: [],
};

export const ArticleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {
    setArticles: (state, action) => {
      action.payload.id = uuidv4();
      const newArticles = [...state.articles, action.payload];
      state.articles = newArticles;
    },
    deleteArticle: (state, action) => {
      state.articles = state.articles.filter((article) => {
        return article.id !== action.payload;
      });
    },
    setQuantity: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.id === action.payload.article_id) {
          article.quantity = action.payload.newQuantity;
        }
        return article;
      });
    },
    setName: (state, action) => {
      state.articles = state.articles.map((article) => {
        if (article.id === action.payload.article_id) {
          article.name = action.payload.newName;
        }
        return article;
      });
    },
  },
});

export const { setArticles, deleteArticle, setQuantity, setName } = ArticleSlice.actions;

export default ArticleSlice.reducer;
