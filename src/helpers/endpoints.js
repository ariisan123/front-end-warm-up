const endpoints = {
  posts: 'https://jsonplaceholder.typicode.com/posts',
  selectPost(id) {
    return `https://jsonplaceholder.typicode.com/posts/${id}`;
  }
};

export default endpoints;
