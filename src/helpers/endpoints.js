const endpoints = {
  posts: 'http://localhost:8000/api/posts',
  selectPost(id) {
    return `http://localhost:8000/api/posts/${id}`;
  }
};

export default endpoints;
