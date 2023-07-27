import React from "react";
import { Select } from "antd";

export interface SelectOptionsInterface {
  value: string;
  label: string;
}

interface Props {
  onChange: (value: string) => void;
  options?: SelectOptionsInterface[];
  [key: string]: any;
}

const BaseSelect: React.FC<Props> = ({ options, onChange, ...rest }) => (
  <Select onChange={onChange} options={options} {...rest} />
);

export default BaseSelect;
