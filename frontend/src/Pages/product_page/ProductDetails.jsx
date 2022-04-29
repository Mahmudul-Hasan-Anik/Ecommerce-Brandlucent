import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    console.log(params)
    
    useEffect(async()=>{
      async function fetchData() {
        const {data} =  await axios.get(`${params.slug}`)
       console.log(data)
      }
      fetchData();
    },[])
  return (
    <div>productDetails</div>
  )
}

export default ProductDetails