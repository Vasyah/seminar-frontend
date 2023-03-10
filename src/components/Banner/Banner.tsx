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
  min-height: 500px;
  flex-direction: column;

  @media (max-width: ${breakpoints.md}) {
    min-height: 350px;
    align-items: center;
    padding: 1rem;
  }

  @media (min-width: ${breakpoints.md}) {
    min-height: 500px;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
    min-height: 450px;
  }

  @media (min-width: ${breakpoints.preXl}) {
    margin: 0 auto;
    height: 500px;
  }

  @media (min-width: 1700px) {
    height: 650px;
  }
`;

const TimerContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff !important;
  padding: 0.35rem;
  box-shadow: inset 0 0 100px rgba(98, 96, 96, 0.6);
  border-radius: 12px;
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
