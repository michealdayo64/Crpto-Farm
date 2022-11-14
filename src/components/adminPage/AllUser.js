import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";

class AllUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const path = [
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        title: "Table",
        url: "/all-users",
      },
    ];
    return (
      <div className="main-content-container p-4 container-fluid">
        <Breadcrumb title={"All Users"} path={path} />
        <div className="right-panel">
          <div className="row">
            <div className="col-lg-12">
              <Card>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>hhshss</td>
                      <td className="avatar">
                        <div className="round-img">
                          <img
                            width="50px"
                            height="50px"
                            className="rounded-circle"
                            src="/assets/images/avatars/1.jpg"
                            alt=""
                          />
                        </div>
                      </td>
                      <td>
                        <Link to="user-detail">
                          <Button>View</Button>
                        </Link>
                        <Link to="edit-user">
                          <Delete
                            style={{ color: "red", marginLeft: "20px" }}
                          />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>

                      <td>hhshss</td>
                      <td>hdhhssh</td>
                      <td>
                        <Button>View</Button>

                        <Delete style={{ color: "red", marginLeft: "20px" }} />
                      </td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>

                      <td>hhshss</td>
                      <td>hdhhssh</td>
                      <td>
                        <Button>View</Button>

                        <Delete style={{ color: "red", marginLeft: "20px" }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllUser;
