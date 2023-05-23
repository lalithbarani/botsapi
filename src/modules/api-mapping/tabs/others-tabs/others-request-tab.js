import { Row, Col, Card } from "antd";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

let OthersRequestTab = () => {
  return (
    <Row>
        <Col sm={24}>
      <PerfectScrollbar
        style={{
           maxHeight: "calc(70vh)",
          overflowY: "scroll !important",
          overflowX: "hidden !important",
        }}
        className="px-15"
      >
        <div className="other-request-tabs  ">
          <Row className="mt-12">
            <Col sm={24}>Auth Header</Col>
            <Col sm={24}>
              <Card style={{ background: "#EAECF0" }}></Card>
            </Col>
            <Col sm={24} className="mt-15">
              Class Map
            </Col>
            <Col sm={24} className="mt-25">
              Run Before Execution
            </Col>
            <Col sm={24}>
              <Card style={{ background: "#EAECF0", height: "220px" }}></Card>
            </Col>
          </Row>
        </div>
      </PerfectScrollbar>
      </Col>
    </Row>
  );
};
export default OthersRequestTab;
