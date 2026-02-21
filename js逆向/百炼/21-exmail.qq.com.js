/*
 * @Author: tomoyo
 * @Date: 2026-02-21 21:05:46
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-21 21:25:09
 */
var PublicKey =
  "CF87D7B4C864F4842F1D337491A48FFF54B73A17300E8E42FA365420393AC0346AE55D8AFAD975DFA175FAF0106CBA81AF1DDE4ACEC284DAC6ED9A0D8FEB1CC070733C58213EFFED46529C54CEA06D774E3CC7E073346AEBD6C66FC973F299EB74738E400B22B1E7CDC54E71AED059D228DFEB5B29C530FF341502AE56DDCFE9";
const NodeRSA = require("node-rsa");

const key = new NodeRSA();
key.importKey({
  n: Buffer.from(PublicKey, "hex"),
  e: 65537,
}, "components-public");

const text = '123456\n1771678834\n';
const encrypted = key.encrypt(text, "base64");
console.log(encrypted.length);