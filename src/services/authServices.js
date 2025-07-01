import http from "./httpService";

export const signupApi = async (data) => {
  return http.post("/user/signup", data).then(({ data }) => data.data);
};
export const signinApi = async (data) => {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}
