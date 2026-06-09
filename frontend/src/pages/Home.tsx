import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDatabase, FaSearch, FaChartBar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="mb-5">
        <Col>
          <div className="hero">
            <h1>Welcome to ATLAS_OSINT</h1>
            <p>Advanced Intelligence Platform for Data Collection, Search & Analysis</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <FaDatabase className="feature-icon" />
              <Card.Title>Data Collection</Card.Title>
              <Card.Text>
                Collect data from 17+ sources including social media, domains, security databases
              </Card.Text>
              <Link to="/collectors">
                <Button className="btn-explore">Explore Collectors</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <FaSearch className="feature-icon" />
              <Card.Title>Advanced Search</Card.Title>
              <Card.Text>
                Search across all collected data with advanced filters and query capabilities
              </Card.Text>
              <Link to="/search">
                <Button className="btn-explore">Open Search</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <FaChartBar className="feature-icon" />
              <Card.Title>Data Analysis</Card.Title>
              <Card.Text>
                Analyze data, discover relationships, and visualize connections
              </Card.Text>
              <Link to="/analyzer">
                <Button className="btn-explore">Start Analysis</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="stats-card">
            <Card.Body>
              <h5>Platform Statistics</h5>
              <Row>
                <Col md={3} className="stat">
                  <div className="stat-value">17+</div>
                  <div className="stat-label">Data Sources</div>
                </Col>
                <Col md={3} className="stat">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Records Indexed</div>
                </Col>
                <Col md={3} className="stat">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Entities Found</div>
                </Col>
                <Col md={3} className="stat">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Relationships</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
