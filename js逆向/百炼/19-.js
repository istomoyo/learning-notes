/*
 * @Author: tomoyo
 * @Date: 2026-02-15 18:05:55
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-15 20:05:09
 */
const CryptoJS = require("crypto-js");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();
function videoDataDecrypt(e) {
  const a = (o = function (t, n) {
    var i = r[(t -= 452)];
    if (void 0 === o.UKHMhL) {
      var a = function (e) {
        for (
          var t, r, n = "", i = "", o = n + a, s = 0, l = 0;
          (r = e.charAt(l++));
          ~r && ((t = s % 4 ? 64 * t + r : r), s++ % 4)
            ? (n +=
                o.charCodeAt(l + 10) - 10 !== 0
                  ? String.fromCharCode(255 & (t >> ((-2 * s) & 6)))
                  : s)
            : 0
        )
          r =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
              r,
            );
        for (var u = 0, c = n.length; u < c; u++)
          i += "%" + ("00" + n.charCodeAt(u).toString(16)).slice(-2);
        return decodeURIComponent(i);
      };
      ((o.LmNXzv = a), (e = arguments), (o.UKHMhL = !0));
    }
    var s = r[0],
      l = t + s,
      u = e[l];
    if (u) i = u;
    else {
      var c = function (e) {
        ((this.Nccyez = e),
          (this.IVtdvJ = [1, 0, 0]),
          (this.VDdTfc = function () {
            return "newState";
          }),
          (this.FzlgHv = "\\w+ *\\(\\) *{\\w+ *"),
          (this.vDWiNc = "['|\"].+['|\"];? *}"));
      };
      ((c.prototype.CvRmQg = function () {
        var e = new RegExp(this.FzlgHv + this.vDWiNc).test(
          this.VDdTfc.toString(),
        )
          ? --this.IVtdvJ[1]
          : --this.IVtdvJ[0];
        return this.brlAgo(e);
      }),
        (c.prototype.brlAgo = function (e) {
          return Boolean(~e) ? this.FYXAmL(this.Nccyez) : e;
        }),
        (c.prototype.FYXAmL = function (e) {
          for (var t = 0, r = this.IVtdvJ.length; t < r; t++)
            (this.IVtdvJ.push(Math.round(Math.random())),
              (r = this.IVtdvJ.length));
          return e(this.IVtdvJ[0]);
        }),
        new c(o).CvRmQg(),
        (i = o.LmNXzv(i)),
        (e[l] = i));
    }
    return i;
  });
  function xorCipher(e, t) {
    for (var r = a, n = "", i = 0; i < e["length"]; i++) {
      var o = e["charCodeAt"](i),
        s = t["charCodeAt"](i % t["length"]);
      n += String["fromCharCode"](o ^ s);
    }
    return n;
  }

  return (
    (e = CryptoJS["enc"]["Utf8"]["stringify"](
      CryptoJS["enc"]["Base64"]["parse"](e),
    )),
    (0, xorCipher(e, "guanghui456"))
  );
}
//视频的网页地址
const pageUrl =
  "https://haokan.baidu.com/v?vid=4818994206806552072&tab=recommend";
const run = async function (pageUrl) {
  await fetchWithCookie("https://haokan.baidu.com", {
    headers: {
      userAgent,
    },
  });
  const response = await fetchWithCookie(pageUrl, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      userAgent,
      Referer: "https://haokan.baidu.com/",
    },
  });
  const resText = await response.text();
  // console.log("resText :>> ", resText);
  const reg = /"encrptedVideoMeta"\s*:\s*"((?:\\.|[^"\\])*)"/;
  const match = resText.match(reg);

  //   console.log('match[1] :>> ', match[1]);
  // 关键一步：先 JSON 反转义
  const encryptVideoMeta = JSON.parse('"' + match[1] + '"');

  // 再解密
  const resUrl = JSON.parse(videoDataDecrypt(encryptVideoMeta))['clarityUrl'].at(
    -1,
  ).url;
  console.log("resUrl :>> ", resUrl);
};
run(pageUrl);
