import React from 'react'
import styled from 'styled-components'

function Products() {
  return (
    <Container>
        <Content>
            <Category>
            <p>Categories</p>
            <br />
            <br />
            <ul>
                <li>Agricultural E-book</li>
                <li>Agricultural equipment</li>
                <li>Agro machines</li>
                <li>Farm scales</li>
                <li>Irrigation</li>
                <li>Poultry equipment</li>
                <li>Solar Powered Equipment</li>
                <li>Agro chemicalsk</li>
                <li>Animal feeds</li>
                <li>Dog feed</li>
                <li>Chicken</li>
                <li>Farm tools</li>

                <li>Fertilzersk</li>
                <li>Food stuffk</li>
                <li>Dried foodk</li>
                <li>Fruits</li>
            </ul>
            </Category>
            <AllProduct>
                <ProductAndSearch>
                <p>All Products</p>
                <SearchBtn>
                <input type="text" placeholder='Search' />
                <p>Search</p>
                </SearchBtn>
                
                </ProductAndSearch>
            
            <ListProduct>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/mango.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/pepper.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/tomatoes.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
            </ListProduct>
            <ListProduct>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/mango.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/pepper.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/tomatoes.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
            </ListProduct>
            <ListProduct>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/mango.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/pepper.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/tomatoes.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
                <SingleProd>
                <img src='images/apple.jpg' alt='' />
                <p>Apple, Fuji</p>
                <p>3LB - $6.10</p>
                <Cartbtn>
                    <img src='images/shopping-bag.png' alt='' />
                    <p>Add to cart</p>
                </Cartbtn>
                </SingleProd>
            </ListProduct>
            </AllProduct>
            
        </Content>
    </Container>
  )
}

export default Products

const Container = styled.div`
    width: 1200px;
    margin: auto;
    //height: 2000px;
    position: relative;
    //display:flex;
    @media(max-width: 768px){
        width: 490px;
        margin:auto;
        
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    padding: 20px;
    

`

const Category = styled.div`
    //background-color: red;
    width: 200px;
    
    //top: 2px;
    height: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
        border: 1px solid black;
    }

    li{
        list-style: none;
        padding-bottom: 10px;
        cursor: pointer;
    }

    ul{
        //padding-top: 20px;
    }

    p{
        z-index: 100;
        position: sticky;
        //top: 0;

        background-color: white;
        width: 180px;
        font-size: 20px;
        font-weight: bold;
        
        //height: 20px;
    }
`

const AllProduct = styled.div`
    //background-color: blue;
    width: 950px;

    @media(max-width: 768px){
        width: 400px;
        p{
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
        margin-left: 10px;
        
    }
    }

    
`

const ProductAndSearch = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-size: 20px;
        //font-weight: bold;
        padding-bottom: 10px;

    }
    
`

const SearchBtn = styled.div`
    display: flex;
    align-items: center;

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

const ListProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        z-index: -1;
    }
`

const SingleProd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    img{
        width: 150px;
        height: 150px;
        border-radius: 10px;
    }

    p{
        text-align: center;
        font-weight: bold;
        padding: 5px;
        font-size: 15px;
    }

    @media(max-width: 768px){
        img{
        width: 280px;
        height: 150px;
        //z-index: -110
    }

    p{
        text-align: center;
        font-weight: none;
        font-size: 15px;
    }
    }


`

const Cartbtn = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    justify-content: center;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;

    img{
        width: 30px;
        height: 30px;
    }

    p{
        font-weight: 200px;
        font-size: 12px;
        padding-left: 5px;
    }
`