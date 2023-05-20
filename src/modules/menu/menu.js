import React, { useEffect } from "react";
import { Menu } from "antd";
import { useState } from "react";
import "../../styles/app-stylepage/menu.scss";

import { MenuActions } from "../menu/menu-action";
import { useDispatch } from "react-redux";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { customerSetupcomponent } from "../action/CustomerDetail";


const pageAction = (keys) => {
  console.log(keys);
  return {
    type: keys,
    active: true,
  };
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    expandIcon: (props) => {
      if (props?.isOpen) {
        return <MinusOutlined style={{ color: "#05987B" }} className="minus" />;
      } else {
        return <PlusOutlined style={{ color: "#05987B" }} className="plus" />;
      }
    },
  };
}

const items = [
  // getItem(
  //   <div className="close-icon">
  //     <CloseIcon
  //       style={{ cursor: "pointer", width: "32px", display: "inline" }}
  //     />
  //   </div>,
  //   "close"
  // ),

  getItem("API", "apiMenu", "", [
    getItem("Overview", "overview"),
    getItem("API Mapping", "apiMapping"),
    getItem("API Source", "api-source"),
    getItem("Carrier Master", "carrier-master"),
    getItem("Carrier Type Mapping", "carrier-type-mapping"),
    getItem("Carrier Accessorial Mapping", "carrier-accessorial-mapping"),
    getItem("Carrier Error Log", "carrier-error-log"),
    getItem("Carrier Search Summary", "carrier-search-summary"),
    getItem("Customer Setup", "customerSetup"),
    getItem("API Usage", "api-usage"),
    getItem("Internal Carrier", "internal-carrier"),
    getItem("Manage Users", "manage-users"),
  ]),
  getItem("EDI", "edi", "", []),
  getItem("MAPPING", "mappingMenu", "", []),
  getItem("EDI SOURCE", "ediSourceMenu", "", [

  ]),
];
function MenuComponent(props) {
  const dispacth = useDispatch();

  const hideMenuHandler = () => {
    dispacth(MenuActions.showMenu());
  };

  
  const navigate = useNavigate();
  let location = useLocation();
  const [current, setCurrent] = useState(
    location.pathname === "/" || location.pathname === ""
      ? "customerSetup"
      : location.pathname.replace(/^./, "")
  );

  useEffect(() => {
    if (location) {
      if (current !== location.pathname.replace(/^./, "")) {
        setCurrent(location.pathname.replace(/^./, ""));
      }
    }
  }, [location, current]);

  return (
    <div className="menu-wrapper ">
      <Menu
        className="menu-items"
        defaultOpenKeys={["api"]}
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        items={items}
        selectable
        selectedKeys={[current]}
        onClick={({ key, keyPath, domEvent }) => {
          if (key === "close") {
            hideMenuHandler();
            return false;
          }
          switch (key) {
            case "customerSetup":
              navigate("/customerSetup");
              
              dispacth(pageAction(key));
              break;
            case "apiMapping":
              navigate("/apiMapping");
              
              dispacth(pageAction(key));

              dispacth(customerSetupcomponent(false));
              break;
            case "overview":
              navigate("/overview");
              dispacth(pageAction(key));

              
              break;

            default:
              navigate("/page-not-found");
              break;
          }

        }}
      />
    </div>
  );
}

export default MenuComponent;
