'use strict';

const button = document.querySelector('#btn');
const inputText = document.querySelector('#text');
const square = document.querySelector('#square');
const eButton = document.querySelector('#e_btn');
const inputRange = document.querySelector('#range');
const circle = document.querySelector('#circle');

button.addEventListener('click', function() {
const textValue = inputText.value;
square.style.backgroundColor = textValue;
});

eButton.style.display = 'none';

inputRange.addEventListener('input', function() {
const rangeValue = inputRange.value;
circle.style.width = rangeValue + '%';
circle.style.height = rangeValue + '%';
});