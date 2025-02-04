import axios from "axios"
import React, { useEffect, useState } from "react"
import axiosInterceptors from "../../utils/axiosInterceptor"

const getProductsData = () => {
  //State
  const [product, setProduct] = useState([])
  // CREATING LOADING TRUE ON DEFAULT
  const [loading, setLoading] = useState(true)
  // Api Call
  useEffect(() => {
    const apiCalling = async () => {
      const products = await axios.get("https://fakestoreapi.com/products")
      // SETTING THIS DATA TO AN ARRAY
      setProduct(products?.data)
      setLoading(false)
    }
    apiCalling()

// Dummy Call
const dummyCall = async ()=>{

  const dummyAuth = await axiosInterceptors.get("/auth/login")

  console.log(dummyAuth, "dummyAuth");
  
}
dummyCall()

  }
    , [])

  return {product,loading}
}

export default getProductsData
