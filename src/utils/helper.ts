export const getReformData = (data: any) => JSON.stringify(data);
export const setReformData = (data: any) => JSON.parse(data);

export const makeString = (): string => {
  let outString: string = "";
  let inOptions: string = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 32; i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }

  return outString;
};
