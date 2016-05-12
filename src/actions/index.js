export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://localhost:3000/api/posts';
const form = document.querySelector('.form')

export function fetchPosts() {
  const request = fetch(ROOT_URL).then(response => {return response.json()})

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = fetch(ROOT_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: props.title,
      content: props.content
    })
  })

  return {
    type: CREATE_POST,
    payload: request
  }
}