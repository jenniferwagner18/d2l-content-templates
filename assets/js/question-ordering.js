function createCode()
{ 
// throw alert if answers 1 and 2 are empty
if (document.getElementById("order1").value == "" && document.getElementById("order2").value == "") {
  window.alert("Please enter order answers for at least 1 and 2.")
} else {
// create array for original order input by instructor
var origArray = [];
var origColl = document.getElementsByName("order");
for (var i = 0; i < origColl.length; i++) {
  if (origColl[i].value !== null && origColl[i].value !== '')
    { origArray.push(origColl[i].value); }
  else
    { break; }
} // end of for loop

// only create code if original collection is not empty
for (var i = 0; i < origColl.length; i++) {
  if (origColl[i].value !== null && origColl[i].value !== '')
  {
// shuffle original array elements
do {
     var shuffledArray = d3.shuffle(origArray.slice());
    } while (JSON.stringify(shuffledArray) === JSON.stringify(origArray));
// display directions
var directions = document.getElementById("directions").value;
  document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>&lt;fieldset&gt;&lt;legend&gt;' + directions + '&lt;/legend&gt;</pre>');
// display shuffled array elements next to input boxes
var qnumber = document.getElementById("qnumber").value;
for (var i = 0; i < shuffledArray.length; i++) {
    document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>&lt;p&gt;&lt;label&gt; &lt;input id="order-answer' + qnumber + (i+1) + '" name="order-answer' + qnumber + '" type="text" size="1"&gt; ' + shuffledArray[i] + '&lt;/label&gt;&lt;/p&gt;</pre>');
} // end of for loop

document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>&lt;button class="btn btn-dark" onclick="checkOrder' + qnumber + '()"&gt;Check Answer&lt;/button&gt; &lt;br&gt;&lt;br&gt; &lt;div id="order-result' + qnumber + '" role="alert"&gt;&lt;p&gt;Feedback will show here.&lt;/p&gt;&lt;/div&gt;&lt;script&gt; var ORclicks' + qnumber + ' = 0; function checkOrder' + qnumber + '() {ORclicks' + qnumber + ' += 1; var guessArray = []; var guessColl = document.getElementsByName("order-answer' + qnumber + '"); for (var i = 0; i < guessColl.length; i++) { if (guessColl[i].value !== null && guessColl[i].value !== "") { guessArray.push(guessColl[i].value); } } var correctOrder = [');

for (var i = 0; i < shuffledArray.length; i++) {
   document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>"' + (origArray.indexOf(shuffledArray[i]) + 1) + '", ');
} // end of for loop

 document.getElementById("generate").insertAdjacentHTML('beforeend', '<pre>]; if (JSON.stringify(guessArray) === JSON.stringify(correctOrder))  {  var green = document.createElement("strong"); green.style.color = "green"; green.innerHTML = "Attempt " + ORclicks + ": Correct!"; var element = document.getElementById("order-result' + qnumber + '").children[0]; element.replaceChild(green, element.childNodes[0]); }  else { var red = document.createElement("strong"); red.style.color = "#dc143c"; red.innerHTML = "Attempt " + ORclicks + ": Incorrect! Try again!"; var element = document.getElementById("order-result' + qnumber + '").children[0]; element.replaceChild(red, element.childNodes[0]); } } &lt;/script&gt; &lt;/fieldset&gt;</pre>');

} // end of if collection not empty
  else
      {
        break;
      }
} // end of for loop
} // end of check for empty 1 & 2 boxes
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

function clearQuestion()
{
  if (confirm("Are you sure you want to clear the question?")) {
  document.getElementById("qnumber").value = "";
  document.getElementById("directions").value = "";
  for (var i = 0; i < document.getElementsByName("order").length; i++) {
    document.getElementsByName("order")[i].value = "";
  }
  }
}
