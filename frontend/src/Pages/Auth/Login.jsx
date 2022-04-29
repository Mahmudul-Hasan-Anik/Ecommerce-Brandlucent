import React, {useState} from 'react'
import { Button,Container,Form,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!email.length || !password.length){
      toast.error('Please fill All input box')
    }else if(password.length < 8){
      toast.error('Password Must be 8 or more character')
    }else{
      toast.success('Login Successful')
      setEmail('')
      setPassword('')
      
    }
  }
 


  return (
      <div style={{marginTop:'100px'}}>
      <Container className='w-50 mt-5 design'>
        <Row>
          <Col className='background'>
           <div className='background-div'>
              <Link to='/registration'><Button>Sign up</Button></Link>
           </div>
          </Col>
          <Col className='from-design'>
          <Form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
                <Form.Group className="mb-3">
                    <Form.Control name='email' type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control name='password' type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                </Form.Group>

                  <div className='btn-center'>
                  <Button variant="primary" type="submit" className='mb-3 navButton' >
                    Sign in
                  </Button>
                  </div>
                    <br/>
                <Form.Text className="text-muted">
                  <Link to='/forget'>Forget Your Password</Link>
                </Form.Text>
            </Form>
          </Col>
        </Row>
        
    </Container>
      </div>
  )
}

export default Login