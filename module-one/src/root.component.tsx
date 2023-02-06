import React, { useCallback } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Row } from 'reactstrap';
import { CounterCard } from './cards/CounterCard';
import { ExtFrontendCard } from './cards/ExtFrontendCard';
import { NavCard } from './cards/NavCard';

export default function Root(props) {
  return (
    <Container className="main">
      <Row className="py-1">
        <Col>
          <NavCard />
        </Col>
      </Row>
      <Row className="py-1">
        <Col>
          <CounterCard />
        </Col>
      </Row>
      <Row className="py-1">
        <Col>
          <ExtFrontendCard />
        </Col>
      </Row>
    </Container>
  );
}
