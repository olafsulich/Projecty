import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import usePageWidth from '../../../hooks/usePageWidth';
import { Container, Wrapper, Button, Line } from './Navigation.styles';

const Navigation: React.FC = () => {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const handleChange = () => setVisibility(prevState => !prevState);
  const pageWidth = usePageWidth();
  return (
    <Container>
      {pageWidth < 950 && (
        <Wrapper>
          <Button name="open menu" aria-label="main menu" onClick={handleChange}>
            <Line />
            <Line />
            <Line />
          </Button>
        </Wrapper>
      )}
      <Menu isVisible={isVisible} handleChange={handleChange} />
    </Container>
  );
};

export default Navigation;
