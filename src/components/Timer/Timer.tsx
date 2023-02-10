import React, { FC } from 'react';
import Countdown from 'react-countdown';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export interface ITime {}

const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

const StyledTimeTitle = styled.div`
  font-size: 48px;

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 24px;
  }
`;
export const Timer: FC<ITime> = (props: ITime) => {
  const date = new Date(2023, 2, 10).getTime();

  return (
    <Countdown
      date={date}
      intervalDelay={0}
      precision={3}
      renderer={(props) => (
        <>
          <Row wrap={false}>
            <Col>
              <StyledTime>
                <StyledTimeTitle>{props.formatted.days}</StyledTimeTitle>
                <div>дней</div>
              </StyledTime>
            </Col>
            <Col>
              <StyledTimeTitle>&nbsp;:&nbsp;</StyledTimeTitle>
            </Col>
            <Col>
              <StyledTime>
                <StyledTimeTitle>{props.formatted.hours}</StyledTimeTitle>
                <div>часов</div>
              </StyledTime>
            </Col>
            <Col>
              <StyledTimeTitle>&nbsp;:&nbsp;</StyledTimeTitle>
            </Col>
            <Col>
              <StyledTime>
                <StyledTimeTitle>{props.formatted.minutes}</StyledTimeTitle>
                <div>минут</div>
              </StyledTime>
            </Col>
            <Col>
              <StyledTimeTitle>&nbsp;:&nbsp;</StyledTimeTitle>
            </Col>
            <Col>
              <StyledTime>
                <StyledTimeTitle>{props.formatted.seconds}</StyledTimeTitle>
                <div>секунд</div>
              </StyledTime>
            </Col>
          </Row>
        </>
      )}
    />
  );
};
