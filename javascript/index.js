//tsc -w로 index.ts를 index.js로 변환

var todos = [];  //리스트 생성 
function addTodo(title) {  //함수 : newTodo객체 생성, id title completed 포르퍼티 가짐 
    var newTodo = { 
        id: todos.length + 1,  //기존 리스트+사용자가 입력할때마다 todos 값 변하고 길이만큼 아이디 부여
        title: title, //사용자가 작성한 내용 
        completed: false,  //초기는 완료하지 않은 상태(false)로 설정 
    };
    todos.push(newTodo);  //새롭게 생성된 newTodo 객체 todos리스트에 넣음 
    renderTodoList();  
}
function completeTodoById(id) {  //함수 인자로 id값 부여(id=1만 여기 해당되어 인기초과제 2차 마무리는 true값으로 완료된 상태로 출력)
    var todoIndex = todos.findIndex(function (todo) { return todo.id === id; });  //todos 배열에서 id값이 매개변수로 전달된 id와 일치하는지?
    //findIndex : 배열의 각 요소에 주어진 조건을 만족하는 첫번째 요소의 인덱스 반환, 조건 만족하지 않을 경우 -1 반환 
    if (todoIndex !== -1) {  //id 값을 찾았는가? 
        todos[todoIndex].completed = !todos[todoIndex].completed;  //찾았다면 todos[찾은 인덱스]의 complete 프로퍼티 값을 반대로 뒤집음, 즉 ture로 바꿈  
    }
}
function renderTodoList() { 
    var todoListDiv = document.getElementById("todoList");  //todoList 아이디값을 가진 것 변수에 저장 
    todoListDiv.innerHTML = "";  //이전의 내용 지움 
    var _loop_1 = function (i) { //renderTodoList 함수 내부에서 사용되는 함수, 아래 for문의 i (id값)을 매개변수로 받음 
        var todoItem = document.createElement("div");  //할일을 나타내는 div 요소 생성 
        todoItem.className = "todo-item" + (todos[i].completed ? " completed" : "");  //todos[i].complete가 참일 경우, complete클래스 추가,아니면 그냥 todo-item 클래스만 할당 
        todoItem.innerText = todos[i].title;  //인덱스 배열 값의 title 프로퍼티 값을 innerText프로퍼티 값으로 저장 
        todoItem.addEventListener("click", function () {  //클릭된 경우, 함수 실행 
            completeTodoById(todos[i].id);    //순회중인 요소의 id값, todoItem 요소에 complete 요소가 이미 있으면 제거하고, 아니면 추가됨 -->할일이 클릭될때마다 complete 클래스 토굴되어 스타일 적용되거나 해제
            todoItem.classList.toggle("completed");
        });
        todoListDiv.appendChild(todoItem);  //자식으로 
    };
    for (var i = 0; i < todos.length; i++) {
        _loop_1(i);
    }
}
var todoForm = document.getElementById("todoForm");  //폼을 통해 입력받음 
todoForm.addEventListener("submit", function (event) {  //submit 된 경우  
    event.preventDefault();  //이벤트 막음 
    var todoInput = document.getElementById("todoInput");  //id값 가져옴 
    var title = todoInput.value.trim();  //함수를 통해 양쪽 끝에 있는 공백을 제거함 
    if (title !== "") {  //입력된 값이 빈 문자열이 아닌지 확인 
        addTodo(title);  //맨 위 addTodo 함수 실행 
        todoInput.value = "";  //사용자 입력 필드 쓴 내용 지움 
    }
});
// 초기 할일 목록
addTodo("인기초 과제 2차 마무리");
completeTodoById(1);
addTodo("동아리 강의 듣기");
addTodo("종강종강돌을던지자");
//나머지는 직접 입력