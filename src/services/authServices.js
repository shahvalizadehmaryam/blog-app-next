import http from "./httpService";

export const signupApi = async (data) => {
  return http.post("/user/signup", data).then(({ data }) => data.data);
};
