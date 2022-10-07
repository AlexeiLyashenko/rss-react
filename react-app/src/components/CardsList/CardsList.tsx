import React, { PureComponent, ReactNode } from 'react';

import getCards from 'api/getCards';
import CardProduct from 'components/CardProduct';

import { Grid } from '@mui/material';

import { IGetProduct } from '../../types/product';

interface State {
  products: Array<IGetProduct>;
}

class CardsList extends PureComponent<{}, State> {
  constructor() {
    super({});

    this.state = {
      products: [],
    };
  }
  componentDidMount = (): void => {
    if (this.state.products.length === 0) {
      getCards().then((result) => {
        this.setState({
          products: result.data.products,
        });
      });
    } else return;
  };

  render(): ReactNode {
    return (
      <Grid container spacing={{ xs: 2, md: 4 }} role={'list'}>
        <>
          {this.state.products.map<void>((card: IGetProduct) => {
            const { id, title, description, price, rating, images } = card;

            return (
              <CardProduct
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                rating={rating}
                image={images[0]}
              />
            );
          })}
        </>
      </Grid>
    );
  }
}

export default CardsList;
