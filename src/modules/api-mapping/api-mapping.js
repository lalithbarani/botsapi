import { Button, Select, Card, Col, Row, Tabs, Modal, Divider } from "antd";
import React, { useState } from "react";

import { PlusOutlined } from "@ant-design/icons";
import PrimaryLabel from "../../component/labels/primary-label";
import { ReactComponent as PaintIcon } from "./../../assets/svg/paint.svg";
import { ReactComponent as ArrowUpRightIcon } from "../../assets/svg/arrow-up-right.svg";
import { ReactComponent as CloudCheck } from "../../assets/svg/CloudCheck.svg";
import { ReactComponent as Cloud } from "../../assets/svg/cloud.svg";
import { ReactComponent as CheckCloud } from "../../assets/svg/checkCloud.svg";
import { ReactComponent as CloudCheckOutline } from "../../assets/svg/cloud-check-outline.svg";
import { ReactComponent as NoteBookSuccessIcon } from "../../assets/svg/notebook-green.svg";
import { ReactComponent as GitDiffIcon } from "../../assets/svg/GitDiff.svg";
import { ReactComponent as TreeStructureIcon } from "../../assets/svg/TreeStructure.svg";
import { ReactComponent as ListDashesIcon } from "../../assets/svg/ListDashes.svg";
import { ReactComponent as GitDiffSuccessIcon } from "../../assets/svg/GitDiff-green.svg";
import { ReactComponent as NoteBookIcon } from "../../assets/svg/Notebook.svg";
import { ReactComponent as CloudCheckOutlineSuccess } from "../../assets/svg/cloud-check-outline-green.svg";
import { ReactComponent as TreeStructureSuccess } from "../../assets/svg/tree-structure-green.svg";
import { ReactComponent as ListDashesSuccess } from "../../assets/svg/ListDashes-green.svg";
import { ReactComponent as PrintIcon } from "../../assets/svg/Printer.svg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/DownloadSimple.svg";


import FiledCard from "../../component/close-icon/cards/fields-card";
import GeneralInformationTab from "./tabs/general-information-tab";
import AuthenticationTab from "./tabs/authentication-tab";
import APITab from "./tabs/api-tab";
import MappingTab from "./tabs/mapping-tab";
import OthersTab from "./tabs/others-tab";
import NewApiCarrier from "./new-api-carrier";


import "./api-mapping.scss";
/* type list */

const list = [
    {
        key: 1,
        type: "Rate",
        btnCheck: true,
        check: true
    },
    {
        key: 2,
        type: "Tracking",
        btnCheck: false,
        check: true
    },
    {
        key: 3,
        type: "spot",
        btnCheck: false,
        check: true
    },
    {
        key: 4,
        type: "KevinCHeck",
        btnCheck: false,
        check: false
    },
    {
        key: 5,
        type: "KevinTest",
        btnCheck: false,
        check: false
    },
    {
        key: 6,
        type: "booking",
        btnCheck: false,
        check: false
    },
    {
        key: 7,
        type: "Small Package",
        btnCheck: false,
        check: false
    },
    {
        key: 8,
        type: "bookingcancel",
        btnCheck: false,
        check: false
    },
    {
        key: 9,
        type: "smallrate",
        btnCheck: false,
        check: false
    },
    {
        key: 10,
        type: "image",
        btnCheck: false,
        check: false
    },
    {
        key: 11,
        type: "BOL",
        btnCheck: false,
        check: false
    },
    {
        key: 12,
        type: "terminal",
        btnCheck: false,
        check: false
    },
    {
        key: 13,
        type: "transit",
        btnCheck: false,
        check: false
    },
    {
        key: 14,
        type: "smallship",
        btnCheck: false,
        check: false
    },
    {
        key: 15,
        type: "EDI",
        btnCheck: false,
        check: false
    },
]

/* tab item */
const tabsItem = [
    {
        key: '1',
        label: `General Information`,
        children: <GeneralInformationTab />,
        icon: <NoteBookIcon className="non-active" />,
        ActiveIcon: <NoteBookSuccessIcon className="active" />

    },
    {
        key: '2',
        label: `Authentication`,
        children: <AuthenticationTab />,
        icon: <GitDiffIcon className="non-active" />,
        ActiveIcon: <GitDiffSuccessIcon className="active" />
    },
    {
        key: '3',
        label: `API`,
        children: <APITab />,
        icon: <CloudCheckOutline className="non-active" />,
        ActiveIcon: <CloudCheckOutlineSuccess className="active" />

    },
    {
        key: '4',
        label: `Mapping`,
        children: <MappingTab />,
        icon: <TreeStructureIcon className="non-active" />,
        ActiveIcon: <TreeStructureSuccess className="active" />

    },
    {
        key: '5',
        label: `Others`,
        children: <OthersTab />,
        icon: <ListDashesIcon className="non-active" />,
        ActiveIcon: <ListDashesSuccess className="active" />

    },
]


