import React, { useState } from 'react';
import Hearder from 'components/Hearder';
import { Box } from '@mui/system';
import { useGetProductsQuery } from '../../state/api';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@emotion/react';
const Product = ({
  data: {
    _id,
    name,
    description,
    price,
    rating,
    category,
    numReviews,
    countInStock,
    stat,
  },
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mv: '1.5rem' }} color={theme.palette.secondary[400]}>
          Ksh.{Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'See More'}
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeOut="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id:{_id}</Typography>
          <Typography>Number of reviews:{numReviews}</Typography>
          <Typography>Supply Left:{countInStock}</Typography>
          <Typography>Yearly Sales:{stat[0].yearlySalesTotal}</Typography>
          <Typography>
            Yearly Units Sold This Year:{stat[0].yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  const isNonMobile = useMediaQuery('min-width:600px');
  return (
    <Box m="1.5rem 2.5rem">
      <Hearder title="PRODUCTS" subtitle="see all your products" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
          }}
        >
          {data.map((data, index) => (
            <Product data={data} key={index} />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
