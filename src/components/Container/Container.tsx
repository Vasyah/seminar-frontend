import React, { FC, useState } from 'react';
import { ConfigProvider, Divider, Spin } from 'antd';
import { Banner } from '../Banner/Banner';
import { Tips } from '../Tips/Tips';
import { Map } from '../Map/Map';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { OurTeam } from '../OurTeam/OurTeam';
import { RegistrationFormContainer } from '../../modules/RegistrationForm/components/RegistrationFormContainer';
import { useWindowSize } from '../../hooks/useSize';
import { OurTeachers } from '../OurTeachers/OutTeachers';
import { RegistrationConfirm } from '../RegistrationConfirm/RegistrationConfirm';

export interface ILayout {}

const BodyContainer = styled.div`
  // width: ${breakpoints.lg};
  margin: 0 auto;
`;

const LoadingContainer = styled.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container: FC<ILayout> = (props: ILayout) => {
  const size = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        {loading && (
          <LoadingContainer>
            <Spin />
          </LoadingContainer>
        )}
        <Banner />
        <BodyContainer>
          <RegistrationFormContainer
            onEmailSent={() => {
              setIsModalOpen(true);
            }}
            setLoading={(state: boolean) => setLoading(state)}
          />
          <Tips />
          <Divider />
          <Map />
          <Divider />
          <OurTeam />
          <Divider />
          <OurTeachers />
          <RegistrationConfirm
            isOpen={isModalOpen}
            onChange={(isOpen) => setIsModalOpen(isOpen)}
          />
        </BodyContainer>
      </div>
    </ConfigProvider>
  );
};
