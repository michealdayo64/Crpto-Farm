import React, { useState } from 'react'
import styled from 'styled-components'
import Categories from './Categories.js';
import items from './data.js'
import cartData from './cartData.js'
import { Link } from 'react-router-dom'

const mydata = [...new Set(items.map((item) => item.category))];
//console.log(mydata);


function Products() {
    const [listItem, setListItem] = useState(items);
    const [cat, setCat] = useState(mydata)
    //const [cart, setCart] = useState()

    const getCategory = (cate) => {
        if (cate === "all") {
            setListItem(items);
            return;
        }
        const catData = items.filter((cat) => cat.category === cate);
        //console.log(catData)
        setListItem(catData);
        //setCat(mydata)
    }

    const addToCart = (id) =>{
        if(id){
            const getCart = listItem.find((myCart) => myCart.id === id);
            //setCart([...cart, getCart]);
            console.log(getCart)
            getCart.quantity = getCart.quantity + 1
            cartData.push(getCart);
            console.log(cartData);
        }   
    }

    




    return (
        <Container>
            <Content>
                <Categories cat={cat} getCategory={getCategory} />
                <AllProduct>
                    <ProductAndSearch>
                        <p onClick={() => getCategory("all")}>All Products</p>
                        <SearchBtn>
                            <input type="text" placeholder='Search' />
                            <p>Search</p>
                        </SearchBtn>

                    </ProductAndSearch>


                    <ListProduct>
                        {listItem.map((itemList) =>
                        (
                            <SingleProd key={itemList.id}>
                                <Link to={`/product-detail/${itemList.id}`}><img src={itemList.img} alt=''/></Link>
                                <p>{itemList.title}</p>
                                <p>{itemList.price}</p>
                                <Link to="/cart">
                                <Cartbtn  onClick={() => addToCart(itemList.id)}>
                                    <img src='images/shopping-bag.png' alt='' />
                                    <p>Add to cart</p>
                                </Cartbtn>
                                </Link>
                            </SingleProd>
                        )
                        )}
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
        font-weight: bold;
        padding-bottom: 10px;
        cursor: pointer;
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 5px;
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
    display: grid;
    //justify-content: space-between;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    //align-items: center;


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
        width: 100%;
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