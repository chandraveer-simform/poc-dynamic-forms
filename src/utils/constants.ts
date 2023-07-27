export interface ApiMessageInterface {
  [key: string]: string;
}

export const API_STATUS: ApiMessageInterface = {
  SUCCESS: "success",
  ERROR: "error",
};

export const API_MESSAGES: ApiMessageInterface = {
  SERVER_ERROR: "server error",
};
