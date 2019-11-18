import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import { Row, Col } from "antd";

import "./stylesheets/App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Row type="flex" justify="center">
          <Col span={20} className="">
            <h1>Ascent Sand Box</h1>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ height: 60, marginBottom: 40, marginTop: 40 }}
            //className="dev2"
          >
            Fake content here
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} sm={20} md={18} lg={18} xl={18}>
            <SearchBox />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 100, marginTop: 100 }}>
            Fake content here
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 100, marginTop: 100 }}>
            Fake content here
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 100, marginTop: 100 }}>
            Fake content here
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 100, marginTop: 100 }}>
            Fake content here
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 100, marginTop: 100 }}>
            Fake content here
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
