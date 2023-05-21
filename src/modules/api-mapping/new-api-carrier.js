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

const steps = [
    {
        title: 'Step 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <NoteBookActiveIcon />
    },
    {
        title: 'Step 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: <GitDiffIcon />
    },
    {
        title: 'Step 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        icon: <CloudCheckIcon />
    }
];


let NewApiCarrier = (props) => {

    const [open, setOpen] = useState(props.drawerStatus);
    const [placement, setPlacement] = useState('left');
    const showDrawer = () => setOpen(true);
    const onClose = () => {
        props.updateStatus(false);
        setOpen(false);
    };
    const onChange = (e) => setPlacement(e.target.value);
    const description = 'This is a description.';

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
                        <div>
                            <div className="vertical-icon-steps">
                                {steps.map((step, index) => (
                                    <div key={index} className="vertical-icon-step">
                                        <div className="icon">{step.icon}</div>
                                        <div className="content">
                                            <h3 className="title">{step.title}</h3>
                                            <p className="description">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>                        </div>

                        

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

              



            </Drawer>



        </Fragment >


    )
}
export default NewApiCarrier;