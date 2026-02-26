/*
 * @Author: tomoyo
 * @Date: 2026-01-25 18:24:56
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-01-25 19:45:03
 */

const Crypto = require("crypto-js");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();

const run = async function () {
  const response = await fetchWithCookie(
    `https://www.500d.me/common/public_key/?_=${+new Date()}`,
    {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      userAgent,
      "x-requested-with": "XMLHttpRequest",
      Referer: "https://www.500d.me/",
    },
  );
  const res = await response.json();
  const { modulus, exponent } = res;
  console.log("modulus, exponent :>> ", modulus, exponent);
  const crypto = require("crypto");

  /**
   * 使用 modulus + exponent 的 RSA PKCS1 加密
   * @param {string} plaintext 明文
   * @param {string} modulusB64 base64 的 modulus
   * @param {string} exponentB64 base64 的 exponent（一般 AQAB）
   */
  function rsaEncrypt(plaintext, modulusB64, exponentB64) {
    const keyObject = crypto.createPublicKey({
      key: {
        kty: "RSA",
        n: modulusB64,
        e: exponentB64,
      },
      format: "jwk",
    });

    const encrypted = crypto.publicEncrypt(
      {
        key: keyObject,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(plaintext),
    );

    return encrypted.toString("base64");
  }
  const cipher = rsaEncrypt("123456", modulus, exponent);
  console.log(cipher);
  fetchWithCookie("https://www.500d.me/login/submit/", {
    headers: {
      token: "6fa07e61-4abe-47c5-ae45-bbd17358d2f8",
      userAgent,
      Referer: "https://www.500d.me/",
    },
    body: `username=admin&enPassword=${cipher}&service=&remember=true`,
    method: "POST",
  })
    // .then((res) => res.json())
    .then(console.log);
};
run();
