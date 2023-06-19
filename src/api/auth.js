import axios from "axios";

const authURL = "https://afternoon-waters-66047.herokuapp.com/api";

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/users/login`, {
      account,
      password,
    });

    console.log(data);
    // if(data.message){
    // console.log(data.message);
    // }
    const{ status } = data
    if(status==='success'){
       const { data: successData } = data;
       if (successData) {
         const { token: authToken } = successData;
         if (authToken) {
           return { success: true, message: '', authToken, ...data };
         }
         return data;
       }
    } else {
      const {message} = data;
      // console.log(message);
      return { success: false, message, data: {} };
    }
    // const {
    //   data: { token: authToken },
    // } = data;
    // if (authToken) {
    //   return { success: true, ...data };
    // }
    // return data;
  } catch (error) {
    console.error("[Login Failed]:", error);
    console.log(error)
  }
};

export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/admin/login`, {
      account,
      password,
    });

    console.log(data);

    const { status } = data;
    if (status === "success") {
      const { data: successData } = data;
      if (successData) {
        const { token: authToken } = successData;
        if (authToken) {
          return { success: true, message: "", authToken, ...data };
        }
        return data;
      }
    } else {
      const { message } = data;
      return { success: false, message, data: {} };
    }

  } catch (error) {
    console.error("[Login Failed]:", error);
    console.log(error);
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

    console.log(data);

    const { status } = data;
    if (status === "success") {
      return { success: true, message: "" };
    } else {
      const { message } = data;
      // console.log(message);
      return { success: false, message };
    }
  } catch (error) {
    console.error("[Register Failed]:", error);
  }
};


export const checkPermission = async (authToken) => {
  try {
    const response = await axios.post(`${authURL}/auth/users`, {}, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    console.log("checkPermission() response:", response);
    return response.data.status;
  } catch (error) {
    console.error('[Check Permission Failed]:', error);
  }
};

export const checkAdminPermission = async (authToken) => {
  try {
    const response = await axios.post(
      `${authURL}/auth/admin`,
      {},
      {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      }
    );
    console.log("checkPermission() response:", response);
    return response.data.status;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};