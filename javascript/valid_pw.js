let red_warning = document.getElementById("wrong");

//비밀번호 등록을 잘못했을 경우 실행하는 함수 
function warning(msg) {  //pure함수
  red_warning.style.border = "3px solid red";  //폼 색깔 붉게 변하게 함
  let warningMessage = document.getElementById("warningMsg");  //warningMsg 아이디값을 가지고 있는 객체 가져옴
  warningMessage.innerHTML = msg;  //해당 내용 컨텐츠로 넣음 
  warningMessage.style.color = "red";  //색깔은 빨간색 
  return false;  //폼 동작 방지하도록 함
}

//폼 제출을 했을 경우 입력한 비밀번호와 url비밀번호가 같은지 확인하는 함수 
function validateForm() {  
  const password = document.getElementsByName('pw')[0].value;  //폼의 name값으로 불러옴 배열의 첫번째 비교 

  if (password.length < 4 && !/[\W_]/.test(password)) {  //4자보다 작고 특수문자가 없는 경우
    const msg = "비밀번호는 4자리 이상이어야 하며, 특수문자가 있어야 합니다.";
    return warning(msg);
  } else if (password.length < 4) {  //특수문자가 있으나 4자리보다 작은 경우
    const msg = "비밀번호는 4자리 이상이어야 합니다.";
    return warning(msg);
  } else if (!/[\W_]/.test(password)) {  //4자리를 넘었지만 특수문자가 없는 경우
    const msg = "비밀번호 안에 특수문자가 있어야 합니다.";
    return warning(msg);
  }

  return true;  //이외에는 모두 참 
}


let now= new Date()
let nowDate=now.getDate();
let nowMonth=now.getMonth();
let nowWeek=now.getDay();
let week;
switch(nowWeek)
{
case 0: week="일"; break;
case 1: week="월"; break;
case 2: week="화"; break;
case 3: week="수"; break;
case 4: week="목"; break;
case 5: week="금"; break;
default: week="토";
}
document.write("오늘은 "+(nowMonth+1)+"월 "+nowDate+"일"+week+"요일<br>");

let end=new Date(2023, 5, 15);
let Dday = end.getTime() - now.getTime();

// 일수로 변환
Dday = Math.ceil(Dday / (1000 * 3600 * 24));

// 디데이 출력
document.write("예상 종강일 !! D-" + Dday);
