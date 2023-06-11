import { Crypto } from '@peculiar/webcrypto';

const engineName = "@peculiar/webcrypto";
const crypto = new Crypto();

export { crypto as WebCryptoEngine, engineName as WebCryptoEngineName }
