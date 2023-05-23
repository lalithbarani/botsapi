import { Drawer, Button, Row, Col, Select, Space, Steps, Divider } from 'antd';
import React, { Fragment, useState } from 'react';
import { ReactComponent as NoteBookActiveIcon } from '../../assets/svg/notebook-green.svg';
import { ReactComponent as GitDiffIcon } from '../../assets/svg/GitDiff.svg';
import { ReactComponent as CloudCheckIcon } from '../../assets/svg/cloud-check-outline.svg';
import { ReactComponent as ListDahesIcon } from '../../assets/svg/ListDashes.svg';
import FormInput from '../../component/form-input/form-input';
import FiledCard from '../../component/close-icon/cards/fields-card';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { FaCheck, FaCircle } from 'react-icons/fa';
import '../../styles/app-stylepage/new-api-carrier.scss'



let NewApiCarrier = (props) => {

    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => setOpen(true);
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
    // const onChange = (e) => setPlacement(e.target.value);

    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    const description = '';

    return (
        <Fragment>
            <Drawer
                title="New API Carrier"
                placement={placement}
                closable={true}
                maskClosable={false}
                style={{ width: "900px" }}
                onClose={onClose}
                open={open}
                key={placement}
                className='new-api-carrier'
                footer={<div className='d-flex justify-content-between'>
                    <Button size={"large"} className="secondary-btn text-center w-20"  >Back</Button>
                    <Button size={"large"} className="primary-btn w-20" >Next</Button>
                </div>}

            >
                <Row>

                    <Col sm={8} >
                        <Steps
                            current={current}
                            onChange={onChange}
                            direction="vertical"
                            size="large"
                            items={[
                                {
                                    title: 'General Information',
                                    icon: <NoteBookActiveIcon />
                                },
                                {
                                    title: 'Authentication/Attribute',
                                    icon: <GitDiffIcon />
                                },
                                {
                                    title: 'API',
                                    icon: <CloudCheckIcon />
                                },
                                {
                                    title: 'Others',
                                    icon: <ListDahesIcon />
                                },
                            ]}
                        />


                    </Col>
                    <Col sm={1}>
                        <Divider type="vertical" style={{ height: "500px" }} />
                    </Col>
                    <Col sm={15}>
                        <PerfectScrollbar style={{ maxHeight: '415px', overflowY: 'scroll !important', overflowX: 'hidden !important' }} className="px-15">

                            <div>
                                <Space direction="vertical" size="large" style={{ display: 'flex' }}>


                                    <FiledCard title={"Carrier"} >
                                        <Select
                                            defaultValue="Select Carrier"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={{}}
                                            options={[

                                            ]}
                                        />
                                    </FiledCard>
                                    <FiledCard title={"Logistichub API"} >
                                        <Select
                                            defaultValue="Select "
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={{}}
                                            options={[

                                            ]}
                                        />
                                    </FiledCard>
                                    <FiledCard title={"Request Type"}  >
                                        <Select
                                            defaultValue="Select Request Type"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={{}}
                                            options={[

                                            ]}
                                        />
                                    </FiledCard>

                                    <FormInput
                                        editMode={true}
                                        label={"Username"}
                                        placeholder={"Enter Username"}
                                        name="userName"
                                    />
                                </Space>
                                <div>

                                </div>
                                <FormInput
                                    editMode={true}
                                    label={"Password"}
                                    placeholder={"Enter Password"}
                                    name="password"
                                />
                                <FormInput
                                    editMode={true}
                                    label={"Account Number"}
                                    placeholder={"Enter Account Number"}
                                    name="accountNumber"
                                />
                            </div>
                        </PerfectScrollbar>

                    </Col>

                </Row>

                {/* <Divider /> */}



            </Drawer>



        </Fragment >


    )
}
export default NewApiCarrier;