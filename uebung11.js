"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aufg. 1
function concatenate(inputOne, inputTwo) {
    return `${inputOne} ${inputTwo}`;
}
// console.log(concatenate("ein", "String"))
let result = concatenate("ein", "String");
console.log("Aufgabe: Donnerstag/1: ", result, " Das ist ein Typ: ", (typeof result));
//Aufg. 2
function toNumber(input) {
    return Number(input);
}
console.log("Aufgabe: Donnerstag/2: ", toNumber("1"), " ", toNumber("2"), " ", toNumber("2735"), " und das sind Ausgaben vom Typ: ", (typeof toNumber), "mit Rückgabewert", (typeof toNumber("2")));
console.log("Aufgabe: Donnerstag/2: Test mit dem Parameter true in Klammern", toNumber("true"));
//Aufg. 3
function chain(input, rep) {
    let result = "";
    for (let i = 0; i < rep; i++) {
        result += input;
    }
    return result;
}
console.log("Aufgabe: Donnerstag/3 mit den Werten Alright und 3: ", chain("Alright, ", 3));
//Aufg. 4
let vokale = ["a", "e", "i", "o", "u"];
function vokalChecker(input) {
    for (let i = 0; i < vokale.length; i++) {
        if (input.includes(vokale[i])) {
            return true;
        }
    }
    return false;
}
console.log("Aufgabe: Donnerstag/4 mit den Werten x und i: ", vokalChecker("x"), vokalChecker("i"));
//# sourceMappingURL=uebung11.js.map