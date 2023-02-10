import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import banner from '../../images/banner/img.png';
import { breakpoints } from '../../utils/breakpoints';
import { useWindowSize } from '../../hooks/useSize';
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

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md}) {
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

const StyledTitle = styled(Typography.Title)`
  font-family: '.SF NS', sans-serif;
  color: #2c174e !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
`;

const StyledDate = styled.div`
  font-family: '.SF NS', sans-serif;
  font-size: 16px;
  color: #2c174e !important;
  font-style: italic !important;
`;

const TimerContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #fff !important;
`;

export const Banner: FC<IBanner> = (props: IBanner) => {
  const size = useWindowSize();

  const getTitleSize = (size: number) => {
    if (size <= 3) {
      return 3;
    } else return 2;
  };
  const titleSize = getTitleSize(size);
  return (
    <BannerContainer>
      <StyledTitle level={titleSize}>СЕМИНАР</StyledTitle>
      <StyledTitle
        level={titleSize}
        style={{ borderBottom: '3px solid #2c174e' }}
      >
        Мир человека
      </StyledTitle>
      <StyledTitle
        level={titleSize}
        style={{ borderBottom: '3px solid #2c174e' }}
      >
        в любви Господа
      </StyledTitle>
      <br />
      <StyledDate className={size > 2 ? 'pt-3' : undefined}>
        21-23 апреля
      </StyledDate>
      <StyledDate>2023 года</StyledDate>
      <StyledDate>г. Москва</StyledDate>
      <TimerContainer>
        <Timer />
      </TimerContainer>
    </BannerContainer>
  );
};
