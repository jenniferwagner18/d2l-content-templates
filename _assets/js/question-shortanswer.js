function createCode()
{
  // throw alert if answer box is empty
  if (document.getElementById("correct").value == "") {
    window.alert("Please enter at least one correct answer for your short answer question.")
  } else {

qno = document.getElementById("number").value;
theQuestion = document.getElementById("question").value;
correctAnswer = document.getElementById("correct").value.toLowerCase();
additionalAnswer = document.getElementById("additional").value.toLowerCase();
document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>&lt;fieldset&gt;&lt;legend&gt;' + theQuestion + '&lt;/legend&gt; &lt;input id="answer' + qno + '" type="text" size="30" aria-label="Answer"&gt;&lt;button class="btn btn-dark" onclick="checkSA' + qno + '()"&gt;Check Answer&lt;/button&gt; &lt;div id="result' + qno + '" role="alert"&gt; &lt;p&gt;Feedback will show here.&lt;/p&gt; &lt;/div&gt; &lt;script&gt; var SAclicks' + qno + ' = 0; function checkSA' + qno + '() { SAclicks' + qno + ' += 1; var guess; guess = document.getElementById("answer' + qno + '").value.toLowerCase();if (guess == "' + correctAnswer + '"</pre>');

 if (additionalAnswer !== "")
   { document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>|| guess == "' + additionalAnswer + '"</pre>'); }

document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>) { var green = document.createElement("strong"); green.style.color = "green";  green.innerHTML = "Attempt " + SAclicks' + qno + ' + ": Correct!"; var element = document.getElementById("result' + qno + '").children[0]; element.replaceChild(green, element.childNodes[0]); } else { var red = document.createElement("strong"); red.style.color = "#dc143c"; red.innerHTML = "Attempt " + SAclicks' + qno + ' + ": Incorrect! Try again!"; var element = document.getElementById("result' + qno + '").children[0]; element.replaceChild(red, element.childNodes[0]); } } &lt;/script&gt; &lt;/fieldset&gt;</pre>');
} // end of check for empty box
} // end of createCode function

function copyCode(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

function clearCode(id)
{
  if (confirm("Are you sure you want to clear the code?")) 
    document.getElementById(id).innerHTML = "";
}

function clearQuestion() {
  if (confirm("Are you sure you want to clear the question?")) {
  document.getElementById("number").value = "";
  document.getElementById("question").value = "";
  document.getElementById("correct").value = "";
  document.getElementById("additional").value = "";
  }
}