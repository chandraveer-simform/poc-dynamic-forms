import { API_MESSAGES, API_STATUS } from "../utils/constants";

const ISSERVER = typeof window === "undefined";

export const getData = (key: string) => {
  try {
    if (ISSERVER)
      return { status: API_STATUS.ERROR, message: API_MESSAGES.SERVER_ERROR };
    const data = localStorage.getItem(key);
    const res = data ? JSON.parse(data) : undefined;
    return { status: API_STATUS.SUCCESS, data: res };
  } catch (err) {
    return { status: API_STATUS.ERROR, message: err };
  }
};

export const setData = (key: string, values: any) => {
  try {
    if (ISSERVER)
      return { status: API_STATUS.ERROR, message: API_MESSAGES.SERVER_ERROR };
    const formValue = JSON.stringify(values);
    localStorage.setItem(key, formValue);
    return { status: API_STATUS.SUCCESS, data: values };
  } catch (err) {
    return { status: API_STATUS.ERROR, message: err };
  }
};
