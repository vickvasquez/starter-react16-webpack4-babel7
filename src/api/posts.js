const posts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await response.json();

  console.log(posts);
};

posts();
