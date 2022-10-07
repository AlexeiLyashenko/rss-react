import React, { PureComponent, ReactNode } from 'react';

import { Card, Box, Grid, CardContent, CardMedia, Typography } from '@mui/material';

import { StarBorder, CurrencyYen } from '@mui/icons-material';

import { IMainProduct } from '../../types/product';
import theme from 'utils/ColorTheme';

class CardProduct extends PureComponent<IMainProduct> {
  constructor(props: IMainProduct) {
    super(props);
  }

  render(): ReactNode {
    const { id, title, description, price, rating, image } = this.props;

    return (
      <Grid item md={4} sm={6} xs={12} key={id} sx={{ maxWidth: '350px', minHeight: '600px' }}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            sx={{ height: '350px', objectFit: 'scale-down' }}
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <Box
            sx={{
              p: '20px 20px 30px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1',
            }}
          >
            <CardContent sx={{ p: 0, mb: 3 }}>
              <Typography align="center" gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                {description}
              </Typography>
            </CardContent>
            <Grid
              container
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}
              color="text.secondary"
            >
              <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{ color: `${theme.palette.neutral.dark}` }}
                  variant="h6"
                  component="span"
                >
                  {rating}
                </Typography>
                <StarBorder sx={{ color: `${theme.palette.neutral.dark}` }} />
              </Grid>
              <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ color: `${theme.palette.neutral.dark}` }}
                >
                  {price}
                </Typography>
                <CurrencyYen sx={{ color: `${theme.palette.neutral.dark}` }} />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    );
  }
}

export default CardProduct;
