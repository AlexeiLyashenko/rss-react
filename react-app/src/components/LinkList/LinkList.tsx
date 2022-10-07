import React, { PureComponent, ReactNode } from 'react';

import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

interface Props {
  links: string[];
}
interface State {
  anchorElUser: null | HTMLElement;
}

class LinkList extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      anchorElUser: null,
    };
  }
  handleCloseNavMenu = () => {
    this.setState({
      anchorElUser: null,
    });
  };

  render(): ReactNode {
    const { links } = this.props;
    return (
      <>
        {links.map((link) => {
          return (
            <MenuItem
              className="menu-item"
              component={Link}
              to={`/${link}`}
              onClick={this.handleCloseNavMenu}
              sx={{
                my: 2,
                color: { xs: 'black', md: 'white' },
                textTransform: 'uppercase',
                display: 'block',
              }}
              key={link}
            >
              {link.length === 0 ? 'Home' : link}
            </MenuItem>
          );
        })}
      </>

      /* <Button
          component={Link}
          to={'/'}
          onClick={this.handleCloseNavMenu}
          sx={{ my: 2, color: 'black', display: 'block' }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to={'/about'}
          onClick={this.handleCloseNavMenu}
          sx={{ my: 2, color: 'black', display: 'block' }}
        >
          About
        </Button> */
    );
  }
}

export default LinkList;
