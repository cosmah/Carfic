import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import garage from "../../../assets/image/garage.jpg";
import lubs from "../../../assets/image/lubs.jpg";
import spares from "../../../assets/image/auto03pix.jpg";
import { styled } from '@mui/system'; // Import styled from @mui/system
import './card.css'; // Import the CSS file

// Create a styled Button component
const LargeButton = styled(Button)({
 padding: '10px 20px', // Adjust padding to make the button larger
 fontSize: '1rem', // Adjust font size as needed
});

const MediaCard = ({ image, title, description }) => (
 <Card className="card">
    <CardMedia
      className="cardMedia"
      component="img"
      height="200"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <LargeButton size="large">Learn More</LargeButton>
    </CardActions>
 </Card>
);

export default function Cards() {
 return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard
          image={garage}
          title="Garage"
          description="A place where cars are repaired and maintained."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard
          image={lubs}
          title="Lubs"
          description="Lubricants and oils for your vehicle."
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <MediaCard
          image={spares}
          title="Spares"
          description="Various parts and accessories for your car."
        />
      </Grid>
    </Grid>
 );
}
