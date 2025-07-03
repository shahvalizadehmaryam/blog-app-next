import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
  patch: app.patch,
};
// interceptor ha mesle yek iste bazresi amal mikonan baraye tamamiye req va res ha
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    // 401 is for unauthorized one it means you have refresh token but your accesstoken expired.
    const originalConfig = err.config;
    // it means that !originalConfig._retry has falsy values like undefined or null or even does not exist.
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          {
            withCredentials: true,
          } 
        );
        if (data) {
          // it means that if data exist so resend request with that configs once more.
          return app(originalConfig);
        }
        return Promise.reject(err);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

export default http;
