import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

export class Codec {
  public encrypt (input: any, key: string): Buffer {
    const iv = randomBytes(16)
    const aesIv = createCipheriv('aes-256-ecb', key, '')
    aesIv.setAutoPadding(false)
    aesIv.end(iv)

    const aesData = createCipheriv('aes-256-cbc', key, iv)
    aesData.end(input)

    return Buffer.concat([aesIv.read(), aesData.read()])
  }

  public decrypt (input: any, key: string): Buffer {
    const aesIv = createDecipheriv('aes-256-ecb', key, '')
    aesIv.setAutoPadding(false)
    aesIv.end(input.slice(0, 16))

    const aesData = createDecipheriv('aes-256-cbc', key, aesIv.read())
    aesData.end(input.slice(16))

    return aesData.read()
  }
}
