import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { useParams } from "react-router-dom";
import data from "../userPage/data.js";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
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

  const [listData, setListData] = useState(data);
  const [uniqueData, setUniqueData] = useState(null);

  const productId = () => {
    const vv = data.find((prodId) => String(prodId.id) === id);
    setUniqueData(vv);
    console.log(vv);
  };

  // eslint-disable-next-line
  useEffect(() => {
    productId();
  }, [id]);

  return (
    <div className="main-content-container p-4 container-fluid">
      <Breadcrumb title={"Product Detail"} path={path} />
      <div className="right-panel"></div>
      <div className="row">
        <div className="col-lg-6">
          <Card>
            <CardHeader>Product Details</CardHeader>
            <CardBody>
              <p>
                <span style={{ fontWeight: "bold" }}>Title: </span>
                {uniqueData && uniqueData.title}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Category: </span>
                {uniqueData && uniqueData.category}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Description: </span>
                {uniqueData && uniqueData.desc}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Price: </span>
                {uniqueData && uniqueData.price}
              </p>
              <Link to={`/edit-product/${uniqueData && uniqueData.id}`}>
                <Button>Edit</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody>
              <img
                src={uniqueData && uniqueData.img}
                width="100%"
                height="250px"
                alt=""
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
