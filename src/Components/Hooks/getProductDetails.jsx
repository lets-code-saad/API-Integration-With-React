import axios from 'axios'
import React, {useEffect, useState} from 'react'

const getProductDetails = (product_id) => {
  
  const [product, setProduct] = useState({})
  // CREATING LOADING WHEN THE DATA ISN'T FETCHED FROM API
  const [loading, setLoading] = useState(true)
  // Api Call
  useEffect(() => {
    const apiCalling = async () => {
      const products = await axios.get(`https://fakestoreapi.com/products/${product_id}`)

      setProduct(products?.data)
      setLoading(false)
    }
    apiCalling()
  }
    , [])


  return {product,loading}
}

export default getProductDetails
