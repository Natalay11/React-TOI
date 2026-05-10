function manyChecksIfElse() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let str = "";

    if (a > 10) {
        str += "a is bigger than 10";
    } else {
        str += "a is less than or equal to 10 ";
        if (a === 5) {
            str += "an example of a special case";
        }
    }

    if (a === 15) {
        str += "but a is not 15";
    }

    if (a > 5) {
        str += "and a is greater than 5";
    } else {
        str += "and a is less than or equal to 5 ";
    }

    if (a % 2) {
        str += " and a is odd";
    } else {
        str += " and a is even ";
    }
    return str;
}

function manyChecksSwitch() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let str = "";

    switch (true) {
        case a > 10:
            str += "a is bigger than 10";
            break;
        default:
            str += "a is less than or equal to 10 ";
            if (a === 5) str += "an example of a special case";
    }

    if (a === 15) str += "but a is not 15";

    switch (true) {
        case a > 5:
            str += "and a is greater than 5";
            break;
        default:
            str += "and a is less than or equal to 5 ";
    }

    switch (a % 2) {
        case 1:
            str += " and a is odd";
            break;
        default:
            str += " and a is even ";
    }
    return str;
}

console.log("if...else result:", manyChecksIfElse());
console.log("switch result:", manyChecksSwitch());