import React,{useState,useContext} from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Button,Tooltip,MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { FaRegUserCircle,FaBalanceScale } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Store } from '../Store';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const MenuBar = () => {
  const {state} = useContext(Store)
  const [anchorElNav, setAnchorElNav] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   useEffect( async()=>{
//     const logoData = await axios.get('http://localhost:8000/logo')
//     setLogo(logoData.data.img)
//   },[])


  return (
    <AppBar className='menu'>
      <Container style={{maxWidth:'1200px'}}>
        <Toolbar >
          <Typography variant="img" component="div" sx={{display: { xs: 'none', md: 'flex' } }}>
            <img src='./image/Logo/logo.png' style={{width:'200px'}}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' },}}>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                      <Link to='/'>Home</Link>
                  </Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Pages</Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>

                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography variant="img" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src='/' style={{width:'100px'}}/>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'center' } }} className='menu-item'>
            <Button >
                <Link to='/'>Home</Link>
            </Button>
            <Button >
                <Link to='/product'>Pages</Link>
            </Button>
            <Button >
                <Link to='/blog'>Blog</Link>
            </Button>
            <Button >
                <Link to='/contact'>Contact</Link>
            </Button>
         
          </Box>

          <Box sx={{ flexGrow: 0 ,display: { xs: 'none', sm: 'flex'}}} className='icon-hover'>
            <Tooltip>
                <> 
                <IconButton ><Link to='/login'><FaRegUserCircle/></Link></IconButton>
                <IconButton ><Link to='/wishlist'><FavoriteBorderIcon/></Link></IconButton>
                <IconButton ><Link to='/compare'><FaBalanceScale/></Link></IconButton>
                <IconButton ><Link to='/payment'><FaBalanceScale/>p</Link></IconButton>

                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={state.cart.cartItems.length > 0 ? state.cart.cartItems.length : 0} color="primary">
                    <Link to='/cart'><ShoppingCartIcon /></Link>
                  </StyledBadge>
                </IconButton>
                </>
            </Tooltip>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MenuBar