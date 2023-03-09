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
//Aufg. 5
function multiVokale(input, count) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
            result += input[i].repeat(count);
        }
        else {
            result += input[i];
        }
    }
    return result;
}
console.log("Aufgabe: Donnerstag/5 mit den Werten ente und 6: ", multiVokale("ente", 6));
console.log("Aufgabe: Donnerstag/5 mit den Werten sofia und 3: ", multiVokale("sofia", 3));
//Aufg. 6
function wuerfel(wurf) {
    return Math.floor(Math.random() * wurf) + 1;
}
console.log("Aufgabe: Donnerstag/6 für einen Würfel mit 6 Seiten: ", wuerfel(6));
console.log("Aufgabe: Donnerstag/6 für einen Würfel mit 23 Seiten: ", wuerfel(23));
//Aufg. 7
//den Teil mit der Abweichung habe ich nicht verstanden, sorry.
function wuerfelDoppel(wurf) {
    let wuerfelEins = Math.floor(Math.random() * wurf) + 1;
    let wuerfelZwei = Math.floor(Math.random() * wurf) + 1;
    console.log("Die Werte für die einzelnen Würfel: ", wuerfelEins, "+", wuerfelZwei);
    return wuerfelEins + wuerfelZwei;
}
console.log("Aufgabe: Donnerstag/7 für die Summe aus zwei Würfeln mit je 6 Seiten: ", wuerfelDoppel(6));
//# sourceMappingURL=uebungDonnerstag.js.map