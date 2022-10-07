import React, { PureComponent, ReactNode } from 'react';

import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardsList';
import { Typography } from '@mui/material';
import theme from 'utils/ColorTheme';

class HomePage extends PureComponent {
  render(): ReactNode {
    return (
      <>
        <Typography
          sx={{
            textAlign: 'left',
            mt: 3,
            mb: 6,
            fontSize: 28,
            fontWeight: 600,
            color: `${theme.palette.neutral.dark}`,
          }}
        >
          Home page
        </Typography>
        <SearchBar></SearchBar>
        <CardList></CardList>
      </>
    );
  }
}

export default HomePage;
