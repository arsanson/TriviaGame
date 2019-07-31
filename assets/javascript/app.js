
/*----Global-Variables----*/ 

let wrongQs=5
let rightQs=0
const answers = ["q1b1","q2b2","q3b3","q4b4","q5b1"]
const qsAnswered = []
let time =120
let intervalId = setInterval(count , 1000)

/*-----Button-Management-----*/

$(".questions").on("click", selectAnswer)
$("#submit").on("click", scoringFunc)

/*-------Functions---------*/

function selectAnswer (e){
    qsAnswered.push(e.target.id);
    $("#"+e.target.id).disabled = true;
    console.log(e.target.id)
}

function scoringFunc() {
    clearInterval(intervalId);
    for (i=0; i<qsAnswered.length; i++){
        if (answers.includes(qsAnswered[i])){
            rightQs++;
            wrongQs--;
        } 
    }
    console.log("your score")
    console.log("correct: " + rightQs)
    console.log("incorrect: " + wrongQs)
}

function count() {

    time--;
    var converted = timeConverter(time);
    /*console.log(converted);*/
    $("#timer").text(converted);
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }