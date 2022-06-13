const result = document.querySelector('#result');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const multiplication = document.getElementById('muliplication');
const division = document.getElementById('division');
let displayString = '';
let temp = '';
let answer = 0;

function toCheckAddition() {
    for (let i=0; i <= temp.length; i++) {
        if (temp[i] == '+') {
            return true;
        }
    }
    return false;
}

function toCheckSubtraction() {
    for (let i=0; i <= temp.length; i++) {
        if (temp[i] == '-') {
            return true;
        }
    }
    return false;
}

function toCheckMultiplication() {
    for (let i=0; i <= temp.length; i++) {
        if (temp[i] == '×') {
            return true;
        }
    }
    return false;
}

function toCheckDivision() {
    for (let i=0; i <= temp.length; i++) {
        if (temp[i] == '÷') {
            return true;
        }
    }
    return false;
}

function displayNum() {

    one.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + one.value + '</div>';
        displayString += toBeDisplayed + '';
        
        temp += one.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    two.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + two.value + '</div>';
        displayString += toBeDisplayed + '' ;
        
        temp += two.value;
        console.log(temp);
        if (toCheckAddition()) {
            let digits = temp.split('+');
            for (let j=0; j < digits.length; j++) {
                answer = parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    three.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + three.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += three.value;
        console.log(temp);
        if (toCheckAddition()) {
            answer += parseInt(three.value);
            console.log(answer);
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    four.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + four.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += four.value;
        console.log(temp);
        if (toCheckAddition()) {
            answer += parseInt(four.value);
            console.log(answer);
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    five.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + five.value + '</div>';
        displayString += toBeDisplayed + '';
        
        temp += five.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
                console.log(answer);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString
    });

    six.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + six.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += six.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    seven.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + seven.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += seven.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-')
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    eight.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + eight.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += eight.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    nine.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + nine.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += nine.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    zero.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + zero.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += zero.value;
        if (toCheckAddition()) {
            let digits = temp.split('+');
            
            for (let j=0; j < digits.length; j++) {
                answer += parseInt(digits[j]);
            }
        }
        else if (toCheckSubtraction()) {
            let digits = temp.split('-');
            
            for (let j=0; j < digits.length; j++) {
                answer -= parseInt(digits[j]);
            }

        }
        else if (toCheckMultiplication()) {
            let digits = temp.split('×');
            if (answer == 0) {
                answer += 1
            }
            for (let j=0; j < digits.length; j++) {
                answer *= parseInt(digits[j]);
            }

        }
        else if (toCheckDivision()) {
            let digits = temp.split('÷');
            
            for (let j=0; j < digits.length; j++) {
                answer /= parseInt(digits[j]);
            }

        }
        result.innerHTML = displayString;
    });

    addition.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + addition.value + '</div>';
        displayString += toBeDisplayed + '' ;
        
        temp += addition.value;
        result.innerHTML = displayString;
    });

    subtraction.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + subtraction.value + '</div>';
        displayString += toBeDisplayed + '' 

        temp += subtraction.value;
        result.innerHTML = displayString;
    });

    multiplication.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + multiplication.value + '</div>';
        displayString += toBeDisplayed + '' ;

        temp += multiplication.value;
        result.innerHTML = displayString;
    });

    division.addEventListener('click', () => {
        toBeDisplayed = '<div class="output">' + division.value + '</div>';
        displayString += toBeDisplayed + '';
        
        temp += division.value;
        result.innerHTML = displayString;
    });
}

function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
    displayString = '';
    answer = 0;
    temp = ''
    digits = []
}

function output() {
    document.getElementById('result').innerHTML = "";
    result.innerHTML = '<div class="output">' + answer + '</div>';
    answer = 0;
    displayString = '';
    temp = ''
}

displayNum()