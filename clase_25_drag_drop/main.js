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
  let list = [...myLenguages]
    .map((lang) => ({ value: lang, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .map((lang, indx) => {
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
  listItems = [...list];
};

//Handlers para los eventos DRAG
const dragStart = (e) => {
  dragStartIndex = +e.currentTarget.closest('li').dataset.index;
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragDrop = (e) => {
  const dragEndIndex = +e.currentTarget.closest('li').dataset.index;
  console.log(dragEndIndex);
  swapItem(dragStartIndex, dragEndIndex);
  e.currentTarget.classList.remove('over');
};

const dragEnter = (e) => {
  e.currentTarget.classList.add('over');
};
const dragLeave = (e) => {
  e.currentTarget.classList.remove('over');
};

// function dragLeave() {
//   this.classList.remove('over');
// }

const swapItem = (fromIndx, toIndx) => {
  const itemOne = listItems[fromIndx].querySelector('.draggable');
  const itemTwo = listItems[toIndx].querySelector('.draggable');

  listItems[fromIndx].appendChild(itemTwo);
  listItems[toIndx].appendChild(itemOne);
};

const addDragEvent = () => {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
};

const checkOrder = () => {
  listItems.forEach((listItem, indx) => {
    const lang = listItem.querySelector('.draggable').innerText.trim();
    if (lang !== myLenguages[indx]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('correct');
    }
  });
};

function init() {
  createList();
  addDragEvent();
  check.addEventListener('click', checkOrder);
}

init();
