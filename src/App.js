import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPass from "./components/ForgotPass";
import Products from "./components/Products";
import Cart from "./components/Cart"
import Shipping from "./components/Shipping";
import PaymentInfo from "./components/PaymentInfo";
import CardInfo from './components/CardInfo'
import CryptoPay from "./components/CryptoPay";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import ShoppingInterest from "./components/ShoppingInterest";
import Orderf from "./components/Order";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/register'>
            <Header />
            <Register />
          </Route>

          <Route path='/forgot-password'>
            <Header />
            <ForgotPass />
          </Route>

          <Route path='/products'>
            <Header />
            <Products />
          </Route>

          <Route path='/cart'>
            <Header />
            <Cart />
          </Route>

          <Route path='/shipping'>
            <Header />
            <Shipping />
          </Route>

          <Route path='/payment-info'>
            <Header />
            <PaymentInfo />
          </Route>

          <Route path='/card-info'>
            <Header />
            <CardInfo />
          </Route>

          <Route path='/crypto-pay'>
            <Header />
            <CryptoPay />
          </Route>

          <Route path='/profile'>
            <Header />
            <Profile />
          </Route>

          <Route path='/edit-profile'>
            <Header />
            <EditProfile />
          </Route>

          <Route path='/shopping-interest'>
            <Header />
            <ShoppingInterest />
          </Route>

          <Route path='/order'>
            <Header />
            <Orderf />
          </Route>


          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
