import React,{useState} from 'react'
import styled from 'styled-components'
//import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom'




function Header(props) {
    const [sideBar, setSideBar] = useState(false);
  return (
    <Container>
        <Savicon>
        <img src="images/dehaze.svg" alt=''  onClick= {() => setSideBar(true) }/>
        <div>
            <img src='images/account.svg' alt='' />
        </div>
        
        </Savicon>
        <BurgerMenu show = {sideBar}>
            <span onClick= {() => setSideBar(false) }>X</span>
            <ul>
            <Link to="/"><li>Home </li></Link>
            <Link to="/products"><li>Categories </li></Link>
            <Link to="/profile"><li>Profile </li></Link>
            <Link to="/cart"><li>Cart </li></Link>
            <Link to="/shopping-interest"><li>Shopping Interest </li></Link>
            <Link to="/order"><li>Order </li></Link>
            <Link to="/register"><li>Registration/Login </li></Link>
            </ul>
        </BurgerMenu>

        <SearchCart>
            <input type="text" placeholder='Search products' />
            <Cart>
                <img src='images/cart.svg' alt='' />
                <span>My Cart</span>
            </Cart>

        </SearchCart>
        
        <Nav>
            
            <NavWrapper>
                <ul>
                <NavList>
                <Link to="/"><li>Home </li></Link>
            <Link to="/products"><li>Categories </li></Link>
            <Link to="/profile"><li>Profile </li></Link>
            <Link to="/cart"><li>Cart </li></Link>
            <Link to="/shopping-interest"><li>Shopping Interest </li></Link>
            <Link to="/order"><li>Order </li></Link>
            <Link to="/register"><li>Registration/Login </li></Link>
                </NavList>
                </ul>
            </NavWrapper>
        </Nav>
        <hr></hr>
    </Container>
  )
}

export default Header

const Container = styled.div`
    padding-top: 90px;
    padding-bottom: 40px;
    max-width: 1400px;
    margin: auto;

    @media(max-width: 768px){
        width: 450px;
    }
    

    hr{
        color: grey;
        @media (max-width: 768px){
             //min-width: 70px;
             display: none;
         }
    }
`

const Savicon = styled.div`
    display: flex;
    justify-content: space-between;
    //background-color: blue;
    

    @media(max-width: 768px){
        width: 450px;
        margin: auto;
        //padding-bottom: 10px;
        
    }

    img{
        display: none;
        @media (max-width: 768px){
             //min-width: 70px;
             display: block;
             width: 30px;
             height: 30px;
             cursor: pointer;
         }
        }

        div{
            //background-color: black;
            padding: 5px;
            border: solid 1px black;
            border-radius: 20px;
            img{
                color: white;
                height: 20px;
                width: 20px;
            }
        }
    
`



const BurgerMenu = styled.div`
    display: none;

    @media(max-width: 768px){
        width: 150px;
        background-color: black;
        height: 400px;
        z-index: 1000px;
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        color: white;
        padding: 20px;
        display: block;
        transform: ${props => props.show ? "translateX(0)" : "translateX(-100%)"};
        transition: transform 0.5s;
        
        li{
            list-style: none;
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: right;
            border-bottom: solid 1px white;
        }

        a{
            color: white;
        }
        //display: none;
        span{
            cursor: pointer;
        }

        ul{
            cursor: pointer;
        }
    }


`

const SearchCart = styled.div`
    display: none;

    @media(max-width: 768px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        input{
            //padding-right: 20px;
            width: 100px;
            height: 30px;
            padding: 5px;
            border-radius: 10px;
            border: 1px solid grey;
            &:focus{
                outline: none !important;
                border: 1px solid grey;

            }
        }
    }
`

const Cart = styled.a`
    margin-left: 20px ;
    display: flex;
    align-items: center;
    background-color: black;
    padding: 5px;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;

    img{
        width: 20px;
        height: 20pxx;
        padding-right: 2px;
        //color: white;
        filter: opacity(0.5) drop-shadow(0 0 0 white);
    }

    span{
        font-size: 11px;
        padding-left: 2px;
        color: white;
    }
`

const Nav = styled.nav`
    width: 890px;
    margin: auto;
    padding-bottom: 20px;
`

const NavWrapper = styled.ul`

`

const NavList = styled.div`

    
    //padding: 10px;
    li{
        display: inline;
        list-style: none;
        padding: 20px;
        //transition: background-color 0.1s;
        
        @media(max-width: 768px){
            display: none;
        }

        &:hover{
            background-color: black;
            color: white;
            border-radius: 20px;
            //transition: background-color 0.10s;
            cursor: pointer;
        }


    }
`