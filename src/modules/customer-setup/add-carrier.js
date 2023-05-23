import {
  Drawer,
  Row,
  Col,
  Input,
  Card,
  Button,
  Menu,
  Checkbox,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PrimaryLabel from "../../component/labels/primary-label";

import canon from "./../../assets/png/canon.png";
import paint from "../../assets/png/paint.png";
import c2icon from "./../../assets/png/c2.png";
import { ReactComponent as Graph } from "./../../assets/svg/Graph.svg";
import loveclipicon from "./../../assets/png/loveclip.png";
import moicon from "./../../assets/png/mo.png";
import salesforceicon from "./../../assets/png/salesforce.png";

import timeicon from "./../../assets/png/time.png";

import { ReactComponent as RightArrowIcon } from "../../assets/svg/ArrowRight.svg";
import React, { useState, Fragment } from "react";

import { ReactComponent as Minusicon } from "../../assets/svg/minus.svg";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("All (50)", "all", ""),
  getItem("TMS (10)", "tms", ""),
  getItem("Carrier (8)", "carrier", ""),
  getItem("ERP (12)", "erp", ""),
  getItem("Shipper (20)", "sHipper", ""),
];

const carrierList = [
  {
    id: 1,
    name: "Canon",
    productName: "SalesForce",
    imges: canon,
    selected: false,
  },
  {
    id: 2,
    name: "Time",
    productName: "SalesForce",
    imges: timeicon,
    selected: false,
  },
  {
    id: 3,
    name: "Mo",
    productName: "SalesForce",
    imges: moicon,
    selected: false,
  },
  {
    id: 4,
    name: "Love clip",
    productName: "SalesForce",
    imges: loveclipicon,
    selected: false,
  },
  {
    id: 5,
    name: "c2",
    productName: "SalesForce",
    imges: c2icon,
    selected: false,
  },
  {
    id: 6,
    name: "Sales Force",
    productName: "SalesForce",
    imges: salesforceicon,
    selected: false,
  },
  {
    id: 7,
    name: "Time",
    productName: "SalesForce",
    imges: timeicon,
    selected: false,
  },
  {
    id: 8,
    name: "paint",
    productName: "SalesForce",
    imges: paint,
    selected: false,
  },
  {
    id: 9,
    name: "Mo",
    productName: "SalesForce",
    imges: moicon,
    selected: false,
  },
];

let AddCarrier = (props) => {
  const [open, setOpen] = useState(props.drawerStatus);
  const [placement, setPlacement] = useState("left");
  const [filterData, setFilterData] = useState(carrierList);

  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onClose = () => {
    props.updateStatus(false);
    setOpen(false);
  };

  const filterHandler = (e) => {
    let value = e.target.value.toLowerCase();
    console.log(value);
    let result = [];

    result = carrierList.filter((data) => {
      return data.name.search(value) != -1;
    });

    setFilterData(result);
  };

  return (
    <Drawer
      className="addcarrier_block p-0 carrier"
      title="Add Carrier "
      placement={placement}
      closable={true}
      maskClosable={false}
      onClose={onClose}
      open={open}
      key={placement}
      footer={
        <Button
          icon={<RightArrowIcon />}
          size={"large"}
          className="m-5  primary-btn d-flex align-items-center flex-direction-row-reverse flex-gap-1 float-right"
        >
          Add Carrier
        </Button>
      }
    >
      <div className="">
        <Row>
          <Col
            lg={8}
            className="carrier-menubar p-20"
            style={{ overflowX: "hidden" }}
          >
            <Row>
              <Col lg={24}>
                <div className=" minismall">AVAILABLE CARRIER</div>
              </Col>
              <Col lg={24} className="mt-10">
                <Menu
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={[
                    "soap-envelope",
                    "soap-body",
                    "ns1RateEstimateResponseVO",
                  ]}
                  mode="inline"
                  theme={theme}
                  items={items}
                  style={{ width: "100%", border: "none" }}
                  className="b-0"
                  expandIcon={({ isActive }) =>
                    !isActive ? <Minusicon /> : <PlusOutlined fill="#05987B" />
                  }
                />
              </Col>
            </Row>
          </Col>

          <Col lg={16} className="p-20">
            <Row
              align={"middle"}
              style={{ overflowX: "hidden" }}
              className="pb-10"
            >
              <Col sm={24}>
                <Input
                  placeholder="Search carrier ... "
                  type="text"
                  onChange={filterHandler}
                  className="w-98"
                />
              </Col>
            </Row>

            <PerfectScrollbar
              style={{
                maxHeight: "calc(100vh-105px)",
                overflowY: "scroll !important",
                overflowX: "hidden !important",
              }}
              className="pr-5"
            >
              <Row className="mt-20 " gutter={[10, 0]}>
                {filterData.length > 0 && (
                  <Fragment>
                    {filterData.map((list) => (
                      <Col Col lg={8} key={list.id}>
                        <Checkbox onChange={onChange}>
                          <Card key={list.id} className="p-8">
                            <div className="mx-auto text-center">
                              <img
                                src={list.imges}
                                alt={list.name}
                                width={60}
                                height={60}
                              />
                              <span>{list.productName}</span>
                            </div>
                          </Card>
                        </Checkbox>
                      </Col>
                    ))}
                  </Fragment>
                )}

                {filterData.length === 0 && (
                  <div className="d-flex flex-direction-column justify-content-center align-items-center w-50 mx-auto no-item-container">
                    <Graph
                      className="p-8 bg-light mb-8"
                      style={{ borderRadius: "8px" }}
                    />
                    <span className="text-large font-bold mb-8">
                      Carrier Not Found
                    </span>
                    <PrimaryLabel
                      className="text-large font-light "
                      style={{ textAlign: "center" }}
                    >
                      We can’t find any carrier you looking for.
                    </PrimaryLabel>
                    <PrimaryLabel
                      className="text-large font-light mb-8"
                      style={{ textAlign: "center" }}
                    >
                      Request for desire carrier.
                    </PrimaryLabel>
                    <Button className="request-btn">Request Carrier</Button>
                  </div>
                )}
              </Row>
            </PerfectScrollbar>
          </Col>
        </Row>
      </div>
    </Drawer>
  );
};
export default AddCarrier;
