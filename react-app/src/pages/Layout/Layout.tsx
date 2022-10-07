import React, { PureComponent, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from 'components/Header';
import { Container } from '@mui/system';

class Layout extends PureComponent {
  render(): ReactNode {
    return (
      <>
        <ResponsiveAppBar />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </>
    );
  }
}

export default Layout;
