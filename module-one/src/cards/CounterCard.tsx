import { Counter } from '@home/lib';
import { useCallback, useState } from 'react';
import { Card, CardBody, CardText, Button, CardHeader } from 'reactstrap';

export const CounterCard = () => {
  const [value, setValue] = useState(Counter.getCount());
  const increment = useCallback(() => {
    Counter.increment();
    setValue(Counter.getCount());
  }, [setValue]);

  return (
    <>
      <Card>
        <CardHeader className="fw-bold">Демо работы utility модуля</CardHeader>
        <CardBody>
          <CardText>
            in-browser модули не попадают в бандл никакого фронтенда. Поэтому в{' '}
            <b>webpack.config.js</b> все такие модули (как и внешние
            зависимости) должны быть отмечены в секции external.
          </CardText>
          <CardText>
            Состояние in-browser модулей хранится независимо от всех
            микрофронтендов (при условии, что не произойдет полной перезагрузки
            страницы).
            <br />
            <b>
              Не следует этим злоупотреблять. Микрофронтенды должны быть
              максимально независимы друг от друга.
            </b>
            <br />
            Нормальная практика - вынести в отдельный модуль логин, работу с
            данными пользователя и его разрешениями (также известные как feature
            toggles, skills и так далее). Здесь мы демонстируем работу модуля на
            примере счетчика.
          </CardText>
          <Button color="success" onClick={increment}>
            Увеличить счетчик
          </Button>
          <CardText>Значение счетчика "общего" модуля: {value}</CardText>
          <CardText>
            Если переход осуществляется без перезагрузки всей страницы
            (например, с помощью метода navigateToUrl библиотеки single-spa), то
            и состояние такого модуля сохранится.
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};
