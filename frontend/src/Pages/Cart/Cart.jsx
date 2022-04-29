import React,{ useState,useContext,useEffect } from 'react'
import { Container,Box,Grid, Card,CardContent,Typography,IconButton,CardMedia} from '@mui/material'
import { Store } from '../../Store'
import axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import {Row,Col} from 'react-bootstrap'

const Cart = () => {
  const [mainProduct, setMainProduct] = useState([])

  const {state,dispatch} = useContext(Store)
  const {cart} = state
  const product = state ? state.cart.cartItems : ''
  const ProductSubTotal = product.reduce((acc,curr)=> acc + curr.price * curr.quantity , 0)

  const handleRemoveItems = (item)=>{
    dispatch({
      type:'REMOVE_CART_ITEMS',
      payload: item
    })
  }


  const updateButton = (item,quantity)=>{
    dispatch({
      type: 'ADD_CART_ITEMS',
      payload: {...item, quantity}
    })
 }

useEffect(() => {
  async function fetchData() {
    const {data} =  await axios.get(`http://localhost:8000/product`)
    setMainProduct(data)
  }
  fetchData();
}, [])

  return (
    <Container style={{maxWidth:'1100px',marginTop:'100px'}}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
          {product 
          ? 
            product.map((item)=>(
            <Card sx={{ display: 'flex',justifyContent:'space-between',mb:2,border:'1px solid #B1D182',alignItems:'center' }}>
              <Box sx={{display:'flex',width:'220px'}}>
                <CardMedia
                  component="img"
                  sx={{ width: 100,height: 100,pl:2,pb:2,pt:2 }}
                  image={item.image}
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography component="div" variant="p">
                  <b>{item.name}</b> 
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {item.quantity}pc
                  </Typography>
                </CardContent>
              </Box>
              <Box >
                <CardContent style={{alignItems:'center', justifyContent:'center',display:'flex'}}>
                  <Typography component="div" variant="p">
                    <div className='buttonGroup'>
                      <button onClick={()=>updateButton(item, item.quantity + 1)} > <b>+</b></button>
                      <span>{item.quantity}</span>
                      <button onClick={()=>updateButton(item, item.quantity - 1)} disabled={item.quantity == 1}><b>-</b></button>
                    </div>
                  
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{display:'flex'}}>
                <CardContent>
                  <Typography component="div" variant="p">
                    Price
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  <b>${item.price}</b>
                  </Typography>
                </CardContent>
                <CardContent style={{display:'flex',alignItems:'center'}}>
                  <IconButton onClick={()=>handleRemoveItems(item)}>
                    <DeleteIcon/>
                  </IconButton>
                </CardContent>
              </Box>
            </Card>
            ))
          :
          ''
          }
          
          </Grid>
          <Grid item xs={4}>
           <Box
            sx={{
              height: 380,
              backgroundColor: '#B1D1826B',
              borderRadius:'7px',
              color:'#2B463C'
            }}
           >
            <h5 style={{textAlign:'center',paddingTop:'15px'}}>Order Summary</h5>
            <div style={{marginTop:'15px',marginLeft:'30px'}}>
              <Row>
                <Col>
                  <h5>Sub Total</h5>
                </Col>
                <Col style={{textAlign:"center"}}>
                  <h5>${ProductSubTotal}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Delivery Fee</h5>
                </Col>
                <Col style={{textAlign:"center"}}>
                <h5>$20</h5>
                </Col>
              </Row>
              
            </div>
            <hr style={{backgroundColor: '#B1D182'}}/>
            <div style={{marginTop:'25px',marginLeft:'30px'}}>
              <Row>
                <Col>
                  <h5>Total</h5>
                </Col>
                <Col style={{textAlign:"center"}}>
                  <h5>${ProductSubTotal + 20}</h5>
                </Col>
              </Row>
            </div>
            <div style={{textAlign:'center'}}>
              <button className='chack_out_button'>CheckOut</button>
            </div>
           </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: '100%',marginTop:'50px' }}>
        <h5>Products you may like</h5>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='mt-4'>

            {mainProduct.map((item)=>(
            <Grid item xs={3} key={item._id}>
                <Card sx={{ maxWidth: 300 }}>
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
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            ))}
          </Grid>
      </Box>
    </Container>
  )
}

export default Cart



