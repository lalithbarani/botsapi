import { Drawer, Tabs, Button, Modal, Row, Col } from "antd";
import React, { Fragment, useState } from "react";
import "../../../../styles/app-stylepage/edit-mapping.scss";
import MappingItemTab from "./edit-mapping-tabs/mapping-item-tab";
import MappingViewTab from "./edit-mapping-tabs/mapping-view-tab";
import { ReactComponent as FileIcon } from "../../../../assets/svg/File.svg";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


let EditMapping = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const items = [
        {
            key: '1',
            label: `Mapping View`,
            children: <MappingViewTab />,
        },
        {
            key: '2',
            label: `Mapping Items`,
            children: <MappingItemTab />,
        },

    ];
    let tabonChangeHandler = (key) => {
        console.log(key);

    }
    return (
        <Fragment>

            <Drawer
                title="Edit Mapping"
                placement={placement}
                closable={true}
                onClose={onClose}
                open={open}
                maskClosable={false}
                style={{ width: "1000px" }}
                key={placement}
                className="edit-mapping"
                footer={<div>
                    <div className="d-flex justify-content-between ">
                        <Button size={"large"} className="light-btn px-30" >Back</Button>
                        <Button size={"large"} className="primary-btn px-30" onClick={showModal} >Save</Button>
                    </div>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                        className="w-25"
                        footer={
                            <div className="w-100 d-flex flex-1">
                                <Button size={"large"} className="light-btn w-100">Cancel</Button>
                                <Button size={"large"} className="primary-btn  w-100">Save</Button>
                            </div>
                        }>
                        <FileIcon className="p-10 border-rounded" style={{ background: "#E6F6F3" }} />
                        <div className="my-15 ">Save Changes?</div>

                    </Modal>
                </div>
                }

            >
                <div className='' >

                    <Tabs defaultActiveKey="1" items={items} onChange={tabonChangeHandler} className="sub-tab w-100 " style={{ overflowY: "hidden" }} />
                </div>
            </Drawer >
        </Fragment >



    )
}
export default EditMapping;