/*
 * @Author: tomoyo
 * @Date: 2026-02-06 21:58:56
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-07 20:29:31
 */
const Tt = require("crypto-js");
const Kt = function () {
  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
    r = "";
  return (
    -1 < t.indexOf("?") &&
      t
        .split("?")[1]
        .split("&")
        .filter(function (t) {
          return !!t;
        })
        .map(function (t, e) {
          t &&
            ((t = t.split("=")),
            (r += (0 === e ? "?" : "&")
              .concat(t[0], "=")
              .concat(
                window.encodeURIComponent(window.decodeURIComponent(t[1])),
              )));
        }),
    (r = t.split("?")[0] + r)
  );
};
const Zt = function () {
  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    e = "",
    r = t.method,
    r = void 0 === r ? "get" : r,
    t = t.body;
  return (
    "post" === r.toLowerCase() &&
      t &&
      ((t = Gt(t) ? JSON.parse(t) : (0, _t.$Z)("?".concat(t))),
      (e = Object.keys(t).length ? JSON.stringify(t) : "")),
    e
  );
};
((kt = ""),
  (Pt = Tt.enc.Utf8.parse("c558Gq0YQK2QUlMc")),
  (It = function (t) {
    ((kt = Tt.enc.Utf8.parse("=CUyW==Vawlm11baAicYgPjQQY5TUVM=")),
      (t = Tt.enc.Utf8.parse(t)));
    t = Tt.AES.encrypt(t, kt, {
      iv: Pt,
      mode: Tt.mode.CBC,
      padding: Tt.pad.Pkcs7,
    });
    return t.toString();
  }));
const TA2 = function () {
  var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    e = t.url,
    r = (void 0 === e ? "" : e)
      .replace("https://gate.lagou.com", "")
      .replace("https://activity.lagou.com", ""),
    e = {
      deviceType: 1,
    },
    t = "".concat(JSON.stringify(e)).concat(Kt(r)).concat(Zt(t)),
    t =
      ((t = t),
      null === (t = Tt.SHA256(t).toString()) || void 0 === t
        ? void 0
        : t.toUpperCase());
  return It(
    JSON.stringify({
      originHeader: JSON.stringify(e),
      code: t,
    }),
  );
};
const e = {
  body: "first=true&needAddtionalResult=false&city=%E5%85%A8%E5%9B%BD&pn=4&cl=false&fromSearch=true&labelWords=sug&suginput=%E9%80%86%E5%90%91&kd=%E9%80%86%E5%90%91",
  headers: {
    accept: "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-anit-forge-token": "None",
    "x-anit-forge-code": "0",
  },
  url: "https://www.lagou.com/jobs/v2/positionAjax.json",
};
xsHEADER = TA2(e);
// xkHEADER = (0, T.G5)();
// xssreqHEADER = (0, T.cz)();
console.log("xsHEADER :>> ", xsHEADER);


