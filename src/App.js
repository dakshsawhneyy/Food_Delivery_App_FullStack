import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Footer from './components/Footer';
import MyCart from './components/MyCart';

function App() {
  return (
      <>
      
      <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/MyCart' element={<MyCart/>} />
        <Route exact path='/MyOrders' element={<Home/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/SignUp' element={<SignUp/>} />
        </Routes>
      <Footer/>

      </>
  );
}

export default App;
