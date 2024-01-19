import React, { useEffect, useState } from "react";
import { setArticles } from "../redux/article/ArticleSlice";
import { store } from "../redux/store";

function Form({ formTitle }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log("composant chargé");
  }, [name, quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && quantity > 0) {
      let article = {};
      article.name = name;
      article.quantity = quantity;
      store.dispatch(setArticles(article));
      setName("");
      setQuantity(0);
    }
  };

  return (
    <div>
      <h4>{formTitle}</h4>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="row">
          <div className="col-sm-2">
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default Form;
