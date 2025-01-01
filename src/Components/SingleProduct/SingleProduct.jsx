import React from 'react'
import getProductDetails from '../Hooks/getProductDetails'
import {Typography, Container, Grid,Button, Card,CardMedia,CardContent,Chip,Box,styled,Fab} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useParams } from 'react-router-dom'


import Header from '../Header/Header';
import SkeletonForSingleLoad from './SkeletonForSingleLoad';

const SingleProduct = () => {


const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  fontSize: "1.1rem",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  }
}));

    // FETCHING ID USING PARAMS
    const { product_id } = useParams()
    const { product,loading } = getProductDetails(product_id)


    return (
      <>
<Header/>
{loading ? <SkeletonForSingleLoad/> :
        <Box sx={{ flexGrow: 1, margin:"80px" }}>

          <Container maxWidth="lg" sx={{ marginTop: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <StyledCard>
<img style={{width:"100%", height:"550px"}} src={product.image} alt="" />
                    </StyledCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={product?.category?.toUpperCase()}
                      color="warning"
                      size="small"
                      sx={{ marginBottom: 2 }}
                    />
                    <Typography
                      variant="h4"
                      component="h1"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="warning"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      ${product.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
                    >
                      {product.description}
                    </Typography>
                    <Box className="d-flex align-items-center gap-2">
                    <StyledButton
                      variant="contained"
                      color="warning"
                      size="large"
                      startIcon={<ShoppingCartIcon />}
                      aria-label="Add to cart"
                      >
                      Add to Cart
                    </StyledButton>
                    <StyledButton 
        variant="contained"
        color="warning"
        size="large"
        startIcon={<FavoriteIcon sx={{ fontSize: 24 }} />} //
        aria-label="Add to wishlist"
      >
        Add to Wishlist
      </StyledButton>
                      </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grid>
          </Container>
        </Box>}
      </>
    )


  }


  export default SingleProduct
