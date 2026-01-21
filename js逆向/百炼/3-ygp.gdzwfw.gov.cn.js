/*
 * @Author: tomoyo
 * @Date: 2026-01-21 18:55:55
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-01-21 20:01:27
 */

const crypto = require("crypto");

function sha256(str) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

const GF = "zxcvbnmlkjhgfdsaqwertyuiop0987654321QWERTYUIOPLKJHGFDSAZXCVBNM",
  kre = GF + "-@#$%^&*+!";
function an(e = []) {
  return e.map((t) => kre[t]).join("");
}
function Ore(e) {
  return [...Array(e)].map(() => GF[xre(0, 61)]).join("");
}
function xre(e, t) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * e + 1, 10);
    case 2:
      return parseInt(Math.random() * (t - e + 1) + e, 10);
    default:
      return 0;
  }
}
// x-dgi-req-nonce
const l = Ore(16);
console.log("l :>> ", l);

// x-dgi-req-signature
function qF(e) {
  let t = "";
  return (
    typeof e == "object"
      ? (t = Object.keys(e)
          .map((n) => `${n}=${e[n]}`)
          .sort()
          .join("&"))
      : typeof e == "string" && (t = e.split("&").sort().join("&")),
    t
  );
}
function D1(e = {}) {
  const { p: t, t: n, n: u, k: o } = e,
    r = qF(t);
  return sha256(u + o + decodeURIComponent(r) + n);
}
const o = {
  type: "trading-type",
  openConvert: false,
  keyword: "",
  siteCode: "44",
  secondType: "A",
  tradingProcess: "",
  thirdType: "[]",
  projectType: "",
  publishStartTime: "",
  publishEndTime: "",
  pageNo: 5,
  pageSize: 10,
};
const dateStr = +new Date();
const pageNo = 1;
const p = D1({
  p: `type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo=${pageNo}&pageSize=10`,
  t: dateStr,
  n: l,
  k: `k8tUyS$m`,
}).toString();
console.log(p);

fetch("https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items", {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
    "content-type": "application/json",
    "x-dgi-req-app": "ggzy-portal",
    "x-dgi-req-nonce": l,
    "x-dgi-req-signature": p,
    "x-dgi-req-timestamp": dateStr,
    Referer: "https://ygp.gdzwfw.gov.cn/",
  },
  body: `{"type":"trading-type","openConvert":false,"keyword":"","siteCode":"44","secondType":"A","tradingProcess":"","thirdType":"[]","projectType":"","publishStartTime":"","publishEndTime":"","pageNo":${pageNo},"pageSize":10}`,
  method: "POST",
})
  .then((res) => res.json())
  .then(JSON.stringify)
  .then(console.log);
