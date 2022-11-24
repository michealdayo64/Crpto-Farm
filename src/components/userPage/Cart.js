import React, { useState } from "react";
import styled from "styled-components";
//import cart from './cartData.js'
import cartData from "./cartData.js";
import { Link } from "react-router-dom";

function Cart() {
  const [allCart, setAllCart] = useState(cartData);

  const removeCart = (id) => {
    const data = allCart.filter((del) => del.id !== id);
    if (data.length === 0) {
      setAllCart([]);
      cartData.length = 0;
    }
    setAllCart(data);
  };

  const addToSingleCart = (id) => {
    const data = allCart.map((add) => {
      if (add.id === id) {
        add.quantity = add.quantity + 1;
        return { ...add, quantity: add.quantity };
      }
      return add;
    });
    console.log(data);
    setAllCart(data);
  };

  const removeSingleCart = (id) => {
    const data = allCart.map((add) => {
      if (add.id === id) {
        add.quantity = add.quantity - 1;
        if (add.quantity === 0) {
          removeCart(add.id);
        }
        return { ...add, quantity: add.quantity };
      }
      return add;
    });
    setAllCart(data);
  };

  const clearCart = () => {
    setAllCart([]);
    cartData.length = 0;
  };

  return (
    <Container>
      <Content>
        <SearchBtn>
          <input type="text" placeholder="Search" />
          <p>Search</p>
        </SearchBtn>

        <CartTable>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {allCart.length > 0 ? (
                allCart.map((cart) => {
                  return (
                    <tr key={cart.id}>
                      <td>
                        <img src={cart.img} alt="" />
                      </td>
                      <td>{cart.title}</td>
                      <td>${cart.price}</td>

                      <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <p
                            style={{
                              paddingRight: "15px",
                              fontSize: "20px",
                              fontWeight: "bolder",
                              cursor: "pointer",
                            }}
                            onClick={() => removeSingleCart(cart.id)}
                          >
                            -
                          </p>
                          {cart.quantity}
                          <p
                            style={{
                              paddingLeft: "15px",
                              fontSize: "20px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                            onClick={() => addToSingleCart(cart.id)}
                          >
                            +
                          </p>
                        </div>
                      </td>

                      <td>${cart.price * cart.quantity}</td>

                      <td>
                        <DeleteImage onClick={() => removeCart(cart.id)}>
                          <img src="images/delete.svg" alt="" />
                        </DeleteImage>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <p style={{ textAlign: "center" }}>Cart is empty</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CartTable>
        <CheckOutBtn>
          {allCart.length > 0 && (
            <Link to="/payment-info" style={{ textDecoration: "none" }}>
              <p>PROCEED TO CHECKOUT</p>
            </Link>
          )}

          {allCart.length > 0 && (
            <div onClick={() => clearCart()}>
              <p>Clear Cart</p>
            </div>
          )}
        </CheckOutBtn>
      </Content>
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  width: 1200px;
  margin: auto;
  //height: 2000px;
  position: relative;
  //display:flex;
  @media (max-width: 768px) {
    width: 450px;
    //margin:auto;
  }
`;

const Content = styled.div``;

const SearchBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    height: 40px;
    border-radius: 10px;
    margin-right: 30px;
  }

  p {
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-weight: 10;
  }

  @media (max-width: 768px) {
    input {
      display: none;
    }

    p {
      display: none;
    }
  }
`;

const CartTable = styled.div`
  //background-color: red;

  @media (max-width: 768px) {
    width: 400px;

    tbody {
      tr {
        td {
          img {
            max-width: 50px;
            max-height: 50px;
            border-radius: 10px;
          }
        }
      }
    }
  }
  table {
    text-align: center;
    border-collapse: collapse;
    //background-color: red;
    width: 100%;

    thead {
      th {
        padding: 20px;
        border-bottom: 1px solid black;
        @media (max-width: 768px) {
          padding: 12px;
        }
      }
    }
    tbody {
      tr {
        td {
          img {
            width: 150px;
            height: 150px;
            border-radius: 10px;
          }

          border-bottom: 1px solid black;
          padding-bottom: 10px;
          padding-top: 10px;
        }
      }
    }
  }
`;
const DeleteImage = styled.div`
  //background-color: red;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  width: 40px;
  height: 40px;

  img {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
    //background-color: red;
    //text-color: red;
  }
`;

const CheckOutBtn = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 30px;
    text-align: right;
    background-color: black;
    color: white;

    padding: 10px;
    border-radius: 10px;
  }

  div {
    width: 100px;
    cursor: pointer;
    p {
      background-color: red;
      text-align: center;
    }
  }
`;
