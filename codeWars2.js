// 8 kyu Vowel remover
// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

const vowels = ["a", "e", "i", "o", "u"]

function shortcut(s) {
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            s.splice(i, 1, '');
        }
    }
    return s.join('');
};

console.log(shortcut('hello'))