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
  var a = document.getElementById("problem2a").value;
  setCookie("problem2a", a, 10);
  var b = document.getElementById("problem2b").value;
  setCookie("problem2b", b, 10);
  document.getElementById("problem_3").removeAttribute("hidden");
}

function checkProblem3()
{
  var a = document.getElementById("problem3a").value;
  setCookie("problem3a", a, 10);
  var b = document.getElementById("problem3b").value;
  setCookie("problem3b", b, 10);
  var c = document.getElementById("problem3c").value;
  setCookie("problem3a", c, 10);
  document.getElementById("problem_4").removeAttribute("hidden");

}

function checkProblem4()
{
  var a = document.getElementById("problem4a").value;
  setCookie("problem4a", a, 10);
  var b = document.getElementById("problem4b").value;
  setCookie("problem4b", b, 10);
  document.getElementById("problem_5").removeAttribute("hidden");
}

function checkProblem5()
{
  var a = document.getElementById("problem5a").value;
  setCookie("problem5a", a, 10);
  var b = document.getElementById("problem5b").value;
  setCookie("problem5b", b, 10);
  document.getElementById("problem_6").removeAttribute("hidden");
}

function checkProblem6()
{
  var a = document.getElementById("problem6").value;
  setCookie("problem6", a, 10);
  document.getElementById("problem_7").removeAttribute("hidden");
}

function checkProblem7()
{
  var a = document.getElementById("problem7").value;
  setCookie("problem7", a, 10);
  document.getElementById("problem_8").removeAttribute("hidden");
}

function checkProblem8()
{
  var a = document.getElementById("problem8").value;
  setCookie("problem8", a, 10);
  window.location.assign("score.html")
}

function calculateScore()
{
  var total = 0;
  var problem1a = getCookie("problem1a");
  var problem1b = getCookie("problem1b");
  var problem1c = getCookie("problem1c");
  var problem2a = getCookie("problem2a");
  var problem2b = getCookie("problem2b");
  var problem3a = getCookie("problem3a");
  var problem3b = getCookie("problem3b");
  var problem3c = getCookie("problem3c");
  var problem4a = getCookie("problem4a");
  var problem4b = getCookie("problem4b");
  var problem5a = getCookie("problem5a");
  var problem5b = getCookie("problem5b");
  var problem6 = getCookie("problem6");
  var problem7 = getCookie("problem7");
  var problem8 = getCookie("problem8");

  if(problem1a == "135")
  {
    document.getElementById("1a").innerHTML = "A) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("1a").innerHTML = "A) 0/10"
  }
  if(problem1b == "45")
  {
    document.getElementById("1b").innerHTML = "B) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("1b").innerHTML = "B) 0/10"
  }
  if(problem1c == "45")
  {
    document.getElementById("1c").innerHTML = "C) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("1c").innerHTML = "C) 0/10"
  }
  if(problem2a == "3")
  {
    document.getElementById("2a").innerHTML = "A) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("2a").innerHTML = "A) 0/10"
  }
  if(problem2b == "supplementary" || problem2b == "Supplementary")
  {
    document.getElementById("2b").innerHTML = "B) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("2b").innerHTML = "B) 0/10"
  }
  if(problem3a == "C" || problem3a == "c")
  {
    document.getElementById("3a").innerHTML = "A) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("3a").innerHTML = "A) 0/10"
  }
  if(problem3b == "B" || problem3b == "b")
  {
    document.getElementById("3b").innerHTML = "B) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("3b").innerHTML = "B) 0/10"
  }
  if(problem3c == "A" || problem3c == "a")
  {
    document.getElementById("3c").innerHTML = "C) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("3c").innerHTML = "C) 0/10"
  }
  if(problem4a == "25")
  {
    document.getElementById("4a").innerHTML = "A) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("4a").innerHTML = "A) 0/10"
  }
  if(problem4b == "65")
  {
    document.getElementById("4b").innerHTML = "B) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("4b").innerHTML = "B) 0/10"
  }
  if(problem5a == "acute")
  {
    document.getElementById("5a").innerHTML = "A) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("5a").innerHTML = "A) 0/10"
  }
  if(problem5b == "linear")
  {
    document.getElementById("5b").innerHTML = "B) 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("5b").innerHTML = "B) 0/10"
  }
  if(problem6 == "45")
  {
    document.getElementById("6").innerHTML = " 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("6").innerHTML = " 0/10"
  }
  if(problem7 == "20")
  {
    document.getElementById("7").innerHTML = " 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("7").innerHTML = " 0/10"
  }
  if(problem8 == "138")
  {
    document.getElementById("8").innerHTML = " 10/10"
    total = total + 10;
  }
  else
  {
    document.getElementById("8").innerHTML = " 0/10"
  }
  document.getElementById("total").innerHTML = "Final Score: " + total + "/150";
}
