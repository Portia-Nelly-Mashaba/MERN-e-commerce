import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import Orders from './screens/Orders';
import OrderInfo from './screens/OrderInfo';
import Profile from './screens/Profile';
import AdminLayout from './screens/Admin/Admin';
import ProductsList from './screens/Admin/ProductsList';
import UsersList from './screens/Admin/UsersList';
import SellersList from './screens/Admin/SellersList';
import AddNewProduct from './screens/Admin/AddNewProduct';
import OrdersList from './screens/Admin/OrdersList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/order-details/:orderid' element={<OrderInfo />}></Route>
          <Route path='/profile' element={<Profile />}></Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="userslist" element={<UsersList />} />
            <Route path="productslist" element={<ProductsList />} />
            <Route path="sellerslist" element={<SellersList />} />
            <Route path="addnewproduct" element={<AddNewProduct />} />
            <Route path="orderslist" element={<OrdersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
