/*
 * @Author: tomoyo
 * @Date: 2026-02-12 21:54:39
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-12 22:30:09
 */
const JSEncrypt = require("jsencrypt");
const utils = {
  doEncrypt: function (_0x50b4aa) {
    let _0x520b8d = new JSEncrypt();
    _0x520b8d["setPublicKey"](
      "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChOdMggWiQCf1eEEpm5d+3iWHC3/w+lHQbMqHVEftwoRixm4Sd1iZjRdaeHJd0bClIHMCzzTQKO9bdiz+PdjuZwlTZEYCV6zzgT5Q9fPpbjtvYSK8XyzNSpjhDmNyLeuBoS+JNkdLzHoJisLuNZpVKlhh0d022/hLfd1FRnS+QtwIDAQAB-----END PUBLIC KEY-----",
    );
    return _0x520b8d["encrypt"](_0x50b4aa)["trim"]();
  },
  rsaEncrypts: function (_0x46f1de) {
    return this["doEncrypt"](
      '123456(||::||)www.chaoslib.com(||::||)1770906226505',
    );
  },
};
const _0x43ad1d = utils["rsaEncrypts"]("123456");
console.log("_0x43ad1d :>> ", _0x43ad1d.length);
            // 'doEncrypt': function(_0x50b4aa) {
            //     let _0x520b8d = new JSEncrypt();
            //     _0x520b8d[_0x284c('‫25b', 'mkqC')](_0x1b6960[_0x284c('‫25c', 'zke9')](_0x176a92));
            //     return _0x520b8d[_0x284c('‫25d', 'PBi]')](_0x50b4aa)[_0x284c('‮25e', 'lYga')]();
            // }