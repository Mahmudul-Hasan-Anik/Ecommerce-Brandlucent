import React, {useState} from 'react'
import { Button,Container,Form,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
  
    const handleSubmit = (e)=>{
      e.preventDefault()
  
      if(!name.length || !email.length || !password.length){
        toast.error('Please fill All input box')
      }else if(password.length < 8){
        toast.error('Password Must be 8 or more character')
      }else{
        toast.success('Registration Successfull')
        setName('')
        setEmail('')
        setPassword('')
      }
    }
   
  
  
    return (
        <div style={{marginTop:'100px'}}>
        <Container className='w-50 mt-5 design'>
          <Row>
            <Col className='from-design'>
                <Form onSubmit={handleSubmit}>
                
                  <h2>Sign up</h2>
              
                  <Form.Group className="mb-3">
                      <Form.Control name='name' type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                      <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                  </Form.Group>
      
                  <Form.Group className="mb-3">
                      <Form.Control name='password' type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                  </Form.Group>
      
                  <div className='btn-center'>
                  <Button variant="primary" type="submit" className='mb-3' >
                      Sign up
                  </Button>
                  </div>
               </Form>
            </Col>
            
            <Col className='background'>
            <div className='background-div'>
              <Link to='/login'><Button>Sign in</Button></Link>
           </div>
            </Col>
          </Row>
      </Container>
        </div>
    )
}

export default Registration