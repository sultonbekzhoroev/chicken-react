import React, { createContext, useState, useEffect } from "react";
import Recipies from "./components/Recipies";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";
export const GeneralContext = createContext();

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipeToSearch, setRecipeToSearch] = useState("chicken");
  const callAPI = async () => {
    console.log("i am calling");
    try {
      const req = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=5bb4bf22&app_key=a254fe7e58cf6c33c85dee56381241b8`
      );
      setAllRecipes(req.data.hits);
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
  }, [recipeToSearch]);
  const data = {
    allRecipes: allRecipes,
    setAllRecipes: setAllRecipes,
    recipeToSearch: recipeToSearch,
    setRecipeToSearch: setRecipeToSearch,
  };
  return (
    <GeneralContext.Provider value={data}>
      <div className="App">
        <Form />
        <Recipies />
        <Routes>
          <Route />
        </Routes>
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
