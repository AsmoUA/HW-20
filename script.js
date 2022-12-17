let a = prompt("Enter the number for 'a':");
let b = prompt("Enter the number for 'b':");

function maxNumber(a, b) {

    while (!Number(a) || !Number(b)){
        a = prompt("Enter the number for 'a':");
        b = prompt("Enter the number for 'b':");
    }
    
    return a == b ? "a = b" : a > b ? a : b;
}

alert(maxNumber(a, b))


let numberForRec = prompt("Enter the number");

function recnumb (numberForRec) {
    while (!Number(numberForRec)) {
        numberForRec = prompt("Enter the number");
    }

    return numberForRec * -1;
}

alert(recnumb(numberForRec));


let number = prompt("Plese, enter the number");
let count = prompt("Plese, enter the count");

function tree(number, count) {
    for (let i = 0; i < count; i++) {
        number += 3;
    }

    return number;
}

alert(tree(+number, +count));


let km = prompt('How many km do you want convert');
let metric = prompt('What unit do you want to convert km: to "m" or to "cm"?');

let kmToM = () => alert(`${km}km is ${km * 1000}m`);
let kmToCm = () => alert(`${km}km is ${km * 100000}cm`);

function getMetric(metric, m, cm) {
    return metric == 'm' ? m() : metric == 'cm' ? cm() :
        alert(`"${metric}" is not "m" or "cm", i can't convert`);   
}


getMetric(metric, kmToM, kmToCm);