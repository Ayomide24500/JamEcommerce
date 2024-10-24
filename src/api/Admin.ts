import axios from "axios";

// const url: string = "https://storejam.onrender.com";
const url: string = "https://storejam1.onrender.com";
// const url: string = "http://localhost:1200";

export const createAdmin = async (data: any) => {
  try {
    return await axios.post(`${url}/register`, data).then((res) => {
      console.log(res);
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const LoginAdmin = async (data: any) => {
  try {
    return await axios.post(`${url}/login`, data).then((res) => {
      console.log(res);

      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyAdmin = async (adminID: string) => {
  try {
    return await axios.patch(`${URL}verify/${adminID}`).then((res: any) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const CreateStore = async (data: any) => {
  try {
    const config: any = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(`${url}/single`, data, config);

    console.log(response?.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getStore = async () => {
  try {
    return await axios.get(`${url}/get`).then((res) => {
      console.log(res?.data);

      return res?.data;
    });
  } catch (error) {
    console.log(error);
  }
};
