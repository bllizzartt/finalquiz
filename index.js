document.addEventListener("DOMContentLoaded",function(){

    // document.querySelector("#name").innerHTML = localStorage.getItem("name")
    // document.querySelector("#text").style.background = localStorage.getItem("color")

})
    var questions = document.getElementsByClassName('question');
    var counter = 0;

    console.log(questions);

    questions[counter].classList.add('show');

    console.log(questions[counter].firstElementChild.innerHTML);


function nextQuestion(){
    // choose the question from the question list, according to the counter
    localStorage.setItem(questions[counter].firstElementChild.innerHTML, 'value from radio' );
    questions[counter].classList.remove('show');
    counter++;
    questions[counter].classList.add('show');
};

function prevQuestion(){
    questions[counter].classList.remove('show');
    counter--;
    questions[counter].classList.add('show');

}