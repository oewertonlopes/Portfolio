import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardGiftcard } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Box } from "@mui/system";

export default function PokemonCard({ name, id, image, imageBack, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ddd" }}>
      
      <CardContent sx={{ display: "block" }}>
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img src={image} height="200px" alt="Pokemon_Image" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={imageBack} height="200px" alt="Pokemon_Image" />
          </Carousel.Item>
        </Carousel>
      </CardContent>
      <CardContent
        sx={{ backgroundColor: "#eee", margin: "10px", borderRadius: "4px" }}
      >
        <Typography gutterBottom fontSize="1rem">
          # {id}
        </Typography>
        <Typography
          gutterBottom
          fontSize="2rem"
          fontWeight="bolder"
          textTransform="capitalize"
          textAlign="center"
          component="div"
          cursor="pointer"
        >
          {name}
        </Typography>
        <Typography
          textAlign="center"
          fontSize=".8rem"
          textTransform="capitalize"
        >
          {typeHandler()}
        </Typography>
      </CardContent>
    </Card>
  );
}
