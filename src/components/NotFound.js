import React, { Component } from "react";
import Headers from "./Header";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <Headers />
        <h1>404! Không tìm thấy trang</h1>
      </div>
    );
  }
}
export default NotFound;
