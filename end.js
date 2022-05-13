//This page is for presenting our local storage values
let resultText = document.querySelector('#final');
    resultText.innerText = localStorage.getItem('correctScore') * 10 + "%";

if(localStorage.getItem('correctScore') > 7){
    let outcome = document.getElementsByClassName('outcome')[0];
    outcome.innerText = 'You must know Chase pretty well! Pass!';
    document.body.style.background = 'green';

}else if(localStorage.getItem('correctScore') < 6){
    let outcome = document.getElementsByClassName('outcome')[0];
    outcome.innerText = 'Seems like you two just met! Fail!';
    document.body.style.background = 'red';
}


