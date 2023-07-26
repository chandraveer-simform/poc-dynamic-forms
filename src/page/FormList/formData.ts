interface fieldsInterface {
  component: any;
  label: string;
  placeholder?: string;
  type: any;
  id: string;
}

interface formsDataFieldsInterface {
  name: string;
  label: string;
  id: string;
  date: any;
  fields: fieldsInterface[];
}

export const formData: formsDataFieldsInterface[] = [
  {
    name: "user_form",
    label: "User Form",
    id: "0c946643-5a83-4545-baea-055b27b51e8a",
    date: "4/4/2022",
    fields: [
      {
        component: "Input",
        label: "User Name",
        placeholder: "Enter User Name",
        type: "text",
        id: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "Button",
        label: "Submit",
        type: "primary",
        id: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a85",
      },
    ],
  },
  {
    name: "contact_form",
    label: "Contact Form",
    id: "0c946643-5a83-4545-baea-055b27b51e86",
    date: "4/4/2022",
    fields: [
      {
        component: "Input",
        label: "Email",
        placeholder: "Enter Enter Email",
        type: "email",
        id: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d",
      },
      {
        component: "Button",
        label: "Submit",
        type: "primary",
        id: "7f885969-f8ba-40b9-bf5d-0d57bc9c6a85",
      },
    ],
  },
];
