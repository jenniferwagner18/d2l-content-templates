function createCodeMA()
  {
    // throw alert if answers 1 and 2 are empty
    if (document.getElementById("choice1").value == "" && document.getElementById("choice2").value == "" && document.getElementById("match1").value == "" && document.getElementById("match2").value == "") {
      window.alert("Please enter text for at least choices and matches 1 & 2.")
    } else {

  // set color palette
  var colorPalette = ["#B81414", "#AB5D03", "#6E7002", "#02701E", "#144BB8", "#2B0270"];

  // directions paragraph
  var theDirections = document.getElementById("matching").value;
  document.getElementById("generateMA").insertAdjacentHTML('beforeend', '<pre>&lt;fieldset&gt;&lt;legend&gt;' + theDirections + '&lt;/legend&gt; &lt;div class="container"&gt; &lt;div class="row"&gt; &lt;div class="col-sm-6"&gt;&lt;p&gt;Choices:&lt;/p&gt;</pre>');

  // left column
 var theChoices = document.getElementsByName("choice");
  for (var i = 0; i < theChoices.length; i++) {
    var answerChoice = theChoices[i].value;
    answerChoice = answerChoice.replace(/'/g, "&rsquo;").replace(/"/g, "&Prime;"); // replace apostrophe and double quotes with right single quote and double prime quotes
    if (answerChoice !== null && answerChoice !== '')
      {
        document.getElementById("generateMA").insertAdjacentHTML('beforeend', '<pre>&lt;input type="button" class="btn btn-light btn-block" value="' + answerChoice + '" onclick="this.value=\'' + (i + 1) + ". " + answerChoice + '\'; this.style.backgroundColor=\'' + colorPalette[i] + '\'; this.style.color=\'white\';"&gt;</pre>');
    }
    else
      {
        break;
      }
    } //end of for loop for left column

document.getElementById("generateMA").insertAdjacentHTML('beforeend', '<pre>&lt;/div&gt;&lt;div class="col-sm-6"&gt;&lt;p&gt;Matches:&lt;/p&gt;</pre>');

// right column
var allMatches = [];
var theMatches = document.getElementsByName("match");
for (var i = 0; i < theMatches.length; i++) {
 var answerMatch = theMatches[i].value;
  answerMatch = answerMatch.replace(/'/g, "&rsquo;").replace(/"/g, "&Prime;"); // replace apostrophe and double quotes with right single quote and double prime quotes
  if (answerMatch !== null && answerMatch !== '') {
    allMatches.push(answerMatch);
  }
    }  // end of for loop for right column
      
// shuffle array elements
do {
    var shuffledArray = d3.shuffle(allMatches.slice());
    } while (JSON.stringify(shuffledArray) === JSON.stringify(allMatches));

// display buttons from shuffled array
for (var i = 0; i < allMatches.length; i++) {
    document.getElementById("generateMA").insertAdjacentHTML('beforeend', '<pre>&lt;input type="button" class="btn btn-light btn-block" value="' + shuffledArray[i] + '" onclick="this.style.backgroundColor=\'' + colorPalette[allMatches.indexOf(shuffledArray[i])] + '\'; this.style.color=\'white\'; this.value=\'' + (allMatches.indexOf(shuffledArray[i]) + 1) + ". " + shuffledArray[i] + '\';"&gt;</pre>');

  } // end of for loop to display buttons from shuffled array

document.getElementById("generateMA").insertAdjacentHTML('beforeend', '<pre>&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/fieldset&gt;</pre>');
} // end of check for empty 1 & 2 boxes
} // end of createCode function


function copyCodeMA(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}

function clearCodeMA(id)
{
  if (confirm("Are you sure you want to clear the code?")) 
  document.getElementById(id).innerHTML = "";
}

function clearQuestionMA()
{
  if (confirm("Are you sure you want to clear the question?")) {
  document.getElementById("matching").value = "";
   for (var i = 0; i < document.getElementsByName("choice").length; i++) {
    document.getElementsByName("choice")[i].value = "";
    document.getElementsByName("match")[i].value = "";
   }
  }
}
