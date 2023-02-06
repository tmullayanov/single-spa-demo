import { useCallback } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import { navigateToUrl } from 'single-spa';

export const NavCard = () => {
  const goToMain = useCallback(() => {
    navigateToUrl('/');
  }, []);

  return (
    <Card>
      <CardHeader className="fw-bold">Загружен модуль 2</CardHeader>
      <CardBody>
        <Button color="success" onClick={goToMain}>
          На главную
        </Button>
      </CardBody>
    </Card>
  );
};
