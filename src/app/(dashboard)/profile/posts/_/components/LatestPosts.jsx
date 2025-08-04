import PostsTable from './PostsTable'

function LatestPosts() {
    const queries = "sort=latest&limit=5"
  return (
   <PostsTable queries={queries} />
  )
}

export default LatestPosts