import { useCallback, useState } from 'react';
import { Button, Col, Container, Input, Row } from 'reactstrap';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [setCounter, counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [setCounter, counter]);

  return (
    <Container>
      <Row>
        <Col
          xs={{
            size: 1,
            offset: 4,
          }}
        >
          <Button onClick={decrement}>-</Button>
        </Col>
        <Col xs="1">
          <Input
            value={counter}
            onChange={(e) => setCounter(parseInt(e.target.value, 10) || 0)}
          />
        </Col>
        <Col xs="1">
          <Button onClick={increment}>+</Button>
        </Col>
      </Row>
    </Container>
  );
};
