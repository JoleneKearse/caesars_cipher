const body = document.getElementsByTagName('body')
const text = document.getElementById('messageInfo')
const result = document.getElementById('resultText')
document.getElementById('encodeBtn').addEventListener('click', encode)
document.getElementById('decodeBtn').addEventListener('click', decode)

// set up background
background = new Array(1000).fill('00101')
body.style.background
// FUNCTIONS FOR CAESAR'S CIPHER
// check if uppercase
function isUpperCase(str) {
    return str === str.toUpperCase()
}

// encode each letter
const encode = (str, key) => {
    let encoded = ''
    
    for (let i=0; i < str.length; i++) {
        // only work on upper or lowercase letters
        if (str[i].match(/[\w]/i)) {
             // if uppercase, return uppercase
            if (isUpperCase(str[i])) {
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65)
            } else {
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97)
            }
        } else {
            encoded += str[i]
        }
    }
    return encoded
}

const decode = (str, key) => {
    const shift = (26 - key) % 26
    const decoded = encode(str, shift)
    return decoded
}

const results() {
    const resultsBox = document.createElement('div')
    resultsBox.textContent = 
}