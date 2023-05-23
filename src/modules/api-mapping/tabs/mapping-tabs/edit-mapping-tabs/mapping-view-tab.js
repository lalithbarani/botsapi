import { Row, Col, Input, Button,  Divider } from "antd";
import React, { Fragment, useState } from "react";
import PrimaryLabel from "../../../../../component/labels/primary-label";

import FormInput from "../../../../../component/form-input/form-input"

import { FileUploader } from "react-drag-drop-files";//drag and drop file upload 
import {
    SearchOutlined,
    PlusOutlined
} from "@ant-design/icons";
import MappingViewSourceMenu from "./mapping-view-source-menu";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


const fileTypes = ["JPG", "PNG", "GIF"];

let MappingViewTab = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    const [container, setContainer] = useState(null);

    return (
        <Fragment>
            <Row gutter={35} className=" flex-gap-half" style={{ overflowY: "hidden" }}>
                <Col sm={9} className="b-1 p-15 " style={{ borderRadius: "12px" }}>
                    <Row >
                        <Col sm={24} >
                            <PrimaryLabel normal={true} className="text-20 font-normal">Source</PrimaryLabel>

                        </Col>
                        <Col sm={24}>
                            <div className="d-flex flex-gap-half  mt-10">

                                <Input placeholder="Search..." prefix={<SearchOutlined />} />
                                <Button className="primary-btn">Expand</Button>
                            </div>

                        </Col>
                        <Row className="mt-15">
                            <Col sm={24}>
                                <MappingViewSourceMenu />
                            </Col>

                        </Row>

                    </Row>
                </Col>

                <Col sm={14} className="b-1 desination-container" style={{ borderRadius: "12px" }}>
                    <div className="mt-15">
                        <PrimaryLabel normal={true} className="text-20 font-normal">Destination</PrimaryLabel>
                    </div>

                    <Row gutter={25} className="mt-10 justify-content-between">
                        <Col lg={8} className="text-center">
                            <div className="primary-box">BOST API Node</div>
                        </Col>
                        <Col lg={8} className="text-center">
                            <div className="primary-box">Carrier Node</div>
                        </Col>
                        <Col lg={8} className="text-center">
                            <div className="primary-box">Default Value</div>
                        </Col>


                    </Row>
                    <PerfectScrollbar style={{ maxHeight: '325px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">

                        <div>

                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 "
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-25 align-items-center">
                                <Col lg={5} className="text-center">
                                    <div className="secondary-box">BOST API Node</div>
                                </Col>
                                <Col lg={1} style={{ marginLeft: "-5px" }}><Divider plain /></Col>
                                <Col lg={10} className="fileUploader">
                                    <FileUploader handleChange={handleChange} label='Drag & drop method here ...' />

                                </Col>
                                <Col lg={1} style={{ marginLeft: "0px" }}><Divider plain /></Col>
                                <Col lg={7}>
                                    <FormInput editMode={true}
                                        placeholder={"Enter value"}
                                        name="value"
                                        style={{ margin: "0 !important" }}
                                        className="m-0 h-100"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </PerfectScrollbar>


                </Col>

            </Row>

        </Fragment >
    )
}
export default MappingViewTab;