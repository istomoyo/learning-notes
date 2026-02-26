/*
 * @Author: tomoyo
 * @Date: 2026-02-08 21:14:28
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-08 21:22:03
 */
const CryptoJS = require("crypto-js");

function desEncrypt(data, password) {
  const text = decodeURIComponent(encodeURIComponent(data));
  const key = CryptoJS.enc.Utf8.parse(password);

  const encrypted = CryptoJS.DES.encrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString(); // base64
}

console.log(
  desEncrypt("1234567", "admin0000000000000000000")
);

