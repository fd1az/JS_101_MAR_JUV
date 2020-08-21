const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const API_URL = 'https://api.lyrics.ovh';

const searchSongs = async (value) => {
  const res = await fetch(`${API_URL}/suggest/${value}`);
  const data = await res.json();
  console.log(data);
  showData(data);
};

const showData = ({ data, next, prev }) => {
  result.innerHTML = `
    <ul class="songs">
    ${data
      .map(
        (song) =>
          `<li><span><strong>${song.artist.name}</strong> - ${song.title}</span><button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Letra</button></li>`
      )
      .join('')}
    
    </ul>
    `;

  if (prev || next) {
    console.log('lalalalalall');
    more.innerHTML = `
            ${
              prev
                ? `<button class="btn" onclick="getMoreSongs('${prev}')">Anterior</button>`
                : ''
            }
            ${
              next
                ? `<button class="btn" onclick="getMoreSongs('${next}')">Siguiente</button>`
                : ''
            }
        
        `;
  } else {
    more.innerHTML = '';
  }
};

const getMoreSongs = async (url) => {
  console.log(url);
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();
  console.log(data);
  showData(data);
};

const getLyrics = async (artist, songTilte) => {
  const res = await fetch(`${API_URL}/v1/${artist}/${songTilte}`);
  const data = await res.json();

  //\r return value \n new line | or g global -> remplazo por un <br>
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  result.innerHTML = ` 
    <h2><strong>${artist}</strong> - ${songTilte} </h2>
    <span>${lyrics}</span>
    `;
  more.innerHTML = '';
};

//INIT
function init() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value.trim();
    if (!searchValue) {
      return;
    }
    searchSongs(searchValue);
  });

  result.addEventListener('click', (e) => {
    const element = e.target;
    if (element.nodeName === 'BUTTON') {
      console.dir(element);
      const artist = element.dataset.artist;
      const songTilte = element.dataset.songtitle;

      getLyrics(artist, songTilte);
    }
  });
}

init();
