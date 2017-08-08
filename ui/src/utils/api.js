const api = "http://localhost:5001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getRootPosts = () =>
fetch(`${api}/posts`, { headers })
  .then(res => res.json())

export const getCategoryPosts = (category) =>
fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
