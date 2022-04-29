import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home,Cart,Login,Registration,ProductPage,WishList,Compare,Blog,Contact,Payment,ProductDetails} from './Pages'
import {MenuBar} from './Components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      limit={1}
      autoClose={3000}
    />
    <MenuBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/compare" element={<Compare/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
