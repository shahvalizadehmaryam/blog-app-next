import axios from "axios";

export async function middlewareAuth(request) {
  // set cookie refresh and access token
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    {
      headers: {
        Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
      },
      withCredentials: true,
    }
  );
  const user = response.data?.data?.user || {};
  return user;
}
