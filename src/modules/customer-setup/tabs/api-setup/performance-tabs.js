import React, { Fragment } from "react";
import { Row, Col, Progress } from "antd";
import PrimaryLabel from "../../../../component/labels/primary-label";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Box } from "rebass";
import "react-circular-progressbar/dist/styles.css";

import ProgressBar from "../../../../component/progress/progress-bar";
let PerformanceTabs = () => {
  const percentage = 50;

  return (
    <Fragment>
      <Row gutter={12} className="justify-content-center pb-15">
        <Col sm={12}>
          <Row className="jutify-content-center mx-auto">
            <Col sm={24} className="mt-10 text-center">
              <Box
                sx={{
                  height: 150,
                  width: 160,
                 
                }}
                className="progress-bar  text-center"
              >
                <CircularProgressbar
                  value={20}
                  circleRatio={0.5}
                  strokeWidth={10}
                  styles={{
                    root: {
                      transform: "rotate(0.75turn)",
                    },
                    path: { stroke: "#05987B" },
                    trail: { stroke: "#F9F5FF" },
                    trailColor: "grey",
                    backgroundColor: "red",
                  }}
                />

                <span className="percentage-value">20%</span>
              </Box>
            </Col>
            <Col sm={24} className="text-center">
              <PrimaryLabel>Carrier Performance by Customer (12)</PrimaryLabel>
            </Col>
          </Row>
          <Row></Row>
        </Col>
        <Col sm={12}>
          <Row>
            <Col sm={24} className="mt-10">
              <Box
                sx={{
                  height: 150,
                  width: 160,

                 
                }}
                className="progress-bar m-auto"
              >
                <CircularProgressbar
                  value={50}
                  circleRatio={0.5}
                  strokeWidth={10}
                  styles={{
                    root: {
                      transform: "rotate(0.75turn)",
                    },
                    path: { stroke: "#05987B" },
                    trail: { stroke: "#F9F5FF" },
                    trailColor: "grey",
                    backgroundColor: "red",
                  }}
                />
                <span className="percentage-value">40%</span>
              </Box>
            </Col>
            <Col sm={24} className="text-center">
              <PrimaryLabel>Global Performance (8)</PrimaryLabel>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};
export default PerformanceTabs;
