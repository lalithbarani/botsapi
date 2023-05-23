import { Col, Row } from "antd";
import React, { Fragment } from "react";
import { Select } from "antd";
import FormInput from "../../../../component/form-input/form-input";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const { Option } = Select;

let ApiTestTabs = () => {
  return (
    <Fragment>
      <div className=" api-test-tab">
        <PerfectScrollbar
          style={{
            
            overflowY: "scroll !important",
            overflowX: "hidden !important",
          }}
          className="px-15 customer-box-scroll"
        >
          <Row gutter={12}>
            <Col sm={12}>
              <div className="ml-5">
                <span className="text-normal font-normal">Response</span>
              </div>
            </Col>
            <Col sm={12}>
              <div className="ml-5">
                <div>
                  <Row>
                    <Col sm={24} className="text-normal font-normal">
                      API Method
                    </Col>
                    <Col sm={24}>
                      <Select
                        defaultValue="Tracking"
                        style={{ width: "100%" }}
                      ></Select>
                    </Col>
                  </Row>
                  <Row className="mt-15">
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"Pro Number / Tracking Number"}
                        placeholder={"Enter Number"}
                        name="trackingNumber"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"BOL No."}
                        placeholder={"Enter BOL No."}
                        name="bolNo"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"PO No."}
                        placeholder={"Enter PO No."}
                        name="poNo"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"Pickup Zipcode"}
                        placeholder={"Enter Pickup Zipcode"}
                        name="picupZipCode"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"Destination Zipcode"}
                        placeholder={"Enter Destination Zipcode"}
                        name="destinationZipCode"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <FormInput
                        editMode={true}
                        label={"Reference 1"}
                        placeholder={"Enter Reference 1"}
                        name="reference1"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
};

export default ApiTestTabs;
