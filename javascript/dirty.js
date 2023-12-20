$(document).ready(function(){  //페이지가 로드될 때 실행할 함수를 정의 
    $('#dirty').click(function(){  //id가 showApril인 요소가 클릭되었을 떼 실행할 함수를 정의 
      $.ajax({  //ajax요청을 수행하기 위해 사용하는 함수 
        url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",  //ajax 요청이 전송될 url 지정 
        success: function(response){  
        let dobong = response["RealtimeCityAir"]["row"][11];
        let gu_name = dobong['MSRSTE_NM'];
        let gu_mise = dobong['IDEX_MVL'];
        console.log(gu_name, gu_mise);
        $('#div1').html(gu_name+"의 미세먼지 : "+gu_mise); 
        }
    });

    });
});