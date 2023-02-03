import React, { FC } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export interface IMap {}

const MapContainer = styled.div`
  margin-top: 1rem;
`;

export const Map: FC<IMap> = (props: IMap) => {
  return (
    <Row align={'middle'} justify={'center'} className={'mt-3'}>
      <Col span={12} xs={24} sm={24} md={12}>
        <Typography.Title level={1} className={'ta-center'}>
          База отдыха "Зелёный остров"
        </Typography.Title>
        <Typography.Title level={3} className={'ta-center'}>
          Россия, Московская область, городской округ Истра, село Горки
        </Typography.Title>
      </Col>
      <Col span={12} xs={24} sm={24} md={12}>
        <MapContainer>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa07d6e6527b24feb1ac04f45753997da7c9c6177bba42fc897fad34e8a3da556&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          />
        </MapContainer>
      </Col>
    </Row>
  );
};
