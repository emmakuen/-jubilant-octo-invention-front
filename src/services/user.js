import api from "./config";
import * as toastHelpers from "../helpers/toast";

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    const users = response.data;
    return users;
  } catch (err) {
    console.error("Unable to fetch users...", err);
    toastHelpers.showErrorMessage("Failed to fetch users...", "usersError");
    return [];
  }
};

const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    const user = response.data;
    return user;
  } catch (err) {
    console.error("Unable to fetch user...");
    toastHelpers.showErrorMessage("Failed to fetch user...", "userError");
  }
};

export { getUserById, getUsers };
