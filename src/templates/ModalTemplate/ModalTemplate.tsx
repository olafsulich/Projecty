import React from 'react';
import { Modal, Wrapper, ButtonClose, HeadingWrapper, ModalHeading } from './ModalTemplate.styles';
import { Props } from './ModalTemplate.types';

const ModalTemplate: React.FC<Props> = ({ toggleVisibility, children, title, modalTheme, isVisible }) => {
  return (
    <Modal modalTheme={modalTheme} aria-hidden={!isVisible} aria-expanded={isVisible} tabIndex={isVisible ? 0 : -1}>
      <Wrapper>
        <ButtonClose role="img" aria-label="close modal" onClick={() => toggleVisibility()} />
        <HeadingWrapper>
          <ModalHeading>{title}</ModalHeading>
        </HeadingWrapper>
        {children}
      </Wrapper>
    </Modal>
  );
};

export default ModalTemplate;
