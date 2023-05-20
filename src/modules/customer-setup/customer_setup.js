import { Button, Card, Col, Divider, Input, Row, Tabs, Popover } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/app-stylepage/customer_setup.scss";
import AddCustomer from "./add-customer";
import AddCarrier from "./add-carrier";
import { CUSTOMER_DATA, CUSTOMER_TYPE, CUSTOMER_DETAILS } from "../../api/data";
import {
  fetchCustomerHeaderdata,
  fetchCustomerDetails,
  customerSetupcomponent,
} from "../action/CustomerDetail";
import vector1 from "./../../assets/png/Vector1.png";
import vector2 from "./../../assets/png/Vector2.png";
import downArrow from "./../../assets/png/downarrow.png";
import CarrierTab from "./customer_setup_tabs/carrier-tab";
import TmsTab from "./customer_setup_tabs/tms-tab";
import ErpTab from "./customer_setup_tabs/erp-tab";
import ShipperTab from "./customer_setup_tabs/shipper-tab";
import PerfectScrollbar from "react-perfect-scrollbar";

function CustomerSetupmodule(props) {
  const [connect, setConnect] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [addcarrier, setAddCarrier] = useState(false);
  const customerSetup = useSelector((state) => state.customerSetup);

  const dispatch = useDispatch();
  let addCustomerHandler = () => {
    setAddCustomer(!addCustomer);
  };
  let addCarrierHandler = () => {
    setAddCarrier(!addcarrier);
  };

  useEffect(() => {
    dispatch(fetchCustomerHeaderdata(CUSTOMER_DATA));
    dispatch(fetchCustomerDetails(CUSTOMER_DETAILS));
    dispatch(customerSetupcomponent(true));
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `All`,
      children: <CarrierTab />,
    },
    {
      key: "2",
      label: `Carrier`,
      children: <CarrierTab />,
    },
    {
      key: "3",
      label: `TMS`,
      children: <TmsTab />,
    },
    {
      key: "4",
      label: `ERP`,
      children: <ErpTab />,
    },
    {
      key: "5",
      label: `Shipper`,
      children: <ShipperTab />,
    },
  ];

  return (
    <div className="add-customer">
      {addCustomer && (
        <AddCustomer
          drawerStatus={addCustomer}
          updateStatus={addCustomerHandler}
        />
      )}
      {addcarrier && (
        <AddCarrier
          drawerStatus={addcarrier}
          updateStatus={addCarrierHandler}
        />
      )}

      <Row>
        <Col lg={16}>
          <span className="customer-welcome">Welcome Back, Robert </span>
          <span className="wel-msg">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </span>
        </Col>
        <Col lg={8}>
          <div className="float-btn  d-flex flex-gap-half">
            <Button className="show-btn">
              <img src={downArrow} className="downArrow"></img>
              {"Show: Latest"}
            </Button>
            <Button className="primary-btn">
              <img src={vector1} className="vector1"></img>{" "}
              <img src={vector2} className="vector2"></img> {"Add New Carrier"}
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={{ lg: 12, xs: 4 }}>
        {customerSetup &&
          customerSetup.headerData.map((item) => {
            return (
              <Col sm={24} lg={8}>
                <Card
                  bordered={false}
                  className=" card-style"
                  style={{ width: "100%" }}
                >
                  <Row className="span-card">
                    <Col sm={24}>
                      <div className="d-flex align-items-center">
                        <span className="span-card-icon">{item.icon}</span>

                        <span className="span-card-title">{item.title}</span>
                      </div>
                      <Divider className="my-4" />
                      <span className="span-card-count">{item.count}</span>
                      <span className="span-card-val">{item.value}</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={24}>
                      <span className="span-card-update">
                        {item.lastUpdate}
                      </span>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
      </Row>
      <Row>
        <Col sm={24}>
          <div className="container-maindiv">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerSetupmodule;
