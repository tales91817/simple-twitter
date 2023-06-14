import axios from "axios";
const baseUrl = 'https://afternoon-waters-66047.herokuapp.com/api'


const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  },
)

export const getTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/tweets`);
    return res.data;
  } catch (error) {
    console.error("[Get Tweets failed]: ", error);
  }
};


export const deleteTweet = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseUrl}/admin/tweets/${id}`);
    return res.data;
  } catch (error) {
    console.error("[Delete Tweet failed]:", error);
  }
};

export const getUsers = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/users`);
    return res.data;
  } catch (error) {
    console.error("[Get Users failed]: ", error);
  }
};