import Parcel from 'single-spa-react/parcel';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { ParcelConfig } from 'single-spa';

export const ExtFrontendCard = () => {
  return (
    <Card>
      <CardHeader className="fw-bold">Загрузка внешнего spa</CardHeader>
      <CardBody>
        <CardText>Сделана идентично загрузке в модуле 1.</CardText>
        <hr />
        <Parcel
          config={(() => System.import('@home/nested')) as ParcelConfig<{}>}
          wrapWith="div"
        />
      </CardBody>
    </Card>
  );
};
