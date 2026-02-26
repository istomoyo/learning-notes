/*
 * @Author: tomoyo
 * @Date: 2026-02-20 21:50:50
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-20 22:57:15
 */
const CryptoJS = require("crypto-js");
var key = CryptoJS.enc.Utf8.parse("X9avr@CtRmcNgVkrVC9eKqemBZqzuPBf");

fetch(
  `https://www.enjoy5191.com/api/SearchHandler.ashx?ieTime=${+new Date()}&AREA_CODE=&BIG_TYPE=&TYPE=&IS_ALL_FLOW=&_BUDGET=&NEW_STATUS=&method=Web.GetJiaoYiList&PUBLISHED_TIME_START=2025-08-20&PUBLISHED_TIME_END=${new Date().toISOString().split("T")[0]}&NAME=&allVisible=false&pageindex=1&pagesize=15&CONTROL_PRICE_START=&CONTROL_PRICE_END=&EVAL_TYPE=2&SITES=1`,
  {
    headers: {
      accept: "text/plain, */*; q=0.01",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      Referer: "https://enjoy5191.com/",
    },
    body: null,
    method: "GET",
  },
)
  .then((res) => res.text())
  .then((text) => {
    decrypted = CryptoJS.AES.decrypt(text, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    console.log(CryptoJS.enc.Utf8.stringify(decrypted));
  });
