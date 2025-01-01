import { Box, Card, Grid2, IconButton, Pagination, Rating, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import "./Main.css"
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import SkeletonForLoading from './SkeletonForLoading';
import getProductsData from '../Hooks/getProductsData';


const MainSectionHome = () => {

  // FETCHING PRODUT DATA FROM API CALLED IN getProductsData COMPONENT
  const { product, loading } = getProductsData()

  // CREATING LOGIC TO DISPLAY SPECIFIC ITEMS PER PAGE
  // SETTING THE VALUE OF PAGE IN STATE TO DISPLAY CARDS ON MULTIPLE PAGES
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12;
  const totalPages = Math.ceil(product.length / itemsPerPage);

  return (
    <>
      {loading ? <SkeletonForLoading /> :
        <div className='container mt-80'>
          <Grid2 container spacing={2}>
            {product?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)?.map((items) => {

              return (
                <Grid2 className="d-flex" size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
                  <Card className='d-flex p-3 flex-column justify-content-center'>
                    <div className='text-center'>
                      <img style={{ width: "230px", height: "240px" }} src={items?.image !== "" ? items.image : "https://www.realsimple.com/thmb/T8Ep_MPA7CDhtGJ-C2V32yDvD3A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/reuse-old-clothes-gettyimage-1316931901-e574c71950ed47c7a9bcce3d1c7911a0.jpg"} alt="" />
                    </div>
                    <div>
                      <span className='text-secondary mt-1'>{items.category.name}</span>
                    </div>
                    <div>
                      <h5 className='mt-3'>
                        <Tooltip placement='top' title={items?.title}>
                          {items?.title?.length > 20 ? items?.title.slice(0, 18) + '...' : items?.title}
                        </Tooltip>
                      </h5>
                      <div>
                        <Rating
                          name="simple-controlled"
                          defaultValue={items.rating.rate}
                        />
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3 align-items-center'>
                      <h4 className=''>${items?.price}</h4>
                      <div className='d-flex align-items-center gap-3 cp'>

                        <Link to={`/single_product/${items.id}`}>
                          <VisibilityIcon color='warning' />
                        </Link>
                        <Button size='small' variant="contained" color="warning">
                          Add<IconButton color="warning" aria-label="add to shopping cart">
                            <AddShoppingCartIcon className='text-white' />
                          </IconButton>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Grid2>

              )
            })}

          </Grid2>
          <Box>
            <Pagination onChange={(e, value) => { setCurrentPage(value) }}
              className='my-3 d-flex justify-content-center'
              count={totalPages}
              shape='rounded'
              size='large'
              color="warning" />
          </Box>
        </div>}
    </>
  )
}

export default MainSectionHome

