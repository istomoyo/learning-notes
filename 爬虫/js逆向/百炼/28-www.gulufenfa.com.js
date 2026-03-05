/*
 * @Author: tomoyo
 * @Date: 2026-03-05 21:32:55
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-03-05 22:33:36
 */
var CryptoJS = require("crypto-js");

const a = {
  captType: 1,
  pointJson:
    "92L3id9MwwhlZ9VtR9XgJg8cCZn5j/69c/MdiIdiGUWy0luDVWbP/ys4J6+e1JMHt02kBZoVjzZcqTGbloa3wI0robQU30QsfCVdSuRTw7E=",
  captToken: "3e9dca11-3e7e-f850-4910-c5d66dac3f3e",
};
const s = {
  password: CryptoJS.MD5("123456").toString(),
  username: "admin",
  ...a,
};

function ae(e) {
  const t = JSON.parse(JSON.stringify(e));
  for (const r in t) {
    const e = typeof t[r];
    ([
      "coLicensePic",
      "cardPic1",
      "cardPic2",
      "cardPic3",
      "reject_reason",
      "sign",
    ].includes(r) ||
      ("string" !== e && "number" !== e && "boolean" !== e) ||
      ("string" === e && (t[r].length > 30 || t[r].includes(" ") || !t[r]))) &&
      delete t[r];
  }
  const n = Object.keys(t).sort((e, t) => (e < t ? -1 : 1));
  let o = "";
  return (
    n.forEach((e) => {
      o += `${e}=>${t[e]}@`;
    }),
    (o = o.substring(0, o.length - 1)),
    (o = CryptoJS.MD5(o).toString()),
    (o += "^_*#06@!@6#_^"),
    (o = CryptoJS.MD5(o).toString().toUpperCase()),
    o
  );
}
const sign_1 = ae(s);
// 虽然也把滑块传进去了，但是值不影响，应该只和username和password有关。
console.log("sign_1 :>> ", sign_1);
// 它MD5了3次，但是前两次结果一样
const eParams = {
  password: "e10adc3949ba59abbe56e057f20f883e",
  username: "admin",
  captType: 1,
  pointJson:
    "Fzy+x+h/kMVHAReEoiRTXYjlya8pyeraXC573sOAPdPu2Ya97sip113skKjXPdAPRCBAsj7rAxiRR31g0Cc43T+Vu2AvjyAYNCSly3eiQ2M=",
  captToken: "c255bee0-520a-f1d5-ab44-e7d01ffe79d4",
  visitorId: "7741161f643b8402fdce8654dc745bde",
  sign: "ED955CA0BC442927D8452900559F69F6",
};
const res = ae({
  ...eParams,
  ver: "2.0",
  mt: 1772721092887,
});

console.log("res :>> ", res);
