import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../App.css'
function Footer() {
  return (
    <footer className="bg-dark text-light mt-4 ">
      <Container fluid>
        <Row className="py-3">
          <Col md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-grey">About Us</Link></li>
              <li><Link to="/" className="text-grey">Careers</Link></li>
              <li><Link to="/contact" className="text-grey">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-grey">FAQ</Link></li>
              <li><Link to="/" className="text-grey">Shipping</Link></li>
              <li><Link to="/" className="text-grey">Returns</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-grey"><FacebookIcon /> Facebook</Link></li>
              <li><Link to="#" className="text-grey"><TwitterIcon /> Twitter</Link></li>
              <li><Link to="#" className="text-grey"><InstagramIcon /> Instagram</Link></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Your E-commerce Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
