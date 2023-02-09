import React, { FC } from 'react';
import { ConfigProvider, Divider } from 'antd';
import { Banner } from '../Banner/Banner';
import { Tips } from '../Tips/Tips';
import { Map } from '../Map/Map';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { OurTeam } from '../OurTeam/OurTeam';
import { OurTeachers } from '../OurTeachers/OutTeachers';
import { RegistrationFormContainer } from '../../modules/RegistrationForm/components/RegistrationFormContainer';
import { useWindowSize } from '../../hooks/useSize';

export interface ILayout {}

const BodyContainer = styled.div`
  // width: ${breakpoints.lg};
  margin: 0 auto;
`;

export const Container: FC<ILayout> = (props: ILayout) => {
  const size = useWindowSize();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Roboto',Arial,sans-serif;",
          fontSize: 14,
          borderRadius: 4,
          controlHeight: 36,
        },
        components: {
          Checkbox: {
            controlHeight: 40,
          },
        },
      }}
    >
      <div>
        <Banner />
        <BodyContainer>
          <RegistrationFormContainer />
          <Tips />
          <Divider />
          <Map />
          <OurTeam />
          <OurTeachers />
        </BodyContainer>
      </div>
    </ConfigProvider>
  );
};
