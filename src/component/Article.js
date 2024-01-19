import React, { useState } from "react";
import { deleteArticle, setQuantity, setName } from "../redux/article/ArticleSlice";  // Assuming you have a separate action for setting the name
import { store } from "../redux/store";

export default function Article({ article }) {
  const [editMode, setEditMode] = useState(false);
  const [currentName, setCurrentName] = useState(article.name);
  const [currentQuantity, setCurrentQuantity] = useState(article.quantity);

  let content = (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className="ms-5">
        {article.quantity} {article.name}
      </p>
    </div>
  );

  if (editMode) {
    content = (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="number"
          className="ms-2"
          onChange={(e) => {
            setCurrentQuantity(e.target.value);
            store.dispatch(
              setQuantity({ article_id: article.id, newQuantity: e.target.value })
            );
          }}
          value={currentQuantity}
        />
        <input
          type="text"
          onChange={(e) => {
            setCurrentName(e.target.value);
            store.dispatch(
              setName({ article_id: article.id, newName: e.target.value })
            );
          }}
          value={currentName}
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => store.dispatch(deleteArticle(article.id))}
      >
        Delete
      </button>
      <button
        className="btn btn-warning btn-sm"
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        Edit
      </button>
      {content}
    </div>
  );
}
