/*
 * @Author: tomoyo
 * @Date: 2026-01-18 13:09:05
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-01-18 15:27:06
 * @Url: https://www.mafengwo.cn/hotel/38322.html?iMddid=10206
 */

const crypto = require("crypto");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const { json } = require("stream/consumers");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();
async function initSession() {
  const res = await fetchWithCookie("https://www.mafengwo.cn/hotel", {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      "user-agent": userAgent,
    },
  });
  const data = await res.text();
  console.log("data :>> ", data);
}

function md5(str) {
  return crypto.createHash("md5").update(str, "utf8").digest("hex");
}
const dateString = +new Date();
const arg = {
  _ts: dateString,
  keyword_id: "0",
  page: "2",
  poi_id: "38322",
  type: "0",
};
const _sn = function (arg) {
  return md5(JSON.stringify(arg) + `c9d6618dbc657b41a66eb0af952906f1`).slice(
    2,
    12,
  );
};
const run = async function () {
  console.log("_sn(arg) :>> ", _sn(arg));
  await initSession();
  fetchWithCookie(
    `https://www.mafengwo.cn/hotel/info/comment_list?poi_id=38322&type=0&keyword_id=0&page=2&_ts=${dateString}&_sn=${_sn(arg)}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        "user-agent": userAgent,
        Referer: "https://www.mafengwo.cn/hotel/38322.html?iMddid=10206",
      },
      body: null,
      method: "GET",
    },
  )
    .then((res) => res.json())
    .then(console.log);
};
run();
