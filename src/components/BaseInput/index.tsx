import React from "react";
import { Input } from "antd";

interface Props {
  id: string;
  type: "text" | "textarea";
  name: string;
  placeholder: string;
  classNames?: string;
}

const BaseInput: React.FC<Props> = ({
  id,
  type,
  name,
  placeholder,
  classNames,
  ...rest
}) => {
  return (
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      // defaultValue="dd"
      className={`${classNames}`}
      {...rest}
    />
  );
};
export default BaseInput;
