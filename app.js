// app.js 内容 
function addTodoItem(text) { 
 const todoList = document.querySelector('ul'); 
 const newItem = document.createElement('li'); 
 newItem.textContent = text; 
 todoList.appendChild(newItem); 
} 
// 测试：添加一个待办项 
addTodoItem("学习 Git 分支");