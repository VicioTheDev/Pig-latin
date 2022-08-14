function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ei";
        return document.getElementById("translatedtext").innerHTML = newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        newStr = str.replace(/\b(\w)(\w+)\b/g, '$2$1ei');;
        return document.getElementById("translatedtext").innerHTML = newStr;
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("translatedtext").innerHTML);
}
