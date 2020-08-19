const postContainer = document.querySelector('.posts-container');
const loading = document.querySelector('.loader');
const filter = document.querySelector('#filter');

//https://jsonplaceholder.typicode.com/posts?_limit=10&_page=3
let limit = 5;
let page = 1;

//FETCH POST
const getPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();
  page++;
  return data;
};

const showPost = (posts) => {
  const postsHTML = posts
    .map((post) => {
      return `
        <div class="post">
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">
                ${post.body}
          </p>
        </div>
      </div>
        `;
    })
    .join('');

  postContainer.innerHTML += postsHTML;
};

const showLoading = (post) => {
  loading.classList.add('show');
  setTimeout(() => {
    loading.classList.remove('show');
    setTimeout(() => {
      showPost(post);
    });
  }, 1000);
};

const filterPost = ({ target }) => {
  const value = target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  for (let post of posts) {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.includes(value) || body.includes(value)) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  }
};

//FUNCTION INIT
function init() {
  window.addEventListener('DOMContentLoaded', async () => {
    let posts = await getPost();
    showPost(posts);
  });

  window.addEventListener('scroll', async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      let posts = await getPost();
      showLoading(posts);
    }
  });

  filter.addEventListener('input', filterPost);
}

//RUN THE PROGRAM!!!!
init();
