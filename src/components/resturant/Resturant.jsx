import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import { Button, Container, Stack, colors } from "@mui/material";
import { cyan } from "@mui/material/colors";
import data from "./recepieApi";

const Resturant = () => {
  const filterItem = (category) => {
    const updatedList = data.filter((curElem) => {
      return curElem.category === category;
    });
    setRecipeData(updatedList);
  };
  const [recipeData, setRecipeData] = useState(data);

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className="nav-div"
      >
        <Button
          className="nav-btn"
          variant="outlined"
          onClick={() => filterItem("Breakfast")}
          sx={{
            bgcolor: cyan[100],
            color: cyan[900],
            border: "none",
            "&:hover": {
              bgcolor: cyan[900],
              color: cyan[200],
              border: "none",
            },
          }}
        >
          Breakfast
        </Button>
        <Button
          className="nav-btn"
          variant="outlined"
          onClick={() => filterItem("Lunch")}
          sx={{
            bgcolor: cyan[100],
            color: cyan[900],
            border: "none",
            "&:hover": {
              bgcolor: cyan[900],
              color: cyan[200],
              border: "none",
            },
          }}
        >
          Lunch
        </Button>
        <Button
          className="nav-btn"
          variant="outlined"
          onClick={() => filterItem("Dinner")}
          sx={{
            bgcolor: cyan[100],
            color: cyan[900],
            border: "none",
            "&:hover": {
              bgcolor: cyan[900],
              color: cyan[200],
              border: "none",
            },
          }}
        >
          Dinner
        </Button>
        <Button
          className="nav-btn"
          variant="outlined"
          onClick={() => setRecipeData(data)}
          sx={{
            bgcolor: cyan[100],
            color: cyan[900],
            border: "none",
            "&:hover": {
              bgcolor: cyan[900],
              color: cyan[200],
              border: "none",
            },
          }}
        >
          All
        </Button>
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
