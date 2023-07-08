# SessionKey API Reference

The ``SessionKey class`` provides a method to generate a session key and encrypt it using a public key.

## Usage

To use the Codec class for encryption and decryption, follow the usage examples below:

```ts
import { SessionKey } from '@communitysteammode/steam-crypto';

// Create an instance of the SessionKey class
const sessionKeyInstance = new SessionKey();

// Generate a session key and encrypted session key
const { sessionKey, cryptedSessionKey } = sessionKeyInstance.generateSessionKey();

console.log('Session Key:', sessionKey);
console.log('Encrypted Session Key:', cryptedSessionKey);
```

## generateSessionKey(): SessionKeyInterface

Generates a session key and encrypts it using a public key.

### Returns

A ``SessionKeyInterface`` object containing the session key and the encrypted session key.

### SessionKeyInterface

The ``SessionKeyInterface`` interface represents the structure of the session key object returned by the generateSessionKey method.

#### Properties

* ``sessionKey: Buffer``: The generated session key as a Buffer.
* ``cryptedSessionKey: Buffer``: The encrypted session key as a Buffer.
