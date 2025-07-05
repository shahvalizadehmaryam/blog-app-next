export default function setCookieOnReq(cookies) {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  const options = {
    method: "GET",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
    credentials: "include",
  };
  return options;
}
