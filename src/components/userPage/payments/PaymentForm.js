import React from "react";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import Details from "./Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./PayCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function PaymentForm() {
  return (
    <Container>
      <Content>Payment Form</Content>
    </Container>
  );
}

export default PaymentForm;

const Container = styled.div`
  width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    width: 450px;
    margin: auto;
  }

  p {
    text-align: right;
    margin-top: 40px;
    font-size: 30px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: red;

  p {
    text-align: left;
    font-size: 25px;
  }
`;
