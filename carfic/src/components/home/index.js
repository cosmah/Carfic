import React from 'react';
import Header from '../header';
import Index from '../footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import garage from '../../assets/image/garage.jpg';
import lubs from '../../assets/image/lubs.jpg';
import spares from '../../assets/image/auto03pix.jpg';

const Home = () => {
 return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-around">
          {/* Column 1 */}
          <div className="col-12 col-md-4">
            <Card className="card">
              <Card.Img variant="top" src={garage} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Card Title 1</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="card-button">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-4">
            <Card className="card">
            <Card.Img variant="top" src={lubs} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Card Title 2</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="card-button">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <Card className="card">
            <Card.Img variant="top" src={spares} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">Card Title 3</Card.Title>
                <Card.Text className="card-text">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className="card-button">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Index />
    </div>
 );
};

export default Home;
