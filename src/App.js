import React from "react";
import Form from "./component/Form";
import ItemList from "./component/ItemList";

function App() {

  return (
    <div className="container">
      <h3>Liste de courses</h3>
      <Form formTitle="Ajouter un article" />
      <ItemList />
    </div>
  );
}

export default App;
