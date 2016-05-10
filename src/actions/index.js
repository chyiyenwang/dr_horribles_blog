export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'localhost:3000/api';

export function fetchPosts() {
  const request = fetch(`${ROOT_URL}/posts`).then(response => {return response.json()})

  return (
    type: FETCH_POSTS,
    payload: request
  )
}