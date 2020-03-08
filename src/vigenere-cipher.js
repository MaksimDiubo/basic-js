class VigenereCipheringMachine {

  constructor(name) {
    this.name = name;
  }

  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';

    let i = 0;
    while (key.length < message.length) {
    key += key[i];
    i++
    }
    key = key.split('');

    for (let i = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) {
        encryptedMessage += message[i];
        key.splice(i, 0, message[i]);
      } else if (/[A-Z]/.test(message[i])) {
        let encryptedLetterCode = key[i].charCodeAt() - 65 + message[i].charCodeAt()
        if (encryptedLetterCode > 90) {
          encryptedLetterCode = encryptedLetterCode - 90 + 64;
        }
        encryptedMessage += String.fromCharCode(encryptedLetterCode);
      }
    }
    if (this.name === true || this.name === undefined) {
      return encryptedMessage;
    } else if (this.name === false) {
      return encryptedMessage.split('').reverse().join('');
    }

  }

  decrypt(encryptedMessage, key) {
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';

    let i = 0;
    while (key.length < encryptedMessage.length) {
    key += key[i];
    i++
    }
    key = key.split('');

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!/[A-Z]/.test(encryptedMessage[i])) {
        decryptedMessage += encryptedMessage[i];
        key.splice(i, 0, encryptedMessage[i]);
      } else if (/[A-Z]/.test(encryptedMessage[i])) {
        let decryptedLetterCode = encryptedMessage[i].charCodeAt() - (key[i].charCodeAt() - 65)
        if (decryptedLetterCode < 65) {
          decryptedLetterCode = decryptedLetterCode + 90 - 64;
        }
        decryptedMessage += String.fromCharCode(decryptedLetterCode);
      }
    }
    if (this.name === true || this.name === undefined) {
      return decryptedMessage;
    } else if (this.name === false) {
      return decryptedMessage.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
