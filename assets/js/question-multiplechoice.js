function createCodeMC() {
  // throw alert if answer box is empty
  if (document.getElementById("choice1").value == "") {
    window.alert("Please enter at least one answer choice for your multiple choice question.")
  } else {

    var theQuestion = document.getElementById("MCquestion").value;
    document.getElementById("generateMC").insertAdjacentHTML('beforeend', '<pre>&lt;fieldset&gt;&lt;legend&gt;' + theQuestion + '&lt;/legend&gt;</pre>');
    var theChoices = document.getElementsByName("choice");
    var theChecks = document.getElementsByName("checkbox");

    for (var i = 0; i < theChoices.length; i++) {
      var answerChoice = theChoices[i].value;
      if (answerChoice !== null && answerChoice !== '') {
        if (theChecks[i].checked == true) {
          document.getElementById("generateMC").insertAdjacentHTML('beforeend', '<pre>&lt;input type="button" class="btn btn-light btn-block" value="' + answerChoice + '" onclick="this.style.backgroundColor=\'green\'; this.style.color=\'white\';  this.value=\'Correct: ' + answerChoice + '\';"&gt;</pre>');
        }
        else {
          document.getElementById("generateMC").insertAdjacentHTML('beforeend', '<pre>&lt;input type="button" class="btn btn-light btn-block" value="' + answerChoice + '" onclick="this.style.backgroundColor=\'#dc143c\'; this.style.color=\'white\'; this.value=\'Incorrect: ' + answerChoice + '\';"&gt;</pre>');
        }
      }
      else {
        break;
      }
    }
    document.getElementById("generateMC").insertAdjacentHTML('beforeend', '<pre>&lt;/fieldset&gt;</pre>');
  } // end of check for empty box
} // end of createCode function



function copyCodeMC(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function clearCodeMC(id) {
  if (confirm("Are you sure you want to clear the code?")) 
    document.getElementById(id).innerHTML = "";
  }


function clearQuestion() {
  if (confirm("Are you sure you want to clear the question?")) {
    document.getElementById("MCquestion").value = "";
    for (var i = 0; i < document.getElementsByName("choice").length; i++) {
      document.getElementsByName("choice")[i].value = "";
      document.getElementsByName("checkbox")[i].checked = false;
    }
  }
}
