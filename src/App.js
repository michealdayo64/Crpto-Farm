import Header from "./components/userPage/Header";
import Home from "./components/userPage/Home";
import Register from "./components/userPage/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPass from "./components/userPage/ForgotPass";
import Products from "./components/userPage/Products";
import Cart from "./components/userPage/Cart";
import Shipping from "./components/userPage/Shipping";
import PaymentInfo from "./components/userPage/payments/PaymentInfo";
import CardInfo from "./components/userPage/CardInfo";
import CryptoPay from "./components/userPage/CryptoPay";
import Profile from "./components/userPage/Profile";
import EditProfile from "./components/userPage/EditProfile";
import ShoppingInterest from "./components/userPage/ShoppingInterest";
import Orderf from "./components/userPage/Order";
import ProductDetail from "./components/userPage/ProductDetail";
import routesAdmin from "./routesAdmin";
import routesVendor from "./routesVendor";
import Login from "./components/adminPage/Login";
import RegisterPage from "./components/adminPage/RegisterPage";
import PaymentForm from "./components/userPage/payments/PaymentForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/register">
            <Header />
            <Register />
          </Route>

          <Route path="/forgot-password">
            <Header />
            <ForgotPass />
          </Route>

          <Route path="/products">
            <Header />
            <Products />
          </Route>

          <Route path="/cart">
            <Header />
            <Cart />
          </Route>

          <Route path="/shipping">
            <Header />
            <Shipping />
          </Route>

          <Route path="/payment-info">
            <Header />
            <PaymentInfo />
          </Route>

          <Route path="/payment-form">
            <Header />
            <PaymentForm />
          </Route>

          <Route path="/card-info">
            <Header />
            <CardInfo />
          </Route>

          <Route path="/crypto-pay">
            <Header />
            <CryptoPay />
          </Route>

          <Route path="/profile">
            <Header />
            <Profile />
          </Route>

          <Route path="/edit-profile">
            <Header />
            <EditProfile />
          </Route>
          <Route path="/shopping-interest">
            <Header />
            <ShoppingInterest />
          </Route>

          <Route path="/order">
            <Header />
            <Orderf />
          </Route>

          <Route path="/product-detail/:id">
            <Header />
            <ProductDetail />
          </Route>

          <Route path="/admin-login">
            <Login />
          </Route>

          <Route path="/admin-register">
            <RegisterPage />
          </Route>

          {routesAdmin.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}

          {routesVendor.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
