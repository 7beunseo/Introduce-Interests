// TypeScript 코드
interface Todo {  //todo 인터페이스 정의 
    id: number;
    title: string;
    completed: boolean;
  }
  
  let todos: Todo[] = [];  //빈 배열 생성 
  
  function addTodo(title: string): void {  //title은 string
    const newTodo: Todo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    todos.push(newTodo);
    renderTodoList();
  }
  
  function completeTodoById(id: number): void {  //id는 숫자로 
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].completed = !todos[todoIndex].completed;
    }
  }
  
  function renderTodoList(): void {
    const todoListDiv = document.getElementById("todoList");
    todoListDiv.innerHTML = "";
    
    for(let i=0; i<todos.length; i++){
      const todoItem = document.createElement("div");
      todoItem.className = "todo-item" + (todos[i].completed ? " completed" : "");
      todoItem.innerText = todos[i].title;
      
      todoItem.addEventListener("click", function() {
        completeTodoById(todos[i].id);
        todoItem.classList.toggle("completed");
      });
      
      todoListDiv.appendChild(todoItem);
    }
  }
  
  const todoForm = document.getElementById("todoForm");
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todoInput") as HTMLInputElement;
    const title = todoInput.value.trim();
    if (title !== "") {
      addTodo(title);
      todoInput.value = "";
    }
  });
  
  // 초기 할일 목록

  addTodo("인기초 과제 2차 마무리");
  completeTodoById(1);
  addTodo("동아리 강의 듣기");
  addTodo("종강종강돌을던지자");

