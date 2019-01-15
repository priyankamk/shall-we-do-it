var todoItems = document.querySelectorAll('li');
var addBtn = document.querySelector('.add-btn');
var newTodoInput = document.querySelector('.new-todo-input')
var todoList = document.querySelector('.todo-list');
var form = document.querySelector('form');
var completedCountSpan = document.querySelector('.completed-count-span');
var footer = document.querySelector('footer');
var resetBtn = document.querySelector('.reset-btn');


var checkAllDone = function() {
    if (document.querySelectorAll('.completed').length === document.querySelectorAll('li').length) {
        footer.classList.remove('hidden');
    }else {
        footer.classList.add('hidden');
    }
};

var resetAllItems = function() {
    // console.log('helo')
    var allItems = document.querySelectorAll('.completed');
    
    // for(var i=0; i < allItems.length; i++) {
    //     allItems[i].classList.remove('completed');
    // }
    allItems.forEach(function(item) {
        item.classList.remove('completed');
    })
    completedCountSpan.textContent = document.querySelectorAll('.completed').length;
};

var markComplete = function(event) {
    event.target.classList.toggle('completed');
    completedCountSpan.textContent = document.querySelectorAll('.completed').length;
    checkAllDone();
};

var addTodoItem = function(event) {
    event.preventDefault();
    console.log('adding Item');

    var newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');
    // newListItem.className = 'todo-item'; old one
    newListItem.textContent = newTodoInput.value
    // appendchild  (apped child at the end of the list)
    
    newListItem.addEventListener('click', markComplete);
    todoList.appendChild(newListItem);

    newTodoInput.value = ''; //clear input box
    // completedCountSpan.textContent = document.querySelectorAll('.completed').length;
    checkAllDone();
};

// for (var i=0; i < todoItems.length; i++){
//     todoItems[i].addEventListener('click', markComplete);
// };

todoItems.forEach(function(todoItems) {
    todoItems.addEventListener('click', markComplete);
})

// addBtn.addEventListener('click', addTodoItem);
resetBtn.addEventListener('click', resetAllItems);
form.addEventListener('submit', addTodoItem);


















    // debugger
    // if(event.target.classList.contains('completed')){
    //     //mark uncomplete
    //     event.target.classList.remove('completed');
    // }else {
    //     //mark complete
    //     event.target.classList.add('completed');
    // }
    // event.target.classList.add('completed');
    // event.target.style.textDecoration = 'line-through';
    // event.target.style.color = 'red';
    // event.target.style.fontsize = '8px';