import { getData, setData } from "../../api/storage";
import { displayMessage } from "../../utils/renderMethod/displayMessage";
import { API_MESSAGES, API_STATUS } from "../../utils/constants";
import { makeString } from "../../utils/helper";
import { ACTIONS_TYPE } from "../actionType";

export interface FieldsInterface {
  component: any;
  name?: string | number | (string | number)[];
  label: string;
  labelVisible?: boolean;
  placeholder?: string;
  htmlType?: string;
  type?: any;
  id?: string;
}

export interface FormsDataFieldsInterface {
  name: string;
  label: string;
  id: string;
  date: any;
  fields: FieldsInterface[];
}

export interface DynamicFormResult {
  status: string;
  count?: number;
  data?: FormsDataFieldsInterface[];
  message?: string;
}

export const getAllForm = (name: any, page?: number) => {
  try {
    const { status, data } = getData(name);
    return { status: status, count: data.length, data: data };
  } catch (err) {
    displayMessage(API_STATUS.ERROR, err);
    return { status: API_STATUS.ERROR, message: err };
  }
};

export const createForm = (name: string, values: any) => {
  try {
    const { data = [] } = getAllForm(name);
    const uniqId = makeString();
    values["id"] = uniqId;
    const { status } = setData(name, [...data, { ...values }]);
    if (status) {
      displayMessage(status, API_MESSAGES.SUCCESSFULLY_CREATE);
      return { status: status, data: values };
    }
  } catch (err) {
    displayMessage(API_STATUS.ERROR, err);
    return { status: API_STATUS.ERROR, message: err };
  }
};

const deleteForm = (id: any) => {
  const { data = [] } = getAllForm(ACTIONS_TYPE.DYNAMICS_FORMS_LIST);
  return;
};

const DynamicFormService = {
  getAllForm,
  createForm,
  deleteForm,
};

export default DynamicFormService;
