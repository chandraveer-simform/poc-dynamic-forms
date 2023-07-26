import React from "react";
import { Input } from "antd";

interface Props {
  type?: "text" | "textarea";
  name: string;
  placeholder?: string;
  classNames?: string;
}

const BaseInput: React.FC<Props> = ({
  type,
  name,
  placeholder,
  classNames,
  ...rest
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      className={`${classNames}`}
      {...rest}
    />
  );
};
export default BaseInput;
