/*
 * @Author: tomoyo
 * @Date: 2026-02-03 22:35:23
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-03 22:37:07
 */
var _0x4725 = [
  "function",
  "mode",
  "secretKey",
  "fromByteArray",
  "PUT_ULONG_BE",
  "sm4Sbox",
  "SHL",
  "slice",
  "5BD730C485F2AF10",
  "sm4_one_round",
  "fromCharCode",
  "padding",
  "SM4_ENCRYPT",
  "sm4_setkey_enc",
  "SM4_DECRYPT",
  "key\x20error!",
  "toString",
  "sm4_crypt_ecb",
  "exports",
  "sm4_crypt_cbc",
  "sm4F",
  "trim",
  "error",
  "ctx\x20is\x20null!",
  "GET_ULONG_BE",
  "match",
  "encryptData_CBC",
  "charCodeAt",
  "isPadding",
  "undefined",
  "object",
  "length",
  "input\x20is\x20null!",
  "push",
  "$ShowMe$",
  "ROTL",
];
var _0xa6cc = function (_0x472573, _0xa6cc40) {
  _0x472573 = _0x472573 - 0x0;
  var _0x27b5e6 = _0x4725[_0x472573];
  return _0x27b5e6;
};
function SM4Util() {
  this[_0xa6cc("0x2")] = "";
  this["iv"] = "";
  this["hexString"] = ![];
  this["encryptData_ECB"] = function (_0x592151) {
    try {
      var _0x2afb4b = new SM4();
      var _0x5b4e4f = new SM4_Context();
      _0x5b4e4f["isPadding"] = !![];
      _0x5b4e4f[_0xa6cc("0x1")] = _0x2afb4b["SM4_ENCRYPT"];
      var _0x1c1590 = stringToByte(this["secretKey"]);
      _0x2afb4b[_0xa6cc("0xd")](_0x5b4e4f, _0x1c1590);
      var _0x3d8b7a = _0x2afb4b[_0xa6cc("0x11")](
        _0x5b4e4f,
        stringToByte(_0x592151),
      );
      var _0x15b6a4 = base64js["fromByteArray"](_0x3d8b7a);
      if (_0x15b6a4 != null && _0x15b6a4[_0xa6cc("0x15")]()["length"] > 0x0) {
        _0x15b6a4["replace"](/(\s*|\t|\r|\n)/g, "");
      }
      return _0x15b6a4;
    } catch (_0x3ac885) {
      console[_0xa6cc("0x16")](_0x3ac885);
      return null;
    }
  };
  this["encryptData_CBC"] = function (_0x179280) {
    try {
      var _0x3dcd74 = new SM4();
      var _0x568578 = new SM4_Context();
      _0x568578["isPadding"] = !![];
      _0x568578[_0xa6cc("0x1")] = _0x3dcd74["SM4_ENCRYPT"];
      var _0x471688 = stringToByte(this["secretKey"]);
      var _0x3368a9 = stringToByte(this["iv"]);
      _0x3dcd74[_0xa6cc("0xd")](_0x568578, _0x471688);
      var _0x73f402 = _0x3dcd74[_0xa6cc("0x13")](
        _0x568578,
        _0x3368a9,
        stringToByte(_0x179280),
      );
      var _0x39cbe1 = base64js["fromByteArray"](_0x73f402);
      if (_0x39cbe1 != null && _0x39cbe1[_0xa6cc("0x15")]()["length"] > 0x0) {
        _0x39cbe1["replace"](/(\s*|\t|\r|\n)/g, "");
      }
      return _0x39cbe1;
    } catch (_0x2ddeaf) {
      console["error"](_0x2ddeaf);
      return null;
    }
  };
  stringToByte = function (_0x24849d) {
    var _0x4257e5 = new Array();
    var _0xa143f9, _0x264b9a;
    _0xa143f9 = _0x24849d[_0xa6cc("0x1f")];
    for (var _0x15acd4 = 0x0; _0x15acd4 < _0xa143f9; _0x15acd4++) {
      _0x264b9a = _0x24849d["charCodeAt"](_0x15acd4);
      if (_0x264b9a >= 0x10000 && _0x264b9a <= 0x10ffff) {
        _0x4257e5[_0xa6cc("0x21")](((_0x264b9a >> 0x12) & 0x7) | 0xf0);
        _0x4257e5["push"](((_0x264b9a >> 0xc) & 0x3f) | 0x80);
        _0x4257e5["push"](((_0x264b9a >> 0x6) & 0x3f) | 0x80);
        _0x4257e5[_0xa6cc("0x21")]((_0x264b9a & 0x3f) | 0x80);
      } else if (_0x264b9a >= 0x800 && _0x264b9a <= 0xffff) {
        _0x4257e5["push"](((_0x264b9a >> 0xc) & 0xf) | 0xe0);
        _0x4257e5["push"](((_0x264b9a >> 0x6) & 0x3f) | 0x80);
        _0x4257e5[_0xa6cc("0x21")]((_0x264b9a & 0x3f) | 0x80);
      } else if (_0x264b9a >= 0x80 && _0x264b9a <= 0x7ff) {
        _0x4257e5["push"](((_0x264b9a >> 0x6) & 0x1f) | 0xc0);
        _0x4257e5["push"]((_0x264b9a & 0x3f) | 0x80);
      } else {
        _0x4257e5[_0xa6cc("0x21")](_0x264b9a & 0xff);
      }
    }
    return _0x4257e5;
  };
  byteToString = function (_0x10294f) {
    if (typeof _0x10294f === "string") {
      return _0x10294f;
    }
    var _0x7c2601 = "",
      _0x49fc6a = _0x10294f;
    for (
      var _0xba6647 = 0x0;
      _0xba6647 < _0x49fc6a[_0xa6cc("0x1f")];
      _0xba6647++
    ) {
      var _0xc4f6cc = _0x49fc6a[_0xba6647]["toString"](0x2),
        _0x27531a = _0xc4f6cc[_0xa6cc("0x19")](/^1+?(?=0)/);
      if (_0x27531a && _0xc4f6cc["length"] == 0x8) {
        var _0x3ddd56 = _0x27531a[0x0]["length"];
        var _0x3c264b = _0x49fc6a[_0xba6647]["toString"](0x2)["slice"](
          0x7 - _0x3ddd56,
        );
        for (var _0x29a811 = 0x1; _0x29a811 < _0x3ddd56; _0x29a811++) {
          _0x3c264b += _0x49fc6a[_0x29a811 + _0xba6647]
            [_0xa6cc("0x10")](0x2)
            [_0xa6cc("0x7")](0x2);
        }
        _0x7c2601 += String[_0xa6cc("0xa")](parseInt(_0x3c264b, 0x2));
        _0xba6647 += _0x3ddd56 - 0x1;
      } else {
        _0x7c2601 += String[_0xa6cc("0xa")](_0x49fc6a[_0xba6647]);
      }
    }
    return _0x7c2601;
  };
}

function encString(_0x443a87) {
  var _0x5b1b66 = new SM4Util();
  _0x5b1b66["iv"] = _0xa6cc("0x8");
  _0x5b1b66["secretKey"] = "90ACB357C1AC99D4";
  var _0x565b88 = _0x5b1b66[_0xa6cc("0x1a")](_0x443a87);
  var _0x1c8d86 = _0x565b88["replace"](/\+/g, _0xa6cc("0x22"));
  return _0x1c8d86;
}
userName = encString("admin");
passWord = encString("123456");
