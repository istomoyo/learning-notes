/*
 * @Author: tomoyo
 * @Date: 2026-01-24 20:25:53
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-01-24 22:46:18
 */
window = global;
const Crypto = require("crypto-js");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();
const url =
  "/api/home/getnewsflash?firstrankindex=1&lastrankindex=0&lastranktime=&pagesize=10";

// key
const a1 = function (k, t) {
  console.log(
    "Crypto.HmacSHA512(k, t).toString() :>> ",
    Crypto.HmacSHA512(k, t).toString(),
  );
  return Crypto.HmacSHA512(k, t).toString();
};
const o2 = function () {
  const a2 = {
    n: 20,
    codes: {
      0: "W",
      1: "l",
      2: "k",
      3: "B",
      4: "Q",
      5: "g",
      6: "f",
      7: "i",
      8: "i",
      9: "r",
      10: "v",
      11: "6",
      12: "A",
      13: "K",
      14: "N",
      15: "k",
      16: "4",
      17: "L",
      18: "1",
      19: "8",
    },
  };
  for (
    var e = (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
      ).toLowerCase(),
      t = e + e,
      n = "",
      i = 0;
    i < t.length;
    ++i
  ) {
    var o = t[i].charCodeAt() % a2.n;
    n += a2.codes[o];
  }
  //   console.log("n :>> ", n);
  return n;
};
const o1 = function (t) {
  console.log("t :>> ", t);
  var e = {},
    n = "{}";
  console.log("t + n :>> ", t + n);
  return a1(t + n, o2(t))
    .toLowerCase()
    .substr(8, 20);
};
var i = o1(url, undefined);
console.log("i :>> ", i);

// value
const r1 = function () {
  var e = {},
    t = "19bcc820f4ec56107344b02da5f10bdd",
    n = url,
    i = "{}";
  return (0, a1)(n + "pathString" + i + t, (0, o2)(n));
};
const s1 = function () {
  var list = ["w", "i", "n", "d", "o", "w", ".", "t", "i", "d"];
  return eval(list.join(""));
};
u = r1(url, undefined, s1());
console.log("u :>> ", u);

// 请求
const run = async function () {
  const res = await fetchWithCookie("https://www.qcc.com/", {
    headers: { userAgent },
  });
  const text = await res.text();
  const match = text.match(/window.pid\s*=\s*'([^']+)'/);

  if (!match) {
    throw new Error("windowPid not found");
  }

  const windowPid = match[1];
  console.log("windowPid :>> ", windowPid);

  fetch("https://www.qcc.com" + url, {
    headers: {
      i: u,
      accept: "application/json, text/plain, */*",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      priority: "u=1, i",
      "x-pid": windowPid,
      "x-requested-with": "XMLHttpRequest",
      Referer: "https://www.qcc.com/",
    },
    body: null,
    method: "GET",
  })
    .then((res) => res.json())
    .then(console.log);
};
run();
