export async function middlewareAuth(request) {
  // set cookie refresh and access token
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");
  const options = {
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
    credentials: "include",
  };
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  )
    .then((res) => res.json())
    .then((res) => res.data);
  const { user } = data || {};
  return user;
}
