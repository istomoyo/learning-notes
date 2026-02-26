/*
 * @Author: tomoyo
 * @Date: 2026-02-21 22:17:52
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-23 23:04:51
 */
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();

const CryptoJS = require("crypto-js");

const parseUrl = function (hh) {
  var aa = hh.split("/");
  var aaa = aa.length;
  var bbb = aa[aaa - 1].split(".");
  var ccc = bbb[0];
  var cccc = bbb[1];
  var r = /^\+?[1-9][0-9]*$/;
  var ee = "_blank";
  var srcs = CryptoJS.enc.Utf8.parse(ccc);
  var k = CryptoJS.enc.Utf8.parse("qnbyzzwmdgghmcnm");
  var en = CryptoJS.AES.encrypt(srcs, k, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  var ddd = en.toString();
  ddd = ddd.replace(/\//g, "^");
  ddd = ddd.substring(0, ddd.length - 2);
  var bbbb = ddd + "." + bbb[1];
  aa[aaa - 1] = bbbb;
  var uuu = "";
  for (i = 0; i < aaa; i++) {
    uuu += aa[i] + "/";
  }
  uuu = uuu.substring(0, uuu.length - 1);
  return uuu;
};
const run = async function () {
  const response = await fetchWithCookie(
    "http://ggzy.zwfwb.tj.gov.cn/jyxx/index_2.jhtml",
    {
      headers: {
        userAgent,
      },
    },
  );
  let responseHtml = await response.text();

  const reg = /<a[^>]*url="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let resArr = [];
  let match;
  while ((match = reg.exec(responseHtml)) !== null) {
    const url = match[1];
    const title = match[2]
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, "")
      .trim();

    resArr.push({ url, title, trueUrl: parseUrl(url) });
  }
  console.log("resArr :>> ", resArr);
};

run();
