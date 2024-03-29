import React from 'react';
import Header from '../header';
import Index from '../footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import garage from '../../assets/image/garage.jpg';
import lubs from '../../assets/image/lubs.jpg';
import spares from '../../assets/image/auto03pix.jpg';

const Home = () => {
 return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React component for the home page.</p>
      <div className="container">
        <div className="row justify-content-around">
          {/* Column 1 */}
          <div className="col-12 col-md-4">
            <Card className="card">
              <Card.Img variant="top" src={garage} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Auto Garage</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/services">
                 <Button variant="primary" className="card-button">Go to Services</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4">
            <Card className="card">
            <Card.Img variant="top" src={lubs} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Lubricants</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/spares">
                 <Button variant="primary" className="card-button">Go to Services</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <Card className="card">
            <Card.Img variant="top" src={spares} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Spare Parts</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Link to="/services">
                 <Button variant="primary" className="card-button">Go to Services</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Our Company?</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Quality Service</h4>
            <p>We provide top-notch service to ensure your vehicle is in the best condition.</p>
            <h4>Expertise</h4>
            <p>Our team of experts is dedicated to providing you with the best solutions for your vehicle.</p>
            <h4>Customer Satisfaction</h4>
            <p>We prioritize your satisfaction and strive to exceed your expectations.</p>
          </div>
          {/* <div className="col-md-6">
            <img src={companyImage} alt="Company" className="img-fluid" />
          </div> */}
        </div>
      </div>
      <Index />
    </div>
 );
};

export default Home;
