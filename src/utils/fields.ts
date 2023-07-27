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

export interface ComponentFilesInterface {
  name: string;
  component: string;
}

export interface AllComponentFilesInterface {
  [key: string]: ComponentFilesInterface;
}

export const AllFields: AllComponentFilesInterface = {
  button: {
    name: "button",
    component: "Button",
  },
  checkbox: {
    name: "checkbox",
    component: "Checkbox",
  },
  input: {
    name: "input",
    component: "Input",
  },
};
