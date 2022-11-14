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

  const productId = () => {
    const vv = listData.filter((prodId) => String(prodId.id) === id);
    setListData(vv[0]);
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
                {listData && listData.title}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Category: </span>
                {listData && listData.category}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Description: </span>
                {listData && listData.desc}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Price: </span>
                {listData && listData.price}
              </p>
              <Link to={`/edit-product/${listData.id}`}>
                <Button>Edit</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody>
              <img
                src={listData && listData.img}
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
