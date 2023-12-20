const urlParams = new URLSearchParams(window.location.search); //url에서 정보를 가져오는 형식이라 form.html에서 다시 돌아올 때 name 정보를 주고자 ..
const name = urlParams.get("name");
document.getElementById("name").value = name; 

const id = urlParams.get("id");
document.getElementById("id").value = id; 

const pw = urlParams.get("pw");
document.getElementById("pw").value = pw; 


const name2 = urlParams.get("name");
document.getElementById("name2").value = name2; 

const id2 = urlParams.get("id");
document.getElementById("id2").value = id2; 

const pw2 = urlParams.get("pw");
document.getElementById("pw2").value = pw2;

