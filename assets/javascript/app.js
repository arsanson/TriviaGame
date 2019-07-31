let wrongQs=5
let rightQs=0
const answers = []
const qsAnswered = []

$("#q1b1").on("click", selectAnswer)

function selectAnswer (e){
    /*qsAnswered.push(answer);
    $(answer).disabled = true;*/
    console.log(e.target.id)
}