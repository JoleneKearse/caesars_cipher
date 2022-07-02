const msg = document.getElementById('textInput').value
const keyNum = document.getElementById('key').value
const result = document.getElementById('resultText')


// FUNCTIONS FOR CAESAR'S CIPHER
// check if uppercase
function isUpperCase(str) {
    return str === str.toUpperCase()
}

// encode each letter
function encode(str, key) {
    console.log(`encode function: ${msg} + ${keyNum}`)
    let encoded = ''
    
    for (let i=0; i < msg.length; i++) {
        // only work on upper or lowercase letters
        if (str[i].match(/[\w]/i)) {
             // if uppercase, return uppercase
            if (isUpperCase(str[i])) {
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65)
                console.log(encoded)
            } else {
                // return lowercase letters
                encoded += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97)
                console.log(encoded)
            }
        } else {
            encoded += str[i]
        }
    }
    return encoded
}

function decode(str, key) {
    console.log('clicked decode')
    console.log(`decode function: ${msg} + ${keyNum}`)
    const shift = (26 - key) % 26
    const decoded = encode(str, shift)
    return decoded
}

function showEncodedResult() {
    result.textContent = encode(msg, keyNum)
}

function showDecodedResult() {
    result.textContent = decode(msg, keyNum)
}

function resetInput() {
    document.getElementById('myForm').reset()
    msg.value = ''
    msg.textContent = ''
    keyNum.value = 0
    keyNum.textConent = ''
    document.location.reload()
    console.log(`resetBtn: ${msg}`)
    console.log(`resetBtn: ${keyNum}`)
}

document.getElementById('encodeBtn').addEventListener('click', showEncodedResult)

document.getElementById('decodeBtn').addEventListener('click', showDecodedResult)

document.getElementById('resetBtn').addEventListener("click", resetInput)

