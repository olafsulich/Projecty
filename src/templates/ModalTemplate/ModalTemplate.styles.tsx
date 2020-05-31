import styled from 'styled-components';
import { media } from '../../utils/media';
import Heading from '../../components/atoms/Heading/Heading.styles';

const Modal = styled.div<{ modalTheme?: string }>`
  position: absolute;
  background-color: #fff;
  z-index: 101;
  height: 100%;
  width: 100%;
  border: 6px solid ${({ modalTheme }) => (modalTheme === 'green' ? '#eafcee' : '#fff5da ')};
  border-radius: 10px;
  top: 0;
  left: 0;

  ${media.s`
    height: 68rem;
    width: 54rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5rem 4rem;
`;

const ButtonClose = styled.button`
  width: 3rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  padding: 2rem;
  position: fixed;
  top: 5%;
  right: 5%;
  background-color: transparent;
  border-radius: 7px;
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.greenSecondary};
  }
  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 2.2rem;
    background-color: black;
    height: 3px;
    margin-top: 3px;
    top: 16px;
  }

  ::before {
    transform: rotate(-45deg);
    right: 9px;
  }

  ::after {
    transform: rotate(45deg);
    left: 9px;
  }
`;

const HeadingWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4rem;
`;

const ModalHeading = styled(Heading)`
  font-size: 3rem;
`;

export { Modal, Wrapper, ButtonClose, HeadingWrapper, ModalHeading };
