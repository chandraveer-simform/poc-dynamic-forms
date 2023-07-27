import { getData, setData } from "../../api/storage";
import { API_STATUS } from "../../utils/constants";
import { makeString } from "../../utils/helper";

export interface FieldsInterface {
  component: any;
  name?: string;
  label?: string;
  labelVisible?: boolean;
  placeholder?: string;
  htmlType?: string;
  type: any;
  id: string;
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

export const getAllForm = (name: any, page: number) => {
  try {
    const { status, data } = getData(name);
    return { status: status, count: data.length, data: data };
  } catch (err) {
    return { status: API_STATUS.ERROR, message: err };
  }
};

const get = (name: any) => {
  return localStorage.getItem(name);
};

export const createForm = (name: string, values: any) => {
  try {
    const { data } = getAllForm(name, 0);
    const uniqId = makeString();
    values["id"] = uniqId;
    const { status } = setData(name, [...data, { ...values }]);
    return { status: status, data: values };
  } catch (err) {
    return { status: API_STATUS.ERROR, message: err };
  }
};

// const update = (id: any, data: ITutorialData) => {
//   return http.put<any>(`/tutorials/${id}`, data);
// };

// const remove = (id: any) => {
//   return http.delete<any>(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete<any>(`/tutorials`);
// };

// const findByTitle = (title: string) => {
//   return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
// };

const DynamicFormService = {
  getAllForm,
  get,
  createForm,
  // update,
  // remove,
  // removeAll,
  // findByTitle,
};

export default DynamicFormService;
