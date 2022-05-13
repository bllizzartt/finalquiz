document.addEventListener("DOMContentLoaded",function(){

    // document.querySelector("#name").innerHTML = localStorage.getItem("name")
    // document.querySelector("#text").style.background = localStorage.getItem("color")

})
    var questions = document.getElementsByClassName('question');
    var counter = 0;

    console.log(questions);

    questions[counter].classList.add('show');

    console.log(questions[counter].firstElementChild.innerHTML);

let correctScore = 0;

function nextQuestion(){
    // choose the question from the question list, according to the counter
    let answer = document.getElementsByClassName(`answer${counter}`);
    console.log(answer);

let userValue;

    for(let i = 0; i < answer.length; i++){
        if(answer[i].checked){
            userValue = answer[i].value;

            if(answer[i].classList.contains('correct')){
                correctScore++;        
            }
        }
    }
    

    localStorage.setItem(questions[counter].firstElementChild.innerHTML, userValue);
    questions[counter].classList.remove('show');
    counter++;
    questions[counter].classList.add('show');

    showScore();

};

function prevQuestion(){
    questions[counter].classList.remove('show');
    counter--;
    questions[counter].classList.add('show');

}


function showScore(){
    localStorage.setItem("correctScore", correctScore);
    console.log(correctScore * 10 + "%");

    
}

