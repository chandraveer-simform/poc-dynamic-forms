import React from "react";
import { Button } from "antd";

interface Props {
  type: "link" | "text" | "default" | "primary" | "dashed";
  label: string;
  classNames?: string;
}

const BaseButton: React.FC<Props> = ({ type, label, classNames, ...rest }) => {
  return (
    <Button type={type} className={`${classNames}`} {...rest}>
      {label}
    </Button>
  );
};
export default BaseButton;
