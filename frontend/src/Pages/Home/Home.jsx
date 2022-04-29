import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'

const Home = () => {
  const [productData, setProductData] = useState([])

  useEffect((item) => {
    async function fetchData() {
      const {data} =  await axios.get(`http://localhost:8000/product`)
      setProductData(data)
      console.log(data)
    }
    fetchData();
  }, [])


  
  return (
    <div className='home'>
      {productData.map((item)=>(
       <h1>{console.log(item)}</h1>
      ))}
    </div>
  )
}

export default Home