let ApiMapping = () => {
    const [newApiCarrier, SetNewApiCarrier] = useState(false);

    let newApiCarrierHandler = (data) => {
        SetNewApiCarrier(data);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="api-mapping w-100 pb-5">
            {newApiCarrier && <NewApiCarrier drawerStatus={newApiCarrier} updateStatus={newApiCarrierHandler} />}

            <Row gutter={12} className="align-items-center">
                <Col sm={12}>
                    <h6>Available Carrier</h6>
                </Col>
                <Col sm={12} className="text-right">
                    <Button icon={<PlusOutlined />} size={"large"} className="primary-btn" onClick={() => SetNewApiCarrier(true)}>New API Carrier</Button>
                </Col>

            </Row>
            <Row gutter={12} >
                <Col sm={8}>
                    <Card
                        bordered={false}
                        style={{
                            width: "100%",
                        }}
                        className="p-0 cards-container"
                    >
                        <Row>
                            <Col sm={24} className="text-normal font-normal mb-4">
                                Available Carrier
                            </Col>
                            <Col sm={24}>
                                <Select
                                    defaultValue="A DYLE PYLE"
                                    style={{
                                        width: "100%"
                                    }}
                                    options={[]}
                                />

                            </Col>

                        </Row>
                        <Row className="mt-15 selected-card">
                            <Col sm={5}>
                                <PaintIcon />
                            </Col>
                            <Col sm={18}>
                                <h6 className="font-bold m-0 mb-5 ">A DYLE PYLE</h6>
                                <div className="d-flex align-content-center flex-gap-1 align-content-center mt-3">
                                    <span className="mt-5">

                                        <FiledCard title={"Code: PYLE"} className="text-large font-light " style={{ marginTop: "15px" }}></FiledCard>
                                    </span>

                                    <div className="d-flex align-content-center flex-gap-half align-content-center">
                                        <a href="#" className="text-underline" onClick={showModal}>API Documents </a>
                                        <ArrowUpRightIcon />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-20">
                            <Col sm={24} >
                                <span className="text-normal font-light">
                                    Method Type
                                </span>
                            </Col>
                            <Row gutter={12} className="method-list ">
                                {list.map((item) => (
                                    <Col sm={12} className="mt-15" key={item.key}>
                                        <Card style={{ background: item.btnCheck ? "#05A787" : "#FFFFFF", color: item.btnCheck ? "#FFF" : "#05A787" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span style={{ color: item.btnCheck ? "#fff" : "#101828", }} className="text-normal font-normal">
                                                    {item.type}
                                                </span>
                                                <span>

                                                    {item.btnCheck && item.check && <CloudCheck />}
                                                    {!item.btnCheck && !item.check && <Cloud />}
                                                    {!item.btnCheck && item.check && <CheckCloud />}
                                                </span>


                                            </div>
                                        </Card>

                                    </Col>
                                ))}

                            </Row>
                        </Row>
                    </Card>
                </Col>
                <Col sm={16}>
                    <Card
                        bordered={false}
                        style={{
                            width: "100%",
                        }}
                        className="p-0 cards-container"
                    >
                        <div className="d-flex flex-gap-1 align-items-center">

                            <FiledCard title={"Method Type:"} ></FiledCard>
                            <Button
                                size={"medium"}
                                style={{ borderRadius: 20, fontSize: 12, fontWeight: 400, borderColor: "#039855", color: "#039855", background: "#ECFDF3" }}
                            >
                                Rate

                            </Button>

                        </div>

                        <Row className="mt-15">
                            <Col sm={24}>
                                {/* <Tabs defaultActiveKey="1" items={tabsItem} onChange={() => { }} className="tabs-info" /> */}


                                <Tabs
                                    defaultActiveKey="1"
                                    className="tabs-info"
                                    items={tabsItem.map((item) => {
                                        return {
                                            label: (
                                                <span className="d-flex flex-gap-half">
                                                    {item.icon}
                                                    {item.ActiveIcon}
                                                    {item.label}
                                                </span>
                                            ),
                                            key: item.key,
                                            children: item.children,
                                        };
                                    })}
                                />
                            </Col>
                        </Row>
                    </Card>

                </Col>

            </Row>
            <Modal
                title="API Document"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}

                className="api-document-modal w-50"
            >
                <Divider />

                <Row>
                    <Col sm={24} >Run Before Execution</Col>
                    <Col sm={24}>
                        <Card style={{ background: "#EAECF0", height: "220px" }}></Card>
                    </Col>
                </Row>
                <Divider />
                <div className="d-flex flex-gap-1 justify-content-end">
                    <Button icon={<PrintIcon />} size={"large"} className="light-btn d-flex flex-gap-half align-items-center" >Print</Button>
                    <Button icon={<DownloadIcon />} size={"large"} className="primary-btn d-flex flex-gap-half align-items-center" >Download</Button>


                </div>

            </Modal>
        </div >
    )
}

export default ApiMapping;