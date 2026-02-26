/*
 * @Author: tomoyo
 * @Date: 2026-01-28 22:01:08
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-01-29 20:56:31
 */
const CryptoJS = require("crypto-js");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();

// #region MD5
const hex_md5 = function (text) {
  return CryptoJS.MD5(text).toString();
};
// #endregion
// #region code
const run = async function () {
  const response = await fetchWithCookie(
    "https://www.zq12369.com/environment.php?month=2025-12&tab=rank&order=DESC&type=MONTH",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        "cache-control": "max-age=0",
        "upgrade-insecure-requests": "1",
        userAgent,
        Referer: "https://www.zq12369.com/environment.php",
      },
    },
  );
  const html = await response.text();
    // console.log("html :>> ", html);
  function getVar(name, html) {
    const reg = new RegExp(`var\\s+${name}\\s*=\\s*['"]([^'"]+)['"]`);
    const match = html.match(reg);
    return match ? match[1] : null;
  }

  const akb33 = getVar("akb33", html);
  const akb34 = getVar("akb34", html);
  const akb35 = getVar("akb35", html);
  const akb36 = getVar("akb36", html);
  const akb48 = getVar("akb48", html);
  console.log({
    akb33,
    akb34,
    akb35,
    akb36,
    akb48,
  });
  function Base64() {
    ((_keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      (this.encode = function (a) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          b = "",
          j = 0;
        for (a = _utf8_encode(a); j < a.length; )
          ((c = a.charCodeAt(j++)),
            (d = a.charCodeAt(j++)),
            (e = a.charCodeAt(j++)),
            (f = c >> 2),
            (g = ((3 & c) << 4) | (d >> 4)),
            (h = ((15 & d) << 2) | (e >> 6)),
            (i = 63 & e),
            isNaN(d) ? (h = i = 64) : isNaN(e) && (i = 64),
            (b =
              b +
              _keyStr.charAt(f) +
              _keyStr.charAt(g) +
              _keyStr.charAt(h) +
              _keyStr.charAt(i)));
        return b;
      }),
      (this.decode = function (a) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          b = "",
          j = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length; )
          ((f = _keyStr.indexOf(a.charAt(j++))),
            (g = _keyStr.indexOf(a.charAt(j++))),
            (h = _keyStr.indexOf(a.charAt(j++))),
            (i = _keyStr.indexOf(a.charAt(j++))),
            (c = (f << 2) | (g >> 4)),
            (d = ((15 & g) << 4) | (h >> 2)),
            (e = ((3 & h) << 6) | i),
            (b += String.fromCharCode(c)),
            64 != h && (b += String.fromCharCode(d)),
            64 != i && (b += String.fromCharCode(e)));
        return (b = _utf8_decode(b));
      }),
      (_utf8_encode = function (a) {
        var b, c, d;
        for (a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++)
          ((d = a.charCodeAt(c)),
            128 > d
              ? (b += String.fromCharCode(d))
              : d > 127 && 2048 > d
                ? ((b += String.fromCharCode(192 | (d >> 6))),
                  (b += String.fromCharCode(128 | (63 & d))))
                : ((b += String.fromCharCode(224 | (d >> 12))),
                  (b += String.fromCharCode(128 | (63 & (d >> 6)))),
                  (b += String.fromCharCode(128 | (63 & d)))));
        return b;
      }),
      (_utf8_decode = function (a) {
        for (var b = "", c = 0, d = (c1 = c2 = 0); c < a.length; )
          ((d = a.charCodeAt(c)),
            128 > d
              ? ((b += String.fromCharCode(d)), c++)
              : d > 191 && 224 > d
                ? ((c2 = a.charCodeAt(c + 1)),
                  (b += String.fromCharCode(((31 & d) << 6) | (63 & c2))),
                  (c += 2))
                : ((c2 = a.charCodeAt(c + 1)),
                  (c3 = a.charCodeAt(c + 2)),
                  (b += String.fromCharCode(
                    ((15 & d) << 12) | ((63 & c2) << 6) | (63 & c3),
                  )),
                  (c += 3)));
        return b;
      }));
  }
  var AES = {
    encrypt: function (text) {
      var secretkey = CryptoJS.MD5(akb34).toString().substr(16, 16);
      var secretiv = CryptoJS.MD5(akb35).toString().substr(0, 16);
      secretkey = CryptoJS.enc.Utf8.parse(secretkey);
      secretiv = CryptoJS.enc.Utf8.parse(secretiv);
      var result = CryptoJS.AES.encrypt(text, secretkey, {
        iv: secretiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      return result.toString();
    },
    decrypt: function (text) {
      var secretkey = CryptoJS.MD5(akb34).toString().substr(16, 16);
      var secretiv = CryptoJS.MD5(akb35).toString().substr(0, 16);
      secretkey = CryptoJS.enc.Utf8.parse(secretkey);
      secretiv = CryptoJS.enc.Utf8.parse(secretiv);
      var result = CryptoJS.AES.decrypt(text, secretkey, {
        iv: secretiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      return result.toString(CryptoJS.enc.Utf8);
    },
  };
  var DES = {
    encrypt: function (text) {
      var secretkey = CryptoJS.MD5(akb36).toString().substr(0, 16);
      var secretiv = CryptoJS.MD5(akb48).toString().substr(24, 8);
      secretkey = CryptoJS.enc.Utf8.parse(secretkey);
      secretiv = CryptoJS.enc.Utf8.parse(secretiv);
      var result = CryptoJS.DES.encrypt(text, secretkey, {
        iv: secretiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      return result.toString();
    },
    decrypt: function (text) {
      var secretkey = CryptoJS.MD5(akb36).toString().substr(0, 16);
      var secretiv = CryptoJS.MD5(akb48).toString().substr(24, 8);
      secretkey = CryptoJS.enc.Utf8.parse(secretkey);
      secretiv = CryptoJS.enc.Utf8.parse(secretiv);
      var result = CryptoJS.DES.decrypt(text, secretkey, {
        iv: secretiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      return result.toString(CryptoJS.enc.Utf8);
    },
  };
  function MyEncode(str) {
    var arr = akb33.split("");
    var b = new Base64();
    arr.forEach((times) => {
      switch (times) {
        case "1":
          str = AES.encrypt(str);
          break;
        case "2":
          str = DES.encrypt(str);
          break;
        case "3":
          str = b.encode(str);
          break;
      }
    });
    return str;
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
  function getParam(method, obj) {
    var appId = "4f0e3a273d547ce6b7147bfa7ceb4b6e";
    var timestamp = new Date().getTime();
    var need = {
      appId: appId,
      method: method,
      timestamp: timestamp,
      clienttype: "WEB",
      object: obj,
      secret: hex_md5(
        appId + method + timestamp + "WEB" + JSON.stringify(ObjectSort(obj)),
      ),
    };
    return MyEncode(JSON.stringify(need));
  }
  // #endregion
  const _0x44f4db = "GETCITYAQIRANK";
  var _0xb6e465 = {
    order: `desc`,
  };
  const param = getParam(_0x44f4db, _0xb6e465);
  console.log("param :>> ", param);
  const body = new URLSearchParams({
    param,
  });

  function MyDecode(str) {
    var arr = akb33.split("").reverse();
    var b = new Base64();
    arr.forEach((times) => {
      switch (times) {
        case "1":
          str = AES.decrypt(str);
          break;
        case "2":
          str = DES.decrypt(str);
          break;
        case "3":
          str = b.decode(str);
          break;
      }
    });
    return str;
  }
  fetchWithCookie("https://www.zq12369.com/api/newzhenqiapi.php", {
    headers: {
      accept: "*/*",
      "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      UserAgent,
      Referer: "https://www.zq12369.com/environment.php",
    },
    body,
    method: "POST",
  })
    .then((res) => res.text())
    .then(MyDecode)
    .then(console.log);
};
run();
