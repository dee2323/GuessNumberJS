'use strict'
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;
const displayMassege = function (massege) {
    document.querySelector('.message').textContent = massege;
}
const setBodyColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}
const setNumberWidth = function (width) {
    document.querySelector('.number').style.width = width;
}
const setNumberValue = function (number) {
    document.querySelector('.number').textContent = number;
}
const setScore = function (score) {
    document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            displayMassege('no number');
        } else if (number === guess) {
            displayMassege("✅ correct number");
            setNumberValue(number);
            setBodyColor('#60b347');
            setNumberWidth("30rem");
            setScore(score);
            if (score > heighScore) {
                heighScore = score;
                document.querySelector('.highscore').textContent = heighScore;
            }
        } else {
            if (score > 0) {
                displayMassege(`${guess > number ? '💹 Too high':'⏬ Too law'}`);
                score--;
                setScore(score);
            } else {
                displayMassege('💥 You lost the game');
                setBodyColor("red");
            }

        }
    }

)
document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1
        displayMassege('Start guessing...');
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = ' ';
        setBodyColor("#222");
        setNumberWidth("15rem");
        setNumberValue('?');

    })