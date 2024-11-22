const crypto = require('crypto');
const fs = require('fs');


const targetHash = '578ed5a4eecf5a15803abdc49f6152d6';

const passwordListPath = './500-worst-passwords.txt';

function dictionaryAttack() {
    try {

        const passwords = fs.readFileSync(passwordListPath, 'utf8').split('\n');

        for (const password of passwords) {
            
            const trimmedPassword = password.trim();

            
            const hash = crypto.createHash('md5').update(trimmedPassword).digest('hex');

         
            if (hash === targetHash) {
                return trimmedPassword; 
            }
        }
    } catch (err) {
        console.error('Error reading the password list:', err);
    }
    return null; 
}


const result = dictionaryAttack();
if (result) {
    console.log(`Bob's password is: ${result}`);
} else {
    console.log('Password not found in the list.');
}
