import React, { Component } from "react";
import { Menu, Dropdown, Button, Input, Icon, Modal, Row, Col } from "antd";

const smallScreen = 400;

class MyDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      menuVisible: false,
      modalVisible: false
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  showModal = () => {
    this.handleModalVisibleChange(true);
  };

  handleModalOk = flag => {
    this.handleModalVisibleChange(false);
  };

  handleModalCancel = flag => {
    this.handleModalVisibleChange(false);
  };

  handleModalVisibleChange = flag => {
    console.log("Modal changed", flag);
    //Hide menu (in case of resize)
    // if (flag === true) {
    //   this.handleMenuVisibleChange(false);
    // }

    this.setState({ modalVisible: flag });
  };

  handleMenuClick = e => {
    if (e.key !== "input") {
      this.handleMenuVisibleChange(false);
    }
  };

  handleMenuVisibleChange = flag => {
    console.log("Menu changed", flag);
    //Hide modal (in case of resize)
    // if (flag === true) {
    //   this.handleModalVisibleChange(false);
    // }

    this.setState({ menuVisible: flag });
  };

  render() {
    const { title } = this.props;

    const myAlign = {
      points: ["tl", "tl"], // align top left point of sourceNode with top left point of targetNode
      offset: [-32, -10], // the offset sourceNode by 10px in x and 20px in y,
      targetOffset: [0, 0] // the offset targetNode by 30% of targetNode width in x and 40% of targetNode height in y,
    };

    console.log("Align", myAlign);

    const modalContent = (
      <div
        style={{ border: "2px solid blue" }}
      >
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

    const picker = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="input">
          <Row type="flex">
            <Col>
              <Icon type="close" style={{ fontSize: "20px" }} />
            </Col>
            <Col>
              <Input placeholder={title} />
            </Col>
          </Row>
        </Menu.Item>
        <Menu.Item key="1">
          <div>
            <Icon type="compass" style={{ fontSize: "26px" }} />
            <h2>Helipad 1</h2>
            <h3>Details of the helipad 1</h3>
          </div>
        </Menu.Item>
        <Menu.Item key="2">
          <div>
            <Icon type="bug" style={{ fontSize: "26px" }} />
            <h2>Helipad 2</h2>
            <h3>Details of the helipad 2</h3>
          </div>
        </Menu.Item>
        <Menu.Item key="3">
          <div>
            <Icon type="bug" style={{ fontSize: "26px" }} />
            <h2>Helipad 2</h2>
            <h3>Details of the helipad 2</h3>
          </div>
        </Menu.Item>
        <Menu.Item key="4">
          <div>
            <Icon type="bug" style={{ fontSize: "26px" }} />
            <h2>Helipad 2</h2>
            <h3>Details of the helipad 2</h3>
          </div>
        </Menu.Item>
        <Menu.Item key="5">
          <div>
            <Icon type="bug" style={{ fontSize: "26px" }} />
            <h2>Helipad 2</h2>
            <h3>Details of the helipad 2</h3>
          </div>
        </Menu.Item>
      </Menu>
    );

    return this.state.windowWidth > smallScreen ? (
      <Dropdown
        overlay={picker}
        overlayClassName="helipadspicker"
        align={myAlign}
        trigger={["click"]}
        transitionName="appear"
        onVisibleChange={this.handleMenuVisibleChange}
        visible={this.state.menuVisible}
      >
        <Button>{`${title}-Web`}</Button>
      </Dropdown>
    ) : (
      <div>
        <Button onClick={this.showModal}>{`${title}-mobile`}</Button>
        <Modal
          style={{ border: "2px solid purple" }}
          className="modal-override"
          visible={this.state.modalVisible}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          bodyStyle={{ border: "2px solid green" }}
          footer={null}
          icon="question-circle"
        >
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default MyDropDown;
