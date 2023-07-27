import { message } from "antd";
import { API_STATUS } from "../constants";

export const displayMessage = (type: string, messageValue: string) => {
  if (type === API_STATUS[type.toUpperCase()])
    return message[type](messageValue);
  return;
};
