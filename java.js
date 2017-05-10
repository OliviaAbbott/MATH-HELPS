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

function start()
{

}

function checkProblem1()
{

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
