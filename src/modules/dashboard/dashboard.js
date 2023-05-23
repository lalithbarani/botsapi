import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardInfo } from "./actions";
import { Row, Col, Button } from "antd";
import { ReactComponent as UnionIcon } from "./../../assets/svg/Union.svg";

function Dashboard() {
  const dispatch = useDispatch();
  const dashboardInfo = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardInfo({ data: "req" }));
  }, []);

  useEffect(() => {
    console.log("====> dashboardInfo", dashboardInfo);
  }, [dashboardInfo]);

  return (
    <Fragment>
      <Row className="dashboard mt-50 vh-70">
        <Col span={12} offset={6}>
          <Row>
            <Col sm={24}>
              <div className="title">Ilango Tamil</div>
            </Col>
          </Row>
          <Row>
            <Col sm={24}>
              <div className="content mt-15">BOTSAPI</div>
            </Col>
          </Row>
          <Row>
            <Col sm={24}>
              <div className="note-text mt-15">
                Dashboard & Desktop UI UX Design
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="dashboard vh-20">
        <Col span={12} offset={6}>
          <Row>
            <Col sm={12}>
              <div className="vektora">
                <div>
                  <UnionIcon />
                </div>
                <div className="info">Vektora</div>
              </div>
            </Col>
            <Col sm={12} className="in-progress-btn">
              <Button type="primary">In Progress</Button>

            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Dashboard;
