const crypto = require('crypto');

const targetHash = '5531a5834816222280f20d1ef9e95f69';

function findPin() {
    for (let i = 0; i <= 9999; i++) {
        // Format the number as a 4-digit string (e.g., '0001', '0456')
        const pin = i.toString().padStart(4, '0');
        
        // Compute the MD5 hash of the PIN
        const hash = crypto.createHash('md5').update(pin).digest('hex');

        // Check if the hash matches the target hash
        if (hash === targetHash) {
            return pin;
        }
    }
    return null; // If no match is found (theoretically shouldn't happen)
}

const result = findPin();
if (result) {
    console.log(`Alice's PIN is: ${result}`);
} else {
    console.log('PIN not found.');
}
