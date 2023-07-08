import { randomBytes, publicEncrypt } from 'crypto'
import { readFileSync } from 'fs'
import path from 'path'

interface SessionKeyInterface {
  sessionKey: Buffer
  cryptedSessionKey: Buffer
}

export class SessionKey {
  public generateSessionKey (): SessionKeyInterface {
    const publicKeyPath = path.join(__dirname, 'public.pub')
    const publicKey = readFileSync(publicKeyPath)
    const sessionKey = randomBytes(32)
    const cryptedSessionKey = publicEncrypt(publicKey, sessionKey)
    return {
      sessionKey,
      cryptedSessionKey
    }
  }
}
