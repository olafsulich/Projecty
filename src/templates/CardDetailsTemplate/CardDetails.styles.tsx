import styled from 'styled-components';
import { ReactComponent as Morphing } from '../../assets/morphing.svg';
import { media } from '../../utils/media';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fbfbfb;
  padding-top: 5rem;
  overflow-x: hidden;

  ${media.sm`
    padding-top: 10rem;
    position: relative;
  `}
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`;

const Morph = styled(Morphing)`
  width: 10rem;
  height: 10rem;
  position: absolute;
  top: 0;
  left: 0;

  ${media.sm`
    display: none;
  `}
`;

const Card = styled.article`
  width: 100%;
  max-width: 70rem;
  border-radius: 7px;
  box-shadow: 3px 6px 10px ${({ theme }) => theme.cardShadow};
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  flex-direction: column;
  padding: 4rem 3rem;
`;

export { Wrapper, Container, Morph, Card };
