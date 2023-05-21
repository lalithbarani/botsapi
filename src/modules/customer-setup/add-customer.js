import { Drawer, Row, Col, Input, Button } from 'antd'
import React, { useState } from "react";
import { Footer } from 'antd/es/layout/layout';
import FormInput from "../../component/form-input/form-input";
import { ReactComponent as RightArrowIcon } from "./../../assets/svg/ArrowRight.svg";



let AddCustomer = (props) => {
    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    console.log("open", open);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <Drawer className='widths'
            title="Add Customer"
            placement={placement}
            closable={true}
            onClose={onClose}
            maskClosable={false}
            open={open}
            key={placement}
            footer={<div><Button size={"large"} disabled={false} className=" pl-20 p-20 m-5  primary-btn d-flex align-items-center flex-direction-row-reverse flex-gap-1 float-right" >
        save
            </Button>
            <Button size={"large"} disabled={false} className=" pl-20 p-20 m-5  primary-btn d-flex align-items-center flex-direction-row-reverse flex-gap-1 float-right" >
            back
        </Button></div>}

        >
            <div className='customer' >

                <Row>

                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"Customer code"}
                            placeholder={"Enter Customer code"}
                            name="customerName"
                        />
                    </Col>
                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"customer description"}
                            placeholder={"Enter customer description"}
                            name="creatorName"
                        />
                    </Col>
                    <Col sm={24} >
                        <FormInput
                            editMode={true}
                            label={"customer reference code"}
                            placeholder={"Enter customer reference code "}
                            name="poNo"
                        />
                    </Col>
                </Row>
            </div>
        </Drawer>
    )
}
export default AddCustomer;