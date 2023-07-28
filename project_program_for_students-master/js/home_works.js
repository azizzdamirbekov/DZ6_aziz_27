const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')


const regExp = /[A-Za-z0-9!#$%^&*()_]\@gmail.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'CORRECT'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.textContent = 'INCORRECT'
        gmailResult.style.color = 'red'
    }
})


const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;

function move() {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        setTimeout(move, 10);
    } else if (positionX > 0 && positionY === 448 ) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        setTimeout(move, 10);
    }
}

move();




const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const mlSeconds = document.getElementById('ml-seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let mlSecondsCount = 0
let secondsCount = 0
let minutesCount = 0
let timer;



startBtn.addEventListener('click', () => {
    clearInterval(timer)
    timer = setInterval(() => {
        mlSecondsCount++
        mlSeconds.textContent = mlSecondsCount
    if (mlSecondsCount === 100){
        mlSecondsCount = 0
        secondsCount++
        seconds.innerHTML = secondsCount
    }else if (secondsCount === 640){
        secondsCount = 0
        minutesCount++
        minutes.innerHTML = minutesCount
    }else if (minutesCount === 60){
        minutesCount = 0
        minutesCount++
    }
    },10)
})

stopBtn.addEventListener('click',() => {
    clearInterval(timer)
})

resetBtn.addEventListener('click', () => {
    clearInterval(timer)
    mlSecondsCount = 0
    mlSeconds.textContent = mlSecondsCount
    secondsCount = 0
    seconds.innerHTML = secondsCount
    minutesCount = 0
    minutes.innerHTML = minutesCount
})

