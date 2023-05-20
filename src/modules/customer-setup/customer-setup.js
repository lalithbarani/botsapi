import { Button, Card, Col, Divider, Input, Row, Tabs, Popover } from "antd";
import React, { useState, useRef, useEffect } from "react";
import {
  PlusOutlined,
  SearchOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "../../styles/app-stylepage/customer-setup.scss";
import FiledCard from "../../component/close-icon/cards/fields-card";
import PrimaryLabel from "../../component/labels/primary-label";
import VerticalLine from "../../component/vertical-line/vertical-line";
import { ReactComponent as RightArrowIcon } from "./../../assets/svg/right-arrow.svg";
import { ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import { ReactComponent as NoSignalIcon } from "./../../assets/svg/no-signal.svg";
import { ReactComponent as FullSignalIcon } from "./../../assets/svg/full-signal.svg";
import { ReactComponent as DotIcon } from "./../../assets/svg/dot.svg";
import { ReactComponent as DotSuccessIcon } from "./../../assets/svg/dot-green.svg";
import { ReactComponent as QuestionIcon } from "./../../assets/svg/question.svg";
import uniqid from "uniqid";

import ApiSetupTabs from "./tabs/api-setup/api-setup-tabs";
import ApiTestTabs from "./tabs/api-setup/api-test-tabs";
import PerformanceTabs from "./tabs/api-setup/performance-tabs";
import StatusCodeTabs from "./tabs/api-setup/status-code-tabs";
import AddCustomer from "./add-customer";
import CustomerDetails from "./customer-details";
import { useSelector } from "react-redux";
import AddCarrier from "./add-carrier";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function CustomerSetup(props) {
  const show = useSelector((state) => state.menubar.menuVisible);

  const [state, setState] = useState({
    customersList: [
      {
        id: uniqid(),
        isShowPopup: false,
      },
      {
        id: uniqid(),
        isShowPopup: false,
      },
      {
        id: uniqid(),
        isShowPopup: false,
      },
      {
        id: uniqid(),
        isShowPopup: false,
      },
    ],
  });

  const menuVisible = useSelector((state) => state.menubar.menuVisible);

  useEffect(() => {
    let customerListData = [...state.customersList];
    customerListData.forEach((item) => item.isShowPopup = false);
    setState((state) => ({
      ...state,
      customersList: customerListData
    }))
  }, [menuVisible])



  const [connect, setConnect] = useState(false);
  const [addCustomer, setAddCustomer] = useState(false);
  const [addcarrier, setAddCarrier] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  // const selectedCard = useRef(null);
  // const selectedCard1 = useRef(null);
  // const selectedCard2 = useRef(null);
  // const myRef = useRef();

  let addCustomerHandler = () => {
    setAddCustomer(!addCustomer);
  };
  let addCarrierHandler = () => {
    setAddCarrier(!addcarrier);
  };
  const connectHandler = () => {
    setConnect(true);
  };
  const handleOpenChange = () => {
    setOpen(true);
    setOpen1(false);
    setOpen2(false);
  };
  const handleOpenChange1 = () => {
    setOpen(false);
    setOpen1(true);
    setOpen2(false);
  };
  const handleOpenChange2 = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(true);
  };

  const disConnectHandler = () => {
    setConnect(false);
  };

  // const addClassHandler = () => {
  //   selectedCard.current.classList.add("selected-card");
  // };
  // const addClassHandler1 = () => {
  //   selectedCard1.current.classList.add("selected-card");
  // };
  // const addClassHandler2 = () => {
  //   selectedCard2.current.classList.add("selected-card");
  // };

  // const removeClassHandler = () => {
  //   selectedCard.current.classList.remove("selected-card");
  // };

  const tabsItem = [
    {
      key: "1",
      label: `API Setup`,
      children: <ApiSetupTabs />,
    },
    {
      key: "2",
      label: `API Test`,
      children: <ApiTestTabs />,
    },
    {
      key: "3",
      label: `Status Code Mapping`,
      children: <StatusCodeTabs />,
    },
    {
      key: "4",
      label: `Performance`,
      children: <PerformanceTabs />,
    },
  ];
  // useEffect(() => {
  //   const x = myRef.current.offsetTop;
  //   console.log(x);
  //   if (open) {
  //     setOpen(false);
  //   } else if (open1) {
  //     setOpen1(false);
  //   } else if (open2) {
  //     setOpen2(false);
  //   }
  // }, [show]);

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

      <Row
        gutter={{ lg: 12, xs: 4 }}
        className="customer-setup justify-content-center

"
      >
        <Col sm={24} lg={show === true ? 6 : 7} className="custmer-card " style={{ marginLeft: !show ? '-2px' : '' }}>
          <Card
            bordered={false}

            className="p-0 cards-container "
            style={{ backgroundColor: "#f2f4f7 !important", border: "none", height: "100vh", width: "100%" }}
          >
            <div style={{
              backgroundColor: "#FFFFFF", borderRadius: "8px 8px 0 0"
            }}
              className="p-5">
              <Row
                gutter={{ xl: 12, lg: 5 }}
                align={"middle"}
                className="justify-content-between px-10 pt-5"

              >
                <Col xl={10}>
                  <span className="title">Customers</span>
                </Col>
                <Col xl={14} className="text-right">
                  <Button
                    icon={<PlusOutlined />}
                    size={"large"}
                    className="primary-btn"
                    onClick={() => setAddCustomer(true)}
                  >
                    Add Customer
                  </Button>
                </Col>
              </Row>
              <Row className="mt-15 px-10 pb-10">
                <Col sm={24}>
                  <Input
                    placeholder="Search Profile"
                    prefix={<SearchOutlined />}
                  />
                </Col>
              </Row>
            </div>

            {/* </Card>
          <Card style={{ backgroundColor: "transparent !important" }} className="customer-items"> */}
            <Row style={{ backgroundColor: "transparent !important" }}>
              <Col sm={24} >
                <PerfectScrollbar
                  style={{
                    height: "auto",

                    overflowY: "scroll !important",
                    overflowX: "hidden !important",
                  }}
                  className="p-1  customer-box-scroll"
                >
                  {state.customersList.map((obj, index) => (
                    <Row className={`mb-10 ${index == 1 ? 'selected-card' : 'un-selected-card'}`} key={obj.id} >
                      <Col sm={24}>
                        <Row gutter={20}>
                          <Col sm={12} className="text-normal font-normal">
                            3M Company
                          </Col>
                          <Col sm={12} className="">
                            <FiledCard
                              title={"Code:1102"}
                              className="text-normal font-light"
                            ></FiledCard>
                          </Col>
                        </Row>

                        <Row className=" inside-wrapper mt-5 " justify={"space-between"} gutter={20}>
                          <Col sm={12}>
                            <FiledCard title={"Created Date"} >
                              <PrimaryLabel
                                normal={true}
                                className="text-normal font-normal"
                              >
                                01/01/2023
                              </PrimaryLabel>
                            </FiledCard>
                            <FiledCard title={"Created By "}>
                              <PrimaryLabel
                                normal={true}
                                className="text-normal font-normal"
                              >
                                Ilango
                              </PrimaryLabel>
                            </FiledCard>
                          </Col>

                          <Col sm={12}>
                            <FiledCard title={"Total Transation"}>
                              <PrimaryLabel
                                normal={true}
                                className="text-normal font-normal"
                              >
                                23,082
                              </PrimaryLabel>
                            </FiledCard>

                            <FiledCard title={"Total Connection "}>
                              <PrimaryLabel
                                normal={true}
                                className="text-normal font-normal"
                              >
                                30
                              </PrimaryLabel>
                            </FiledCard>
                          </Col>
                          {/* </Row>
                        <Row className=" inside-wrapper mt-10" gutter={12}> */}
                          <Col sm={11}>

                          </Col>

                          <Col sm={11}>

                          </Col>
                        </Row>
                        <Row className="mt-8">
                          <Col
                            sm={24}
                            className="d-flex justify-content-center pr-15 align-items-center"
                          >
                            <Popover
                              closable={true}
                              content={CustomerDetails}
                              placement="right"
                              trigger="click"
                              title={
                                <div className="d-flex justify-content-between">
                                  Customer Detail{" "}
                                  <CloseOutlined
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      state.customersList.forEach((item) => {
                                        item.isShowPopup = false;
                                      });
                                      setOpen(!open);
                                    }}
                                  />
                                </div>
                              }
                              style={{ width: "580px !important" }}
                              open={obj.isShowPopup}
                              className="popovers"
                              onOpenChange={handleOpenChange}
                            >
                              <RightArrowIcon
                                style={{ cursor: "pointer", background: "#fff", width: "75%", height: "26px", borderRadius: "5px" }}
                                onClick={() => {
                                  state.customersList.forEach((item) => {
                                    if (item.id === obj.id) {
                                      item.isShowPopup = true;
                                    } else {
                                      item.isShowPopup = false;
                                    }
                                  });
                                  setOpen(!open);
                                }}
                                className="arrow-right py-5 "
                              />
                            </Popover>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  ))}

                </PerfectScrollbar>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm={24} lg={show === true ? 7 : 8} className="carrier-card">
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "100vh",
            }}
            className="p-0 cards-container"
          >
            <Row align={"middle"} className="justify-content-between px-10">
              <Col xl={18}>
                <span className="title">Connected Carrier(3)</span>
              </Col>
              <Col xl={6} className="d-flex justify-content-end ">
                <Button
                  icon={<PlusOutlined />}
                  size={"large"}
                  className="primary-btn"
                  onClick={addCarrierHandler}
                >
                  Add Carrier
                </Button>
              </Col>
            </Row>
            <Row className="mt-15 px-10">
              <Col sm={24}>
                <Input
                  placeholder="Search Carrier..."
                  prefix={<SearchOutlined />}
                />
              </Col>
            </Row>
            <div className="page-scroll mt-15">
              <PerfectScrollbar
                style={{
                  maxHeight: "50rem",
                  overflowY: "scroll !important",
                  overflowX: "hidden !important",
                }}
                className="px-15"
              >
                <Row className="mt-5 selected-card">
                  <Col sm={24}>
                    <Row gutter={12} align={"middle"}>
                      <Col xl={4}>
                        <PaintIcon width={"4rem"} height={"4rem"} />
                      </Col>
                      <Col xl={17}>
                        <FiledCard
                          title={"CENTRAL FREIGHT LINER (CENF)"}
                          labelClass="title-override"
                          className="text-normal"
                        ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                      </Col>
                      <Col xl={3}>
                        <NoSignalIcon />
                      </Col>
                    </Row>
                    <Row className="mt-5 inside-wrapper" align={"middle"}>
                      <Col
                        sm={24}
                        className="d-flex align-items-center flex-gap-half mb-10"
                      >
                        <AppstoreOutlined />
                        <FiledCard
                          textClass="pt-5"
                          title={"JkalanqN2nd 12"}
                        ></FiledCard>
                      </Col>
                      <Col
                        sm={24}
                        className="d-flex align-items-center flex-gap-half mb-10"
                      >
                        <CalendarOutlined />
                        <FiledCard
                          textClass="pt-5"
                          title={"12/12/2022"}
                        ></FiledCard>
                      </Col>
                      <Col
                        sm={24}
                        className="d-flex align-items-center flex-gap-half"
                      >
                        <UserOutlined />
                        <FiledCard
                          textClass="pt-5"
                          title={"Ilango"}
                        ></FiledCard>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="mt-10 un-selected-card">
                  <Col sm={24}>
                    <Row gutter={12} align={"middle"}>
                      <Col sm={4}>
                        <PaintIcon width={40} height={40} />
                      </Col>
                      <Col sm={17}>
                        <FiledCard
                          title={"CENTRAL FREIGHT LINER (CENF)"}
                          labelClass="title-override"
                          className="text-normal"
                        ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                      </Col>
                      <Col sm={3}>
                        <FullSignalIcon />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Divider className="my-10" />
                <Row className=" un-selected-card">
                  <Col sm={24}>
                    <Row gutter={12} align={"middle"}>
                      <Col sm={4}>
                        <PaintIcon width={40} height={40} />
                      </Col>
                      <Col sm={17}>
                        <FiledCard
                          title={"CENTRAL FREIGHT LINER (CENF)"}
                          labelClass="title-override"
                          className="text-bold font-bold"
                        ></FiledCard>
                        <FiledCard title={"Code: 1102"}></FiledCard>
                      </Col>
                      <Col sm={3}>
                        <FullSignalIcon />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </PerfectScrollbar>
            </div>
          </Card>
        </Col>
        <Col sm={19} lg={show === true ? 11 : 9}>
          <Card
            bordered={false}
            style={{
              width: "100%",
              height: "100vh",
            }}
            className="cards-container"
          >
            <Row className=" selected-card b-none align-items-center mx-10">
              <Col lg={show ? 15 : 17}>
                {connect && (
                  <Button
                    icon={<DotSuccessIcon className="pr-10" />}
                    size={"large"}
                    style={{
                      borderRadius: 20,
                      fontSize: "1rem",
                      fontWeight: 400,
                      borderColor: "#039855",
                      color: "#039855",
                      background: "#ECFDF3",
                    }}
                    className="px-20"
                  >
                    Connected{connect}
                  </Button>
                )}
                {!connect && (
                  <Button
                    icon={<DotIcon className="pr-10" />}
                    size={"large"}
                    style={{
                      borderRadius: 20,
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#667085",
                    }}
                    className="px-20"
                  >
                    Not Connected{connect}
                  </Button>
                )}
                <Row gutter={12} align={"middle"} className="mt-15">
                  <Col sm={24}>
                    <FiledCard
                      title={"CENTRAL FREIGHT LINER (CENF)"}
                      labelClass="title-override"
                    ></FiledCard>
                  </Col>
                  <Col sm={24} className="mt-5">
                    <FiledCard
                      title={"Customer: 3M Company - 1102"}
                    ></FiledCard>
                    <div className="d-flex flex-direction-row flex-gap-1 mt-5">
                      <FiledCard title={"Carrier Instruction"}></FiledCard>
                      <QuestionIcon />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={show ? 9 : 7} className="text-right mt-10">
                {connect && (
                  <div className="d-flex flex-direction-column ">
                    <Button
                      type="primary"
                      size={"large"}
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        background: "#D92D20",
                      }}
                      onClick={disConnectHandler}
                    >
                      Disconnect
                    </Button>
                    <Button
                      type="primary"
                      size={"large"}
                      className="mt-10"
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        background: "#fff",
                        color: "#000",
                      }}
                    >
                      Debug
                    </Button>
                  </div>
                )}
                {!connect && (
                  <div style={{ textAlign: "right" }}>
                    <Button
                      type="primary"
                      size={"large"}
                      style={{ fontSize: "1.125rem", fontWeight: 500 }}
                      onClick={connectHandler}
                      className=" align-center"
                    >
                      Connected
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
            <Row className="mt-15">
              <Col sm={24}>
                <Tabs
                  defaultActiveKey="1"
                  items={tabsItem}
                  onChange={() => { }}
                  className="tabs-info "
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row >
    </div >
  );
}
export default CustomerSetup;
