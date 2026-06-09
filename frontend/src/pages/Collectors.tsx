import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Collectors.css';

interface Collector {
  name: string;
  category: string;
  status: string;
}

const Collectors = () => {
  const [collectors, setCollectors] = useState<Collector[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCollector, setSelectedCollector] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    fetchCollectors();
  }, []);

  const fetchCollectors = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/collectors/available');
      setCollectors(response.data.collectors);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching collectors:', error);
      setLoading(false);
    }
  };

  const handleCollect = async () => {
    if (!selectedCollector || !query) {
      alert('Please select a collector and enter a query');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/collectors/collect', {
        source: selectedCollector,
        query: query
      });
      alert(`Collection started: ${response.data.task_id}`);
    } catch (error) {
      console.error('Error starting collection:', error);
      alert('Error starting collection');
    }
  };

  const categoryColors: { [key: string]: string } = {
    'social_media': 'primary',
    'people': 'info',
    'domains': 'warning',
    'intelligence': 'danger',
    'security': 'dark',
    'geo': 'success'
  };

  if (loading) {
    return (
      <Container className="collectors-container">
        <div className="text-center mt-5">
          <Spinner animation="border" variant="info" />
        </div>
      </Container>
    );
  }

  return (
    <Container className="collectors-container">
      <h2>Data Collectors</h2>
      
      <Card className="collection-panel mb-4">
        <Card.Body>
          <h5>Start Collection</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Collector</Form.Label>
              <Form.Select 
                value={selectedCollector} 
                onChange={(e) => setSelectedCollector(e.target.value)}
              >
                <option value="">-- Choose a collector --</option>
                {collectors.map(collector => (
                  <option key={collector.name} value={collector.name}>
                    {collector.name} ({collector.category})
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your search query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleCollect}>
              Start Collection
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>Available Collectors</h5>
      <Row>
        {collectors.map(collector => (
          <Col md={6} lg={4} key={collector.name} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{collector.name}</Card.Title>
                <Badge bg={categoryColors[collector.category] || 'secondary'}>
                  {collector.category}
                </Badge>
                <div className="mt-3">
                  Status: <Badge bg={collector.status === 'active' ? 'success' : 'warning'}>
                    {collector.status}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collectors;
