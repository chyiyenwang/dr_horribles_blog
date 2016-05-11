export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:3000/api/posts';

export function fetchPosts() {
  const request = fetch(ROOT_URL).then(response => {return response.json()})

  return {
    type: FETCH_POSTS,
    payload: request
  }
}