import { Avatar, Col, Dropdown, Row, Space } from "antd";
import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as HamburgerMenuIcon } from "./../../assets/svg/hamburger-menu.svg";
import { ReactComponent as LogoIcon } from "./../../assets/svg/logo.svg";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { MenuActions } from "../menu/menu-action";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../../component/Button/IconButton";


const lowest = 10;
const middle = 11;
const highest = 12;

function Header(props) {
  const dispacth = useDispatch();
  const show = useSelector(state => state.menubar.menuVisible);
  const [percent, setPercent] = useState(10);


  const showMenuHandler = () => {
    dispacth(MenuActions.showMenu());
  }


  const nodeRef = useRef(null);

  const items = [
    {
      key: "1",
      label: <span>Profile</span>,
    },
  ];



 


  const handleIncreaseFontSize = (size) => {
    setPercent(size)
    
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${percent}px`;
  }, [percent]);
  return (
    <Row gutter={{ xs: 8, sm: 8, md: 16, lg: 16 }} className="header-container">

      <Col span={8}>
        <div className="hamburge-menu">
          <HamburgerMenuIcon onClick={showMenuHandler} style={{ cursor: "pointer" }} />

          <div className="app-title">API Mapping</div>

        </div>
        
        
      </Col>
      <Col span={6}>
        
        <div className="logo-info">
          <LogoIcon />
          <div className="logo-text">bots api</div>
        </div>
      </Col>
      
      <Col span={10} className="d-flex justify-content-end flex-gap-1" >
        <div className="dynamic-font-size-container">
          <Row className="text-container" gutter={0}  >
            <Col>
              <IconButton
                onClick={() => handleIncreaseFontSize(lowest)}
                className={`${percent === lowest && "active"}`}
              >
                A
              </IconButton>
            </Col>
            <Col>
              <IconButton
                onClick={() => handleIncreaseFontSize(middle)}
                className={`${percent === middle && "active"}`}
              >
                A
              </IconButton>
            </Col>
            <Col>
              <IconButton
                onClick={() => handleIncreaseFontSize(highest)}
                className={`${percent === highest && "active"}`}
              >
                A
              </IconButton>
            </Col>
          </Row>
          <div className="line-container">
            <span className={`${percent === lowest && "active"}`}></span>
            <span className={`${percent === middle && "active"}`}></span>
            <span className={`${percent === highest && "active"}`}></span>
          </div>
        </div>
        <div className="profile-wrapper">
          <Avatar size="large" icon={<UserOutlined />} />
          <Dropdown
            menu={{
              items,
            }}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                <div>
                  <div className="name">Robert Fox</div>
                  <div className="email">robert.admin@bostapi.com</div>
                </div>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
}
export default Header;
