import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import garage from "../../../assets/image/garage.jpg";
import lubs from "../../../assets/image/lubs.jpg";
import spares from "../../../assets/image/auto03pix.jpg";
import "./card.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="row justify-content-around p-0 m-0">
        {/* Column 1 */}
        <div className="col-12 col-md-4 mb-4">
          <Card className="card">
            <Card.Img variant="top" src={garage} className="card-img-top" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Auto Garage</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/services">
                <Button variant="primary" className="card-button">
                  Auto Services
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-4 mb-4">
          <Card className="card">
            <Card.Img variant="top" src={lubs} className="card-img-top" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Lubricants</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/spares">
                <Button variant="primary" className="card-button">
                  Lubricants
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-4 mb-4">
          <Card className="card">
            <Card.Img variant="top" src={spares} className="card-img-top" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Spare Parts</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/services">
                <Button variant="primary" className="card-button">
                  Spare Parts
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
