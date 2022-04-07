import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import { Button, Alert, Breadcrumb, Card, Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className="p-3">
          <Form className="mb-3">
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="jhondoe@email.com" />
                  <Form.Text className="text-muted fs-6 p-0">
                    We'll never share your email address!!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              className="mt-3 ps-5 pe-5"
              variant="secondary"
              type="submit"
            >
              Login
            </Button>
          </Form>

          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=200&" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>This is example of Card Text</Card.Text>
              <Button variant="primary">Test Button</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/5.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant="success">This is Alert</Alert>

          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
