import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Tab, Tabs } from 'react-bootstrap';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Analyzer.css';

const Analyzer = () => {
  const [activeTab, setActiveTab] = useState('statistics');

  const sampleData = [
    { name: 'Twitter', value: 150 },
    { name: 'LinkedIn', value: 120 },
    { name: 'GitHub', value: 90 },
    { name: 'WHOIS', value: 200 },
    { name: 'Shodan', value: 110 }
  ];

  const timelineData = [
    { date: '2024-01-01', records: 10 },
    { date: '2024-01-02', records: 25 },
    { date: '2024-01-03', records: 35 },
    { date: '2024-01-04', records: 50 },
    { date: '2024-01-05', records: 65 }
  ];

  return (
    <Container className="analyzer-container">
      <h2>Data Analysis</h2>

      <Tabs
        id="analyzer-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k as string)}
        className="mb-3"
      >
        <Tab eventKey="statistics" title="Statistics">
          <Row>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Records by Source</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sampleData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#00d4ff" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Collection Timeline</Card.Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="date" stroke="#aaa" />
                      <YAxis stroke="#aaa" />
                      <Tooltip />
                      <Line type="monotone" dataKey="records" stroke="#00d4ff" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="relationships" title="Relationships">
          <Card>
            <Card.Body>
              <h5>Entity Relationships</h5>
              <p>Network analysis and relationship mapping coming soon...</p>
              <div className="placeholder-graph">
                <p>📊 Relationship Graph Visualization</p>
              </div>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="export" title="Export">
          <Card>
            <Card.Body>
              <h5>Export Analysis Results</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Select Format</Form.Label>
                  <Form.Select>
                    <option>JSON</option>
                    <option>CSV</option>
                    <option>PDF</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary">Export</Button>
              </Form>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Analyzer;
