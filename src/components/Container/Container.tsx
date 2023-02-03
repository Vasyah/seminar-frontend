import React, { FC, useEffect, useState } from 'react';
import { Divider, Layout } from 'antd';
import { Banner } from '../Banner/Banner';
import { Tips } from '../Tips/Tips';
import { Map } from '../Map/Map';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { OurTeam } from '../OurTeam/OurTeam';
import { OurTeaches } from '../OurTeachers/OutTeachers';
import { RegistrationFormContainer } from '../../modules/RegistrationForm/components/RegistrationFormContainer';
import axios from 'axios';

export interface ILayout {}

const BodyContainer = styled.div`
  // width: ${breakpoints.lg};
  margin: 0 auto;
`;

export const Container: FC<ILayout> = (props: ILayout) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((result) => setUsers(result.data));
  }, []);

  const Container = styled.div``;
  return (
    <Container>
      <Banner />
      <BodyContainer>
        <RegistrationFormContainer />
        <Tips />
        <Divider />
        <Map />
        <OurTeam />
        <OurTeaches />
      </BodyContainer>
    </Container>
  );
};
