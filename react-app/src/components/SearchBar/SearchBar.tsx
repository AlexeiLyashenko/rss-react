import React, { PureComponent, ReactNode, ChangeEvent } from 'react';
import { TextField } from '@mui/material';

// interface Props {}
interface State {
  inputValue: string;
}

class SearchBar extends PureComponent<{}, State> {
  constructor() {
    super({});

    this.state = {
      inputValue: '',
    };
  }

  setValueToStorage = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
    console.log(this.state.inputValue);
  };

  componentWillUnmount = (): void => {
    if (this.state.inputValue.length > 0) {
      localStorage.setItem('1', this.state.inputValue);
    }
  };

  componentDidMount = (): void => {
    const value = localStorage.getItem('1') ? localStorage.getItem('1') : '';
    if (value) {
      this.setState({
        inputValue: value,
      });
    }
  };

  render(): ReactNode {
    return (
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ mb: 4, width: '100%' }}
        value={this.state.inputValue}
        onChange={this.setValueToStorage}
        placeholder={'Search'}
        data-testid="searchbar"
      />
    );
  }
}

export default SearchBar;
