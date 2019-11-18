import React, { Component } from "react";
import { Row, Col } from "antd";
import MyDropDown from "./MyDropDown";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={10}>
          <MyDropDown title="From" />
        </Col>
        <Col span={10}>
          <MyDropDown title="To" />
        </Col>
      </Row>
    );
  }
}

export default SearchBox;