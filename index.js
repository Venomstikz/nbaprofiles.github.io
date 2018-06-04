
    var quizForm = document.getElementById("ok");
    quizForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var resultsDiv = document.getElementById("results");
        
      var score = 0;
      var score2 = 0;
      var score3 = 0;
      
      var answer1 = document.querySelector('[name="question1"]:checked');
      if (answer1 && answer1.value === "UCLA") {
        score += 1;
      }
      if (answer1 && answer1.value === "Davidson") {
        score2 += 1;
      }
      if (answer1 && answer1.value === "None") {
        score3 += 1;
      }
      var answer2 = document.querySelector('[name="question2"]:checked');
      if (answer2 && answer2.value === "blue") {
        score += 1;  
      }
      if (answer2 && answer2.value === "gold") {
        score2 += 1;  
      }
      if (answer2 && answer2.value === "red") {
        score3 += 1;  
      }
      var answer3 = document.querySelector('[name="question3"]:checked');
      if (answer3 && answer3.value === "chocolate chip pecan cookies") {
        score += 1;
      }
      if (answer3 && answer3.value === "chicken parmesan") {
        score2 += 1;
      }
      if (answer3 && answer3.value === "cereal") {
        score3 += 1;
      }
      var answer4 = document.querySelector('[name="question4"]:checked');
      if (answer4 && answer4.value === "Long Beach, California") {
        score += 1;
      }
      if (answer3 && answer3.value === "Charlotte, North Carolina") {
        score2 += 1;
      }
      if (answer3 && answer3.value === "Akron, Ohio") {
        score3 += 1;
      }
      var answer5 = document.querySelector('[name="question5"]:checked');
      if (answer5 && answer5.value === "strong") {
        score += 1;
      }
      if (answer3 && answer3.value === "quick") {
        score2 += 1;
      }
      if (answer3 && answer3.value === "skilled") {
        score3 += 1;
      }
      if (score >=3) {
        resultsDiv.innerHTML = "You are Russell Westbrook!";
      } 
      if (score2 >=3) {
        resultsDiv.innerHTML = "You are Stephen Curry!";
      } 
      if (score3 >=3) {
        resultsDiv.innerHTML = "You are Lebron James!";
      } 
      
    
      var playerName = document.getElementById('player').value || 'Anon';
      insertScore(playerName, result)
      
    });
    
    function getScores() {
      var url = '/scores/top10';

      var request = new XMLHttpRequest(); 
      request.addEventListener('load', function () {
        var result = JSON.parse(this.responseText);
        var scoresDiv = document.getElementById('scores');
        scoresDiv.innerHTML = '';
        for (var i = 0; i < result.length; i++) {
          scoresDiv.innerHTML += '<li>' + scores[i].player +" "+ "is" +" " + scores[i].score;
        }
      });
      request.open('GET', url, true);
      request.setRequestHeader('Content-type', 'application/json');
      request.send();
    }

    function insertScore(player, result) {
      var url = '/scores/insert';

      var request = new XMLHttpRequest(); 
      request.addEventListener('load', function () {
        if (this.status !== 300) {
          alert('Error!');
          console.log(this.response);
        } else {
          getScores();
        }
      });
      request.open('POST', url, true);
      request.setRequestHeader('Content-type', 'application/json');
      var data = {'player': player, 'result': result};
      request.send(JSON.stringify(data));
    }

    getScores();
