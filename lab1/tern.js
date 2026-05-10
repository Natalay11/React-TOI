let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let resultIfElse;

let b;
if (a > 10) {
    b = a;
} else {
    b = a * 2;
}

if (b > 5) {
    resultIfElse = 2 * a + 1;
} else {
    let c;
    if (a < 3) {
        c = 1;
    } else {
        c = 2 * (a - 2);
    }
    if (c > 4) {
        resultIfElse = 5;
    } else {
        if (a % 2 === 0) {
            resultIfElse = 6;
        } else {
            resultIfElse = 7;
        }
    }
}

console.log(`if...else результат: ${resultIfElse}`);

let resultSwitch;

let bSwitch;
if (a > 10) {
    bSwitch = a;
} else {
    bSwitch = a * 2;
}

let cSwitch;
if (a < 3) {
    cSwitch = 1;
} else {
    cSwitch = 2 * (a - 2);
}

switch (true) {
    case bSwitch > 5:
        resultSwitch = 2 * a + 1;
        break;
    case cSwitch > 4:
        resultSwitch = 5;
        break;
    default:
        if (a % 2 === 0) {
            resultSwitch = 6;
        } else {
            resultSwitch = 7;
        }
        break;
}

console.log(`switch результат: ${resultSwitch}`);