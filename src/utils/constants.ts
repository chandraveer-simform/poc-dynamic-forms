export interface ApiMessageInterface {
  [key: string]: string;
}

export interface ApiStatusInterface {
  [key: string]: "success" | "error" | "warning";
}

export const API_STATUS: ApiStatusInterface = {
  SUCCESS: "success",
  ERROR: "error",
};

export const API_MESSAGES: ApiMessageInterface = {
  SERVER_ERROR: "server error",
  SUCCESSFULLY_CREATE: "Successfully created",
  SUCCESSFULLY_DELETE: "Successfully deleted",
  SUCCESSFULLY_UPDATED: "Successfully updated",
};
