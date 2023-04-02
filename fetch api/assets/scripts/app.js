const posts = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const fetchButton = document.querySelector("#available-posts button");
const form = document.querySelector("#new-post form");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - server-side.");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong here!");
    });
}

function fetchPosts() {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/post")
    .then((listOfPosts) => {
      for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector("h2").textContent = post.title.toUpperCase();
        postEl.querySelector("p").textContent = post.body;
        postEl.querySelector("li").id = post.id;
        posts.append(postEl);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

function createPost(title, body) {
  const userId = Math.random();
  const post = {
    title: title,
    body: body,
    userId: userId,
  };

  sendHttpRequest("post", "https://jsonplaceholder.typicode.com/posts", post);
  showUserInputUi(post);
}

fetchButton.addEventListener("click", fetchPosts);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const postTitle = document.getElementById("title").value;
  const postBody = document.getElementById("content").value;
  createPost(postTitle, postBody);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    event.target.closest("li").remove();
  }
});

function showUserInputUi(post) {
  const postEl = document.importNode(postTemplate.content, true);
  postEl.querySelector("h2").textContent = post.title.toUpperCase();
  postEl.querySelector("p").textContent = post.body;
  postEl.querySelector("li").id = post.id;
  posts.append(postEl);
}
