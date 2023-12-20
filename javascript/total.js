        //예를 들어 id:1234 password:5678을 받아 현재 url이 ?id=1234&password:5678이라고 가정

        function validate() {  //함수 5 : 이 함수는 이전에 작성했던 비밀번호(url에 있는 값)와 사용자가 로그인화면에서 입력한 값이 같은지 확인하는 함수 
            //함수 생성 1
  
            let firstId = new URLSearchParams(window.location.search).get("id"); //firstID=1234
            let firstPw = new URLSearchParams(window.location.search).get("pw"); //firstPW=5678
            let secondId = document.getElementById("id").value; //id="id"인 요소의 값 할당 secondID=로그인 id폼에 입력한 값
            let secondPw = document.getElementById("pw").value; //id="pw"인 요소의 값 할당 secondPW=로그인 pw폼에 입력한 값
  
          if (firstId == secondId && firstPw == secondPw) {
              //입력한 id와 pw값이 같은지 확인. and연산으로 모두 같아야 참
              return true;
          } else {
              alert("아이디나 비밀번호가 일치하지 않습니다.");
              return false;
          }
          }
  
  
  
  //마우스가 위로 올라왔을 경우 이미지를 사라지게 하는 함수 

  function showMessage(element) {
      element.setAttribute("data-src", element.getAttribute("src")); //이전 src 값(매개변수로 가져온 element의 src)을 data-src 속성에 저장 
      element.src = "";  //alt로 설명하기 위해서 이미지 안 보이게 함 
  }
  //마우스가 떼 졌을 경우 다시 이미지를 불러오는 함수 

  function reset(element) {
      const prevSrc = element.getAttribute("data-src"); //이전 src 값에 저장했던 src 가져옴
      element.src = prevSrc; //이전 src 값을 복원
  
  }

  //마우스가 클릭되었을 경우 confirm을 불러와 true, false로 폼 동작 제어 
        function change(){  //로그인 확인하는 함수 --> confirm에서 확인 누르면 true, 취소 누르면 false 되는 것 이용 
          let check=confirm("정말로 로그아웃 하시겠습니까? 이전의 정보가 저장되지 않을 수 있습니다.")
        if (check){
          alert("로그아웃되었습니다");
          return true;
        }
        else{
          return false;
        }
      }

      //문서가 로딩되었을 경우 로또 번호 콘솔창에 알려주는 함수 
function lotto(){  
    let lotto=new Array(6);
    for(let i=0; i<6;i++){
        lotto[i]=Math.floor(Math.random()*46+1);  //배열에 랜덤 숫자 넣음 
    }
    alert("방문 기념 로또 당첨번호 알려드려요~ 콘솔확인");  //콘솔창에
    console.log(lotto);
}

