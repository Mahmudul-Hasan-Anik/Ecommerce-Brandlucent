import React,{ useState,useContext } from 'react'
import { Container,Box,Grid, Card} from '@mui/material'
import { Form ,Button} from 'react-bootstrap'
import { Store } from '../../Store'
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

const Payment = () => {

  const {paymentState, paymentDispatch} = useContext(Store)
  const [{isPending}, paypalDispatch] = usePayPalScriptReducer()
  
  const [payment, setPayment] = useState(paymentState.paymentMethod? paymentState.paymentMethod: '')

  const handlePayment = (e)=>{
    e.preventDefault()

    paymentDispatch({
      type: 'PAYMENT_METHOD',
      payload: payment
    })
    localStorage.setItem('paymentMethod', JSON.stringify(payment))

    console.log(payment)

    const loadPaypalScript = async()=>{
      const {data: ClientId} = await axios.get('/api/keys/paypal') 
      paypalDispatch({
        type: 'resetOptions',
        value:{
          'client-id': ClientId,
          currency: 'USD',
        }
      })
      paypalDispatch({
        type: 'setLoadingStatus',
        value: 'pending'
      })
    }
    loadPaypalScript()
  }

  return (
    <Container style={{maxWidth:'1100px',marginTop:'100px'}}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
          <Form onSubmit={handlePayment}>
            <Form.Check 
              type="radio"
              label="Paypal"
              value='paypal'
              checked={payment == 'paypal'}
              onChange={(e)=>setPayment(e.target.value)}
            />
            <Form.Check 
              type="radio"
              label="Stripe"
              value='stripe'
              checked={payment == 'stripe'}
              onChange={(e)=>setPayment(e.target.value)}
            />
            <Form.Check 
              type="radio"
              label="SSL Commerze"
              value='ssl commerze'
              checked={payment == 'ssl commerze'}
              onChange={(e)=>setPayment(e.target.value)}
            />
            <Button type='submit' onClick={handlePayment}>Containue</Button>
          </Form>
          </Grid>
          <Grid item xs={6}>
            {/* <PayPalButtons createOrder={createOrder} onApprove={onApprove} onError={onError}></PayPalButtons> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Payment



