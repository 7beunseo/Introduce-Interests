//a 태그의 기본 동작 방지 함수 
let request=document.getElementById("only_login");  //클릭 이벤트가 발생했을 때 only_login id값을 가져옴 
request.onclick=function(event){ //매개변수 받음 
    event.preventDefault();  //기본 행동(클릭하면 링크 이동)취소
    alert("로그인 필요!");
    console.log(event.type, event.defaultPrevented, event.target.tagName.toLowerCase());
}