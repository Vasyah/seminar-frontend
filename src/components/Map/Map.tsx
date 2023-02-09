import React, { FC } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks/useSize';

export interface IMap {}

const MapContainer = styled.div`
  margin-top: 1rem;
`;

export const Map: FC<IMap> = (props: IMap) => {
  const size = useWindowSize();

  return (
    <Row align={'middle'} justify={'center'} className={'mt-3'}>
      <Col span={12} xs={24} sm={24} md={12}>
        <div style={{ padding: '0 10px' }}>
          <Typography.Title level={size > 2 ? 2 : 4} className={'ta-center'}>
            База отдыха "Зелёный остров"
          </Typography.Title>
          <Typography.Title level={size > 2 ? 3 : 5} className={'ta-center'}>
            Россия, Московская область, городской округ Истра, село Горки
          </Typography.Title>
        </div>
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
