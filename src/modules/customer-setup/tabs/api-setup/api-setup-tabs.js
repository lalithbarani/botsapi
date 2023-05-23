import { Col, Row, Switch, Input } from "antd";
import React, { Fragment } from "react";
import PrimaryLabel from "../../../../component/labels/primary-label";
import FormInput from "../../../../component/form-input/form-input";
import { ReactComponent as PathIcon } from "../../../../assets/svg/path.svg";
import { ReactComponent as ShieldIcon } from "../../../../assets/svg/shieldStar.svg";
import { ReactComponent as PackageIcon } from "../../../../assets/svg/package.svg";
import { ReactComponent as ImageIcon } from "../../../../assets/svg/image.svg";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const { TextArea } = Input;

function ApiSetupTabs() {
  const onChangeChecked = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <Fragment>
      <div className="api-set-tab" style={{ overflowX: "hidden" }}>
        <PerfectScrollbar
          style={{
            
            overflowY: "scroll !important",
            overflowX: "hidden !important",
          }}
          className="px-15 customer-box-scroll"
        >
          <Row>
            <Col sm={24}>
              <PrimaryLabel>Account Information</PrimaryLabel>
            </Col>
          </Row>
          <Row gutter={12}>
            <Col sm={12}>
              <FormInput
                editMode={true}
                label={"Username"}
                placeholder={"Enter User Name"}
                name="username"
              />
            </Col>
            <Col sm={12}>
              <FormInput
                inputType="password"
                editMode={true}
                label={"Password"}
                placeholder={"Enter Password"}
                name="username"
              />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col sm={24}>
              <FormInput
                editMode={true}
                label={"Account Number"}
                placeholder={"Enter Account Number"}
                name="accountNumber"
              />
            </Col>
          </Row>
          <Row gutter={12}>
            <Col sm={24}>
              <PrimaryLabel>What is the purpose of account?</PrimaryLabel>
            </Col>
          </Row>
          <Row className="mt-15 align-items-center " gutter={5}>
            <Col sm={2}>
              <PathIcon />
            </Col>
            <Col sm={18} className="normal-text">
              <PrimaryLabel className="normal-text">
                Activate for Tracking
              </PrimaryLabel>
            </Col>
            <Col sm={4} className="text-right">
              <Switch defaultChecked onChange={onChangeChecked} />
            </Col>
          </Row>
          <Row className="mt-15" gutter={12}>
            <Col sm={24}>
              <FormInput
                editMode={true}
                placeholder={"Tracking or Pro Number"}
                name="trackingNumber"
              />
            </Col>
          </Row>
          <Row className="mt-15 align-items-center " gutter={5}>
            <Col sm={2}>
              <ShieldIcon />
            </Col>
            <Col sm={18} className="normal-text">
              <PrimaryLabel>Activate for Rate</PrimaryLabel>
            </Col>
            <Col sm={4} className="text-right">
              <Switch defaultChecked onChange={onChangeChecked} />
            </Col>
          </Row>
          <Row className="mt-15 align-items-center " gutter={5}>
            <Col sm={2}>
              <PackageIcon />
            </Col>
            <Col sm={18} className="normal-text">
              <PrimaryLabel>Activate for Pickup Request</PrimaryLabel>
            </Col>
            <Col sm={4} className="text-right">
              <Switch defaultChecked onChange={onChangeChecked} />
            </Col>
          </Row>
          <Row className="mt-15 align-items-center " gutter={5}>
            <Col sm={2}>
              <ImageIcon />
            </Col>
            <Col sm={18} className="normal-text">
              <PrimaryLabel>Activate for Image</PrimaryLabel>
            </Col>
            <Col sm={4} className="text-right">
              <Switch defaultChecked onChange={onChangeChecked} />
            </Col>
          </Row>
          <Row>
            <Col sm={24} className="mt-10">
              <PrimaryLabel>Note</PrimaryLabel>
            </Col>
            <Col sm={24}>
              <TextArea onChange={onChange} style={{ width: "100%" }} />
            </Col>
          </Row>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
}
export default ApiSetupTabs;
