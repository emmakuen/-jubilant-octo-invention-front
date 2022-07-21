const api = require("./config");

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    const users = response.data;
    return users;
  } catch (err) {
    console.error("Unable to fetch users...");
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
  }
};

module.exports = {
  getUsers,
  getUserById,
};
