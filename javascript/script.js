
//해당 id값의 데이터 변수에 각각 저장
let commentListElement = document.getElementById("commentList");
let commentForm = document.getElementById("commentForm");
let contentInput = document.getElementById("contentInput");
let user_name=new URLSearchParams(window.location.search).get("name")  //username은 로그인 되어있는 아이디 그대로 사용하면 되므로 폼 입력 대신 url에서 가져옴 
let currentURL = window.location.href;  //Ajax를 사용하려 했으나,,,,했으나,,, 

// 댓글 목록 데이터
let comments = [];

$(document).ready(function() {   //JQeury이용 --> 로컬에서만 된다..
    fetch('./json/get.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); //콘솔 창에 불러온 데이터 출력 
      for (let i = 0; i < data.length; i++) {
        let item = data[i];

        
        let content = item.content;  //불러온 데이터의 content속성 content변수에 저장 
        let currentTime=item.time;  //불러온 데이터의 time속성 currentTime변수에 저장 
      
        if (content) { //content가 존재할 경우? 
          let comment = {
              name: item.user_name,  //comment객체 리터럴 표기법으로 만든 후 name, content, time 프로퍼티 추가 
              content: content ,  //반복되는데 함수로 만들 수 있나?
              time:currentTime,
              good:0
          };
          comments.push(comment);  //댓글 배열에 추가
      
          renderComments();  //함수 실행 1
          resetForm();  //작성한 폼 내용 삭제하는 함수 2
          scrollToBottom();  //스크롤 내리지 않게 해주는 함수 3
        
      }
    }})
    .catch((error) => {  //에러가 난 경우
      console.log('Error:', error);
    });
});


// 함수 생성 4: 댓글 내역 객체 생성 함수 -->인터넷 참고해서 pure함수는 아닙니다!

function submitComment(event) {
  event.preventDefault(); // 폼의 기본 동작 방지

  let content = contentInput.value;  //contentInput 요소의 입력된 값을 가져와서 content 변수에 할당, 댓글 작성 실제 내용 
  let currentTime=new Date().toLocaleString();  //작성한 시간을 우리나라 시간에 맞춰 저장 

  if (content) {  //content가 있는 경우 
    let comment = {  //마찬가지로 comment 객체 생성 
        name: user_name,   
        content: content ,
        time:currentTime,
        good:0
    };
    comments.push(comment);  //댓글 배열에 추가

    renderComments();  //함수 3개 실행 
    resetForm();
    scrollToBottom();
  }
}

// 함수 생성 5 : 댓글 목록을 HTML로 보이도록 구조화
function renderComments() {
  commentListElement.innerHTML = "";  //맨 처음 삭제
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];

    let commentItem = document.createElement("div");  //동적생성 
    commentItem.setAttribute("class", "comment");

    let nameElement = document.createElement("h3");
    nameElement.innerHTML = comment.name;

    let contentElement = document.createElement("p");
    contentElement.innerHTML = comment.content;

    let timeElement = document.createElement("small");
    timeElement.innerHTML = comment.time;
    timeElement.setAttribute("class","time-element"); // 오른쪽에 위치시킬 요소에 클래스 추가

    let good = document.createElement("button");  //좋아요버튼 생성
    let image = document.createElement("img");
    image.src = './img/verygood.jfif';
    image.style.width = "80px";
    image.style.height = "80px";
    good.style.width = "80px";
    good.style.height = "80px";
    good.setAttribute("class","good-button"); // 오른쪽에 위치시킬 요소에 클래스 추가
    good.appendChild(image);
    good.onclick = function () {  //이벤트리스너 함수 3 클릭될 때 good 프로퍼티 값 1 증가 후 renderComments 함수 실행
      comment.good++;
      renderComments();
    };
    let countElement = document.createElement("span");
    countElement.innerHTML = comment.good;
    countElement.style.width="2em";  //폭 고정

    commentItem.style.display = "flex";
    commentItem.style.justifyContent = "space-between";

    let leftContainer = document.createElement("div");
    leftContainer.setAttribute("class","left-container"); // 왼쪽에 위치시킬 요소에 클래스 추가
    leftContainer.appendChild(nameElement);
    leftContainer.appendChild(contentElement);

    let rightContainer = document.createElement("div");
    rightContainer.setAttribute("class","right-container"); // 오른쪽에 위치시킬 요소에 클래스 추가
    rightContainer.appendChild(good);
    rightContainer.appendChild(timeElement);

    commentItem.appendChild(leftContainer);
    commentItem.appendChild(rightContainer);
    commentItem.appendChild(countElement);

    commentListElement.appendChild(commentItem);
  }
}


// 폼 초기화 --> 함수라기엔,, 빈약,,
function resetForm() {
  contentInput.value = "";
}

// 스크롤 처리 -->함수라기엔 빈약2
function scrollToBottom() {
  commentListElement.scrollTop = commentListElement.scrollHeight - commentListElement.clientHeight;
  } //scrollTop:댓글 목록의 수직 스크롤 위치를 나타내는 속성
  //스크롤을 맨 아래로 이동시키는 효과
// 스크롤 처리 - 댓글 입력 창 맨 아래로 이동

// 폼 제출 이벤트 리스너 등록
commentForm.addEventListener("submit", submitComment);  // addEventListener:commentForm 에서 지정된 이벤트가 발생될 때 호출할 함수를 설정하는 메서드임 
//이벤트 : submit(폼 제출), 대상:commentForm, 이벤트리스터 : submitCommit 함수
//window.addEventListener("load", scrollToBottom);

let size = document.getElementById("commentList");  //id commentList 불러옴 
if (size.clientHeight > 500){  //commentList 요소의 높이(clientHeight)가 500보다 큰지 체크 
    size.style.overflowY = 'scroll';  //만약 500보다 큰 경우 스크롤이 표시되도록 함, 세로 스크롤이 처리되도록 overflowY
}


