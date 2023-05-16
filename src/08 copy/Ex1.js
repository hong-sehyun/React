import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

const Ex1 = () => {
  return (
    <Container>
      <Row>

        <Col>  <Form.Control size="lg" type="text" placeholder="Large text" />
          <br /></Col>
        <Col><Button variant="primary">Primary</Button>{' '}</Col>
      </Row>
    </Container>
  );

}

export default Ex1