import User from "./user.model";

export const getUser = async (ID: string) => {
  return await User.findById(ID);
};
