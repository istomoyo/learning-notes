/*
 * @Author: tomoyo
 * @Date: 2026-02-23 21:33:26
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-23 23:26:21
 */
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();

const CryptoJS = require("crypto-js");
const suc = function (dataStr) {
  if (dataStr == "no") {
    return false;
  } else {
    var scode = dataStr.split("#")[0];
    var sxh = dataStr.split("#")[1];
    var code = "admin" + "%%%" + "123456";
    var encoded = "";
    for (var i = 0; i < code.length; i++) {
      if (i < 20) {
        encoded =
          encoded +
          code.substring(i, i + 1) +
          scode.substring(0, parseInt(sxh.substring(i, i + 1)));
        scode = scode.substring(
          parseInt(sxh.substring(i, i + 1)),
          scode.length,
        );
      } else {
        encoded = encoded + code.substring(i, code.length);
        i = code.length;
      }
    }
    console.log("encoded :>> ", encoded);
    return encoded;
  }
};
const run = async function () {
  await fetchWithCookie("http://jiaowu.cswu.cn/Logon.do?method=logon");
  const response = await fetchWithCookie(
    "http://jiaowu.cswu.cn/Logon.do?method=logon&flag=sess",
    {
      headers: {
        accept: "text/plain, */*; q=0.01",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        Referer: "http://jiaowu.cswu.cn/Logon.do?method=logon",
        userAgent,
      },
      body: null,
      method: "POST",
    },
  );
  const dataStr = await response.text();
  const encoded = suc(dataStr);
  console.log("encoded :>> ", encoded);
  const result = await fetchWithCookie(
    "http://jiaowu.cswu.cn/Logon.do?method=logon",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        Referer: "http://jiaowu.cswu.cn/Logon.do?method=logon",
      },
      body: `userAccount=&userPassword=&encoded=${encoded}`,
      method: "POST",
    },
  );
  const resultText = await result.text();
  console.log("resultText :>> ", resultText);
};
run();
