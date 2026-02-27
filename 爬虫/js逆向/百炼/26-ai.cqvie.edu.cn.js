/*
 * @Author: tomoyo
 * @Date: 2026-02-27 23:10:51
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-27 23:23:15
 */
const JSEncrypt = require("jsencrypt");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();

let encryptor = new JSEncrypt();
encryptor.setPublicKey(
  "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDACwPDxYycdCiNeblZa9LjvDzb" +
    "iZU1vc9gKRcG/pGjZ/DJkI4HmoUE2r/o6SfB5az3s+H5JDzmOMVQ63hD7LZQGR4k" +
    "3iYWnCg3UpQZkZEtFtXBXsQHjKVJqCiEtK+gtxz4WnriDjf+e/CxJ7OD03e7sy5N" +
    "Y/akVmYNtghKZzz6jwIDAQAB" +
    "-----END PUBLIC KEY-----",
);

function getSecretParam(p) {
  if (p === null || p === undefined || p.trim() === "") {
    return "";
  }
  let arr = [];
  let maxIndex = 0;
  for (let i = 0; i <= p.length; i++) {
    if ((i + 1) % 30 === 0) {
      arr.push(encodeURI(encryptor.encrypt(p.substring(maxIndex, i))));
      maxIndex = i;
    }
  }
  maxIndex !== p.length &&
    arr.push(encodeURI(encryptor.encrypt(p.substring(maxIndex, p.length))));
  return encodeURIComponent(JSON.stringify(arr));
}

data = {
  name: "admin",
  pwd: getSecretParam("123456"),
  verifyCode: null,
  universityId: "102574",
  loginType: "login",
};

console.log("data :>> ", data);

const loginFake = async function (data) {
  const responseFirst = await fetchWithCookie("https://ai.cqvie.edu.cn/", {
    headers: {
      userAgent,
    },
  });
  const res = await fetchWithCookie(
    "https://ai.cqvie.edu.cn/center-auth-server/sso/doLogin",
    {
      headers: {
        userAgent,
        Referer:
          "https://ai.cqvie.edu.cn/center-auth-server/officeHallApplicationCode/cas/login?service=https%3A%2F%2Fai.cqvie.edu.cn%2Fump%2Fcommon%2Flogin%2FauthSourceAuth%2Fauth",
      },
      body: JSON.stringify(data),
      method: "POST",
    },
  );
  const resText = await res.json();
  console.log("resText :>> ", resText);
};
loginFake(data)