import { useLayoutEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Container,
  Row,
} from 'reactstrap';
import { Counter } from './Counter';

export default function Root(props) {
  useLayoutEffect(() => {
    console.log('nested mount');
  }, []);
  const { myCustomProp }: { myCustomProp?: string } = props;

  return (
    <Container fluid>
      <p className="fw-bold">Смонтирован встроенный модуль!</p>
      <Card className="my-1">
        <CardHeader>Встроенный модуль</CardHeader>
        <CardBody>
          <CardText>
            Встроенный модуль точно так же, как и остальные, должен быть занесен
            в systemjs-importmap вашего root-config (см. файл
            root-config/src/index.ejs) со ссылками на всех контурах, включая
            промышленный.
          </CardText>
        </CardBody>
      </Card>
      <Card className="my-1">
        <CardBody>
          <CardText>
            В отличие от utility модуля, этот модуль способен работать и как
            самостоятельное приложение.
          </CardText>
        </CardBody>
      </Card>
      <Card className="my-1">
        <CardBody>
          <CardText>
            При рендере встроенного компонента можно передать custom prop.
            Впоследствии его изменение{' '}
            <b>НЕ ВЫЗЫВАЕТ РЕРЕНДЕРА МИКРОФРОНТЕНДА</b>
            <br />
            Значение, переданное из внешнего модуля:{' '}
            {myCustomProp ?? 'Ничего не передано'}
          </CardText>
        </CardBody>
      </Card>
      <Card className="my-1">
        <CardHeader>Внутреннее состояние встроенного микрофронтенда</CardHeader>
        <CardBody>
          <CardText>
            Попробуйте задать какое-то значение в нашем счетчике, а затем по
            кнопке перейдите в другой модуль. <br />
            Состояние не восстанавливается и не сохраняется при переходах.
            Микрофронтенд проходит через unmount, а потом монтируется снова.
          </CardText>
          <Counter />
        </CardBody>
      </Card>
    </Container>
  );
}
