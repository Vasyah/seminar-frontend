import { Collapse, Row, Typography } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { PlusOutlined } from '@ant-design/icons';

export interface ITips {}

const { Panel } = Collapse;

const List = styled.ul`
  padding-left: 1rem;
  list-style: initial;
  font-size: 18px;
  font-weight: normal;
  //color: #000;
`;

const NumberList = styled.ol`
  padding-left: 1rem;
  list-style: number;
  font-size: 18px;
  //color: #000;
`;

const TipsContainer = styled.div`
  text-align: center;
  //max-width: ${breakpoints.sm};
  //margin: 0 auto;
`;

export const Tips: FC<ITips> = (props: ITips) => {
  return (
    <Row>
      <Collapse
        expandIcon={() => <PlusOutlined style={{ fontSize: '36px' }} />}
        expandIconPosition={'end'}
        ghost
        style={{
          margin: '0 auto',
          width: breakpoints.sm,
          fontSize: '24px',
          // textAlign: 'left',
          fontWeight: 'bold',
          alignItems: 'center',
          // backgroundColor: '#fff',
        }}
      >
        <Panel
          header="Список необходимых вещей"
          key="1"
          style={{ alignItems: 'center' }}
        >
          <List>
            <li>
              Паспорт + медицинский полис <b>(обязательно!)</b>
            </li>
            <li>Индивидуальные медицинские</li>
            <li>
              препараты (обезболивающие, жаропонижающие, простудные, от
              аллергии, антибиотики, мазь от ушибов, от укачивания, от
              отравления, пластырь, индивидуальные средства для хронических
              заболеваний)
            </li>
            <li>
              Средства личной гигиены Зарядка для телефона + портативное
              зарядное устройство
            </li>
            <li>Термокружка и многоразовая бутылка для питьевой воды</li>
            <li>Средства для дезинфекции рук</li>
            <li>Фрукты для питания тела необходимыми витаминами</li>
            <li>
              Дополнительное питание на «перекусить» (печенье, конфеты,
              шоколадки и прочие радости)
            </li>
            <li>Удобная одежда и обувь</li>
            <li>Утюг, отпариватель, фен (по желанию)</li>
            <li>
              То, что гипотетически может пригодиться: зонт, книжку почитать в
              дороге, фильмы чтобы посмотреть в пути, пакеты для продуктов,
              иголка с ниткой
            </li>
            <li>
              За сутки до отъезда обязательно посмотрите погоду и скорректируйте
              гардероб
            </li>
            <li>
              Перед выходом из дома: выключить все приборы, проверить краны и
              выключить воду, полить цветы, выкинуть из холодильника
              скоропортящиеся продукты, закрыть окна, проверить документы и
              наличные деньги в дорогу.
            </li>
          </List>
        </Panel>
        <Panel header="Как добраться на общественном транспорте" key="2">
          <Typography.Paragraph>
            Добраться до базы отдыха из Москвы можно на электричке от нескольких
            станций метро, рядом с которыми располагаются станции отправления
            электропоездов
          </Typography.Paragraph>
          <NumberList>
            <li>
              Ст. м. «Курская» — станция «Москва-Курская» (Курский вокзал);
            </li>
            <li>
              Ст. м. «Комсомольская» — станция «Каланчевская» (рядом площадь
              трех вокзалов: Ленинградский, Ярославский и Казанский);
            </li>
            <li>
              Ст. м. «Рижская» — станция «Москва-Рижская» (рядом с Рижским
              вокзалом);
            </li>
            <li>
              Ст. м. «Дмитровская» — станция «Дмитровская»; Ст. м. «Войковская»
              — станция «Ленинградская»; Ст. м. «Тушинская» — станция «Тушино».
            </li>
            <Typography.Title level={3}>
              Станция прибытия — «Румянцево»
            </Typography.Title>
          </NumberList>
        </Panel>
        <Panel header="Время заезда и отъезда" key="3">
          <Typography.Paragraph>
            Заезд на базу возможен с 28 октября 2022г. с 11:00
          </Typography.Paragraph>
          <Typography.Paragraph>
            Отъезд с базы возможен 30 октября 2022г. с 16:00
          </Typography.Paragraph>
        </Panel>
      </Collapse>
    </Row>
  );
};
