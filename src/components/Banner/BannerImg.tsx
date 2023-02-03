import React, { FC } from 'react';
import banner from './banner.jpg';
import styled from 'styled-components';

export interface IBanner {}

const Img = styled.img`
  display: block;
  max-width: 100%;
`;

export const BannerImg: FC<IBanner> = (props: IBanner) => {
  return (
    <div style={{ width: '100%' }}>
      <Img src={banner} alt="" />
    </div>
  );
};
