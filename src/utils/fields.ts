// Cascader,
// Checkbox,
// DatePicker,
// Form,
// Input,
// InputNumber,
// Radio,
// Select,
// Slider,
// Switch,
// TreeSelect,
// Upload,

import { FieldsInterface } from "../store/actions/dynamicForms";

export interface FieldsPropertyInterface {
  [key: string]: boolean;
}

export interface FieldsComponentInterface {
  component: string;
  name: string | number | (string | number)[];
  property: FieldsPropertyInterface;
}

export interface AllComponentFieldsInterface {
  [key: string]: FieldsComponentInterface;
}

export const AllFields: AllComponentFieldsInterface = {
  button: {
    name: "Button",
    component: "button",
    property: {
      htmlType: true,
      label: true,
    },
  },
  checkbox: {
    name: "Checkbox",
    component: "checkbox",
    property: {
      name: true,
      label: true,
      labelVisible: true,
    },
  },
  input: {
    name: "Input",
    component: "input",
    property: {
      name: true,
      label: true,
      labelVisible: true,
      placeholder: true,
    },
  },
};

export const ButtonComponentProperty: FieldsInterface[] = [
  {
    component: AllFields.button.component,
    type: "primary",
    htmlType: "submit",
    label: "Submit",
    labelVisible: false,
  },
];
