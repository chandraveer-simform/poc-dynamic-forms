import React from "react";
import BaseButton from "../BaseButton";
import BaseInput from "../BaseInput";
import { AllFields } from "../../utils/fields";

interface Props {
  id?: string;
  component: string;
  name?: string;
  label?: string;
  type?: any;
  placeholder?: string;
  defaultValue?: any;
  rules?: {
    required: boolean;
  };
  classNames?: string;
}

const Controller: React.FC<Props> = ({
  id,
  component,
  name,
  label,
  type,
  placeholder,
  defaultValue,
  rules,
  classNames,
  ...rest
}) => {
  switch (component) {
    case AllFields.button.component:
      return (
        <BaseButton type={type} {...rest}>
          {label}
        </BaseButton>
      );
    case AllFields.input.component:
      return (
        <BaseInput
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest}
        />
      );
  }
};
export default Controller;
