let resultText = document.querySelector('#final');
    resultText.innerText = localStorage.getItem('correctScore') * 10 + "%";

if(localStorage.getItem('correctScore') > 1){
    let outcome = document.getElementsByClassName('outcome')[0];
    outcome.innerText = 'Pass';
    outcome.style.color = 'green';
    document.body.style.background = 'green';

}else if(localStorage.getItem('correctScore') <= 1){
    let outcome = document.getElementsByClassName('outcome')[0];
    outcome.innerText = 'Fail';
    outcome.style.color = 'red';
    document.body.style.background = 'red';
}


