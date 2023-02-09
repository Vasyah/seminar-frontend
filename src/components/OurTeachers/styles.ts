import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const OurTeamContainer = styled.div`
  padding: 0 2rem;
  max-width: ${breakpoints.lg};
  margin: 2rem auto 0;
  text-align: center;
`;

export const ImageContainer = styled.div<{ imgPath: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-transition: opacity 0.1s linear;
  transition: opacity 0.1s linear;
  background-image: url(${(props) => props.imgPath});
`;
