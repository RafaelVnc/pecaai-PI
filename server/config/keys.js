import dotenv from "dotenv";
import forge from "node-forge";
import fs from "fs";
import path from "path";

dotenv.config();

const publicKeyPath = path.resolve(process.env.PUBLIC_KEY_PATH);
const privateKeyPath = path.resolve(process.env.PRIVATE_KEY_PATH);

if (!fs.existsSync(publicKeyPath) || !fs.existsSync(privateKeyPath)) {
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
  fs.writeFileSync(publicKeyPath, forge.pki.publicKeyToPem(keypair.publicKey));
  fs.writeFileSync(privateKeyPath, forge.pki.privateKeyToPem(keypair.privateKey));
  console.log("🔑 Chaves RSA geradas!");
}

const publicKey = fs.readFileSync(publicKeyPath, "utf8");
const privateKey = fs.readFileSync(privateKeyPath, "utf8");

export { publicKey, privateKey };
