import view from "../views/post.html";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
};

export default async () => {
  const div = document.createElement("div");
  div.innerHTML = view;

  const postElements = div.querySelector("#posts");
  const posts = await getPosts();
  posts.forEach((post) => {
    postElements.innerHTML += `
      <li class='list-group-item border-primary bg-dark text-white'>
      <h5>${post.title}</h5>
      <p>${post.body}</p>
      </li>`;
  });
  const total = div.querySelector("#total");
  total.innerHTML = posts.length;
  return div;
};
