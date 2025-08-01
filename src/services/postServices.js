import http from "./httpService";

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}
export async function getPosts(queries, options) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts } = data || {};
  return posts;
}
export async function likePostApi(id) {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
}
export async function bookmarkPostApi(id) {
  return http.post(`/post/bookmark/${id}`).then(({ data }) => data.data);
}
