import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../themes/GlobalStyles';
import { theme } from '../themes/MainTheme';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Layout;
