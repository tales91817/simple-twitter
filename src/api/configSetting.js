import axios from "axios";
const baseUrl = "https://afternoon-waters-66047.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export const patchConfig = async ({
  id,
  name,
  account,
  email,
  password,
  checkPassword,
}) => {
  try {
    const res = await axiosInstance.put(`${baseUrl}/users/${id}`, {
      id,
      name,
      account,
      email,
      password,
      checkPassword,
    });
    const message = res.data.message;
    const status = res.data.status;
    if (status === "error") {
      return { success: false, message, res };
    } else return { success: true, message: '', res };
  } catch (error) {
    console.error("[Patch UserSetting failed]:", error);
    // const message = error.response.data.message;
    // return { success: false, message, res: {} };
  }
};
