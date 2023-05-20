import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/app-stylepage/app-layout.scss";
import Header from "../header/header";
import { Col, Row, Card, Layout } from "antd";
import MenuComponent from "../menu/menu";
import menuAction from "../menu/menu-action";
import { useSelector, useDispatch } from "react-redux";
import Sider from "antd/es/layout/Sider";

const AppLayout = () => {
  const dispacth = useDispatch();
  const show = useSelector((state) => state.menubar.menuVisible);
  const customerSetup = useSelector((state) => state.customerSetup);
  const { Content, Sider } = Layout;


  return (
    <Layout>
      <Sider
        collapsible
        collapsed={show}
        collapsedWidth={0}
        style={{ zIndex: 3 }}
        trigger={null}
        className="menu-slider"
        width={250}
      >
        <div className="menu-container">
          <MenuComponent />
        </div>
      </Sider>
      <Layout>
        <div className="main-container" style={{ marginLeft: !show ? '-9px' : '' }}>
          <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }}>
            <Col sm={24}>
              <Header />
              <div className="pt-30">
                <Outlet />
              </div>
            </Col>
            {customerSetup.customerSetupclicked && (
              <div>
                <Col sm={24} lg={24} className="card-body">
                  <Card bordered={false} style={{ width: "100%" }}></Card>
                </Col>
              </div>
            )}
          </Row>
        </div>
        <div className="container-background"></div>
      </Layout>
    </Layout>

  );
};

export default AppLayout;
