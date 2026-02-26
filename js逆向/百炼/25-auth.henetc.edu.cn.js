/*
 * @Author: tomoyo
 * @Date: 2026-02-25 21:29:34
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-25 21:39:34
 */
const CryptoJS = require("crypto-js");
var encryptByDES = function (str) {
  var stime = 1772026371217,
    etime = new Date().getTime();
  var UUID = function () {
      var list = [];
      for (var i = 0; i < 8; i++) {
        list.push(
          (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1),
        );
      }
      return list.join("");
    },
    _uuid = UUID(),
    b64str = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str)),
    _json =
      '{"token":"' +
      _uuid +
      '","timeStamp":1772025002790,"data":"' +
      b64str +
      '"}',
    _key = CryptoJS.MD5(encodeURIComponent(_json)).toString(),
    _hashKey = [10, 5, 31, 2, 19, 22, 14, 28],
    _srcKey = _key.split(""),
    _pds = [],
    item = null,
    _pwd = null,
    data = [];
  for (var i = 0, len = _hashKey.length; i < len; i++) {
    _pds.push(_srcKey[_hashKey[i]]);
  }
  _pwd = _pds.join("");
  data.push("token=" + CryptoJS.MD5(_key + _uuid + stime).toString());
  data.push("_wd=" + _key);
  data.push(
    "_wf=" +
      CryptoJS.DES.encrypt(_json, CryptoJS.enc.Utf8.parse(_pwd), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }).ciphertext.toString(),
  );
  _hashKey = _srcKey = _pds = null;
  return data.join("&");
};
encryptByDES.toString = function () {
  return "error code!";
};
var decryptByDES = function (message) {
  var getJson = function (str) {
      try {
        str = new Function("return " + str)();
      } catch (e) {
        str = {};
      }
      return str;
    },
    json = getJson(message),
    _hashKey = [10, 5, 31, 2, 19, 22, 14, 28],
    _srcKey = json._wd.split(""),
    _pds = [],
    _pwd = null;
  if (json.token == null || json._wd == null || json._wf == null) return null;
  for (var i = 0, len = _hashKey.length; i < len; i++) {
    _pds.push(_srcKey[_hashKey[i]]);
  }
  _pwd = _pds.join("");
  var _mw = CryptoJS.DES.decrypt(
      {
        ciphertext: CryptoJS.enc.Hex.parse(json._wf),
      },
      CryptoJS.enc.Utf8.parse(_pwd),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      },
    ).toString(CryptoJS.enc.Utf8),
    qm = CryptoJS.MD5(encodeURIComponent(_mw)).toString();
  if (json._wd != qm) return null;
  var enjson = getJson(_mw),
    temp = json._wd + enjson.token + enjson.timeStamp;
  temp = CryptoJS.MD5(encodeURIComponent(temp)).toString();
  if (json.token != temp) return null;
  temp = CryptoJS.enc.Base64.parse(
    enjson.data.replace(/[\r]/g, "").replace(/[\n]/g, ""),
  ).toString(CryptoJS.enc.Utf8);
  json = enjson = _srcKey = _hashKey = _pds = _pwd = _mw = qm = null;
  return temp;
};
decryptByDES.toString = function () {
  return "error code!";
};
const res = encryptByDES(
  `{"username":"admin","password":"123456","verifycode":"1338","dlfs":"1,2,3,4","rememberme":"false"}`,
);

console.log("res :>> ", res);
