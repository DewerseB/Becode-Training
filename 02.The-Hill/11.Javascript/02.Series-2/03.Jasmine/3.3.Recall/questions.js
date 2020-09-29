let selectElementsStartingWithA = (array) => {
    let startWithA = [];
    array.forEach(element => {
        (element[0] === 'a' || element[0] === 'A') && startWithA.push(element);
    })
    return startWithA;
}

let selectElementsStartingWithVowel = (array) => {
    let regex = /[aeiouAEIOU]/;
    let startWithVowel = [];
    array.forEach(element => {
        element[0].match(regex) && startWithVowel.push(element);
    })
    return startWithVowel;
}

let removeNullElements = (array) => {
    return array.filter((element) => element !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter((element) => element !== null && element !== false);
}

let reverseWordsInArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split('').reverse().join('');
    }
    return array;
}

let everyPossiblePair = (array) => {
    let pairs = [];
    array.sort();
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            pairs.push([array[j], array[i]]);
        }
    }
    return pairs;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3, array.length);
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    array.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
    return array;
}

let getFirstHalf = (string) => {
    return string.slice(0, Math.round(string.length/2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let palindromes = 0;
    array.forEach((element) => {
        isPalindrome(element) && palindromes++;
        function isPalindrome(element) {
            if (element[0].localeCompare(element[element.length-1]) === 0) {
                if (element.length-2 > 0) {
                    return isPalindrome(element.slice(1, element.length-1));
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }
    });
    return palindromes;
}

let shortestWord = (array) => {
    let shortest = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i].length < shortest.length && (shortest = array[i]);
    }
    return shortest;
}

let longestWord = (array) => {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i].length > longest.length && (longest = array[i]);
    }
    return longest;
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach((number) => sum = sum + number);
    return sum;
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseInt(string, 10);
}

let calculateAverage = (array) => {
    let sum = 0;
    array.forEach((number) => sum = sum + number);
    return sum/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 6) {
            newArray.push(array[i]);
        } else {
            break;
        }
    }
    return newArray;
}

let convertArrayToObject = (array) => {
    let obj = {};
    for (let i = 0; i < array.length; i = i + 2) {
        obj[array[i]] = array[i+1];
    }
    return obj;
}

let getAllLetters = (array) => {
    let allLetters = [];
    array.forEach((element) => {
        for (let i = 0; i < element.length; i++) {
            !allLetters.includes(element[i]) && allLetters.push(element[i]);
        }
    })
    allLetters.sort();
    return allLetters;
}

let swapKeysAndValues = (object) => {
    let newObj = {};
    for (let key in object) {
        newObj[object[key]] = key;
    }
    return newObj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for (let key in object) {
        sum = sum + parseInt(key, 10) + parseInt(object[key], 10);
    }
    return sum;
}

let removeCapitals = (string) => {
    return string.replace(/[A-Z]/g, '');
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let day = () => {
        if (date.getDate() < 10) {
            return '0' + date.getDate();
        } else {
            return date.getDate();
        }
    }
    let month = () => {
        if (date.getMonth() + 1 < 10) {
            return '0' + (date.getMonth() + 1);
        } else {
            return (date.getMonth() + 1);
        }
    }
    return day() + '/' + month() + '/' + date.getFullYear();
}

let getDomainName = (string) => {
    return string.substring(string.indexOf('@')+1, string.indexOf('.com'));
}

let titleize = (string) => {
    let wordsArray = string.split(' ');
    for (let i = 0; i < wordsArray.length; i++) {
        if (i === 0) {
            wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
        } else if (wordsArray[i-1].includes('.')) {
            wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
        } else if (wordsArray[i] !== 'the' && wordsArray[i] !== 'and') {
            (wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1));
        }
    }
    return wordsArray.join(' ');
}

let checkForSpecialCharacters = (string) => {
    const notSpecialChars = /^[a-zA-z0-9]+$/g
    return !notSpecialChars.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    return number === 0 ? 1 : number * factorial(number-1);
}

let findAnagrams = (string) => {
    const chars = string.split('');
    let anagrams = [];
    for (let i = 0; i < chars.length; i++) {
        let word = string.split('');
        for (let j = 0; j < chars.length; j++) {
            word.splice(j, 0, word.splice(i, 1).join());
            !anagrams.includes(word.join('')) && anagrams.push(word.join(''));
        }
    }
    return anagrams;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i][0] === array[i][0].toUpperCase() ? array[i] = (array[i].charCodeAt(0) - 64) : array[i] = (array[i].charCodeAt(0) - 96);
    }
    return array;
}
