import { Button } from "antd";
import React from "react";


const IconButton = ({
    children,
    onClick = () => { },
    loading = false,
    className = "",
    disabled = false,
    buttonType = "button",
}) => {
    return (
        <Button
            // id={uniqueID()}
            loading={loading}
            ghost
            onClick={onClick}
            className={`icon-button ${className}`}
            shape="circle"
            icon={children}
            size="large"
            disabled={disabled}
            htmlType={buttonType}
        />
    );
};

export default IconButton;
