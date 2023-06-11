const engineName = "native-crypto";

// TODO: add nodejs version assertion

let crypto: Crypto;

if (typeof window !== 'undefined') {
	crypto = window.crypto;
} else {
	crypto = require('crypto').webcrypto;
}

export { crypto as WebCryptoEngine, engineName as WebCryptoEngineName }