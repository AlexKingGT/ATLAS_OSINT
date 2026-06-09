import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/search/query', {
        query: query,
        limit: 50
      });
      setResults(response.data.results || []);
    } catch (error) {
      console.error('Search error:', error);
    }
    setLoading(false);
  };

  return (
    <Container className="search-container">
      <h2>Advanced Search</h2>

      <Card className="search-panel">
        <Card.Body>
          <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3">
              <Form.Label>Search Query</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter search terms..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {results.length > 0 && (
        <div className="search-results mt-4">
          <h5>Results ({results.length})</h5>
          <Row>
            {results.map((result, idx) => (
              <Col md={12} key={idx} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.data?.description}</Card.Text>
                    <small className="text-muted">Source: {result.source}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {!loading && query && results.length === 0 && (
        <div className="no-results mt-4">
          <p>No results found for: <strong>{query}</strong></p>
        </div>
      )}
    </Container>
  );
};

export default Search;
