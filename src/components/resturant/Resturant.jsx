import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { Button, Container, Stack, colors } from "@mui/material";
import { cyan } from "@mui/material/colors";
import data from "./recepieApi";
import Navbar from "./Navbar";

const Resturant = () => {
  const uniqueList = [
    ...new Set(
      data.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  const [recipeData, setRecipeData] = useState(data);
  const [recipeList, setRecipeList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setRecipeData(data);
      return;
    }
    const updatedList = data.filter((curElem) => {
      return curElem.category === category;
    });
    setRecipeData(updatedList);
  };

  // console.log(uniqueList);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className="nav-div"
      >
        <Navbar filterItem={filterItem} recipeList={recipeList} />
      </Stack>
      <div
        className="recipe-div"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
          padding: "10px",
        }}
      >
        {recipeData.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
};

export default Resturant;
