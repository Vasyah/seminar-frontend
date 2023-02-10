import React, { FC } from 'react';
import styled from 'styled-components';
import banner from '../../images/banner/img.jpeg';
import { breakpoints } from '../../utils/breakpoints';
import { Timer } from '../Timer/Timer';

export interface IBanner {}

const BannerContainer = styled.header`
  position: relative;
  width: 100%;
  text-align: center;
  background: center center/cover no-repeat url(${banner});
  padding-right: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${breakpoints.md}) {
    min-height: 350px;
    align-items: center;
    padding: 1rem;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    min-height: 500px;
  }
  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    min-height: 700px;
  }
  @media (min-width: ${breakpoints.xl}) {
    min-height: 700px;
  }
`;

const TimerContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff !important;
`;

export const Banner: FC<IBanner> = (props: IBanner) => {
  return (
    <BannerContainer>
      <TimerContainer>
        <Timer />
      </TimerContainer>
    </BannerContainer>
  );
};
