import React, { useEffect ,useState,useReducer,useContext} from 'react'
import axios from 'axios'
import { Card, CardActions, CardContent, CardMedia, Container, Typography,Button,Grid,Box,IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Store } from '../../Store';


const ProductPage = () => {

  const [product, setProduct] = useState([])
  const {state,dispatch} = useContext(Store)
  
  const {cart} = state
  console.log(cart)



  useEffect(() => {
    async function fetchData() {
      const {data} =  await axios.get(`http://localhost:8000/product`)
      setProduct(data)
    }
    fetchData();
  }, [])

  const handleCart = async(product)=>{

      const {data} =  await axios.get(`http://localhost:8000/product/${product._id}`)

      const existingItems = cart.cartItems.find((item)=>item._id === product._id)
      const quantity = existingItems ? existingItems.quantity + 1 : 1

      if(data.stock < quantity){
        toast.error('Product Out of Stock')
      }
    
      dispatch({
      type: 'ADD_CART_ITEMS',
      payload:{...product, quantity}
    })

  }


  return (
    <Container  style={{maxWidth:'1100px',marginTop:'100px'}}>
    <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {product.map((item)=>(
            <Grid item xs={3} key={item._id}>
                <Card sx={{ maxWidth: 300}}>
                 <div  className='Image'>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height='100%'
                    image={item.image}
                  />
                 </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   <Link to={`/product/${item.slug}`}> {item.name}</Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
                <CardActions >
                  <IconButton size="small"><FavoriteBorderIcon/></IconButton>
                  <IconButton size="small" onClick={()=>handleCart(item)}><ShoppingCartIcon /></IconButton>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Box>
    </Container>
  )
}

export default ProductPage

