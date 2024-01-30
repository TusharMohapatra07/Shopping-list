const form = document.querySelector('.form');
const enterItem = document.querySelector('.form-text');
const ul = document.querySelector('.items');
const clearButton = document.querySelector('.clear-button');
const filterItems = document.querySelector('.form-filter');
const formBtn = form.querySelector('button');
let isEditMode = false;

checkUI(); //executing when page loads

form.addEventListener('submit', onAddItemSubmit);

function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = enterItem.value;
    if(newItem === '') {
        alert('Please add an item');
        return;
    }

    if(isEditMode){
        const itemToEdit = ul.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.firstChild.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    } else {
        if(checkIfItemExist(newItem)){
            alert('Item already Exists!!');
            return;
        }
    }
    
    addItemToDOM(newItem);
    addItemToStorage(newItem);
    checkUI();
    enterItem.value = '';
}

function addItemToDOM(item) {
    const  li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    li.className = 'item remove';

    const span = createIcon('item-icon');
    li.appendChild(span);
    ul.appendChild(li);
}

function addItemToStorage(item){
    const itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(item);

    localStorage.setItem('items',JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage(){
    let itemsFromStorage;

    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    } else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function createIcon(classEquals){
    const span = document.createElement('span');
    span.appendChild(document.createTextNode('❌'));
    span.className = classEquals;
    return span;
}

ul.addEventListener('click', onClickItem);

function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove')){
        removeItem(e.target.parentElement);
    } else{
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item){
    isEditMode = true;
    ul.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    formBtn.innerHTML = `📝 Update Item`
    formBtn.style.backgroundColor = '#65a765'
    formBtn.style.color = 'black'
    enterItem.value = item.firstChild.textContent;
}



function removeItem(item){
    item.remove();
    removeItemFromStorage(item.firstChild.textContent);
    checkUI();
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage = itemsFromStorage.filter( i => i !== item);

    localStorage.setItem('items',JSON.stringify(itemsFromStorage));
}

clearButton.addEventListener('click',onClearAll);

function onClearAll(e){
    if(confirm('Are you sure??')){
        while(ul.firstElementChild){
            ul.removeChild(ul.firstElementChild); 
        }
        localStorage.removeItem('items');
    }
    checkUI();
}


function checkUI(e) {
    enterItem.value = '';

    const items = document.querySelectorAll('.item');
    if(items.length === 0){
        filterItems.style.display = 'none';
        clearButton.style.display = 'none';
    } else{
        filterItems.style.display = 'block';
        clearButton.style.display = 'block';
    }

    formBtn.innerHTML =`➕ Add Item`
    formBtn.style.color = 'wheat';
    formBtn.style.backgroundColor = 'rgb(37, 37, 37)';
    isEditMode = false;
}

filterItems.addEventListener('input', filterItem);

function filterItem(e){
    const items = document.querySelectorAll('.item');
    const text = e.target.value.toLowerCase();

    items.forEach( item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) !== -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    });
}

window.addEventListener('load',displayItems);

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => {
        addItemToDOM(item);
    });
    checkUI();
}

function checkIfItemExist(item){
    const itemsFromStorage = getItemsFromStorage();

    return itemsFromStorage.includes(item);
}