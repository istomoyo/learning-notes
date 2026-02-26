/*
 * @Author: tomoyo 
 * @Date: 2026-01-21 15:19:00 
 * @Last Modified by:   tomoyo 
 * @Last Modified time: 2026-01-21 15:19:00 
 */

const crypto = require("crypto");
const CryptoJS = require("crypto-js");
const askkGFJ5KlKY = "a5slhqEdLos7hvjr";
const asi1rHbZTh7V = "bhb9eTODiif32jv0";
const ackfskOkfwA1 = "dKg91apx9amJmDml";
const aciYSbd2DJGJ = "fLZmIAjKrfUIwrJI";
const dskoNjS2oMS6 = "hXenRdbrF1iqaMLr";
const dsi7NK4eh564 = "xAWozmps3eqYftMA";
const dckl57vrC1PD = "oXEjtZBCJ9JG2byi";
const dciVmwkDpoSy = "p8Fd1sdL6pr5WLEE";
const aes_local_key = "emhlbnFpcGFsbWtleQ==";
const aes_local_iv = "emhlbnFpcGFsbWl2";
function aesDecrypt(cipherText, key, iv) {
  // 生成加密用的 key/iv
  var secretkey = CryptoJS.MD5(key).toString().substr(16, 16);
  var secretiv = CryptoJS.MD5(iv).toString().substr(0, 16);

  // 转成 WordArray
  secretkey = CryptoJS.enc.Utf8.parse(secretkey);
  secretiv = CryptoJS.enc.Utf8.parse(secretiv);

  // 解密
  const decrypted = CryptoJS.AES.decrypt(cipherText, secretkey, {
    iv: secretiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}

function desDecrypt(cipherText, key, iv) {
  var secretkey = CryptoJS.MD5(key).toString().substr(0, 16);
  var secretiv = CryptoJS.MD5(iv).toString().substr(24, 8);

  secretkey = CryptoJS.enc.Utf8.parse(secretkey);
  secretiv = CryptoJS.enc.Utf8.parse(secretiv);

  const decrypted = CryptoJS.DES.decrypt(cipherText, secretkey, {
    iv: secretiv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}

function hex_md5(str) {
  return crypto.createHash("md5").update(str, "utf8").digest("hex");
}
function base64EncryptBuf(buf) {
  return Buffer.from(buf, "utf-8").toString("base64");
}
function base64DecryptBuf(buf) {
  return Buffer.from(buf, "base64").toString("utf-8");
}
function ObjectSort(obj) {
  var newObject = {};
  Object.keys(obj)
    .sort()
    .map(function (key) {
      newObject[key] = obj[key];
    });
  return newObject;
}
function params(obj) {
  const method = "GETDATA";
  var appId = "0e5df784c9068129938846e4fd750fdd";
  var clienttype = "WEB";
  var timestamp = new Date().getTime();
  var param = {
    appId: appId,
    method: method,
    timestamp: timestamp,
    clienttype: clienttype,
    object: obj,
    secret: hex_md5(
      appId + method + timestamp + clienttype + JSON.stringify(ObjectSort(obj)),
    ),
  };
  param = base64EncryptBuf(JSON.stringify(param));
  return param;
}
const h1zlb1QoZ = params({
  city: "兰州",
});
console.log("h1zlb1QoZ :>> ", h1zlb1QoZ);
// 关闭TLS校验
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
function encodeData(data) {
  data = aesDecrypt(data, askkGFJ5KlKY, asi1rHbZTh7V);
  data = desDecrypt(data, dskoNjS2oMS6, dsi7NK4eh564);
  data = base64DecryptBuf(data);
  return data;
}
const getData = function () {
  fetch("https://www.aqistudy.cn/apinew/aqistudyapi.php", {
    headers: {
      accept: "*/*",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie:
        "Hm_lvt_6088e7f72f5a363447d4bafe03026db8=1768975278; HMACCOUNT=BEADA4F7E76EE74D; Hm_lpvt_6088e7f72f5a363447d4bafe03026db8=1768976011",
      Referer: "https://www.aqistudy.cn/html/city_realtime.php?v=2.3",
    },
    body: `h1zlb1QoZ=${h1zlb1QoZ}`,
    method: "POST",
  })
    .then((res) => res.text())
    .then(encodeData)
    .then(console.log);
};
getData();
