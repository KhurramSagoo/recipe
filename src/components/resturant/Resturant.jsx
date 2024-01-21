import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";
import image11 from "../../assets/image11.jpg";
import image12 from "../../assets/image12.jpg";
import { Button, Container, Stack, colors } from "@mui/material";
import { cyan } from "@mui/material/colors";

const Resturant = () => {
  const recipes = [
    {
      id: 1,
      label: "Chicken Pasta",
      category: "Dinner",
      image: image1,
      description: "A delicious chicken pasta dish with tomato sauce.",
      ingredients: ["Chicken", "Pasta", "Tomato Sauce"],
      price: 12.99,
    },
    {
      id: 2,
      label: "Vegetarian Salad",
      category: "Lunch",
      image: image2,
      description:
        "A refreshing salad with lettuce, tomato, cucumber, and dressing.",
      ingredients: ["Lettuce", "Tomato", "Cucumber", "Dressing"],
      price: 8.99,
    },
    {
      id: 3,
      label: "Spaghetti Bolognese",
      category: "Breakfast",
      image: image3,
      description: "Classic spaghetti with a hearty meat sauce.",
      ingredients: ["Spaghetti", "Ground Beef", "Tomato Sauce"],
      price: 10.99,
    },
    {
      id: 4,
      label: "Avocado Toast",
      category: "Lunch",
      image: image4,
      description: "A simple and healthy breakfast with avocado on toast.",
      ingredients: ["Avocado", "Bread", "Salt", "Pepper"],
      price: 6.99,
    },
    {
      id: 5,
      label: "Grilled Chicken Wrap",
      category: "Lunch",
      image: image5,
      description:
        "Grilled chicken wrapped in a tortilla with veggies and sauce.",
      ingredients: ["Grilled Chicken", "Tortilla", "Vegetables", "Sauce"],
      price: 9.99,
    },
    {
      id: 6,
      label: "Eggs Benedict",
      category: "Lunch",
      image: image6,
      description: "Poached eggs on English muffins with hollandaise sauce.",
      ingredients: ["Eggs", "English Muffins", "Hollandaise Sauce"],
      price: 11.99,
    },
    {
      id: 7,
      label: "Caesar Salad",
      category: "Lunch",
      image: image7,
      description: "Classic Caesar salad with croutons and parmesan cheese.",
      ingredients: [
        "Romaine Lettuce",
        "Croutons",
        "Parmesan",
        "Caesar Dressing",
      ],
      price: 7.99,
    },
    {
      id: 8,
      label: "Shrimp Scampi",
      category: "Dinner",
      image: image8,
      description: "Garlic butter shrimp served over pasta.",
      ingredients: ["Shrimp", "Butter", "Garlic", "Pasta"],
      price: 14.99,
    },
    {
      id: 9,
      label: "Pancakes with Maple Syrup",
      category: "Breakfast",
      image: image9,
      description: "Fluffy pancakes drizzled with maple syrup.",
      ingredients: ["Pancakes", "Maple Syrup"],
      price: 8.49,
    },
    {
      id: 10,
      label: "Caprese Salad",
      category: "Lunch",
      image: image10,
      description:
        "Fresh tomato, mozzarella, and basil salad with balsamic glaze.",
      ingredients: ["Tomato", "Mozzarella", "Basil", "Balsamic Glaze"],
      price: 10.99,
    },
    {
      id: 11,
      label: "Beef Stir-Fry",
      category: "Dinner",
      image: image11,
      description: "Tender beef strips stir-fried with colorful vegetables.",
      ingredients: ["Beef Strips", "Vegetables", "Soy Sauce"],
      price: 13.99,
    },
    {
      id: 12,
      label: "Fruit Parfait",
      category: "Dinner",
      image: image12,
      description: "Layers of yogurt, granola, and fresh fruit.",
      ingredients: ["Yogurt", "Granola", "Berries", "Honey"],
      price: 9.99,
    },
  ];

  const filterItem = (category) => {
    const updatedList = recipes.filter((curElem) => {
      return curElem.category === category;
    });
    setRecipeData(updatedList);
  };
  const [recipeData, setRecipeData] = useState(recipes);

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
              // Change the color for the hover state
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
              // Change the color for the hover state
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
              // Change the color for the hover state
            },
          }}
        >
          Dinner
        </Button>
        <Button
          className="nav-btn"
          variant="outlined"
          onClick={() => setRecipeData(recipes)}
          sx={{
            bgcolor: cyan[100],
            color: cyan[900],
            border: "none",
            "&:hover": {
              bgcolor: cyan[900],
              color: cyan[200],
              border: "none",
              // Change the color for the hover state
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
