window.onload = checkVowel;
window.onload = loadCookieList;
var count = 0;

function clearText(){
  document.getElementById("first_value").value = " ";
  document.getElementById("output").innerHTML = "0";
}

function loadCookieList(){
  var cookieSaver = getCookie("setterString");
  document.getElementById("first_value").value = cookieSaver;
  document.getElementById("output").innerHTML = count;
}

function saveArray(){
  var input = document.getElementById("first_value").value
  if(input != " "){
    var setter = input.toString();
    setCookie("setterString",setter,10);
  }
  else{
    alert("Please Enter Unique Value");
  }
}

function checkVowel(){
  var inputString = document.getElementById("first_value").value;
  var vowels = ['A','a','E','e','I','i','O','o','U','u'];
  count = 0;

  for(var i = 0; i < inputString.length; i++){
    if(vowels.indexOf(inputString[i]) > -1){
      count+=1;
    }
  }
  document.getElementById("output").innerHTML = count;
  return count;
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

