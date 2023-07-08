# Codec API Reference

This is a TypeScript class that provides encryption and decryption functionalities using the AES-256 algorithm.

## Usage

To use the Codec class for encryption and decryption, follow the usage examples below:

```ts
import { Codec } from './path/to/codec'

// Create an instance of the Codec class
const codec = new Codec()

// Define the encryption key
const key = 'YourEncryptionKey'

// Define the data to be encrypted
const data = 'Sensitive information'

// Encrypt the data
const encryptedData = codec.encrypt(data, key)

// Decrypt the data
const decryptedData = codec.decrypt(encryptedData, key)

console.log('Decrypted data:', decryptedData.toString())

```

**Note:** Make sure to replace 'YourEncryptionKey' with your own encryption key.

## encrypt(input: any, key: string): Buffer

The **`encrypt`** function is used to encrypt input data using the AES-256 algorithm.

### Parameters

* `input`: any: The data to be encrypted.
* `key`: string: The encryption key used for encryption.

### Returns

* `Buffer`: A Buffer object containing the encrypted data.

### Algorithm

The function performs the following steps:

1. Generates a random 16-byte Initialization Vector (IV) using randomBytes from the crypto module.
2. Creates a cipher with the AES-256-ECB algorithm using the provided encryption key and an empty IV. The createCipheriv function is used for this.
3. Disables automatic padding for the AES-256-ECB cipher.
4. Sets the IV for the AES-256-ECB cipher to the generated IV using the end method.
5. Creates a cipher with the AES-256-CBC algorithm using the provided encryption key and the generated IV.
6. Encrypts the input data using the AES-256-CBC cipher by calling the end method on the cipher instance.
7. Concatenates the output of the AES-256-ECB cipher (aesIv.read()) and the AES-256-CBC cipher (aesData.read()) into a single Buffer object.
8. Returns the concatenated Buffer object.

## decrypt(input: any, key: string): Buffer

The **`decrypt`** function is used to decrypt input data that has been encrypted using the AES-256 algorithm.

### Parameters

* `input`: any: The data to be encrypted.
* `key`: string: The encryption key used for encryption.

### Returns

* `Buffer`: A Buffer object containing the encrypted data.

### Algorithm

The function performs the following steps:

1. Creates a decipher with the AES-256-ECB algorithm using the provided encryption key and an empty IV. The createDecipheriv function is used for this.
2. Disables automatic padding for the AES-256-ECB decipher.
3. Sets the IV for the AES-256-ECB decipher to the first 16 bytes of the input data (input.slice(0, 16)) using the end method.
4. Retrieves the remaining encrypted data from the input (input.slice(16)).
5. Creates a decipher with the AES-256-CBC algorithm using the provided encryption key and the IV obtained from the AES-256-ECB decipher (aesIv.read()).
6. Decrypts the remaining encrypted data using the AES-256-CBC decipher by calling the end method on the decipher instance.
7. Returns the decrypted data as a Buffer object obtained from the AES-256-CBC decipher.

## Security Considerations

When using the encrypt and decrypt functions, consider the following security considerations:

1. **Encryption Key Management:** Ensure that you use a strong and secure encryption key. Store the key securely and restrict access to it.

2. **Initialization Vector (IV):** The IV used for encryption and decryption should be unique for each encryption operation. In the provided code, a random IV is generated for each encryption. Ensure that the IV is properly managed and transmitted with the encrypted data.

3. **Padding:** The provided code disables automatic padding. If you modify the code to enable padding, ensure that you understand and implement the appropriate padding scheme for your use case.

4. **Secure Transmission:** Take necessary precautions when transmitting the encrypted data over a network or storing it. Use secure protocols (e.g., HTTPS) and implement appropriate security measures to protect the data in transit and at rest.

5. **Security Auditing:** Regularly review and audit the encryption and decryption processes to identify and address any potential security vulnerabilities.
