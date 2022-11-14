import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <BackgroundImage>
        <ImageContent>
          <h2>A Community Farmers Market 90+ Local Farmers</h2>
          <span>FRESH . LOCAL . SEASONAL</span>

          <Text>
            <Link to="/products" style={{ color: "white" }}>
              SHOP NOW
            </Link>
          </Text>
        </ImageContent>
      </BackgroundImage>

      <Section>
        <MarketPlace>
          <p>________________________________________</p>
          <h1>The Marketplace</h1>
          <p>________________________________________</p>
        </MarketPlace>

        <MyText>
          <p>
            The Farmers Marketplace is an online community farmers market
            serving Placer County and the greater Sacramento region. We offer
            farm fresh produce, herbs, flowers, honey, eggs, grass fed beef,
            pastured poultry, pork, lamb, fish, preserves, ferments, olive oil,
            vinegar, pantry staples, fresh baked bread, pies and other crafted
            products sourced from our network of local family farmers and
            artisans.
          </p>
          <p>
            Our motto is “THINK global, ACT local” and we are committed to
            building a regenerative local food system, bringing FRESH, LOCAL,
            SEASONAL grocery, garden and eco-lifestyle products to our
            community.
          </p>
          <MyText2>
            <span>SHOP on the HUB</span>
            <span>Sunday - Tuesday</span>
            <span>PICKUP or DELIVERY</span>
            <span>Every Thursday</span>
            <p>________ Social _________</p>
          </MyText2>
        </MyText>

        <SocialIcon>
          <Link to="https://www.facebook.com/kehinde.abubakar.940">
            <img src="images/facebook.png" alt="" />
          </Link>
          <img src="images/instagram.png" alt="" />
          <img src="images/linkedin.png" alt="" />
          <Link to="https://twitter.com/PCashprince">
            <img src="images/twitter.png" alt="" />
          </Link>
        </SocialIcon>

        <Mailing>
          <h1>Join Our Mailing List</h1>
          <p>
            Be the first to hear about what's in season, upcoming events and the
            backstory on our featured producers!
          </p>
        </Mailing>

        <NewsLetter>
          <input type="email" placeholder="Email Address" />
          <Link to="/register" style={{ color: "white" }}>
            <p>Sign Up</p>
          </Link>
        </NewsLetter>

        <Buttom>
          <p>Contact Us</p>
          <p>
            Do you have questions or comments? Send us a message, and we will
            get back to you soon!
          </p>

          <br />

          <p>The Farmers Marketplace</p>
          <p>1273 High Street, Auburn, California 95603, United States</p>

          <br />
          <p>916-390-7628</p>

          <br />
          <p>Hours & Locations</p>
          <p>SHOP on the HUB</p>

          <br />
          <p>Sunday 9am - Tuesday Midnight</p>

          <br />
          <br />

          <p>Auburn HUBstore</p>

          <br />
          <p>Thurs 4 - 7pm</p>

          <p>1273 High St., Auburn, CA 95603</p>
        </Buttom>
      </Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  //background-color: red;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    width: 500px;
    z-index: -1;
  }
`;

const BackgroundImage = styled.div`
  min-height: 400px;
  background-image: url("images/fruit1.jpg");
  background-repeat: no-repeat;
  //position: relative;
  //background-color: red;
  padding-top: 40px;
  //padding-bottom: 20px;
  //position: relative;

  @media (max-width: 768px) {
    background-size: 500px;
    width: 100%;
    height: 100%;
  }
`;

const ImageContent = styled.div`
  //margin-top: 20px;
  //position: absolute;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  background-color: white;
  margin: auto;
  height: 350px;
  opacity: 0.7;
  text-align: center;
  //position: absolute;
  //z-index: -1px;

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
    margin: center;
    //z-index: -1px;
  }

  h2 {
    font-size: 40px;
    //margin-top: 40px;
    //opacity: 0.9;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }

  span {
    margin-top: 40px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const Text = styled.div`
  font-size: 15px;
  padding: 10px;
  background-color: black;
  color: white;
  width: 100px;
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const Section = styled.div`
  padding-top: 40px;
  width: 1200px;
  margin: auto;
  //background-color: blue;

  @media (max-width: 768px) {
    width: 450px;
    //margin: auto;
    //background-color: blue;
  }
`;

const MarketPlace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-left: 20px;
  text-align: center;
  @media (max-width: 768px) {
    p {
      font-size: 5px;
      font-weight: 1000;
      //color: black;
    }

    h1 {
      font-size: 10px;
      font-weight: 200;
    }
  }

  h1 {
    font-size: 25px;
    font-weight: 200;
  }
`;

const MyText = styled.div`
  width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    width: 400px;
    //margin: auto;
    //background-color: blue;
  }

  p {
    text-align: center;
    padding-top: 50px;
  }
`;

const MyText2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 20px;
  }
`;

const SocialIcon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  //background-color: blue;

  img {
    width: 80px;
    height: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Mailing = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 30px;
  }

  p {
    padding: 20px;
  }
`;

const NewsLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  input {
    padding: 15px;
    border-radius: 10px;
    margin-right: 20px;
    width: 400px;
    outline-color: grey;

    @media (max-width: 768px) {
      width: 180px;
    }
  }

  P {
    padding: 17px;
    background-color: black;
    color: white;
    border-radius: 10px;
    margin-left: 20px;
  }
`;

const Buttom = styled.div`
  margin-top: 100px;
  line-height: 2;
  display: flex;
  flex-direction: column;
  //background-color: red;
  width: 750px;
  margin: auto;

  @media(max-width: 768px){
    width: 450px;
  

  p{
    //text-align: center;
    @media(max-width: 768px){
    flex-wrap: wrap;
  }
  font-weight: bold;
  }
`;
