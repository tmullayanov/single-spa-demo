import { Container, Row, Col, Button } from 'reactstrap';
import { CounterCard } from './cards/CounterCard';
import { NavCard } from './cards/NavCard';
import { ExtFrontendCard } from './cards/ExtFrontendCard';

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
