import { useCallback } from 'react';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import { navigateToUrl } from 'single-spa';

export const NavCard = () => {
  const goToForeignModule = useCallback(() => {
    navigateToUrl('/two');
  }, []);

  return (
    <Card>
      <CardHeader className="fw-bold">Загружен модуль 1!</CardHeader>
      <CardBody>
        <Button color="success" onClick={goToForeignModule}>
          Перейти в модуль 2
        </Button>
      </CardBody>
    </Card>
  );
};
