import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import banner from '../../images/banner/img.png';

export interface IBanner {}

const BannerContainer = styled.header`
  width: 100%;
  text-align: center;
  background: center center/contain no-repeat url(${banner});
  //background: -webkit-linear-gradient(
  //  90deg,
  //  #0f1530,
  //  #2fbded,
  //  #d1ebf8
  //); /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(
  //  90deg,
  //  #0f1530,
  //  #2fbded,
  //  #d1ebf8
  //); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 100% 500px;
  min-height: 500px;
  //max-width: 1440px;
  //padding-top: 150px;
  padding-right: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

export const Banner: FC<IBanner> = (props: IBanner) => {
  return (
    <BannerContainer>
      <Typography.Title level={1} style={{ color: '#fff' }}>
        Мир человека в любви Господа
      </Typography.Title>
      <Typography.Title level={3} style={{ color: '#fff' }}>
        21-23 апреля 2023 года
      </Typography.Title>
    </BannerContainer>
  );
};
