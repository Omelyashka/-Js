let words = ["собака","кошка","машина"];
let randWord = words[Math.floor(Math.random()*words.length)]
alert(randWord)

let total = randWord.length;
let lines = [];
let attempts = 5;

let usedLetters = [];


for (const i of randWord) {
    lines.push("_")
}

while (total != 0 ) {
    alert(lines.join(" "));
    let letter = prompt("Введите букву");
    

    if (letter == null) {
        break;
    } else if (letter > 1) {
        alert("Впишите одну букву")
    } else if ( usedLetters.includes(letter)){
         alert("Вы уже использовали эту букву")
    }
    else {
        letter = letter.toLowerCase();
        for (let i = 0; i < randWord.length; i++) {
            if (randWord[i] == letter) {
                usedLetters.push(letter);
                lines[i] = letter;
                total--;
            }
            // else {
            //     usedLetters.push(letter);
            //     attempts--;
            //     alert("Осталось " + attempts + " попыток"); 
            // }
        }
    }

}

alert("Вы выиграли")