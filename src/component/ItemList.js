import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

function ItemList() {
  const articles = useSelector((state) => state.article.articles);
  return (
    <div>
      <h4>Liste des articles</h4>
      {articles.map((article, index) => {
        return <Article key={index} article={article} />;
      })}
    </div>
  );
}

export default ItemList;
