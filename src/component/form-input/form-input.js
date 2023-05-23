import React from "react";
import { Form, Input } from "antd";

import { isRequiredField } from "../../utility/utility";

const FormInput = ({
  placeholder = true,
  label,
  editMode = false,
  forFilter = false,
  margin = "mb-15",
  singleLineMode = false,
  name = `testFiled-${Math.random()}`,
  rules = [],
  colon = false,
  inverMode = false,
  disabled,
  onBlur,
  className = "",
  inputType = "text",
  onChange = false,
  defaultValue,
  value,
  readOnly = false,
  tooltip = false,
  suffix = false,
  style = {},
}) => {
  return (
    <>
      <Form.Item
        className={`${inverMode ? "invert-mode" : ""} ${margin} ${singleLineMode ? "single-line-mode" : ""
          } form-input-container ${!editMode ? "edit-mode-off" : ""
          } ${className}`}
        name={name}
        rules={rules}
        label={
          label ? (
            <div>
              {label}
              {rules.length > 0 && isRequiredField(rules) && (
                <span className="required">*</span>
              )}
            </div>
          ) : (
            false
          )
        }
        labelCol={10}
        colon={colon}
     
      >
        {inputType === "password" ? (
          <Input.Password
            id={name}
            disabled={disabled}
            readOnly={readOnly ? readOnly : !editMode}
            placeholder={
              editMode ? (placeholder ? placeholder : `Enter ${label}`) : ""
            }
            className={`${forFilter ? "filter-input" : "form-input"} `}
            {...(onBlur ? { onBlur } : {})}
            type={inputType}
            {...(onChange ? { onChange } : {})}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            suffix={suffix}
            id={name}
            disabled={disabled}
            readOnly={readOnly ? readOnly : !editMode}
            placeholder={
              editMode ? (placeholder ? placeholder : `Enter ${label}`) : ""
            }
            className={`${forFilter ? "filter-input" : "form-input"} `}
            {...(onBlur ? { onBlur } : {})}
            type={inputType}
            {...(onChange ? { onChange } : {})}
            defaultValue={defaultValue}
            style={{ ...style }}
          />
        )}
      </Form.Item>
    </>
  );
};

export default FormInput;
