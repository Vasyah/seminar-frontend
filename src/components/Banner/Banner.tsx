import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import banner from '../../images/banner/img.png';
import { breakpoints } from '../../utils/breakpoints';
import { useWindowSize } from '../../hooks/useSize';

export interface IBanner {}

const BannerContainer = styled.header`
  width: 100%;
  text-align: center;
  background: center center/cover no-repeat url(${banner});
  min-height: 500px;
  //max-width: 1440px;
  //padding-top: 150px;
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
  //background: linear-gradient(90deg, #732f77, #483c83, #2aa1ea);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  //display: inline-block;
  //padding: 0.3em 0.6em;
  //margin-bottom: 0 !important;
  //border: 3px solid transparent;
  color: #ffffff !important;
  text-shadow: 3px 3px #582c8f;
`;

export const Banner: FC<IBanner> = (props: IBanner) => {
  const size = useWindowSize();
  return (
    <BannerContainer>
      <StyledTitle level={size > 2 ? 2 : 4}>
        Мир человека в любви Господа
      </StyledTitle>
      <StyledTitle
        level={size > 2 ? 3 : 5}
        style={{ color: '#fff', marginBottom: '0!important' }}
      >
        21-23 апреля 2023 года
      </StyledTitle>
    </BannerContainer>
  );
};
