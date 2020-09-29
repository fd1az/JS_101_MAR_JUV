const draggableList = document.querySelector('#draggable-list');
const check = document.querySelector('#check');

const myLenguages = [
  'JavaScript',
  'Golang',
  'HTML',
  'PHP',
  'Python',
  'Kotlin',
  'Java',
  'Ruby',
  'Scala',
  'Cobol',
];

let listItems = [];
let dragStartIndex;

const createList = () => {
  let list = [...myLenguages].map((lang, indx) => {
    const listItem = document.createElement('li');
    listItem.dataset.index = indx;
    listItem.innerHTML = `
        <span class="number">${indx + 1}</span>
        <div class="draggable" draggable="true">
            <p class="lang-name"> ${lang} </p>
            <i class="fas fa-grip-lines"></i>
        </div>
    
    `;
    draggableList.appendChild(listItem);
    return listItem;
  });
};

function init() {
  createList();
}

init();
