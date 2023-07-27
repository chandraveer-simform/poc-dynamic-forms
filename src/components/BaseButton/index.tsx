import React, { ReactNode } from "react";
import { Button } from "antd";

interface Props {
  children?: ReactNode;
  type: "link" | "text" | "default" | "primary" | "dashed";
  classNames?: string;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const BaseButton: React.FC<Props> = ({
  children,
  type,
  classNames,
  htmlType,
  onClick = () => {},
  ...rest
}) => {
  return (
    <Button
      type={type}
      className={`${classNames}`}
      {...rest}
      htmlType={htmlType}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default BaseButton;
