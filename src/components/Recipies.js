import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Grid,
  Button,
  Box,
  CardMedia,
} from "@mui/material";
import { GeneralContext } from "../App";

const Recipies = () => {
  const styleHeader = {
    height: 50,
  };
  const { allRecipes, setAllRecipes } = useContext(GeneralContext);
  return (
    <>
      <h1>Recipies</h1>
      <Grid container spacing={2} style={styleHeader}>
        {allRecipes.map((recipe) => (
          <Grid item sx={6} md={3}>
            <Card>
              <CardHeader title={recipe.recipe.label} />
              <Divider />
              <CardContent>
                <CardMedia
                  component="img"
                  image={recipe.recipe.image}
                  height="200"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Recipies;
