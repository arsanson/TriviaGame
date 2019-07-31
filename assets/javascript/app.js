let wrongQs=5
let rightQs=0
const answers = ["q1b1","q2b2","q3b3","q4b4","q5b1"]
const qsAnswered = []

$(".questions").on("click", selectAnswer)
$("#submit").on("click", scoringFunc)

function selectAnswer (e){
    qsAnswered.push(e.target.id);
    $("#"+e.target.id).disabled = true;
    console.log(e.target.id)
}

function scoringFunc() {
    /*stop timer8*/
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