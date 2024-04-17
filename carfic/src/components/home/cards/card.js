import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import garage from "../../../assets/image/fic/10.jpeg";
import lubs from "../../../assets/image/lubs.jpg";
import spares from "../../../assets/image/auto03pix.jpg";
import { styled } from "@mui/system"; // Import styled from @mui/system
import "./card.css"; // Import the CSS file
import { Link } from 'react-router-dom';


// Create a styled Button component
const LargeButton = styled(Button)({
  padding: "10px 20px", // Adjust padding to make the button larger
  fontSize: "1rem", // Adjust font size as needed
});
const MediaCard = ({ image, title, description, path }) => (
  <Card className="card">
     <CardMedia
       className="cardMedia"
       component="img"
       height="200"
       image={image}
       alt={title}
     />
     <CardContent>
       <Typography 
         gutterBottom 
         variant="h5" 
         component="div"
         sx={{ fontSize: '2.8rem' }} // Increase the font size of the title
       >
         {title}
       </Typography>
       <Typography
         variant="body2"
         color="textSecondary"
         component="p"
         className="description"
         sx={{ fontSize: '1.6rem' }} // Increase the font size of the description
       >
         {description}
       </Typography>
     </CardContent>
     <CardActions>
       <Link to={path}>
         <LargeButton size="larger">Learn More</LargeButton>
       </Link>
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
           description="Our state-of-the-art garage is equipped with the latest diagnostic tools and repair equipment. We specialize in comprehensive car repairs, from routine maintenance to complex engine overhauls."
           path="/services"
         />
       </Grid>
       <Grid item xs={12} sm={6} md={4}>
         <MediaCard
           image={lubs}
           title="Lubs"
           description="At our service center, we offer a wide range of high-quality lubricants and oils for all your vehicle needs. From engine oils to transmission fluids, we carry a variety of products to ensure your engine runs smoothly and efficiently."
           path="/services"
         />
       </Grid>
       <Grid item xs={12} sm={6} md={4}>
         <MediaCard
           image={spares}
           title="Spares"
           description="We carry a vast selection of genuine spare parts and accessories for a wide range of vehicles. Whether you need a replacement part for your car's engine, transmission, or electrical system, we've got you covered."
           path="/spares"
         />
       </Grid>
     </Grid>
  );
 }
