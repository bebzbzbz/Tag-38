// ======= LOOPS II =======
// ======= Lvl 1_1 =======
console.log("Lvl 1_1");

function getHighestNumber(array : number[]) {
    let highestNumber : number = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > highestNumber) {
            highestNumber = array[i];
        }
    }
    return(highestNumber);
}

const array1 : number[] = [30, 23, 8, 430, 1];
const array2 : number[] = [9, 0.5, 99, 21, 3];
const array3 : number[] = [42, 420, 4200, 69, 8];

console.log(getHighestNumber(array1));
console.log(getHighestNumber(array2));
console.log(getHighestNumber(array3));

// ======= Lvl 2_3 =======
console.log("Lvl 2_3");

function getNumberOfVowels(string : string) {
    let lettersFromString : string[] = (string.toLowerCase()).split(""); // satz wurde in array mit buchstaben aufgeteilt
    let vowelsArray : string[] = [];

    for(let i = 0; i < lettersFromString.length; i++) {
            if(
                lettersFromString[i].includes("a") || 
                lettersFromString[i].includes("e") || 
                lettersFromString[i].includes("i") || 
                lettersFromString[i].includes("o") || 
                lettersFromString[i].includes("u")) {
                    vowelsArray.push(lettersFromString[i])
            }
    };
    return `The string "${string}" has ${vowelsArray.length} Vowels`;
}

const rara : string = "Who do I work for? Where does my food come from?"
console.log(getNumberOfVowels(rara));

// ======= Lvl 2_4 =======
console.log("Lvl 2_4");

function addToFiftyWhile() : void {
    let index : number = 0;
    let randomSum : number = 0;

    while(randomSum < 50) {
        randomSum += Math.round(Math.random() * 10)
        index++;
    }

    console.log(`While: ${randomSum} > 50. Stopping right here`);
} 
addToFiftyWhile();

function addToFiftyFor() : void {
    let randomSum : number = 0;

    for(let index = 0; randomSum < 50; index++) {
        randomSum += Math.round(Math.random() * 10)
    }
    console.log(`For: ${randomSum} > 50. Stopping right here`);
} 
addToFiftyFor();

// ======= Lvl 3_4 =======
console.log("Lvl 3_4");

const submitBtn = document.querySelector("#submit-btn");
const maxNumberField = document.querySelector<HTMLInputElement>("#max-number");
const selectNumberFields = document.querySelectorAll<HTMLSelectElement>("select");
const resultField = document.querySelector<HTMLParagraphElement>("#result-field");

if(submitBtn && maxNumberField && selectNumberFields && resultField) {
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const maxNumberValue = parseInt(maxNumberField.value);
        const firstSelectValue = parseInt(selectNumberFields[0].value);
        const secondSelectValue = parseInt(selectNumberFields[1].value);

        let resultSum = 0;

        if(maxNumberValue !== maxNumberValue || firstSelectValue === secondSelectValue) {
            alert("Wähle eine Zahl größer als 0. Die Zahlen dürfen sich nicht doppeln")
            return
        }

        for(let i = 2; i < maxNumberValue; i++) {
            if(i % firstSelectValue === 0 || i % secondSelectValue === 0) {
                resultSum += i;
            }
        }
        resultField.innerText = `${resultSum}`;    
    })
}

// ======= Lvl 3_5 =======
console.log("Lvl 3_5");

function factorial(num : number) : number{
    let result = 1;

    for(let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

// ======= Lvl 3_6 =======
console.log("Lvl 3_6");

const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];

let pointsSum = 0;

function average(array : number[]) {
    for(let i = 0; i < array.length; i++) {
        pointsSum += array[i];
    }
    const pointsAverage = pointsSum / array.length;
    console.log(pointsAverage);

    switch (true) {
        case (pointsAverage < 50):
            return "Ungenügend";
        case (pointsAverage >= 50 && pointsAverage < 60):
            return "Mangelhaft";
        case (pointsAverage >= 60 && pointsAverage < 70):
            return"Ausreichend";
        case (pointsAverage >= 70 && pointsAverage < 80):
            return"Befriedigend";
        case (pointsAverage >= 80 && pointsAverage < 90):
            return"Gut";
        default: 
            return"Sehr gut";
    }
}

console.log(average(results))