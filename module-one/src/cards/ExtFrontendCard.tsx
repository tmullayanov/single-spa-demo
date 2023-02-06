import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Input,
} from 'reactstrap';
import { ParcelConfig } from 'single-spa';

export const ExtFrontendCard = () => {
  const [customProp, setCustomProp] = useState<string>('hello');

  return (
    <Card color="light">
      <CardHeader className="fw-bold">Загрузка внешнего spa</CardHeader>
      <CardBody>
        <CardText>{LinksText}</CardText>
        <CardText>
          Начальное значение этого input-а будет передано в микрофронтенд.
          <br />
          Дальнейшие изменения никак не отразятся на микрофронтенде - значение в
          него будет передано один раз на старте.
        </CardText>
        <div>
          <Input
            value={customProp}
            onChange={(v) => setCustomProp(v.target.value)}
          />
          <p>Значение: {customProp}</p>
        </div>
        <hr />
        <Parcel
          config={(() => System.import('@home/nested')) as ParcelConfig<{}>}
          wrapWith="div"
          myCustomProp={customProp}
        />
      </CardBody>
    </Card>
  );
};

const LinksText = (
  <>
    Для простоты используем Parcel из пакета 'single-spa-react/parcel'.
    Подробнее здесь:{' '}
    <a
      href="https://single-spa.js.org/docs/ecosystem-react/#examples"
      target="_blank"
    >
      Документация по Parcel
    </a>
    <br />
    Альтернатива - встраивание через Parcel API, описанное здесь (обратите
    внимание на mountParcel):{' '}
    <a href="https://single-spa.js.org/docs/parcels-overview" target="_blank">
      Parcel Overview
    </a>
    <br />
    Для импорта этого parcel мы должны указать его как внешний модуль (external)
    в нашем <b>webpack.config.js</b>
    <br />
    Документация по externals:{' '}
    <a href="https://webpack.js.org/configuration/externals/" target="_blank">
      Оф.сайт webpack
    </a>
    <br />
    Пример работы с externals - в папке каждого модуля в репозитории
  </>
);
