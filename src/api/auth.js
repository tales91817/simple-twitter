import axios from "axios";

const authURL = "https://afternoon-waters-66047.herokuapp.com/api";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/login`, {
      account,
      password,
    });

    console.log(data);

    const {
      data: { token: authToken },
    } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/admin/login`, {
      account,
      password,
    });

    console.log(data);

    const {
      data: { token: authToken },
    } = data;
    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
  }
};

export const register = async ({
  name,
  account,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(`${authURL}/users`, {
      name,
      account,
      email,
      password,
      checkPassword,
    });

    const {
      data: { token: authToken },
    } = data;

    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.error("[Register Failed]:", error);
  }
};


export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/auth/users`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.status;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};