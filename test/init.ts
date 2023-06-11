import { setEngine } from "../src";
import { WebCryptoEngine, WebCryptoEngineName } from "../src/crypto/peculiar_engine";
// import { WebCryptoEngine, WebCryptoEngineName } from "../src/crypto/webcrypto_engine";

setEngine(WebCryptoEngineName, WebCryptoEngine);