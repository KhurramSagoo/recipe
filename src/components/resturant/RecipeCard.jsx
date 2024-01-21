import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, cyan, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(recipe);
  const [expanded, setExpanded] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 300,
    bgcolor: "background.paper",
    border: "1.5px solid #000",
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 260 }}
        style={{
          padding: "10px",
          margin: "10px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: cyan[500],
              }}
              aria-label="recipe"
            >
              {/* {recipe.category.charAt(0)} */}
              {recipe.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipe.category}
          // subheader={recipe.label}
        />
        <CardMedia
          component="img"
          style={{
            width: "16rem",
            height: "9rem",
            objectFit: "cover",
          }}
          image={recipe.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            style={{
              fontWeight: "500",
            }}
          >
            {recipe.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recipe.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price: {""}</strong>
            {recipe.price}
            {""} $
          </Typography>
        </CardContent>

        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button variant="outline" onClick={handleOpen} style={{}}>
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              More info
              <InfoIcon
                style={{
                  color: "gray",
                }}
              />{" "}
            </Typography>
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img
                src={recipe.image}
                alt=""
                style={{
                  width: "16rem",
                  height: "9rem",
                  objectFit: "cover",
                }}
              />
              <Typography paragraph>Ingredients:</Typography>
              <Typography paragraph key={recipe.id}>
                {recipe.ingredients.map((element, id) => (
                  <ul key={id}>
                    <li>{element}</li>
                  </ul>
                ))}
              </Typography>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi quam veritatis eum officia eveniet. Eligendi officiis
                officia eveniet nam natus!
              </Typography>
              <Button
                variant="outlined"
                onClick={handleClose}
                style={{
                  color: "grey",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  marginLeft: "auto",
                }}
              >
                Close
                <CloseIcon />
              </Button>
            </Box>
          </Modal>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
        </Collapse>
      </Card>
    </>
  );
}
