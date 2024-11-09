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
import EditProduct from './screens/Admin/EditProduct';
import ProductCard from './screens/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-details/:orderid" element={<OrderInfo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addnewproduct" element={<AddNewProduct />} />
            <Route path="/productcard" element={<ProductCard />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="userslist" element={<UsersList />} />
              <Route path="productslist" element={<ProductsList />} />
              <Route path="sellerslist" element={<SellersList />} />
              <Route path="addnewproduct" element={<AddNewProduct />} />
              <Route path="orderslist" element={<OrdersList />} />
              <Route path="editproduct/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
