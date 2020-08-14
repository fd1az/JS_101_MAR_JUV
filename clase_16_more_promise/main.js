let button = document.querySelector("#getPost");
let posts = document.getElementById("posts");
function setTimer(duration, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, duration);
  });
}
button.addEventListener("click", async () => {
  //
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let objResponse = await response.json();
  let lis = objResponse.map((obj) => `<li>${obj.title} --- ${obj.body}</li>`);
  lis.forEach((element) => {
    setTimer(2000, "nada").then((data) => (posts.innerHTML += element));
  });
});

// {
//     userId: 1,
//     id: 1,
//     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// }
