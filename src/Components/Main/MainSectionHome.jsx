import { Card, Grid2, IconButton, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Main.css"
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';


const MainSectionHome = () => {
  //State
  const [product, setProduct] = useState([])
  // Api Call
  useEffect(()=>{
const apiCalling = async ()=>{
  const products = await axios.get("https://api.escuelajs.co/api/v1/products")
  console.log(products.data)

// First object in this api is blank and it is ruining the design, that's why i'm filtering the 
// products based on a condition.

const filteredProducts = products?.data.filter((item)=> item?.id !==1 && (item?.id < 54 || item?.id > 63) )

  setProduct(filteredProducts)
}
apiCalling()
}
  ,[])
  
  
  
  return (
    <>
    <div className='container mt-80'>
      <Grid2 container spacing={2}>
        {product?.map((items)=>{
return (
  <Grid2 size={{xs:6,sm:6,md:3,lg:3}}>
    <Card className='d-flex p-3 flex-column justify-content-center'>
      <div className='text-center'>
<img className='img-fluid' src={items.images} alt="" />
      </div>
      <div>
        <span className='text-secondary mt-1'>{items.category.name}</span>
      </div>
      <div>
    <h5 className='mt-3'>
      <Tooltip placement='top' title={items?.title}>
      {items?.title?.length>20? items?.title.slice(0,20) + '...' : items?.title}
      </Tooltip>
      </h5>
      </div>
      <div className='d-flex justify-content-between mt-3 align-items-center'>
    <h4 className=''>${items?.price}</h4>
    <Button size='small' variant="contained" color="success">
  Add<IconButton color="default" aria-label="add to shopping cart">
  <AddShoppingCartIcon className='text-white' />
</IconButton>
</Button>
      </div>
    </Card>
  </Grid2>

)
        })}

</Grid2>
</div>
    </>
  )
}

export default MainSectionHome

