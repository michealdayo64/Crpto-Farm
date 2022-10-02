import React from 'react'
import styled from 'styled-components'


function Cart() {
  return (
    <Container>
      <Content>
      <SearchBtn>
                <input type="text" placeholder='Search' />
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
                    <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src='images/apple.jpg' alt='' /></td>
                      <td>Apples, Fuji</td>
                      <td>$6.10</td>
                      <td>3lb</td>
                      <td>$6.10</td>
                      <td>
                      <DeleteImage>
                      <img src='images/delete.svg' alt='' />
                      </DeleteImage>
                      </td>
                        
                        
                    </tr>
                    <tr>
                      <td><img src='images/apple.jpg' alt='' /></td>
                      <td>Apples, Fuji</td>
                      <td>$6.10</td>
                      <td>3lb</td>
                      <td>$6.10</td>
                      <td>
                      <div>
                      <DeleteImage>
                      <img src='images/delete.svg' alt='' />
                      </DeleteImage>
                      </div>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </CartTable>
              <CheckOutBtn>
              <p>PROCEED TO CHECKOUT</p>
              </CheckOutBtn>
              
      </Content>
    </Container>
  )
}

export default Cart

const Container = styled.div`
  width: 1200px;
    margin: auto;
    //height: 2000px;
    position: relative;
    //display:flex;
    @media(max-width: 768px){
        width: 450px;
        //margin:auto;
        
    }
`

const Content = styled.div`
  
  
`

const SearchBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input{
        height: 40px;
        border-radius: 10px;
        margin-right: 30px;
    }

    p{
        padding: 10px;
        background-color: black;
        color: white;
        border-radius: 10px;
        font-weight: 10;
    }

    @media(max-width: 768px){
        input{
        display: none;
    }

    p{
        display: none;
    }
    }
`

const CartTable = styled.div`
  //background-color: red;
  
  @media(max-width: 768px){
    width: 400px;
    
    tbody{
      tr{
        td{
          img{
        max-width: 50px;
        max-height: 50px;
        border-radius: 10px;
        
        
    }
        }
      }
    }
  }
  table{
    text-align: center;
    border-collapse: collapse;
    //background-color: red;
    width: 100%;
    
    thead{
      th{
      padding:20px;
      border-bottom: 1px solid black;
      @media(max-width: 768px){
        padding: 12px;
      }
    }

    }
    tbody{
      tr{
        td{
      img{
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
`
const DeleteImage = styled.div`
  //background-color: red;
  display: flex;
  justify-content: flex-end;
  margin: auto;
  width: 40px;
  height: 40px;

  

  img{
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;

    
  }

  
 `

const CheckOutBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  p{
    
    margin-top: 30px;
    text-align: right;
    background-color: black;
    color: white;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
  }
`