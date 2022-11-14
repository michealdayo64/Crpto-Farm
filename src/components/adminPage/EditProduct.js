/*
 **Author: Santosh Kumar Dash
 **Author URL: http://santoshdash.epizy.com/
 **Github URL: https://github.com/quintuslabs/dashio-admin
 */

import React, { useState, useEffect } from "react";
import Breadcrumb from "./Breadcrumb";
import TextInput from "./TextInput";
import Button from "./Button";
import { Form } from "react-bootstrap";
import TextInputArea from "./TextInputArea";
import data from "../userPage/data.js";
import { useParams } from "react-router-dom";

function EditProduct() {
  /*constructor(props) {
    super(props);
    this.state = {
      product: data,
      title: "",
      category: "",
      description: "",
      price: "",
      photo: "",

      titleError: false,
      categoryError: false,
      descriptionError: false,
      priceError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }*/
  const { id } = useParams();
  const [listData, setListData] = useState(data);
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    desc: "",
    price: 0,
  });

  useEffect(() => {
    productId();
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ [name]: value });
    console.log(inputData.title);
  }

  function productId() {
    const vv = listData.filter((prodId) => String(prodId.id) === id);
    setListData(vv[0]);
    //setState(hh);
  }

  /*function handleSubmit(e) {
    e.preventDefault();
  }*/

  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  const path = [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Form",
      url: "/form",
    },
  ];
  return (
    <div className="main-content-container p-4 container-fluid">
      <Breadcrumb title={"Edit Product"} path={path} />
      <div className="right-panel">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Edit Product</strong>
              </div>
              <div className="card-body">
                <Form onSubmit={() => submitFormHandler()}>
                  <TextInput
                    name="title"
                    value={listData && listData.title}
                    label="Title"
                    onChange={handleChange}
                    errorText="please Enter Valid Name"
                    inputType="text"
                  />

                  <TextInput
                    name="category"
                    value={listData && listData.category}
                    label="Category"
                    onChange={() => handleChange()}
                    inputType="text"
                  />
                  <TextInputArea
                    name="description"
                    inputType="text"
                    value={listData && listData.desc}
                    label="Description"
                    rows={3}
                    controlFunc={() => handleChange()}
                  />
                  <TextInput
                    name="price"
                    value={listData && String(listData.price)}
                    label="Price"
                    onChange={() => handleChange()}
                    inputType="text"
                  />

                  <Button onClick={() => null} type="submit">
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
