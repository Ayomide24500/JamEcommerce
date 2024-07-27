import axios from "axios";

const url: string = "https://storejam.onrender.com";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/register-user`, data).then((res) => {
      console.log(res);
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
