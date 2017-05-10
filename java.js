function checkPuzzle1()
{
  var answer;
  answer = document.getElementById("puzzle1Answer").value;
  if(answer == "It operates on batteries" || answer == "it operates on batteries")
  {
    document.getElementById(i).style.background = 'LightGreen';
  }
  else
  {
    alert("Incorrect Answer; Try Again");
  }
}

function checkPuzzle2()
{
  for(var i = 1; i <= 20; i++)
  {
    var correctAnswer = ["H", "E", "W", "A", "S", "P", "R", "E", "S", "S", "I", "N", "G", "H", "I", "S", "L", "U", "C", "K"];
    var answer = document.getElementById(i).value;
    if(answer == correctAnswer[i - 1])
    {
        document.getElementById(i).style.background = 'LightGreen';
    }
    else
    {
      document.getElementById(i).style.background = 'LightCoral';
    }
  }
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

function start()
{
  document.getElementById("problem_1").removeAttribute("hidden");
}

function checkProblem1()
{
  var a = document.getElementById("problem1a").value;
  setCookie("problem1a", a, 10);
  var b = document.getElementById("problem1b").value;
  setCookie("problem1b", b, 10);
  var c = document.getElementById("problem1c").value;
  setCookie("problem1a", c, 10);
  document.getElementById("problem_2").removeAttribute("hidden");

}

function checkProblem2()
{

}

function checkProblem3()
{

}

function checkProblem4()
{

}

function checkProblem5()
{

}

function checkProblem6()
{

}

function checkProblem7()
{

}

function checkProblem8()
{

}
