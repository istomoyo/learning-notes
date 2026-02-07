/*
 * @Author: tomoyo
 * @Date: 2026-02-04 22:37:51
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-02-04 23:14:31
 */
const CryptoJS = require("crypto-js");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();
window = global;
let jzq;
!(function (e) {
  function d(d) {
    for (
      var t, i, l = d[0], c = d[1], r = d[2], m = 0, b = [];
      m < l.length;
      m++
    )
      ((i = l[m]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && b.push(a[i][0]),
        (a[i] = 0));
    for (t in c) Object.prototype.hasOwnProperty.call(c, t) && (e[t] = c[t]);
    for (f && f(d); b.length; ) b.shift()();
    return (n.push.apply(n, r || []), o());
  }
  function o() {
    for (var e, d = 0; d < n.length; d++) {
      for (var o = n[d], t = !0, i = 1; i < o.length; i++) {
        var l = o[i];
        0 !== a[l] && (t = !1);
      }
      t && (n.splice(d--, 1), (e = r((r.s = o[0]))));
    }
    return e;
  }
  var t = {},
    i = {
      124: 0,
    },
    a = {
      124: 0,
    },
    n = [],
    l = function (e) {
      setTimeout(function () {
        window.BJ_REPORT && window.BJ_REPORT.report(e);
      }, 2e3);
    };
  function c(e) {
    var d = "/web";
    return (
      d && (d = (d += "/").replace(/\/\/$/, "/")),
      d +
        e
          .replace(/^https?:/, "")
          .replace(
            "https://pfile.pddpic.com/mdkd/web/".replace(/^https?:/, ""),
            "",
          )
          .replace(/^\//, "")
    );
  }
  function r(d) {
    if (t[d]) return t[d].exports;
    var o = (t[d] = {
      i: d,
      l: !1,
      exports: {},
    });
    console.log("d :>> ", d);
    return (e[d].call(o.exports, o, o.exports, r), (o.l = !0), o.exports);
  }
  ((r.e = function (e) {
    var d = [],
      o = {
        8: 1,
        11: 1,
        13: 1,
        14: 1,
        15: 1,
        17: 1,
        18: 1,
        19: 1,
        21: 1,
        22: 1,
        23: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1,
        30: 1,
        31: 1,
        32: 1,
        35: 1,
        36: 1,
        37: 1,
        39: 1,
        42: 1,
        43: 1,
        44: 1,
        45: 1,
        46: 1,
        48: 1,
        49: 1,
        51: 1,
        55: 1,
        57: 1,
        61: 1,
        69: 1,
        70: 1,
        71: 1,
        72: 1,
        73: 1,
        76: 1,
        83: 1,
        84: 1,
        85: 1,
        86: 1,
        87: 1,
        90: 1,
        91: 1,
        115: 1,
        117: 1,
        118: 1,
        119: 1,
        120: 1,
        121: 1,
        122: 1,
        123: 1,
        125: 1,
        126: 1,
        127: 1,
        128: 1,
        129: 1,
        130: 1,
        131: 1,
        135: 1,
        136: 1,
        137: 1,
        138: 1,
        139: 1,
        140: 1,
        141: 1,
        143: 1,
        145: 1,
        146: 1,
        147: 1,
        149: 1,
        150: 1,
        151: 1,
        152: 1,
        153: 1,
        154: 1,
        155: 1,
        156: 1,
        157: 1,
        158: 1,
        159: 1,
      };
    i[e]
      ? d.push(i[e])
      : 0 !== i[e] &&
        o[e] &&
        d.push(
          (i[e] = new Promise(function (d, o) {
            for (
              var t =
                  "static/css/" +
                  ({
                    4: "vendors~AdTscConfig~autoScanRecord~business~campusFenceAreaPlanning~client~confrim~gantryPackageList~b85065e4",
                    5: "vendors~AdTscConfig~autoScanRecord~campusFenceAreaPlanning~gantryPackageList~gantryPortConfig~login~~0e1302f9",
                    6: "vendors~AdTscConfig~autoScanRecord~campusFenceAreaPlanning~gantryPackageList~gantryPortConfig~login~~31c99e28",
                    7: "vendors~AdTscConfig~autoScanRecord~common-page~gantryPackageList~gantryPortConfig~packageFulfillment~17dda53a",
                    9: "vendors~accountData~activityBounty~bill-cashFreezeRecord~operationIndex~protocol-protocolList~waybill",
                    10: "vendors~bind~forget~login~settingAccount",
                    12: "vendors~mobile-mdkd-bill-detail~mobile-mdkd-calendar~mobile-mdkd-setting-baseSettingCheck",
                    14: "bind~forget",
                    15: "mobile-mdkd-illegal-appealUpload~mobile-mdkd-illegal-illegalInfo",
                    16: "vendors~bind~forget",
                    17: "vendors~campusFenceAreaPlanning~mobile-mdkd-setting-baseSettingCheck",
                    18: "vendors~mobile-mdkd-illegal-appealUpload~mobile-mdkd-illegal-illegalInfo",
                    20: "AdTscConfig",
                    21: "accountData",
                    22: "activity-deposit",
                    23: "activityBounty",
                    24: "autoScanRecord",
                    25: "bill",
                    26: "bill-bountyWithdraw",
                    27: "bill-cashFreezeRecord",
                    28: "bind",
                    29: "business",
                    30: "campusFenceAreaPlanning",
                    31: "client",
                    32: "cloudMonitor",
                    33: "common-page",
                    34: "component",
                    35: "confrim",
                    36: "cost",
                    37: "courier",
                    38: "downloadApp",
                    39: "forget",
                    40: "gantryPackageList",
                    41: "gantryPortConfig",
                    42: "help",
                    43: "home",
                    44: "land-deposit",
                    45: "land-settle2",
                    46: "land-zero",
                    47: "launchApp",
                    48: "learnVideo",
                    49: "login",
                    51: "message",
                    52: "mobile-mdkd-about-protocolList",
                    53: "mobile-mdkd-about-version",
                    54: "mobile-mdkd-activity-bounty",
                    55: "mobile-mdkd-activity-device",
                    56: "mobile-mdkd-activity-settle",
                    57: "mobile-mdkd-bill-detail",
                    58: "mobile-mdkd-bill-detail-search",
                    59: "mobile-mdkd-bill-list",
                    60: "mobile-mdkd-bindWaybill",
                    61: "mobile-mdkd-calendar",
                    62: "mobile-mdkd-classroom",
                    63: "mobile-mdkd-classroom-detail",
                    64: "mobile-mdkd-classroom-search",
                    65: "mobile-mdkd-courier-list",
                    66: "mobile-mdkd-courier-price-log",
                    67: "mobile-mdkd-courier-unbind-apply",
                    68: "mobile-mdkd-downloadQrcode",
                    69: "mobile-mdkd-illegal-appealUpload",
                    70: "mobile-mdkd-illegal-illegalInfo",
                    71: "mobile-mdkd-join-site-code",
                    72: "mobile-mdkd-land-deposit",
                    73: "mobile-mdkd-land-zero",
                    74: "mobile-mdkd-mall",
                    75: "mobile-mdkd-mall-home",
                    76: "mobile-mdkd-price-modify-approve",
                    77: "mobile-mdkd-printPickUpCode",
                    78: "mobile-mdkd-punishmentDetail",
                    79: "mobile-mdkd-punishmentList",
                    80: "mobile-mdkd-qrcode",
                    81: "mobile-mdkd-sendInfo",
                    82: "mobile-mdkd-sendQrcode",
                    83: "mobile-mdkd-setting-baseSetting",
                    84: "mobile-mdkd-setting-baseSettingCheck",
                    85: "mobile-mdkd-setting-baseSettingCheckFree",
                    86: "mobile-mdkd-setting-baseSettingList",
                    87: "mobile-mdkd-setting-baseSettingView",
                    88: "mobile-mdkd-setting-operationCatalog",
                    89: "mobile-mdkd-settlement-qrcode",
                    90: "mobile-mdkd-templateList",
                    91: "mobile-mdkd-ticket-promotion-temp",
                    92: "mobile-mdkd-ticketDetail",
                    93: "mobile-mdkd-ticketExplanation",
                    94: "mobile-mdkd-ticketInsuranceAddTo",
                    95: "mobile-mdkd-ticketInsuranceSubmit",
                    96: "mobile-mdkd-ticketManagement",
                    97: "mobile-mdkd-ticketManagement-search",
                    98: "mobile-mdkd-ticketWelcome",
                    99: "mobile-mdkd-todo-todoDetail",
                    100: "mobile-mdkd-todo-todoEmpty",
                    101: "mobile-mdkd-todo-todoList",
                    102: "mobile-mdkd-traceInfo",
                    103: "mobile-mdkd-wallet",
                    104: "mobile-mdkd-wallet-bountyWithdraw",
                    105: "mobile-mdkd-wallet-cashFreezeRecord",
                    106: "mobile-mdkd-wb-bind",
                    107: "mobile-mdkd-wb-login",
                    108: "mobile/mdkd/insurance/history",
                    109: "mobile/mdkd/insurance/management",
                    110: "mobile/mdkd/insurance/protocol",
                    111: "mobile/mdkd/insurance/qrcode",
                    112: "mobile/mdkd/mall/orders/orderDetail",
                    113: "mobile/mdkd/mall/orders/trace",
                    114: "mobileHelp",
                    115: "operationIndex",
                    116: "packageFulfillmentDetail",
                    117: "packageInfo",
                    118: "packageList",
                    119: "packagePhone",
                    120: "printPickUpCode",
                    121: "protocol-protocolInfo",
                    122: "protocol-protocolList",
                    123: "punish",
                    125: "send",
                    126: "settingAccount",
                    127: "settingOperation",
                    128: "settingSite",
                    129: "signProtocol",
                    130: "ticket",
                    131: "unbind",
                    132: "vendors~common-page",
                    133: "vendors~home",
                    134: "vendors~land-settle2",
                    135: "vendors~mobile-mdkd-bill-detail",
                    136: "vendors~mobile-mdkd-calendar",
                    137: "vendors~mobile-mdkd-land-zero",
                    138: "vendors~mobile-mdkd-setting-baseSetting",
                    139: "vendors~mobile-mdkd-setting-baseSettingCheck",
                    140: "vendors~unbind",
                    141: "villageDeliveryProcess",
                    142: "villageInOutDetail",
                    143: "waybill",
                    144: "zero",
                  }[e] || e) +
                  "." +
                  {
                    0: "31d6cfe0",
                    1: "31d6cfe0",
                    2: "31d6cfe0",
                    3: "31d6cfe0",
                    4: "31d6cfe0",
                    5: "31d6cfe0",
                    6: "31d6cfe0",
                    7: "31d6cfe0",
                    8: "de3eafe8",
                    9: "31d6cfe0",
                    10: "31d6cfe0",
                    11: "55b712b7",
                    12: "31d6cfe0",
                    13: "5b3736ea",
                    14: "d37369d7",
                    15: "976bbc31",
                    16: "31d6cfe0",
                    17: "9be32add",
                    18: "cd9bc5db",
                    19: "3f67e8e8",
                    20: "31d6cfe0",
                    21: "9a4195c0",
                    22: "1ded35de",
                    23: "55af8a3e",
                    24: "31d6cfe0",
                    25: "2d66f046",
                    26: "00e7625d",
                    27: "d416a4ea",
                    28: "ab18c569",
                    29: "cead783b",
                    30: "8687e734",
                    31: "901aba53",
                    32: "28713107",
                    33: "31d6cfe0",
                    34: "31d6cfe0",
                    35: "44042541",
                    36: "3124e316",
                    37: "fd3426d8",
                    38: "31d6cfe0",
                    39: "b44aa1b3",
                    40: "31d6cfe0",
                    41: "31d6cfe0",
                    42: "c11a9646",
                    43: "a8d2e3e1",
                    44: "ed44211f",
                    45: "ba317f7a",
                    46: "0b0f140e",
                    47: "31d6cfe0",
                    48: "32ca6d06",
                    49: "e83ada49",
                    51: "8a56b261",
                    52: "31d6cfe0",
                    53: "31d6cfe0",
                    54: "31d6cfe0",
                    55: "3ebe387d",
                    56: "31d6cfe0",
                    57: "6f041a27",
                    58: "31d6cfe0",
                    59: "31d6cfe0",
                    60: "31d6cfe0",
                    61: "352d2c1a",
                    62: "31d6cfe0",
                    63: "31d6cfe0",
                    64: "31d6cfe0",
                    65: "31d6cfe0",
                    66: "31d6cfe0",
                    67: "31d6cfe0",
                    68: "31d6cfe0",
                    69: "8048d102",
                    70: "4a2ce09a",
                    71: "8fa961a6",
                    72: "4c4749dd",
                    73: "34cc2347",
                    74: "31d6cfe0",
                    75: "31d6cfe0",
                    76: "f689a4b5",
                    77: "31d6cfe0",
                    78: "31d6cfe0",
                    79: "31d6cfe0",
                    80: "31d6cfe0",
                    81: "31d6cfe0",
                    82: "31d6cfe0",
                    83: "ff40a0ba",
                    84: "b64ca24a",
                    85: "e1465ccf",
                    86: "b97d2612",
                    87: "69e944a1",
                    88: "31d6cfe0",
                    89: "31d6cfe0",
                    90: "bbc4b42e",
                    91: "320df11c",
                    92: "31d6cfe0",
                    93: "31d6cfe0",
                    94: "31d6cfe0",
                    95: "31d6cfe0",
                    96: "31d6cfe0",
                    97: "31d6cfe0",
                    98: "31d6cfe0",
                    99: "31d6cfe0",
                    100: "31d6cfe0",
                    101: "31d6cfe0",
                    102: "31d6cfe0",
                    103: "31d6cfe0",
                    104: "31d6cfe0",
                    105: "31d6cfe0",
                    106: "31d6cfe0",
                    107: "31d6cfe0",
                    108: "31d6cfe0",
                    109: "31d6cfe0",
                    110: "31d6cfe0",
                    111: "31d6cfe0",
                    112: "31d6cfe0",
                    113: "31d6cfe0",
                    114: "31d6cfe0",
                    115: "2a94f6be",
                    116: "31d6cfe0",
                    117: "d0cffd13",
                    118: "e9b77050",
                    119: "59a98bbd",
                    120: "7503fee9",
                    121: "49b85d50",
                    122: "870a5542",
                    123: "9e109499",
                    125: "bf8b7913",
                    126: "3e9b20cc",
                    127: "1bec1199",
                    128: "d170acaf",
                    129: "139bfbd6",
                    130: "137fd518",
                    131: "54ed43af",
                    132: "31d6cfe0",
                    133: "31d6cfe0",
                    134: "31d6cfe0",
                    135: "7b802be7",
                    136: "0c212466",
                    137: "309dd515",
                    138: "370c305c",
                    139: "3146cf85",
                    140: "53069726",
                    141: "40fa422d",
                    142: "31d6cfe0",
                    143: "606d50f7",
                    144: "31d6cfe0",
                    145: "f1918e31",
                    146: "51fec614",
                    147: "d950983c",
                    148: "31d6cfe0",
                    149: "7fd0b100",
                    150: "24c49760",
                    151: "f0265413",
                    152: "57731c49",
                    153: "370c305c",
                    154: "25399f10",
                    155: "652b04e7",
                    156: "0bc4214b",
                    157: "9bfe7638",
                    158: "cd751303",
                    159: "eea2d7a4",
                    160: "31d6cfe0",
                    161: "31d6cfe0",
                    162: "31d6cfe0",
                    163: "31d6cfe0",
                    164: "31d6cfe0",
                    165: "31d6cfe0",
                    166: "31d6cfe0",
                    167: "31d6cfe0",
                    168: "31d6cfe0",
                  }[e] +
                  ".chunk.css",
                a = r.p + t,
                n = document.getElementsByTagName("link"),
                l = 0;
              l < n.length;
              l++
            ) {
              var c =
                (b = n[l]).getAttribute("data-href") || b.getAttribute("href");
              if ("stylesheet" === b.rel && (c === t || c === a)) return d();
            }
            var m = document.getElementsByTagName("style");
            for (l = 0; l < m.length; l++) {
              var b;
              if ((c = (b = m[l]).getAttribute("data-href")) === t || c === a)
                return d();
            }
            var s = document.createElement("link");
            ((s.rel = "stylesheet"),
              (s.type = "text/css"),
              (s.onload = d),
              (s.onerror = function (d) {
                var t = (d && d.target && d.target.src) || a,
                  n = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + t + ")",
                  );
                ((n.code = "CSS_CHUNK_LOAD_FAILED"),
                  (n.request = t),
                  delete i[e],
                  s.parentNode.removeChild(s),
                  o(n));
              }),
              (s.href = a),
              document.getElementsByTagName("head")[0].appendChild(s));
          }).then(function () {
            i[e] = 0;
          })),
        );
    var t = a[e];
    if (0 !== t)
      if (t) d.push(t[2]);
      else {
        var n = new Promise(function (d, o) {
          t = a[e] = [d, o];
        });
        d.push((t[2] = n));
        var m,
          b = document.createElement("script");
        ((b.charset = "utf-8"),
          (b.timeout = 120),
          r.nc && b.setAttribute("nonce", r.nc),
          (b.src = (function (e) {
            return (
              r.p +
              "static/js/" +
              ({
                4: "vendors~AdTscConfig~autoScanRecord~business~campusFenceAreaPlanning~client~confrim~gantryPackageList~b85065e4",
                5: "vendors~AdTscConfig~autoScanRecord~campusFenceAreaPlanning~gantryPackageList~gantryPortConfig~login~~0e1302f9",
                6: "vendors~AdTscConfig~autoScanRecord~campusFenceAreaPlanning~gantryPackageList~gantryPortConfig~login~~31c99e28",
                7: "vendors~AdTscConfig~autoScanRecord~common-page~gantryPackageList~gantryPortConfig~packageFulfillment~17dda53a",
                9: "vendors~accountData~activityBounty~bill-cashFreezeRecord~operationIndex~protocol-protocolList~waybill",
                10: "vendors~bind~forget~login~settingAccount",
                12: "vendors~mobile-mdkd-bill-detail~mobile-mdkd-calendar~mobile-mdkd-setting-baseSettingCheck",
                14: "bind~forget",
                15: "mobile-mdkd-illegal-appealUpload~mobile-mdkd-illegal-illegalInfo",
                16: "vendors~bind~forget",
                17: "vendors~campusFenceAreaPlanning~mobile-mdkd-setting-baseSettingCheck",
                18: "vendors~mobile-mdkd-illegal-appealUpload~mobile-mdkd-illegal-illegalInfo",
                20: "AdTscConfig",
                21: "accountData",
                22: "activity-deposit",
                23: "activityBounty",
                24: "autoScanRecord",
                25: "bill",
                26: "bill-bountyWithdraw",
                27: "bill-cashFreezeRecord",
                28: "bind",
                29: "business",
                30: "campusFenceAreaPlanning",
                31: "client",
                32: "cloudMonitor",
                33: "common-page",
                34: "component",
                35: "confrim",
                36: "cost",
                37: "courier",
                38: "downloadApp",
                39: "forget",
                40: "gantryPackageList",
                41: "gantryPortConfig",
                42: "help",
                43: "home",
                44: "land-deposit",
                45: "land-settle2",
                46: "land-zero",
                47: "launchApp",
                48: "learnVideo",
                49: "login",
                51: "message",
                52: "mobile-mdkd-about-protocolList",
                53: "mobile-mdkd-about-version",
                54: "mobile-mdkd-activity-bounty",
                55: "mobile-mdkd-activity-device",
                56: "mobile-mdkd-activity-settle",
                57: "mobile-mdkd-bill-detail",
                58: "mobile-mdkd-bill-detail-search",
                59: "mobile-mdkd-bill-list",
                60: "mobile-mdkd-bindWaybill",
                61: "mobile-mdkd-calendar",
                62: "mobile-mdkd-classroom",
                63: "mobile-mdkd-classroom-detail",
                64: "mobile-mdkd-classroom-search",
                65: "mobile-mdkd-courier-list",
                66: "mobile-mdkd-courier-price-log",
                67: "mobile-mdkd-courier-unbind-apply",
                68: "mobile-mdkd-downloadQrcode",
                69: "mobile-mdkd-illegal-appealUpload",
                70: "mobile-mdkd-illegal-illegalInfo",
                71: "mobile-mdkd-join-site-code",
                72: "mobile-mdkd-land-deposit",
                73: "mobile-mdkd-land-zero",
                74: "mobile-mdkd-mall",
                75: "mobile-mdkd-mall-home",
                76: "mobile-mdkd-price-modify-approve",
                77: "mobile-mdkd-printPickUpCode",
                78: "mobile-mdkd-punishmentDetail",
                79: "mobile-mdkd-punishmentList",
                80: "mobile-mdkd-qrcode",
                81: "mobile-mdkd-sendInfo",
                82: "mobile-mdkd-sendQrcode",
                83: "mobile-mdkd-setting-baseSetting",
                84: "mobile-mdkd-setting-baseSettingCheck",
                85: "mobile-mdkd-setting-baseSettingCheckFree",
                86: "mobile-mdkd-setting-baseSettingList",
                87: "mobile-mdkd-setting-baseSettingView",
                88: "mobile-mdkd-setting-operationCatalog",
                89: "mobile-mdkd-settlement-qrcode",
                90: "mobile-mdkd-templateList",
                91: "mobile-mdkd-ticket-promotion-temp",
                92: "mobile-mdkd-ticketDetail",
                93: "mobile-mdkd-ticketExplanation",
                94: "mobile-mdkd-ticketInsuranceAddTo",
                95: "mobile-mdkd-ticketInsuranceSubmit",
                96: "mobile-mdkd-ticketManagement",
                97: "mobile-mdkd-ticketManagement-search",
                98: "mobile-mdkd-ticketWelcome",
                99: "mobile-mdkd-todo-todoDetail",
                100: "mobile-mdkd-todo-todoEmpty",
                101: "mobile-mdkd-todo-todoList",
                102: "mobile-mdkd-traceInfo",
                103: "mobile-mdkd-wallet",
                104: "mobile-mdkd-wallet-bountyWithdraw",
                105: "mobile-mdkd-wallet-cashFreezeRecord",
                106: "mobile-mdkd-wb-bind",
                107: "mobile-mdkd-wb-login",
                108: "mobile/mdkd/insurance/history",
                109: "mobile/mdkd/insurance/management",
                110: "mobile/mdkd/insurance/protocol",
                111: "mobile/mdkd/insurance/qrcode",
                112: "mobile/mdkd/mall/orders/orderDetail",
                113: "mobile/mdkd/mall/orders/trace",
                114: "mobileHelp",
                115: "operationIndex",
                116: "packageFulfillmentDetail",
                117: "packageInfo",
                118: "packageList",
                119: "packagePhone",
                120: "printPickUpCode",
                121: "protocol-protocolInfo",
                122: "protocol-protocolList",
                123: "punish",
                125: "send",
                126: "settingAccount",
                127: "settingOperation",
                128: "settingSite",
                129: "signProtocol",
                130: "ticket",
                131: "unbind",
                132: "vendors~common-page",
                133: "vendors~home",
                134: "vendors~land-settle2",
                135: "vendors~mobile-mdkd-bill-detail",
                136: "vendors~mobile-mdkd-calendar",
                137: "vendors~mobile-mdkd-land-zero",
                138: "vendors~mobile-mdkd-setting-baseSetting",
                139: "vendors~mobile-mdkd-setting-baseSettingCheck",
                140: "vendors~unbind",
                141: "villageDeliveryProcess",
                142: "villageInOutDetail",
                143: "waybill",
                144: "zero",
              }[e] || e) +
              "." +
              {
                0: "5c4d2127",
                1: "2dfd601b",
                2: "9f87c31f",
                3: "770f371d",
                4: "f6147145",
                5: "cdfc17bd",
                6: "84410d6f",
                7: "c93b61a1",
                8: "e5373c42",
                9: "f681dfed",
                10: "cd4e5226",
                11: "da9b1863",
                12: "54eb3f0e",
                13: "13d64123",
                14: "644e92b5",
                15: "c15a8d99",
                16: "13dc906b",
                17: "7336e56f",
                18: "4023b980",
                19: "2f315f8c",
                20: "4a185f9c",
                21: "bd4ce053",
                22: "30729121",
                23: "685a40c1",
                24: "a0a6cf83",
                25: "2d4f4a62",
                26: "730f8eff",
                27: "0c7338ce",
                28: "32d034f5",
                29: "16628650",
                30: "9659fcb4",
                31: "8b5331c9",
                32: "30484ebf",
                33: "20da2c8a",
                34: "fcff6995",
                35: "55c10caf",
                36: "52be67ff",
                37: "a54df89d",
                38: "c518c4bd",
                39: "dcafef2f",
                40: "c08c72c8",
                41: "e4a64f1a",
                42: "27f9298d",
                43: "43c23c49",
                44: "5611a72b",
                45: "d5ede764",
                46: "a4d8d670",
                47: "cc07fbd8",
                48: "27e1c928",
                49: "8f5dfd96",
                51: "df81390b",
                52: "34144b22",
                53: "ee0b242e",
                54: "62fe4553",
                55: "0227a824",
                56: "8ef93510",
                57: "98269e7b",
                58: "129da26a",
                59: "7d8a64f3",
                60: "25285aad",
                61: "60042a11",
                62: "166e7bcc",
                63: "0ea3a018",
                64: "b2fd1658",
                65: "cf34a9f3",
                66: "42276386",
                67: "bb96feec",
                68: "a443f1f6",
                69: "dd11163c",
                70: "69b845b8",
                71: "bab5cd57",
                72: "ff2e1239",
                73: "1eaa8632",
                74: "5f3fdb7e",
                75: "03bf7aed",
                76: "b0670e0d",
                77: "01a2b9bc",
                78: "f21baa33",
                79: "2f3c0a37",
                80: "204e9d54",
                81: "5be34751",
                82: "f1d176d6",
                83: "80b00eb9",
                84: "08635214",
                85: "f1d19de5",
                86: "270a3492",
                87: "3610f808",
                88: "610bb7e3",
                89: "44b6d27f",
                90: "8cb1ddee",
                91: "9b04a314",
                92: "8b04a3bc",
                93: "8f35f443",
                94: "23287c4a",
                95: "57e6527e",
                96: "d6adf0e8",
                97: "d0b8a9f2",
                98: "4accb89a",
                99: "7e1bc2ec",
                100: "1a565152",
                101: "9abbfa9a",
                102: "ea1a9fed",
                103: "b1c92aa7",
                104: "37e38ea4",
                105: "03d8fdcf",
                106: "1dcfd472",
                107: "b65b7aa7",
                108: "a10b97f5",
                109: "c7617c55",
                110: "c2cf71d4",
                111: "f62bb375",
                112: "178fa342",
                113: "d765e91e",
                114: "79b31306",
                115: "056c91a5",
                116: "91f84013",
                117: "37eda1e9",
                118: "8a815844",
                119: "9044102f",
                120: "85f3959f",
                121: "2747712b",
                122: "dd575f55",
                123: "914c391c",
                125: "7d26e33d",
                126: "0d8120d3",
                127: "391b8f3e",
                128: "0a217d29",
                129: "d602173f",
                130: "61eb2281",
                131: "268c0694",
                132: "37c112ba",
                133: "b20a52fa",
                134: "c879b53e",
                135: "a45fc597",
                136: "1b3c9b9a",
                137: "6f04f82a",
                138: "b792e235",
                139: "fa15f63a",
                140: "cf3f6bf1",
                141: "389b6f5f",
                142: "84482953",
                143: "5a6ff4a4",
                144: "ef09a301",
                145: "07ae6add",
                146: "d0776278",
                147: "50c47199",
                148: "12669eee",
                149: "e019212b",
                150: "66e2080e",
                151: "ee597490",
                152: "74c1be49",
                153: "b3d31649",
                154: "db950cc9",
                155: "67c8a5b1",
                156: "2cdf3fd3",
                157: "d95506d3",
                158: "294663be",
                159: "09dd8b9f",
                160: "ec32aea7",
                161: "b8439b6b",
                162: "e1439c01",
                163: "2cdd9c15",
                164: "73fda94f",
                165: "db751c0f",
                166: "62a019b1",
                167: "6e763a85",
                168: "db820370",
              }[e] +
              ".chunk.js"
            );
          })(e)));
        var s = new Error();
        m = function (d) {
          ((b.onerror = b.onload = null), clearTimeout(f));
          var o = a[e];
          if (0 !== o) {
            if (o) {
              var t = d && ("load" === d.type ? "missing" : d.type),
                i = d && d.target && d.target.src;
              ((s.message =
                "Loading chunk " + e + " failed.\n(" + t + ": " + i + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = t),
                (s.request = i),
                o[1](s));
            }
            a[e] = void 0;
          }
        };
        var f = setTimeout(function () {
          m({
            type: "timeout",
            target: b,
          });
        }, 12e4);
        ((b.onerror = b.onload = m), b.setAttribute("isAsync", ""));
        var g = function (e) {
          clearTimeout(f);
          var d = this.hasAttribute("retry"),
            o = this.hasAttribute("isAsync"),
            t = "LINK" === this.tagName,
            i = "error" === e.type || "timeout" === e.type,
            a = this.href || this.src,
            n = c(a);
          if (i)
            if (d)
              l({
                level: 2,
                msg: this.tagName + " retry load fail: " + a,
                ext: {
                  msid: "",
                },
              });
            else {
              if (t) {
                var r = document.createElement("link");
                ((r.rel = "stylesheet"),
                  (r.href = n),
                  r.setAttribute("retry", ""),
                  r.setAttribute("onerror", "__retryPlugin.call(this,event)"),
                  r.setAttribute("onload", "__retryPlugin.call(this,event)"),
                  this.parentNode.insertBefore(r, this.nextSibling));
              } else if (o) {
                var b = document.getElementsByTagName("head")[0],
                  s = document.createElement("script");
                ((s.charset = "utf-8"),
                  (s.timeout = 120),
                  (s.src = n),
                  0 !== s.src.indexOf(window.location.origin + "/") &&
                    (s.crossOrigin = "anonymous"));
                var g = setTimeout(function () {
                  s.onerror({
                    type: "timeout",
                    target: s,
                  });
                }, 12e4);
                ((s.onerror = function (e) {
                  ((s.onerror = s.onload = null),
                    clearTimeout(g),
                    m(e),
                    l({
                      level: 2,
                      msg: this.tagName + " retry load fail: " + this.src,
                      ext: {
                        msid: "",
                      },
                    }));
                }),
                  (s.onload = function (e) {
                    ((s.onerror = s.onload = null),
                      clearTimeout(g),
                      m(e),
                      l({
                        level: 2,
                        msg: this.tagName + " retry load success: " + this.src,
                        ext: {
                          msid: "",
                        },
                      }));
                  }),
                  b.appendChild(s));
              }
              l({
                level: 2,
                msg: this.tagName + " load fail: " + a,
                ext: {
                  msid: "",
                },
              });
            }
          else
            l(
              d
                ? {
                    level: 2,
                    msg: this.tagName + " retry load success: " + a,
                    ext: {
                      msid: "",
                    },
                  }
                : {
                    level: 2,
                    msg: this.tagName + " load success: " + a,
                    ext: {
                      msid: "",
                    },
                  },
            );
        };
        ((b.onload = function (e) {
          (m(e), g.call(this, e));
        }),
          (b.onerror = g),
          document.head.appendChild(b));
      }
    var u = Object.prototype.toString,
      k = void 0 !== i && i[e];
    if ("[object Promise]" === u.call(k) && 1 === o[e]) {
      o[e] = 2;
      var p = k.catch(function (e) {
        return new Promise(function (d, o) {
          var t = c(e.request),
            i = document.getElementsByTagName("head")[0],
            a = document.createElement("link");
          ((a.rel = "stylesheet"),
            (a.href = t),
            a.setAttribute("retry", ""),
            (a.onerror = function () {
              ((a.onerror = a.onload = null),
                l({
                  level: 2,
                  msg: "LINK retry fail:" + t,
                  ext: {
                    msid: "",
                  },
                }),
                o(e));
            }),
            (a.onload = function () {
              ((a.onerror = a.onload = null),
                l({
                  level: 2,
                  msg: "LINK retry success:" + t,
                  ext: {
                    msid: "",
                  },
                }),
                d());
            }),
            i.appendChild(a));
        });
      });
      d.splice(d.indexOf(k), 1, p);
    }
    return Promise.all(d);
  }),
    (r.m = e),
    (r.c = t),
    (r.d = function (e, d, o) {
      r.o(e, d) ||
        Object.defineProperty(e, d, {
          enumerable: !0,
          get: o,
        });
    }),
    (r.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        }));
    }),
    (r.t = function (e, d) {
      if ((1 & d && (e = r(e)), 8 & d)) return e;
      if (4 & d && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & d && "string" != typeof e)
      )
        for (var t in e)
          r.d(
            o,
            t,
            function (d) {
              return e[d];
            }.bind(null, t),
          );
      return o;
    }),
    (r.n = function (e) {
      var d =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (r.d(d, "a", d), d);
    }),
    (r.o = function (e, d) {
      return Object.prototype.hasOwnProperty.call(e, d);
    }),
    (r.p = "https://pfile.pddpic.com/mdkd/web/"),
    (r.oe = function (e) {
      throw (console.error(e), e);
    }));
  var m = (this["webpackJsonplogistics-web-station"] =
      this["webpackJsonplogistics-web-station"] || []),
    b = m.push.bind(m);
  ((m.push = d), (m = m.slice()));
  for (var s = 0; s < m.length; s++) d(m[s]);
  var f = b;
  o();
  jzq = r;
})({
  1994: function (t, e, i) {
    (function (t) {
      var i = {
          userAgent: !1,
        },
        r = {};
      if (void 0 === n) var n = {};
      n.lang = {
        extend: function (t, e, r) {
          if (!e || !t)
            throw new Error(
              "YAHOO.lang.extend failed, please check that all dependencies are included.",
            );
          var n = function () {};
          if (
            ((n.prototype = e.prototype),
            (t.prototype = new n()),
            (t.prototype.constructor = t),
            (t.superclass = e.prototype),
            e.prototype.constructor == Object.prototype.constructor &&
              (e.prototype.constructor = e),
            r)
          ) {
            var s;
            for (s in r) t.prototype[s] = r[s];
            var a = function () {},
              o = ["toString", "valueOf"];
            try {
              /MSIE/.test(i.userAgent) &&
                (a = function (t, e) {
                  for (s = 0; s < o.length; s += 1) {
                    var i = o[s],
                      r = e[i];
                    "function" === typeof r &&
                      r != Object.prototype[i] &&
                      (t[i] = r);
                  }
                });
            } catch (h) {}
            a(t.prototype, r);
          }
        },
      };
      var s =
        s ||
        (function (t, e) {
          var i = {},
            r = (i.lib = {}),
            n = (r.Base = (function () {
              function t() {}
              return {
                extend: function (e) {
                  t.prototype = this;
                  var i = new t();
                  return (
                    e && i.mixIn(e),
                    i.hasOwnProperty("init") ||
                      (i.init = function () {
                        i.$super.init.apply(this, arguments);
                      }),
                    (i.init.prototype = i),
                    (i.$super = this),
                    i
                  );
                },
                create: function () {
                  var t = this.extend();
                  return (t.init.apply(t, arguments), t);
                },
                init: function () {},
                mixIn: function (t) {
                  for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                  t.hasOwnProperty("toString") && (this.toString = t.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              };
            })()),
            s = (r.WordArray = n.extend({
              init: function (t, e) {
                ((t = this.words = t || []),
                  (this.sigBytes = void 0 != e ? e : 4 * t.length));
              },
              toString: function (t) {
                return (t || o).stringify(this);
              },
              concat: function (t) {
                var e = this.words,
                  i = t.words,
                  r = this.sigBytes,
                  n = t.sigBytes;
                if ((this.clamp(), r % 4))
                  for (var s = 0; s < n; s++) {
                    var a = (i[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
                    e[(r + s) >>> 2] |= a << (24 - ((r + s) % 4) * 8);
                  }
                else for (s = 0; s < n; s += 4) e[(r + s) >>> 2] = i[s >>> 2];
                return ((this.sigBytes += n), this);
              },
              clamp: function () {
                var e = this.words,
                  i = this.sigBytes;
                ((e[i >>> 2] &= 4294967295 << (32 - (i % 4) * 8)),
                  (e.length = t.ceil(i / 4)));
              },
              clone: function () {
                var t = n.clone.call(this);
                return ((t.words = this.words.slice(0)), t);
              },
              random: function (e) {
                for (var i = [], r = 0; r < e; r += 4)
                  i.push((4294967296 * t.random()) | 0);
                return new s.init(i, e);
              },
            })),
            a = (i.enc = {}),
            o = (a.Hex = {
              stringify: function (t) {
                for (
                  var e = t.words, i = t.sigBytes, r = [], n = 0;
                  n < i;
                  n++
                ) {
                  var s = (e[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                  (r.push((s >>> 4).toString(16)),
                    r.push((15 & s).toString(16)));
                }
                return r.join("");
              },
              parse: function (t) {
                for (var e = t.length, i = [], r = 0; r < e; r += 2)
                  i[r >>> 3] |=
                    parseInt(t.substr(r, 2), 16) << (24 - (r % 8) * 4);
                return new s.init(i, e / 2);
              },
            }),
            h = (a.Latin1 = {
              stringify: function (t) {
                for (
                  var e = t.words, i = t.sigBytes, r = [], n = 0;
                  n < i;
                  n++
                ) {
                  var s = (e[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                  r.push(String.fromCharCode(s));
                }
                return r.join("");
              },
              parse: function (t) {
                for (var e = t.length, i = [], r = 0; r < e; r++)
                  i[r >>> 2] |= (255 & t.charCodeAt(r)) << (24 - (r % 4) * 8);
                return new s.init(i, e);
              },
            }),
            u = (a.Utf8 = {
              stringify: function (t) {
                try {
                  return decodeURIComponent(escape(h.stringify(t)));
                } catch (e) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (t) {
                return h.parse(unescape(encodeURIComponent(t)));
              },
            }),
            c = (r.BufferedBlockAlgorithm = n.extend({
              reset: function () {
                ((this._data = new s.init()), (this._nDataBytes = 0));
              },
              _append: function (t) {
                ("string" == typeof t && (t = u.parse(t)),
                  this._data.concat(t),
                  (this._nDataBytes += t.sigBytes));
              },
              _process: function (e) {
                var i = this._data,
                  r = i.words,
                  n = i.sigBytes,
                  a = this.blockSize,
                  o = n / (4 * a),
                  h =
                    (o = e
                      ? t.ceil(o)
                      : t.max((0 | o) - this._minBufferSize, 0)) * a,
                  u = t.min(4 * h, n);
                if (h) {
                  for (var c = 0; c < h; c += a) this._doProcessBlock(r, c);
                  var l = r.splice(0, h);
                  i.sigBytes -= u;
                }
                return new s.init(l, u);
              },
              clone: function () {
                var t = n.clone.call(this);
                return ((t._data = this._data.clone()), t);
              },
              _minBufferSize: 0,
            })),
            l =
              ((r.Hasher = c.extend({
                cfg: n.extend(),
                init: function (t) {
                  ((this.cfg = this.cfg.extend(t)), this.reset());
                },
                reset: function () {
                  (c.reset.call(this), this._doReset());
                },
                update: function (t) {
                  return (this._append(t), this._process(), this);
                },
                finalize: function (t) {
                  return (t && this._append(t), this._doFinalize());
                },
                blockSize: 16,
                _createHelper: function (t) {
                  return function (e, i) {
                    return new t.init(i).finalize(e);
                  };
                },
                _createHmacHelper: function (t) {
                  return function (e, i) {
                    return new l.HMAC.init(t, i).finalize(e);
                  };
                },
              })),
              (i.algo = {}));
          return i;
        })(Math);
      (!(function (t) {
        var e,
          i = (e = s).lib,
          r = i.Base,
          n = i.WordArray;
        (((e = e.x64 = {}).Word = r.extend({
          init: function (t, e) {
            ((this.high = t), (this.low = e));
          },
        })),
          (e.WordArray = r.extend({
            init: function (t, e) {
              ((t = this.words = t || []),
                (this.sigBytes = void 0 != e ? e : 8 * t.length));
            },
            toX32: function () {
              for (
                var t = this.words, e = t.length, i = [], r = 0;
                r < e;
                r++
              ) {
                var s = t[r];
                (i.push(s.high), i.push(s.low));
              }
              return n.create(i, this.sigBytes);
            },
            clone: function () {
              for (
                var t = r.clone.call(this),
                  e = (t.words = this.words.slice(0)),
                  i = e.length,
                  n = 0;
                n < i;
                n++
              )
                e[n] = e[n].clone();
              return t;
            },
          })));
      })(),
        s.lib.Cipher ||
          (function (t) {
            var e = (g = s).lib,
              i = e.Base,
              r = e.WordArray,
              n = e.BufferedBlockAlgorithm,
              a = g.enc.Base64,
              o = g.algo.EvpKDF,
              h = (e.Cipher = n.extend({
                cfg: i.extend(),
                createEncryptor: function (t, e) {
                  return this.create(this._ENC_XFORM_MODE, t, e);
                },
                createDecryptor: function (t, e) {
                  return this.create(this._DEC_XFORM_MODE, t, e);
                },
                init: function (t, e, i) {
                  ((this.cfg = this.cfg.extend(i)),
                    (this._xformMode = t),
                    (this._key = e),
                    this.reset());
                },
                reset: function () {
                  (n.reset.call(this), this._doReset());
                },
                process: function (t) {
                  return (this._append(t), this._process());
                },
                finalize: function (t) {
                  return (t && this._append(t), this._doFinalize());
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function (t) {
                  return {
                    encrypt: function (e, i, r) {
                      return ("string" == typeof i ? p : d).encrypt(t, e, i, r);
                    },
                    decrypt: function (e, i, r) {
                      return ("string" == typeof i ? p : d).decrypt(t, e, i, r);
                    },
                  };
                },
              }));
            e.StreamCipher = h.extend({
              _doFinalize: function () {
                return this._process(!0);
              },
              blockSize: 1,
            });
            var u = (g.mode = {}),
              c = function (t, e, i) {
                var r = this._iv;
                r ? (this._iv = void 0) : (r = this._prevBlock);
                for (var n = 0; n < i; n++) t[e + n] ^= r[n];
              },
              l = (e.BlockCipherMode = i.extend({
                createEncryptor: function (t, e) {
                  return this.Encryptor.create(t, e);
                },
                createDecryptor: function (t, e) {
                  return this.Decryptor.create(t, e);
                },
                init: function (t, e) {
                  ((this._cipher = t), (this._iv = e));
                },
              })).extend();
            ((l.Encryptor = l.extend({
              processBlock: function (t, e) {
                var i = this._cipher,
                  r = i.blockSize;
                (c.call(this, t, e, r),
                  i.encryptBlock(t, e),
                  (this._prevBlock = t.slice(e, e + r)));
              },
            })),
              (l.Decryptor = l.extend({
                processBlock: function (t, e) {
                  var i = this._cipher,
                    r = i.blockSize,
                    n = t.slice(e, e + r);
                  (i.decryptBlock(t, e),
                    c.call(this, t, e, r),
                    (this._prevBlock = n));
                },
              })),
              (u = u.CBC = l),
              (l = (g.pad = {}).Pkcs7 =
                {
                  pad: function (t, e) {
                    for (
                      var i,
                        n =
                          ((i = (i = 4 * e) - (t.sigBytes % i)) << 24) |
                          (i << 16) |
                          (i << 8) |
                          i,
                        s = [],
                        a = 0;
                      a < i;
                      a += 4
                    )
                      s.push(n);
                    ((i = r.create(s, i)), t.concat(i));
                  },
                  unpad: function (t) {
                    t.sigBytes -= 255 & t.words[(t.sigBytes - 1) >>> 2];
                  },
                }),
              (e.BlockCipher = h.extend({
                cfg: h.cfg.extend({
                  mode: u,
                  padding: l,
                }),
                reset: function () {
                  h.reset.call(this);
                  var t = (e = this.cfg).iv,
                    e = e.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE)
                    var i = e.createEncryptor;
                  else ((i = e.createDecryptor), (this._minBufferSize = 1));
                  this._mode = i.call(e, this, t && t.words);
                },
                _doProcessBlock: function (t, e) {
                  this._mode.processBlock(t, e);
                },
                _doFinalize: function () {
                  var t = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    t.pad(this._data, this.blockSize);
                    var e = this._process(!0);
                  } else ((e = this._process(!0)), t.unpad(e));
                  return e;
                },
                blockSize: 4,
              })));
            var f = (e.CipherParams = i.extend({
                init: function (t) {
                  this.mixIn(t);
                },
                toString: function (t) {
                  return (t || this.formatter).stringify(this);
                },
              })),
              d =
                ((u = (g.format = {}).OpenSSL =
                  {
                    stringify: function (t) {
                      var e = t.ciphertext;
                      return (
                        (t = t.salt)
                          ? r
                              .create([1398893684, 1701076831])
                              .concat(t)
                              .concat(e)
                          : e
                      ).toString(a);
                    },
                    parse: function (t) {
                      var e = (t = a.parse(t)).words;
                      if (1398893684 == e[0] && 1701076831 == e[1]) {
                        var i = r.create(e.slice(2, 4));
                        (e.splice(0, 4), (t.sigBytes -= 16));
                      }
                      return f.create({
                        ciphertext: t,
                        salt: i,
                      });
                    },
                  }),
                (e.SerializableCipher = i.extend({
                  cfg: i.extend({
                    format: u,
                  }),
                  encrypt: function (t, e, i, r) {
                    r = this.cfg.extend(r);
                    var n = t.createEncryptor(i, r);
                    return (
                      (e = n.finalize(e)),
                      (n = n.cfg),
                      f.create({
                        ciphertext: e,
                        key: i,
                        iv: n.iv,
                        algorithm: t,
                        mode: n.mode,
                        padding: n.padding,
                        blockSize: t.blockSize,
                        formatter: r.format,
                      })
                    );
                  },
                  decrypt: function (t, e, i, r) {
                    return (
                      (r = this.cfg.extend(r)),
                      (e = this._parse(e, r.format)),
                      t.createDecryptor(i, r).finalize(e.ciphertext)
                    );
                  },
                  _parse: function (t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t;
                  },
                }))),
              g = ((g.kdf = {}).OpenSSL = {
                execute: function (t, e, i, n) {
                  return (
                    n || (n = r.random(8)),
                    (t = o
                      .create({
                        keySize: e + i,
                      })
                      .compute(t, n)),
                    (i = r.create(t.words.slice(e), 4 * i)),
                    (t.sigBytes = 4 * e),
                    f.create({
                      key: t,
                      iv: i,
                      salt: n,
                    })
                  );
                },
              }),
              p = (e.PasswordBasedCipher = d.extend({
                cfg: d.cfg.extend({
                  kdf: g,
                }),
                encrypt: function (t, e, i, r) {
                  return (
                    (i = (r = this.cfg.extend(r)).kdf.execute(
                      i,
                      t.keySize,
                      t.ivSize,
                    )),
                    (r.iv = i.iv),
                    (t = d.encrypt.call(this, t, e, i.key, r)).mixIn(i),
                    t
                  );
                },
                decrypt: function (t, e, i, r) {
                  return (
                    (r = this.cfg.extend(r)),
                    (e = this._parse(e, r.format)),
                    (i = r.kdf.execute(i, t.keySize, t.ivSize, e.salt)),
                    (r.iv = i.iv),
                    d.decrypt.call(this, t, e, i.key, r)
                  );
                },
              }));
          })(),
        (function () {
          for (
            var t = s,
              e = t.lib.BlockCipher,
              i = t.algo,
              r = [],
              n = [],
              a = [],
              o = [],
              h = [],
              u = [],
              c = [],
              l = [],
              f = [],
              d = [],
              g = [],
              p = 0;
            256 > p;
            p++
          )
            g[p] = 128 > p ? p << 1 : (p << 1) ^ 283;
          var y = 0,
            v = 0;
          for (p = 0; 256 > p; p++) {
            var m =
              ((m = v ^ (v << 1) ^ (v << 2) ^ (v << 3) ^ (v << 4)) >>> 8) ^
              (255 & m) ^
              99;
            ((r[y] = m), (n[m] = y));
            var x = g[y],
              S = g[x],
              E = g[S],
              w = (257 * g[m]) ^ (16843008 * m);
            ((a[y] = (w << 24) | (w >>> 8)),
              (o[y] = (w << 16) | (w >>> 16)),
              (h[y] = (w << 8) | (w >>> 24)),
              (u[y] = w),
              (w = (16843009 * E) ^ (65537 * S) ^ (257 * x) ^ (16843008 * y)),
              (c[m] = (w << 24) | (w >>> 8)),
              (l[m] = (w << 16) | (w >>> 16)),
              (f[m] = (w << 8) | (w >>> 24)),
              (d[m] = w),
              y ? ((y = x ^ g[g[g[E ^ x]]]), (v ^= g[g[v]])) : (y = v = 1));
          }
          var F = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
          i = i.AES = e.extend({
            _doReset: function () {
              for (
                var t = (i = this._key).words,
                  e = i.sigBytes / 4,
                  i = 4 * ((this._nRounds = e + 6) + 1),
                  n = (this._keySchedule = []),
                  s = 0;
                s < i;
                s++
              )
                if (s < e) n[s] = t[s];
                else {
                  var a = n[s - 1];
                  (s % e
                    ? 6 < e &&
                      4 == s % e &&
                      (a =
                        (r[a >>> 24] << 24) |
                        (r[(a >>> 16) & 255] << 16) |
                        (r[(a >>> 8) & 255] << 8) |
                        r[255 & a])
                    : ((a =
                        (r[(a = (a << 8) | (a >>> 24)) >>> 24] << 24) |
                        (r[(a >>> 16) & 255] << 16) |
                        (r[(a >>> 8) & 255] << 8) |
                        r[255 & a]),
                      (a ^= F[(s / e) | 0] << 24)),
                    (n[s] = n[s - e] ^ a));
                }
              for (t = this._invKeySchedule = [], e = 0; e < i; e++)
                ((s = i - e),
                  (a = e % 4 ? n[s] : n[s - 4]),
                  (t[e] =
                    4 > e || 4 >= s
                      ? a
                      : c[r[a >>> 24]] ^
                        l[r[(a >>> 16) & 255]] ^
                        f[r[(a >>> 8) & 255]] ^
                        d[r[255 & a]]));
            },
            encryptBlock: function (t, e) {
              this._doCryptBlock(t, e, this._keySchedule, a, o, h, u, r);
            },
            decryptBlock: function (t, e) {
              var i = t[e + 1];
              ((t[e + 1] = t[e + 3]),
                (t[e + 3] = i),
                this._doCryptBlock(t, e, this._invKeySchedule, c, l, f, d, n),
                (i = t[e + 1]),
                (t[e + 1] = t[e + 3]),
                (t[e + 3] = i));
            },
            _doCryptBlock: function (t, e, i, r, n, s, a, o) {
              for (
                var h = this._nRounds,
                  u = t[e] ^ i[0],
                  c = t[e + 1] ^ i[1],
                  l = t[e + 2] ^ i[2],
                  f = t[e + 3] ^ i[3],
                  d = 4,
                  g = 1;
                g < h;
                g++
              ) {
                var p =
                    r[u >>> 24] ^
                    n[(c >>> 16) & 255] ^
                    s[(l >>> 8) & 255] ^
                    a[255 & f] ^
                    i[d++],
                  y =
                    r[c >>> 24] ^
                    n[(l >>> 16) & 255] ^
                    s[(f >>> 8) & 255] ^
                    a[255 & u] ^
                    i[d++],
                  v =
                    r[l >>> 24] ^
                    n[(f >>> 16) & 255] ^
                    s[(u >>> 8) & 255] ^
                    a[255 & c] ^
                    i[d++];
                ((f =
                  r[f >>> 24] ^
                  n[(u >>> 16) & 255] ^
                  s[(c >>> 8) & 255] ^
                  a[255 & l] ^
                  i[d++]),
                  (u = p),
                  (c = y),
                  (l = v));
              }
              ((p =
                ((o[u >>> 24] << 24) |
                  (o[(c >>> 16) & 255] << 16) |
                  (o[(l >>> 8) & 255] << 8) |
                  o[255 & f]) ^
                i[d++]),
                (y =
                  ((o[c >>> 24] << 24) |
                    (o[(l >>> 16) & 255] << 16) |
                    (o[(f >>> 8) & 255] << 8) |
                    o[255 & u]) ^
                  i[d++]),
                (v =
                  ((o[l >>> 24] << 24) |
                    (o[(f >>> 16) & 255] << 16) |
                    (o[(u >>> 8) & 255] << 8) |
                    o[255 & c]) ^
                  i[d++]),
                (f =
                  ((o[f >>> 24] << 24) |
                    (o[(u >>> 16) & 255] << 16) |
                    (o[(c >>> 8) & 255] << 8) |
                    o[255 & l]) ^
                  i[d++]),
                (t[e] = p),
                (t[e + 1] = y),
                (t[e + 2] = v),
                (t[e + 3] = f));
            },
            keySize: 8,
          });
          t.AES = e._createHelper(i);
        })(),
        (function () {
          function t(t, e) {
            var i = ((this._lBlock >>> t) ^ this._rBlock) & e;
            ((this._rBlock ^= i), (this._lBlock ^= i << t));
          }
          function e(t, e) {
            var i = ((this._rBlock >>> t) ^ this._lBlock) & e;
            ((this._lBlock ^= i), (this._rBlock ^= i << t));
          }
          var i = s,
            r = (n = i.lib).WordArray,
            n = n.BlockCipher,
            a = i.algo,
            o = [
              57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59,
              51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23,
              15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13,
              5, 28, 20, 12, 4,
            ],
            h = [
              14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8,
              16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33,
              48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
            ],
            u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
            c = [
              {
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378,
              },
              {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672,
              },
              {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792,
              },
              {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464,
              },
              {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040,
              },
              {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656,
              },
              {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577,
              },
              {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848,
              },
            ],
            l = [
              4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
              2147483679,
            ],
            f = (a.DES = n.extend({
              _doReset: function () {
                for (var t = this._key.words, e = [], i = 0; 56 > i; i++) {
                  var r = o[i] - 1;
                  e[i] = (t[r >>> 5] >>> (31 - (r % 32))) & 1;
                }
                for (t = this._subKeys = [], r = 0; 16 > r; r++) {
                  var n = (t[r] = []),
                    s = u[r];
                  for (i = 0; 24 > i; i++)
                    ((n[(i / 6) | 0] |=
                      e[(h[i] - 1 + s) % 28] << (31 - (i % 6))),
                      (n[4 + ((i / 6) | 0)] |=
                        e[28 + ((h[i + 24] - 1 + s) % 28)] << (31 - (i % 6))));
                  for (n[0] = (n[0] << 1) | (n[0] >>> 31), i = 1; 7 > i; i++)
                    n[i] >>>= 4 * (i - 1) + 3;
                  n[7] = (n[7] << 5) | (n[7] >>> 27);
                }
                for (e = this._invSubKeys = [], i = 0; 16 > i; i++)
                  e[i] = t[15 - i];
              },
              encryptBlock: function (t, e) {
                this._doCryptBlock(t, e, this._subKeys);
              },
              decryptBlock: function (t, e) {
                this._doCryptBlock(t, e, this._invSubKeys);
              },
              _doCryptBlock: function (i, r, n) {
                ((this._lBlock = i[r]),
                  (this._rBlock = i[r + 1]),
                  t.call(this, 4, 252645135),
                  t.call(this, 16, 65535),
                  e.call(this, 2, 858993459),
                  e.call(this, 8, 16711935),
                  t.call(this, 1, 1431655765));
                for (var s = 0; 16 > s; s++) {
                  for (
                    var a = n[s],
                      o = this._lBlock,
                      h = this._rBlock,
                      u = 0,
                      f = 0;
                    8 > f;
                    f++
                  )
                    u |= c[f][((h ^ a[f]) & l[f]) >>> 0];
                  ((this._lBlock = h), (this._rBlock = o ^ u));
                }
                ((n = this._lBlock),
                  (this._lBlock = this._rBlock),
                  (this._rBlock = n),
                  t.call(this, 1, 1431655765),
                  e.call(this, 8, 16711935),
                  e.call(this, 2, 858993459),
                  t.call(this, 16, 65535),
                  t.call(this, 4, 252645135),
                  (i[r] = this._lBlock),
                  (i[r + 1] = this._rBlock));
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2,
            }));
          ((i.DES = n._createHelper(f)),
            (a = a.TripleDES =
              n.extend({
                _doReset: function () {
                  var t = this._key.words;
                  ((this._des1 = f.createEncryptor(r.create(t.slice(0, 2)))),
                    (this._des2 = f.createEncryptor(r.create(t.slice(2, 4)))),
                    (this._des3 = f.createEncryptor(r.create(t.slice(4, 6)))));
                },
                encryptBlock: function (t, e) {
                  (this._des1.encryptBlock(t, e),
                    this._des2.decryptBlock(t, e),
                    this._des3.encryptBlock(t, e));
                },
                decryptBlock: function (t, e) {
                  (this._des3.decryptBlock(t, e),
                    this._des2.encryptBlock(t, e),
                    this._des1.decryptBlock(t, e));
                },
                keySize: 6,
                ivSize: 2,
                blockSize: 2,
              })),
            (i.TripleDES = n._createHelper(a)));
        })(),
        (function () {
          var t = s,
            e = t.lib.WordArray;
          t.enc.Base64 = {
            stringify: function (t) {
              var e = t.words,
                i = t.sigBytes,
                r = this._map;
              (t.clamp(), (t = []));
              for (var n = 0; n < i; n += 3)
                for (
                  var s =
                      (((e[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) << 16) |
                      (((e[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) &
                        255) <<
                        8) |
                      ((e[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255),
                    a = 0;
                  4 > a && n + 0.75 * a < i;
                  a++
                )
                  t.push(r.charAt((s >>> (6 * (3 - a))) & 63));
              if ((e = r.charAt(64))) for (; t.length % 4; ) t.push(e);
              return t.join("");
            },
            parse: function (t) {
              var i = t.length,
                r = this._map;
              (n = r.charAt(64)) && -1 != (n = t.indexOf(n)) && (i = n);
              for (var n = [], s = 0, a = 0; a < i; a++)
                if (a % 4) {
                  var o = r.indexOf(t.charAt(a - 1)) << ((a % 4) * 2),
                    h = r.indexOf(t.charAt(a)) >>> (6 - (a % 4) * 2);
                  ((n[s >>> 2] |= (o | h) << (24 - (s % 4) * 8)), s++);
                }
              return e.create(n, s);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          };
        })(),
        (function (t) {
          function e(t, e, i, r, n, s, a) {
            return (
              (((t = t + ((e & i) | (~e & r)) + n + a) << s) |
                (t >>> (32 - s))) +
              e
            );
          }
          function i(t, e, i, r, n, s, a) {
            return (
              (((t = t + ((e & r) | (i & ~r)) + n + a) << s) |
                (t >>> (32 - s))) +
              e
            );
          }
          function r(t, e, i, r, n, s, a) {
            return (
              (((t = t + (e ^ i ^ r) + n + a) << s) | (t >>> (32 - s))) + e
            );
          }
          function n(t, e, i, r, n, s, a) {
            return (
              (((t = t + (i ^ (e | ~r)) + n + a) << s) | (t >>> (32 - s))) + e
            );
          }
          for (
            var a = s,
              o = (u = a.lib).WordArray,
              h = u.Hasher,
              u = a.algo,
              c = [],
              l = 0;
            64 > l;
            l++
          )
            c[l] = (4294967296 * t.abs(t.sin(l + 1))) | 0;
          ((u = u.MD5 =
            h.extend({
              _doReset: function () {
                this._hash = new o.init([
                  1732584193, 4023233417, 2562383102, 271733878,
                ]);
              },
              _doProcessBlock: function (t, s) {
                for (var a = 0; 16 > a; a++) {
                  var o = t[(h = s + a)];
                  t[h] =
                    (16711935 & ((o << 8) | (o >>> 24))) |
                    (4278255360 & ((o << 24) | (o >>> 8)));
                }
                a = this._hash.words;
                var h = t[s + 0],
                  u = ((o = t[s + 1]), t[s + 2]),
                  l = t[s + 3],
                  f = t[s + 4],
                  d = t[s + 5],
                  g = t[s + 6],
                  p = t[s + 7],
                  y = t[s + 8],
                  v = t[s + 9],
                  m = t[s + 10],
                  x = t[s + 11],
                  S = t[s + 12],
                  E = t[s + 13],
                  w = t[s + 14],
                  F = t[s + 15],
                  b = e(
                    (b = a[0]),
                    (D = a[1]),
                    (C = a[2]),
                    (A = a[3]),
                    h,
                    7,
                    c[0],
                  ),
                  A = e(A, b, D, C, o, 12, c[1]),
                  C = e(C, A, b, D, u, 17, c[2]),
                  D = e(D, C, A, b, l, 22, c[3]);
                ((b = e(b, D, C, A, f, 7, c[4])),
                  (A = e(A, b, D, C, d, 12, c[5])),
                  (C = e(C, A, b, D, g, 17, c[6])),
                  (D = e(D, C, A, b, p, 22, c[7])),
                  (b = e(b, D, C, A, y, 7, c[8])),
                  (A = e(A, b, D, C, v, 12, c[9])),
                  (C = e(C, A, b, D, m, 17, c[10])),
                  (D = e(D, C, A, b, x, 22, c[11])),
                  (b = e(b, D, C, A, S, 7, c[12])),
                  (A = e(A, b, D, C, E, 12, c[13])),
                  (C = e(C, A, b, D, w, 17, c[14])),
                  (b = i(
                    b,
                    (D = e(D, C, A, b, F, 22, c[15])),
                    C,
                    A,
                    o,
                    5,
                    c[16],
                  )),
                  (A = i(A, b, D, C, g, 9, c[17])),
                  (C = i(C, A, b, D, x, 14, c[18])),
                  (D = i(D, C, A, b, h, 20, c[19])),
                  (b = i(b, D, C, A, d, 5, c[20])),
                  (A = i(A, b, D, C, m, 9, c[21])),
                  (C = i(C, A, b, D, F, 14, c[22])),
                  (D = i(D, C, A, b, f, 20, c[23])),
                  (b = i(b, D, C, A, v, 5, c[24])),
                  (A = i(A, b, D, C, w, 9, c[25])),
                  (C = i(C, A, b, D, l, 14, c[26])),
                  (D = i(D, C, A, b, y, 20, c[27])),
                  (b = i(b, D, C, A, E, 5, c[28])),
                  (A = i(A, b, D, C, u, 9, c[29])),
                  (C = i(C, A, b, D, p, 14, c[30])),
                  (b = r(
                    b,
                    (D = i(D, C, A, b, S, 20, c[31])),
                    C,
                    A,
                    d,
                    4,
                    c[32],
                  )),
                  (A = r(A, b, D, C, y, 11, c[33])),
                  (C = r(C, A, b, D, x, 16, c[34])),
                  (D = r(D, C, A, b, w, 23, c[35])),
                  (b = r(b, D, C, A, o, 4, c[36])),
                  (A = r(A, b, D, C, f, 11, c[37])),
                  (C = r(C, A, b, D, p, 16, c[38])),
                  (D = r(D, C, A, b, m, 23, c[39])),
                  (b = r(b, D, C, A, E, 4, c[40])),
                  (A = r(A, b, D, C, h, 11, c[41])),
                  (C = r(C, A, b, D, l, 16, c[42])),
                  (D = r(D, C, A, b, g, 23, c[43])),
                  (b = r(b, D, C, A, v, 4, c[44])),
                  (A = r(A, b, D, C, S, 11, c[45])),
                  (C = r(C, A, b, D, F, 16, c[46])),
                  (b = n(
                    b,
                    (D = r(D, C, A, b, u, 23, c[47])),
                    C,
                    A,
                    h,
                    6,
                    c[48],
                  )),
                  (A = n(A, b, D, C, p, 10, c[49])),
                  (C = n(C, A, b, D, w, 15, c[50])),
                  (D = n(D, C, A, b, d, 21, c[51])),
                  (b = n(b, D, C, A, S, 6, c[52])),
                  (A = n(A, b, D, C, l, 10, c[53])),
                  (C = n(C, A, b, D, m, 15, c[54])),
                  (D = n(D, C, A, b, o, 21, c[55])),
                  (b = n(b, D, C, A, y, 6, c[56])),
                  (A = n(A, b, D, C, F, 10, c[57])),
                  (C = n(C, A, b, D, g, 15, c[58])),
                  (D = n(D, C, A, b, E, 21, c[59])),
                  (b = n(b, D, C, A, f, 6, c[60])),
                  (A = n(A, b, D, C, x, 10, c[61])),
                  (C = n(C, A, b, D, u, 15, c[62])),
                  (D = n(D, C, A, b, v, 21, c[63])));
                ((a[0] = (a[0] + b) | 0),
                  (a[1] = (a[1] + D) | 0),
                  (a[2] = (a[2] + C) | 0),
                  (a[3] = (a[3] + A) | 0));
              },
              _doFinalize: function () {
                var e = this._data,
                  i = e.words,
                  r = 8 * this._nDataBytes,
                  n = 8 * e.sigBytes;
                i[n >>> 5] |= 128 << (24 - (n % 32));
                var s = t.floor(r / 4294967296);
                for (
                  i[15 + (((n + 64) >>> 9) << 4)] =
                    (16711935 & ((s << 8) | (s >>> 24))) |
                    (4278255360 & ((s << 24) | (s >>> 8))),
                    i[14 + (((n + 64) >>> 9) << 4)] =
                      (16711935 & ((r << 8) | (r >>> 24))) |
                      (4278255360 & ((r << 24) | (r >>> 8))),
                    e.sigBytes = 4 * (i.length + 1),
                    this._process(),
                    i = (e = this._hash).words,
                    r = 0;
                  4 > r;
                  r++
                )
                  ((n = i[r]),
                    (i[r] =
                      (16711935 & ((n << 8) | (n >>> 24))) |
                      (4278255360 & ((n << 24) | (n >>> 8)))));
                return e;
              },
              clone: function () {
                var t = h.clone.call(this);
                return ((t._hash = this._hash.clone()), t);
              },
            })),
            (a.MD5 = h._createHelper(u)),
            (a.HmacMD5 = h._createHmacHelper(u)));
        })(Math),
        (function () {
          var t = s,
            e = (n = t.lib).WordArray,
            i = n.Hasher,
            r = [],
            n = (t.algo.SHA1 = i.extend({
              _doReset: function () {
                this._hash = new e.init([
                  1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                ]);
              },
              _doProcessBlock: function (t, e) {
                for (
                  var i = this._hash.words,
                    n = i[0],
                    s = i[1],
                    a = i[2],
                    o = i[3],
                    h = i[4],
                    u = 0;
                  80 > u;
                  u++
                ) {
                  if (16 > u) r[u] = 0 | t[e + u];
                  else {
                    var c = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
                    r[u] = (c << 1) | (c >>> 31);
                  }
                  ((c = ((n << 5) | (n >>> 27)) + h + r[u]),
                    (c =
                      20 > u
                        ? c + (1518500249 + ((s & a) | (~s & o)))
                        : 40 > u
                          ? c + (1859775393 + (s ^ a ^ o))
                          : 60 > u
                            ? c + (((s & a) | (s & o) | (a & o)) - 1894007588)
                            : c + ((s ^ a ^ o) - 899497514)),
                    (h = o),
                    (o = a),
                    (a = (s << 30) | (s >>> 2)),
                    (s = n),
                    (n = c));
                }
                ((i[0] = (i[0] + n) | 0),
                  (i[1] = (i[1] + s) | 0),
                  (i[2] = (i[2] + a) | 0),
                  (i[3] = (i[3] + o) | 0),
                  (i[4] = (i[4] + h) | 0));
              },
              _doFinalize: function () {
                var t = this._data,
                  e = t.words,
                  i = 8 * this._nDataBytes,
                  r = 8 * t.sigBytes;
                return (
                  (e[r >>> 5] |= 128 << (24 - (r % 32))),
                  (e[14 + (((r + 64) >>> 9) << 4)] = Math.floor(
                    i / 4294967296,
                  )),
                  (e[15 + (((r + 64) >>> 9) << 4)] = i),
                  (t.sigBytes = 4 * e.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var t = i.clone.call(this);
                return ((t._hash = this._hash.clone()), t);
              },
            }));
          ((t.SHA1 = i._createHelper(n)),
            (t.HmacSHA1 = i._createHmacHelper(n)));
        })(),
        (function (t) {
          for (
            var e = s,
              i = (n = e.lib).WordArray,
              r = n.Hasher,
              n = e.algo,
              a = [],
              o = [],
              h = function (t) {
                return (4294967296 * (t - (0 | t))) | 0;
              },
              u = 2,
              c = 0;
            64 > c;
          ) {
            var l;
            t: {
              l = u;
              for (var f = t.sqrt(l), d = 2; d <= f; d++)
                if (!(l % d)) {
                  l = !1;
                  break t;
                }
              l = !0;
            }
            (l &&
              (8 > c && (a[c] = h(t.pow(u, 0.5))),
              (o[c] = h(t.pow(u, 1 / 3))),
              c++),
              u++);
          }
          var g = [];
          n = n.SHA256 = r.extend({
            _doReset: function () {
              this._hash = new i.init(a.slice(0));
            },
            _doProcessBlock: function (t, e) {
              for (
                var i = this._hash.words,
                  r = i[0],
                  n = i[1],
                  s = i[2],
                  a = i[3],
                  h = i[4],
                  u = i[5],
                  c = i[6],
                  l = i[7],
                  f = 0;
                64 > f;
                f++
              ) {
                if (16 > f) g[f] = 0 | t[e + f];
                else {
                  var d = g[f - 15],
                    p = g[f - 2];
                  g[f] =
                    (((d << 25) | (d >>> 7)) ^
                      ((d << 14) | (d >>> 18)) ^
                      (d >>> 3)) +
                    g[f - 7] +
                    (((p << 15) | (p >>> 17)) ^
                      ((p << 13) | (p >>> 19)) ^
                      (p >>> 10)) +
                    g[f - 16];
                }
                ((d =
                  l +
                  (((h << 26) | (h >>> 6)) ^
                    ((h << 21) | (h >>> 11)) ^
                    ((h << 7) | (h >>> 25))) +
                  ((h & u) ^ (~h & c)) +
                  o[f] +
                  g[f]),
                  (p =
                    (((r << 30) | (r >>> 2)) ^
                      ((r << 19) | (r >>> 13)) ^
                      ((r << 10) | (r >>> 22))) +
                    ((r & n) ^ (r & s) ^ (n & s))),
                  (l = c),
                  (c = u),
                  (u = h),
                  (h = (a + d) | 0),
                  (a = s),
                  (s = n),
                  (n = r),
                  (r = (d + p) | 0));
              }
              ((i[0] = (i[0] + r) | 0),
                (i[1] = (i[1] + n) | 0),
                (i[2] = (i[2] + s) | 0),
                (i[3] = (i[3] + a) | 0),
                (i[4] = (i[4] + h) | 0),
                (i[5] = (i[5] + u) | 0),
                (i[6] = (i[6] + c) | 0),
                (i[7] = (i[7] + l) | 0));
            },
            _doFinalize: function () {
              var e = this._data,
                i = e.words,
                r = 8 * this._nDataBytes,
                n = 8 * e.sigBytes;
              return (
                (i[n >>> 5] |= 128 << (24 - (n % 32))),
                (i[14 + (((n + 64) >>> 9) << 4)] = t.floor(r / 4294967296)),
                (i[15 + (((n + 64) >>> 9) << 4)] = r),
                (e.sigBytes = 4 * i.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var t = r.clone.call(this);
              return ((t._hash = this._hash.clone()), t);
            },
          });
          ((e.SHA256 = r._createHelper(n)),
            (e.HmacSHA256 = r._createHmacHelper(n)));
        })(Math),
        (function () {
          var t = s,
            e = t.lib.WordArray,
            i = (r = t.algo).SHA256,
            r = (r.SHA224 = i.extend({
              _doReset: function () {
                this._hash = new e.init([
                  3238371032, 914150663, 812702999, 4144912697, 4290775857,
                  1750603025, 1694076839, 3204075428,
                ]);
              },
              _doFinalize: function () {
                var t = i._doFinalize.call(this);
                return ((t.sigBytes -= 4), t);
              },
            }));
          ((t.SHA224 = i._createHelper(r)),
            (t.HmacSHA224 = i._createHmacHelper(r)));
        })(),
        (function () {
          function t() {
            return r.create.apply(r, arguments);
          }
          for (
            var e = s,
              i = e.lib.Hasher,
              r = (a = e.x64).Word,
              n = a.WordArray,
              a = e.algo,
              o = [
                t(1116352408, 3609767458),
                t(1899447441, 602891725),
                t(3049323471, 3964484399),
                t(3921009573, 2173295548),
                t(961987163, 4081628472),
                t(1508970993, 3053834265),
                t(2453635748, 2937671579),
                t(2870763221, 3664609560),
                t(3624381080, 2734883394),
                t(310598401, 1164996542),
                t(607225278, 1323610764),
                t(1426881987, 3590304994),
                t(1925078388, 4068182383),
                t(2162078206, 991336113),
                t(2614888103, 633803317),
                t(3248222580, 3479774868),
                t(3835390401, 2666613458),
                t(4022224774, 944711139),
                t(264347078, 2341262773),
                t(604807628, 2007800933),
                t(770255983, 1495990901),
                t(1249150122, 1856431235),
                t(1555081692, 3175218132),
                t(1996064986, 2198950837),
                t(2554220882, 3999719339),
                t(2821834349, 766784016),
                t(2952996808, 2566594879),
                t(3210313671, 3203337956),
                t(3336571891, 1034457026),
                t(3584528711, 2466948901),
                t(113926993, 3758326383),
                t(338241895, 168717936),
                t(666307205, 1188179964),
                t(773529912, 1546045734),
                t(1294757372, 1522805485),
                t(1396182291, 2643833823),
                t(1695183700, 2343527390),
                t(1986661051, 1014477480),
                t(2177026350, 1206759142),
                t(2456956037, 344077627),
                t(2730485921, 1290863460),
                t(2820302411, 3158454273),
                t(3259730800, 3505952657),
                t(3345764771, 106217008),
                t(3516065817, 3606008344),
                t(3600352804, 1432725776),
                t(4094571909, 1467031594),
                t(275423344, 851169720),
                t(430227734, 3100823752),
                t(506948616, 1363258195),
                t(659060556, 3750685593),
                t(883997877, 3785050280),
                t(958139571, 3318307427),
                t(1322822218, 3812723403),
                t(1537002063, 2003034995),
                t(1747873779, 3602036899),
                t(1955562222, 1575990012),
                t(2024104815, 1125592928),
                t(2227730452, 2716904306),
                t(2361852424, 442776044),
                t(2428436474, 593698344),
                t(2756734187, 3733110249),
                t(3204031479, 2999351573),
                t(3329325298, 3815920427),
                t(3391569614, 3928383900),
                t(3515267271, 566280711),
                t(3940187606, 3454069534),
                t(4118630271, 4000239992),
                t(116418474, 1914138554),
                t(174292421, 2731055270),
                t(289380356, 3203993006),
                t(460393269, 320620315),
                t(685471733, 587496836),
                t(852142971, 1086792851),
                t(1017036298, 365543100),
                t(1126000580, 2618297676),
                t(1288033470, 3409855158),
                t(1501505948, 4234509866),
                t(1607167915, 987167468),
                t(1816402316, 1246189591),
              ],
              h = [],
              u = 0;
            80 > u;
            u++
          )
            h[u] = t();
          ((a = a.SHA512 =
            i.extend({
              _doReset: function () {
                this._hash = new n.init([
                  new r.init(1779033703, 4089235720),
                  new r.init(3144134277, 2227873595),
                  new r.init(1013904242, 4271175723),
                  new r.init(2773480762, 1595750129),
                  new r.init(1359893119, 2917565137),
                  new r.init(2600822924, 725511199),
                  new r.init(528734635, 4215389547),
                  new r.init(1541459225, 327033209),
                ]);
              },
              _doProcessBlock: function (t, e) {
                for (
                  var i = (l = this._hash.words)[0],
                    r = l[1],
                    n = l[2],
                    s = l[3],
                    a = l[4],
                    u = l[5],
                    c = l[6],
                    l = l[7],
                    f = i.high,
                    d = i.low,
                    g = r.high,
                    p = r.low,
                    y = n.high,
                    v = n.low,
                    m = s.high,
                    x = s.low,
                    S = a.high,
                    E = a.low,
                    w = u.high,
                    F = u.low,
                    b = c.high,
                    A = c.low,
                    C = l.high,
                    D = l.low,
                    I = f,
                    P = d,
                    R = g,
                    T = p,
                    H = y,
                    B = v,
                    N = m,
                    O = x,
                    j = S,
                    V = E,
                    L = w,
                    K = F,
                    _ = b,
                    M = A,
                    k = C,
                    U = D,
                    q = 0;
                  80 > q;
                  q++
                ) {
                  var z = h[q];
                  if (16 > q)
                    var G = (z.high = 0 | t[e + 2 * q]),
                      Y = (z.low = 0 | t[e + 2 * q + 1]);
                  else {
                    G =
                      (((Y = (G = h[q - 15]).high) >>> 1) |
                        ((J = G.low) << 31)) ^
                      ((Y >>> 8) | (J << 24)) ^
                      (Y >>> 7);
                    var J =
                        ((J >>> 1) | (Y << 31)) ^
                        ((J >>> 8) | (Y << 24)) ^
                        ((J >>> 7) | (Y << 25)),
                      W =
                        (((Y = (W = h[q - 2]).high) >>> 19) |
                          ((X = W.low) << 13)) ^
                        ((Y << 3) | (X >>> 29)) ^
                        (Y >>> 6),
                      X =
                        ((X >>> 19) | (Y << 13)) ^
                        ((X << 3) | (Y >>> 29)) ^
                        ((X >>> 6) | (Y << 26)),
                      $ = (Y = h[q - 7]).high,
                      Z = (Q = h[q - 16]).high,
                      Q = Q.low;
                    G =
                      (G =
                        (G =
                          G + $ + ((Y = J + Y.low) >>> 0 < J >>> 0 ? 1 : 0)) +
                        W +
                        ((Y = Y + X) >>> 0 < X >>> 0 ? 1 : 0)) +
                      Z +
                      ((Y = Y + Q) >>> 0 < Q >>> 0 ? 1 : 0);
                    ((z.high = G), (z.low = Y));
                  }
                  (($ = (j & L) ^ (~j & _)),
                    (Q = (V & K) ^ (~V & M)),
                    (z = (I & R) ^ (I & H) ^ (R & H)));
                  var tt = (P & T) ^ (P & B) ^ (T & B),
                    et =
                      ((J =
                        ((I >>> 28) | (P << 4)) ^
                        ((I << 30) | (P >>> 2)) ^
                        ((I << 25) | (P >>> 7))),
                      (W =
                        ((P >>> 28) | (I << 4)) ^
                        ((P << 30) | (I >>> 2)) ^
                        ((P << 25) | (I >>> 7))),
                      (X = o[q]).high),
                    it = X.low;
                  ((Z =
                    k +
                    (((j >>> 14) | (V << 18)) ^
                      ((j >>> 18) | (V << 14)) ^
                      ((j << 23) | (V >>> 9))) +
                    ((X =
                      U +
                      (((V >>> 14) | (j << 18)) ^
                        ((V >>> 18) | (j << 14)) ^
                        ((V << 23) | (j >>> 9)))) >>>
                      0 <
                    U >>> 0
                      ? 1
                      : 0)),
                    (k = _),
                    (U = M),
                    (_ = L),
                    (M = K),
                    (L = j),
                    (K = V),
                    (j =
                      (N +
                        (Z =
                          (Z =
                            (Z =
                              Z + $ + ((X = X + Q) >>> 0 < Q >>> 0 ? 1 : 0)) +
                            et +
                            ((X = X + it) >>> 0 < it >>> 0 ? 1 : 0)) +
                          G +
                          ((X = X + Y) >>> 0 < Y >>> 0 ? 1 : 0)) +
                        ((V = (O + X) | 0) >>> 0 < O >>> 0 ? 1 : 0)) |
                      0),
                    (N = H),
                    (O = B),
                    (H = R),
                    (B = T),
                    (R = I),
                    (T = P),
                    (I =
                      (Z +
                        (z = J + z + ((Y = W + tt) >>> 0 < W >>> 0 ? 1 : 0)) +
                        ((P = (X + Y) | 0) >>> 0 < X >>> 0 ? 1 : 0)) |
                      0));
                }
                ((d = i.low = d + P),
                  (i.high = f + I + (d >>> 0 < P >>> 0 ? 1 : 0)),
                  (p = r.low = p + T),
                  (r.high = g + R + (p >>> 0 < T >>> 0 ? 1 : 0)),
                  (v = n.low = v + B),
                  (n.high = y + H + (v >>> 0 < B >>> 0 ? 1 : 0)),
                  (x = s.low = x + O),
                  (s.high = m + N + (x >>> 0 < O >>> 0 ? 1 : 0)),
                  (E = a.low = E + V),
                  (a.high = S + j + (E >>> 0 < V >>> 0 ? 1 : 0)),
                  (F = u.low = F + K),
                  (u.high = w + L + (F >>> 0 < K >>> 0 ? 1 : 0)),
                  (A = c.low = A + M),
                  (c.high = b + _ + (A >>> 0 < M >>> 0 ? 1 : 0)),
                  (D = l.low = D + U),
                  (l.high = C + k + (D >>> 0 < U >>> 0 ? 1 : 0)));
              },
              _doFinalize: function () {
                var t = this._data,
                  e = t.words,
                  i = 8 * this._nDataBytes,
                  r = 8 * t.sigBytes;
                return (
                  (e[r >>> 5] |= 128 << (24 - (r % 32))),
                  (e[30 + (((r + 128) >>> 10) << 5)] = Math.floor(
                    i / 4294967296,
                  )),
                  (e[31 + (((r + 128) >>> 10) << 5)] = i),
                  (t.sigBytes = 4 * e.length),
                  this._process(),
                  this._hash.toX32()
                );
              },
              clone: function () {
                var t = i.clone.call(this);
                return ((t._hash = this._hash.clone()), t);
              },
              blockSize: 32,
            })),
            (e.SHA512 = i._createHelper(a)),
            (e.HmacSHA512 = i._createHmacHelper(a)));
        })(),
        (function () {
          var t = s,
            e = (n = t.x64).Word,
            i = n.WordArray,
            r = (n = t.algo).SHA512,
            n = (n.SHA384 = r.extend({
              _doReset: function () {
                this._hash = new i.init([
                  new e.init(3418070365, 3238371032),
                  new e.init(1654270250, 914150663),
                  new e.init(2438529370, 812702999),
                  new e.init(355462360, 4144912697),
                  new e.init(1731405415, 4290775857),
                  new e.init(2394180231, 1750603025),
                  new e.init(3675008525, 1694076839),
                  new e.init(1203062813, 3204075428),
                ]);
              },
              _doFinalize: function () {
                var t = r._doFinalize.call(this);
                return ((t.sigBytes -= 16), t);
              },
            }));
          ((t.SHA384 = r._createHelper(n)),
            (t.HmacSHA384 = r._createHmacHelper(n)));
        })(),
        (function () {
          var t = s,
            e = (r = t.lib).WordArray,
            i = r.Hasher,
            r = t.algo,
            n = e.create([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
              10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8,
              1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7,
              15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15,
              13,
            ]),
            a = e.create([
              5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7,
              0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
              11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2,
              13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3,
              9, 11,
            ]),
            o = e.create([
              11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8,
              13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14,
              9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9,
              8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12,
              13, 14, 11, 8, 5, 6,
            ]),
            h = e.create([
              8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15,
              7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
              6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14,
              6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5,
              15, 13, 11, 11,
            ]),
            u = e.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
            c = e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
          r = r.RIPEMD160 = i.extend({
            _doReset: function () {
              this._hash = e.create([
                1732584193, 4023233417, 2562383102, 271733878, 3285377520,
              ]);
            },
            _doProcessBlock: function (t, e) {
              for (var i = 0; 16 > i; i++) {
                var r = t[(S = e + i)];
                t[S] =
                  (16711935 & ((r << 8) | (r >>> 24))) |
                  (4278255360 & ((r << 24) | (r >>> 8)));
              }
              var s,
                l,
                f,
                d,
                g,
                p,
                y,
                v,
                m,
                x,
                S = this._hash.words,
                E = ((r = u.words), c.words),
                w = n.words,
                F = a.words,
                b = o.words,
                A = h.words;
              ((p = s = S[0]),
                (y = l = S[1]),
                (v = f = S[2]),
                (m = d = S[3]),
                (x = g = S[4]));
              var C;
              for (i = 0; 80 > i; i += 1)
                ((C = (s + t[e + w[i]]) | 0),
                  (C =
                    16 > i
                      ? C + ((l ^ f ^ d) + r[0])
                      : 32 > i
                        ? C + (((l & f) | (~l & d)) + r[1])
                        : 48 > i
                          ? C + (((l | ~f) ^ d) + r[2])
                          : 64 > i
                            ? C + (((l & d) | (f & ~d)) + r[3])
                            : C + ((l ^ (f | ~d)) + r[4])),
                  (C =
                    ((C = ((C |= 0) << b[i]) | (C >>> (32 - b[i]))) + g) | 0),
                  (s = g),
                  (g = d),
                  (d = (f << 10) | (f >>> 22)),
                  (f = l),
                  (l = C),
                  (C = (p + t[e + F[i]]) | 0),
                  (C =
                    16 > i
                      ? C + ((y ^ (v | ~m)) + E[0])
                      : 32 > i
                        ? C + (((y & m) | (v & ~m)) + E[1])
                        : 48 > i
                          ? C + (((y | ~v) ^ m) + E[2])
                          : 64 > i
                            ? C + (((y & v) | (~y & m)) + E[3])
                            : C + ((y ^ v ^ m) + E[4])),
                  (C =
                    ((C = ((C |= 0) << A[i]) | (C >>> (32 - A[i]))) + x) | 0),
                  (p = x),
                  (x = m),
                  (m = (v << 10) | (v >>> 22)),
                  (v = y),
                  (y = C));
              ((C = (S[1] + f + m) | 0),
                (S[1] = (S[2] + d + x) | 0),
                (S[2] = (S[3] + g + p) | 0),
                (S[3] = (S[4] + s + y) | 0),
                (S[4] = (S[0] + l + v) | 0),
                (S[0] = C));
            },
            _doFinalize: function () {
              var t = this._data,
                e = t.words,
                i = 8 * this._nDataBytes,
                r = 8 * t.sigBytes;
              for (
                e[r >>> 5] |= 128 << (24 - (r % 32)),
                  e[14 + (((r + 64) >>> 9) << 4)] =
                    (16711935 & ((i << 8) | (i >>> 24))) |
                    (4278255360 & ((i << 24) | (i >>> 8))),
                  t.sigBytes = 4 * (e.length + 1),
                  this._process(),
                  e = (t = this._hash).words,
                  i = 0;
                5 > i;
                i++
              )
                ((r = e[i]),
                  (e[i] =
                    (16711935 & ((r << 8) | (r >>> 24))) |
                    (4278255360 & ((r << 24) | (r >>> 8)))));
              return t;
            },
            clone: function () {
              var t = i.clone.call(this);
              return ((t._hash = this._hash.clone()), t);
            },
          });
          ((t.RIPEMD160 = i._createHelper(r)),
            (t.HmacRIPEMD160 = i._createHmacHelper(r)));
        })(Math),
        (function () {
          var t = s,
            e = t.enc.Utf8;
          t.algo.HMAC = t.lib.Base.extend({
            init: function (t, i) {
              ((t = this._hasher = new t.init()),
                "string" == typeof i && (i = e.parse(i)));
              var r = t.blockSize,
                n = 4 * r;
              (i.sigBytes > n && (i = t.finalize(i)), i.clamp());
              for (
                var s = (this._oKey = i.clone()),
                  a = (this._iKey = i.clone()),
                  o = s.words,
                  h = a.words,
                  u = 0;
                u < r;
                u++
              )
                ((o[u] ^= 1549556828), (h[u] ^= 909522486));
              ((s.sigBytes = a.sigBytes = n), this.reset());
            },
            reset: function () {
              var t = this._hasher;
              (t.reset(), t.update(this._iKey));
            },
            update: function (t) {
              return (this._hasher.update(t), this);
            },
            finalize: function (t) {
              var e = this._hasher;
              return (
                (t = e.finalize(t)),
                e.reset(),
                e.finalize(this._oKey.clone().concat(t))
              );
            },
          });
        })(),
        (function () {
          var t,
            e = s,
            i = (t = e.lib).Base,
            r = t.WordArray,
            n = (t = e.algo).HMAC,
            a = (t.PBKDF2 = i.extend({
              cfg: i.extend({
                keySize: 4,
                hasher: t.SHA1,
                iterations: 1,
              }),
              init: function (t) {
                this.cfg = this.cfg.extend(t);
              },
              compute: function (t, e) {
                var i = this.cfg,
                  s = n.create(i.hasher, t),
                  a = r.create(),
                  o = r.create([1]),
                  h = a.words,
                  u = o.words,
                  c = i.keySize;
                for (i = i.iterations; h.length < c; ) {
                  var l = s.update(e).finalize(o);
                  s.reset();
                  for (
                    var f = l.words, d = f.length, g = l, p = 1;
                    p < i;
                    p++
                  ) {
                    ((g = s.finalize(g)), s.reset());
                    for (var y = g.words, v = 0; v < d; v++) f[v] ^= y[v];
                  }
                  (a.concat(l), u[0]++);
                }
                return ((a.sigBytes = 4 * c), a);
              },
            }));
          e.PBKDF2 = function (t, e, i) {
            return a.create(i).compute(t, e);
          };
        })());
      var a,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function h(t) {
        var e,
          i,
          r = "";
        for (e = 0; e + 3 <= t.length; e += 3)
          ((i = parseInt(t.substring(e, e + 3), 16)),
            (r += o.charAt(i >> 6) + o.charAt(63 & i)));
        for (
          e + 1 == t.length
            ? ((i = parseInt(t.substring(e, e + 1), 16)),
              (r += o.charAt(i << 2)))
            : e + 2 == t.length &&
              ((i = parseInt(t.substring(e, e + 2), 16)),
              (r += o.charAt(i >> 2) + o.charAt((3 & i) << 4))),
            "=";
          (3 & r.length) > 0;
        )
          r += "=";
        return r;
      }
      function u(t) {
        var e,
          i,
          r,
          n = "",
          s = 0;
        for (e = 0; e < t.length && "=" != t.charAt(e); ++e)
          (r = o.indexOf(t.charAt(e))) < 0 ||
            (0 == s
              ? ((n += y(r >> 2)), (i = 3 & r), (s = 1))
              : 1 == s
                ? ((n += y((i << 2) | (r >> 4))), (i = 15 & r), (s = 2))
                : 2 == s
                  ? ((n += y(i)), (n += y(r >> 2)), (i = 3 & r), (s = 3))
                  : ((n += y((i << 2) | (r >> 4))), (n += y(15 & r)), (s = 0)));
        return (1 == s && (n += y(i << 2)), n);
      }
      function c(t) {
        var e,
          i = u(t),
          r = new Array();
        for (e = 0; 2 * e < i.length; ++e)
          r[e] = parseInt(i.substring(2 * e, 2 * e + 2), 16);
        return r;
      }
      function l(t, e, i) {
        null != t &&
          ("number" == typeof t
            ? this.fromNumber(t, e, i)
            : null == e && "string" != typeof t
              ? this.fromString(t, 256)
              : this.fromString(t, e));
      }
      function f() {
        return new l(null);
      }
      ("Microsoft Internet Explorer" == i.appName
        ? ((l.prototype.am = function (t, e, i, r, n, s) {
            for (var a = 32767 & e, o = e >> 15; --s >= 0; ) {
              var h = 32767 & this[t],
                u = this[t++] >> 15,
                c = o * h + u * a;
              ((n =
                ((h = a * h + ((32767 & c) << 15) + i[r] + (1073741823 & n)) >>>
                  30) +
                (c >>> 15) +
                o * u +
                (n >>> 30)),
                (i[r++] = 1073741823 & h));
            }
            return n;
          }),
          (a = 30))
        : "Netscape" != i.appName
          ? ((l.prototype.am = function (t, e, i, r, n, s) {
              for (; --s >= 0; ) {
                var a = e * this[t++] + i[r] + n;
                ((n = Math.floor(a / 67108864)), (i[r++] = 67108863 & a));
              }
              return n;
            }),
            (a = 26))
          : ((l.prototype.am = function (t, e, i, r, n, s) {
              for (var a = 16383 & e, o = e >> 14; --s >= 0; ) {
                var h = 16383 & this[t],
                  u = this[t++] >> 14,
                  c = o * h + u * a;
                ((n =
                  ((h = a * h + ((16383 & c) << 14) + i[r] + n) >> 28) +
                  (c >> 14) +
                  o * u),
                  (i[r++] = 268435455 & h));
              }
              return n;
            }),
            (a = 28)),
        (l.prototype.DB = a),
        (l.prototype.DM = (1 << a) - 1),
        (l.prototype.DV = 1 << a));
      ((l.prototype.FV = Math.pow(2, 52)),
        (l.prototype.F1 = 52 - a),
        (l.prototype.F2 = 2 * a - 52));
      var d,
        g,
        p = new Array();
      for (d = "0".charCodeAt(0), g = 0; g <= 9; ++g) p[d++] = g;
      for (d = "a".charCodeAt(0), g = 10; g < 36; ++g) p[d++] = g;
      for (d = "A".charCodeAt(0), g = 10; g < 36; ++g) p[d++] = g;
      function y(t) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t);
      }
      function v(t, e) {
        var i = p[t.charCodeAt(e)];
        return null == i ? -1 : i;
      }
      function m(t) {
        var e = f();
        return (e.fromInt(t), e);
      }
      function x(t) {
        var e,
          i = 1;
        return (
          0 != (e = t >>> 16) && ((t = e), (i += 16)),
          0 != (e = t >> 8) && ((t = e), (i += 8)),
          0 != (e = t >> 4) && ((t = e), (i += 4)),
          0 != (e = t >> 2) && ((t = e), (i += 2)),
          0 != (e = t >> 1) && ((t = e), (i += 1)),
          i
        );
      }
      function S(t) {
        this.m = t;
      }
      function E(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function w(t, e) {
        return t & e;
      }
      function F(t, e) {
        return t | e;
      }
      function b(t, e) {
        return t ^ e;
      }
      function A(t, e) {
        return t & ~e;
      }
      function C(t) {
        if (0 == t) return -1;
        var e = 0;
        return (
          0 == (65535 & t) && ((t >>= 16), (e += 16)),
          0 == (255 & t) && ((t >>= 8), (e += 8)),
          0 == (15 & t) && ((t >>= 4), (e += 4)),
          0 == (3 & t) && ((t >>= 2), (e += 2)),
          0 == (1 & t) && ++e,
          e
        );
      }
      function D(t) {
        for (var e = 0; 0 != t; ) ((t &= t - 1), ++e);
        return e;
      }
      function I() {}
      function P(t) {
        return t;
      }
      function R(t) {
        ((this.r2 = f()),
          (this.q3 = f()),
          l.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      ((S.prototype.convert = function (t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }),
        (S.prototype.revert = function (t) {
          return t;
        }),
        (S.prototype.reduce = function (t) {
          t.divRemTo(this.m, null, t);
        }),
        (S.prototype.mulTo = function (t, e, i) {
          (t.multiplyTo(e, i), this.reduce(i));
        }),
        (S.prototype.sqrTo = function (t, e) {
          (t.squareTo(e), this.reduce(e));
        }),
        (E.prototype.convert = function (t) {
          var e = f();
          return (
            t.abs().dlShiftTo(this.m.t, e),
            e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(l.ZERO) > 0 && this.m.subTo(e, e),
            e
          );
        }),
        (E.prototype.revert = function (t) {
          var e = f();
          return (t.copyTo(e), this.reduce(e), e);
        }),
        (E.prototype.reduce = function (t) {
          for (; t.t <= this.mt2; ) t[t.t++] = 0;
          for (var e = 0; e < this.m.t; ++e) {
            var i = 32767 & t[e],
              r =
                (i * this.mpl +
                  (((i * this.mph + (t[e] >> 15) * this.mpl) & this.um) <<
                    15)) &
                t.DM;
            for (
              t[(i = e + this.m.t)] += this.m.am(0, r, t, e, 0, this.m.t);
              t[i] >= t.DV;
            )
              ((t[i] -= t.DV), t[++i]++);
          }
          (t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
        }),
        (E.prototype.mulTo = function (t, e, i) {
          (t.multiplyTo(e, i), this.reduce(i));
        }),
        (E.prototype.sqrTo = function (t, e) {
          (t.squareTo(e), this.reduce(e));
        }),
        (l.prototype.copyTo = function (t) {
          for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
          ((t.t = this.t), (t.s = this.s));
        }),
        (l.prototype.fromInt = function (t) {
          ((this.t = 1),
            (this.s = t < 0 ? -1 : 0),
            t > 0
              ? (this[0] = t)
              : t < -1
                ? (this[0] = t + this.DV)
                : (this.t = 0));
        }),
        (l.prototype.fromString = function (t, e) {
          var i;
          if (16 == e) i = 4;
          else if (8 == e) i = 3;
          else if (256 == e) i = 8;
          else if (2 == e) i = 1;
          else if (32 == e) i = 5;
          else {
            if (4 != e) return void this.fromRadix(t, e);
            i = 2;
          }
          ((this.t = 0), (this.s = 0));
          for (var r = t.length, n = !1, s = 0; --r >= 0; ) {
            var a = 8 == i ? 255 & t[r] : v(t, r);
            a < 0
              ? "-" == t.charAt(r) && (n = !0)
              : ((n = !1),
                0 == s
                  ? (this[this.t++] = a)
                  : s + i > this.DB
                    ? ((this[this.t - 1] |=
                        (a & ((1 << (this.DB - s)) - 1)) << s),
                      (this[this.t++] = a >> (this.DB - s)))
                    : (this[this.t - 1] |= a << s),
                (s += i) >= this.DB && (s -= this.DB));
          }
          (8 == i &&
            0 != (128 & t[0]) &&
            ((this.s = -1),
            s > 0 && (this[this.t - 1] |= ((1 << (this.DB - s)) - 1) << s)),
            this.clamp(),
            n && l.ZERO.subTo(this, this));
        }),
        (l.prototype.clamp = function () {
          for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
            --this.t;
        }),
        (l.prototype.dlShiftTo = function (t, e) {
          var i;
          for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
          for (i = t - 1; i >= 0; --i) e[i] = 0;
          ((e.t = this.t + t), (e.s = this.s));
        }),
        (l.prototype.drShiftTo = function (t, e) {
          for (var i = t; i < this.t; ++i) e[i - t] = this[i];
          ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
        }),
        (l.prototype.lShiftTo = function (t, e) {
          var i,
            r = t % this.DB,
            n = this.DB - r,
            s = (1 << n) - 1,
            a = Math.floor(t / this.DB),
            o = (this.s << r) & this.DM;
          for (i = this.t - 1; i >= 0; --i)
            ((e[i + a + 1] = (this[i] >> n) | o), (o = (this[i] & s) << r));
          for (i = a - 1; i >= 0; --i) e[i] = 0;
          ((e[a] = o), (e.t = this.t + a + 1), (e.s = this.s), e.clamp());
        }),
        (l.prototype.rShiftTo = function (t, e) {
          e.s = this.s;
          var i = Math.floor(t / this.DB);
          if (i >= this.t) e.t = 0;
          else {
            var r = t % this.DB,
              n = this.DB - r,
              s = (1 << r) - 1;
            e[0] = this[i] >> r;
            for (var a = i + 1; a < this.t; ++a)
              ((e[a - i - 1] |= (this[a] & s) << n), (e[a - i] = this[a] >> r));
            (r > 0 && (e[this.t - i - 1] |= (this.s & s) << n),
              (e.t = this.t - i),
              e.clamp());
          }
        }),
        (l.prototype.subTo = function (t, e) {
          for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; )
            ((r += this[i] - t[i]), (e[i++] = r & this.DM), (r >>= this.DB));
          if (t.t < this.t) {
            for (r -= t.s; i < this.t; )
              ((r += this[i]), (e[i++] = r & this.DM), (r >>= this.DB));
            r += this.s;
          } else {
            for (r += this.s; i < t.t; )
              ((r -= t[i]), (e[i++] = r & this.DM), (r >>= this.DB));
            r -= t.s;
          }
          ((e.s = r < 0 ? -1 : 0),
            r < -1 ? (e[i++] = this.DV + r) : r > 0 && (e[i++] = r),
            (e.t = i),
            e.clamp());
        }),
        (l.prototype.multiplyTo = function (t, e) {
          var i = this.abs(),
            r = t.abs(),
            n = i.t;
          for (e.t = n + r.t; --n >= 0; ) e[n] = 0;
          for (n = 0; n < r.t; ++n) e[n + i.t] = i.am(0, r[n], e, n, 0, i.t);
          ((e.s = 0), e.clamp(), this.s != t.s && l.ZERO.subTo(e, e));
        }),
        (l.prototype.squareTo = function (t) {
          for (var e = this.abs(), i = (t.t = 2 * e.t); --i >= 0; ) t[i] = 0;
          for (i = 0; i < e.t - 1; ++i) {
            var r = e.am(i, e[i], t, 2 * i, 0, 1);
            (t[i + e.t] += e.am(
              i + 1,
              2 * e[i],
              t,
              2 * i + 1,
              r,
              e.t - i - 1,
            )) >= e.DV && ((t[i + e.t] -= e.DV), (t[i + e.t + 1] = 1));
          }
          (t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
            (t.s = 0),
            t.clamp());
        }),
        (l.prototype.divRemTo = function (t, e, i) {
          var r = t.abs();
          if (!(r.t <= 0)) {
            var n = this.abs();
            if (n.t < r.t)
              return (
                null != e && e.fromInt(0),
                void (null != i && this.copyTo(i))
              );
            null == i && (i = f());
            var s = f(),
              a = this.s,
              o = t.s,
              h = this.DB - x(r[r.t - 1]);
            h > 0
              ? (r.lShiftTo(h, s), n.lShiftTo(h, i))
              : (r.copyTo(s), n.copyTo(i));
            var u = s.t,
              c = s[u - 1];
            if (0 != c) {
              var d = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0),
                g = this.FV / d,
                p = (1 << this.F1) / d,
                y = 1 << this.F2,
                v = i.t,
                m = v - u,
                S = null == e ? f() : e;
              for (
                s.dlShiftTo(m, S),
                  i.compareTo(S) >= 0 && ((i[i.t++] = 1), i.subTo(S, i)),
                  l.ONE.dlShiftTo(u, S),
                  S.subTo(s, s);
                s.t < u;
              )
                s[s.t++] = 0;
              for (; --m >= 0; ) {
                var E =
                  i[--v] == c
                    ? this.DM
                    : Math.floor(i[v] * g + (i[v - 1] + y) * p);
                if ((i[v] += s.am(0, E, i, m, 0, u)) < E)
                  for (s.dlShiftTo(m, S), i.subTo(S, i); i[v] < --E; )
                    i.subTo(S, i);
              }
              (null != e && (i.drShiftTo(u, e), a != o && l.ZERO.subTo(e, e)),
                (i.t = u),
                i.clamp(),
                h > 0 && i.rShiftTo(h, i),
                a < 0 && l.ZERO.subTo(i, i));
            }
          }
        }),
        (l.prototype.invDigit = function () {
          if (this.t < 1) return 0;
          var t = this[0];
          if (0 == (1 & t)) return 0;
          var e = 3 & t;
          return (e =
            ((e =
              ((e =
                ((e = (e * (2 - (15 & t) * e)) & 15) * (2 - (255 & t) * e)) &
                255) *
                (2 - (((65535 & t) * e) & 65535))) &
              65535) *
              (2 - ((t * e) % this.DV))) %
            this.DV) > 0
            ? this.DV - e
            : -e;
        }),
        (l.prototype.isEven = function () {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }),
        (l.prototype.exp = function (t, e) {
          if (t > 4294967295 || t < 1) return l.ONE;
          var i = f(),
            r = f(),
            n = e.convert(this),
            s = x(t) - 1;
          for (n.copyTo(i); --s >= 0; )
            if ((e.sqrTo(i, r), (t & (1 << s)) > 0)) e.mulTo(r, n, i);
            else {
              var a = i;
              ((i = r), (r = a));
            }
          return e.revert(i);
        }),
        (l.prototype.toString = function (t) {
          if (this.s < 0) return "-" + this.negate().toString(t);
          var e;
          if (16 == t) e = 4;
          else if (8 == t) e = 3;
          else if (2 == t) e = 1;
          else if (32 == t) e = 5;
          else {
            if (4 != t) return this.toRadix(t);
            e = 2;
          }
          var i,
            r = (1 << e) - 1,
            n = !1,
            s = "",
            a = this.t,
            o = this.DB - ((a * this.DB) % e);
          if (a-- > 0)
            for (
              o < this.DB && (i = this[a] >> o) > 0 && ((n = !0), (s = y(i)));
              a >= 0;
            )
              (o < e
                ? ((i = (this[a] & ((1 << o) - 1)) << (e - o)),
                  (i |= this[--a] >> (o += this.DB - e)))
                : ((i = (this[a] >> (o -= e)) & r),
                  o <= 0 && ((o += this.DB), --a)),
                i > 0 && (n = !0),
                n && (s += y(i)));
          return n ? s : "0";
        }),
        (l.prototype.negate = function () {
          var t = f();
          return (l.ZERO.subTo(this, t), t);
        }),
        (l.prototype.abs = function () {
          return this.s < 0 ? this.negate() : this;
        }),
        (l.prototype.compareTo = function (t) {
          var e = this.s - t.s;
          if (0 != e) return e;
          var i = this.t;
          if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
          for (; --i >= 0; ) if (0 != (e = this[i] - t[i])) return e;
          return 0;
        }),
        (l.prototype.bitLength = function () {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + x(this[this.t - 1] ^ (this.s & this.DM));
        }),
        (l.prototype.mod = function (t) {
          var e = f();
          return (
            this.abs().divRemTo(t, null, e),
            this.s < 0 && e.compareTo(l.ZERO) > 0 && t.subTo(e, e),
            e
          );
        }),
        (l.prototype.modPowInt = function (t, e) {
          var i;
          return (
            (i = t < 256 || e.isEven() ? new S(e) : new E(e)),
            this.exp(t, i)
          );
        }),
        (l.ZERO = m(0)),
        (l.ONE = m(1)),
        (I.prototype.convert = P),
        (I.prototype.revert = P),
        (I.prototype.mulTo = function (t, e, i) {
          t.multiplyTo(e, i);
        }),
        (I.prototype.sqrTo = function (t, e) {
          t.squareTo(e);
        }),
        (R.prototype.convert = function (t) {
          if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
          if (t.compareTo(this.m) < 0) return t;
          var e = f();
          return (t.copyTo(e), this.reduce(e), e);
        }),
        (R.prototype.revert = function (t) {
          return t;
        }),
        (R.prototype.reduce = function (t) {
          for (
            t.drShiftTo(this.m.t - 1, this.r2),
              t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            t.compareTo(this.r2) < 0;
          )
            t.dAddOffset(1, this.m.t + 1);
          for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
            t.subTo(this.m, t);
        }),
        (R.prototype.mulTo = function (t, e, i) {
          (t.multiplyTo(e, i), this.reduce(i));
        }),
        (R.prototype.sqrTo = function (t, e) {
          (t.squareTo(e), this.reduce(e));
        }));
      var T = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        H = (1 << 26) / T[T.length - 1];
      function B() {
        ((this.i = 0), (this.j = 0), (this.S = new Array()));
      }
      ((l.prototype.chunkSize = function (t) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(t));
      }),
        (l.prototype.toRadix = function (t) {
          if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
            return "0";
          var e = this.chunkSize(t),
            i = Math.pow(t, e),
            r = m(i),
            n = f(),
            s = f(),
            a = "";
          for (this.divRemTo(r, n, s); n.signum() > 0; )
            ((a = (i + s.intValue()).toString(t).substr(1) + a),
              n.divRemTo(r, n, s));
          return s.intValue().toString(t) + a;
        }),
        (l.prototype.fromRadix = function (t, e) {
          (this.fromInt(0), null == e && (e = 10));
          for (
            var i = this.chunkSize(e),
              r = Math.pow(e, i),
              n = !1,
              s = 0,
              a = 0,
              o = 0;
            o < t.length;
            ++o
          ) {
            var h = v(t, o);
            h < 0
              ? "-" == t.charAt(o) && 0 == this.signum() && (n = !0)
              : ((a = e * a + h),
                ++s >= i &&
                  (this.dMultiply(r), this.dAddOffset(a, 0), (s = 0), (a = 0)));
          }
          (s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)),
            n && l.ZERO.subTo(this, this));
        }),
        (l.prototype.fromNumber = function (t, e, i) {
          if ("number" == typeof e)
            if (t < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(t, i),
                  this.testBit(t - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(t - 1), F, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(e);
              )
                (this.dAddOffset(2, 0),
                  this.bitLength() > t &&
                    this.subTo(l.ONE.shiftLeft(t - 1), this));
          else {
            var r = new Array(),
              n = 7 & t;
            ((r.length = 1 + (t >> 3)),
              e.nextBytes(r),
              n > 0 ? (r[0] &= (1 << n) - 1) : (r[0] = 0),
              this.fromString(r, 256));
          }
        }),
        (l.prototype.bitwiseTo = function (t, e, i) {
          var r,
            n,
            s = Math.min(t.t, this.t);
          for (r = 0; r < s; ++r) i[r] = e(this[r], t[r]);
          if (t.t < this.t) {
            for (n = t.s & this.DM, r = s; r < this.t; ++r)
              i[r] = e(this[r], n);
            i.t = this.t;
          } else {
            for (n = this.s & this.DM, r = s; r < t.t; ++r) i[r] = e(n, t[r]);
            i.t = t.t;
          }
          ((i.s = e(this.s, t.s)), i.clamp());
        }),
        (l.prototype.changeBit = function (t, e) {
          var i = l.ONE.shiftLeft(t);
          return (this.bitwiseTo(i, e, i), i);
        }),
        (l.prototype.addTo = function (t, e) {
          for (var i = 0, r = 0, n = Math.min(t.t, this.t); i < n; )
            ((r += this[i] + t[i]), (e[i++] = r & this.DM), (r >>= this.DB));
          if (t.t < this.t) {
            for (r += t.s; i < this.t; )
              ((r += this[i]), (e[i++] = r & this.DM), (r >>= this.DB));
            r += this.s;
          } else {
            for (r += this.s; i < t.t; )
              ((r += t[i]), (e[i++] = r & this.DM), (r >>= this.DB));
            r += t.s;
          }
          ((e.s = r < 0 ? -1 : 0),
            r > 0 ? (e[i++] = r) : r < -1 && (e[i++] = this.DV + r),
            (e.t = i),
            e.clamp());
        }),
        (l.prototype.dMultiply = function (t) {
          ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp());
        }),
        (l.prototype.dAddOffset = function (t, e) {
          if (0 != t) {
            for (; this.t <= e; ) this[this.t++] = 0;
            for (this[e] += t; this[e] >= this.DV; )
              ((this[e] -= this.DV),
                ++e >= this.t && (this[this.t++] = 0),
                ++this[e]);
          }
        }),
        (l.prototype.multiplyLowerTo = function (t, e, i) {
          var r,
            n = Math.min(this.t + t.t, e);
          for (i.s = 0, i.t = n; n > 0; ) i[--n] = 0;
          for (r = i.t - this.t; n < r; ++n)
            i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
          for (r = Math.min(t.t, e); n < r; ++n)
            this.am(0, t[n], i, n, 0, e - n);
          i.clamp();
        }),
        (l.prototype.multiplyUpperTo = function (t, e, i) {
          --e;
          var r = (i.t = this.t + t.t - e);
          for (i.s = 0; --r >= 0; ) i[r] = 0;
          for (r = Math.max(e - this.t, 0); r < t.t; ++r)
            i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
          (i.clamp(), i.drShiftTo(1, i));
        }),
        (l.prototype.modInt = function (t) {
          if (t <= 0) return 0;
          var e = this.DV % t,
            i = this.s < 0 ? t - 1 : 0;
          if (this.t > 0)
            if (0 == e) i = this[0] % t;
            else
              for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
          return i;
        }),
        (l.prototype.millerRabin = function (t) {
          var e = this.subtract(l.ONE),
            i = e.getLowestSetBit();
          if (i <= 0) return !1;
          var r = e.shiftRight(i);
          (t = (t + 1) >> 1) > T.length && (t = T.length);
          for (var n = f(), s = 0; s < t; ++s) {
            n.fromInt(T[Math.floor(Math.random() * T.length)]);
            var a = n.modPow(r, this);
            if (0 != a.compareTo(l.ONE) && 0 != a.compareTo(e)) {
              for (var o = 1; o++ < i && 0 != a.compareTo(e); )
                if (0 == (a = a.modPowInt(2, this)).compareTo(l.ONE)) return !1;
              if (0 != a.compareTo(e)) return !1;
            }
          }
          return !0;
        }),
        (l.prototype.clone = function () {
          var t = f();
          return (this.copyTo(t), t);
        }),
        (l.prototype.intValue = function () {
          if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
          } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }),
        (l.prototype.byteValue = function () {
          return 0 == this.t ? this.s : (this[0] << 24) >> 24;
        }),
        (l.prototype.shortValue = function () {
          return 0 == this.t ? this.s : (this[0] << 16) >> 16;
        }),
        (l.prototype.signum = function () {
          return this.s < 0
            ? -1
            : this.t <= 0 || (1 == this.t && this[0] <= 0)
              ? 0
              : 1;
        }),
        (l.prototype.toByteArray = function () {
          var t = this.t,
            e = new Array();
          e[0] = this.s;
          var i,
            r = this.DB - ((t * this.DB) % 8),
            n = 0;
          if (t-- > 0)
            for (
              r < this.DB &&
              (i = this[t] >> r) != (this.s & this.DM) >> r &&
              (e[n++] = i | (this.s << (this.DB - r)));
              t >= 0;
            )
              (r < 8
                ? ((i = (this[t] & ((1 << r) - 1)) << (8 - r)),
                  (i |= this[--t] >> (r += this.DB - 8)))
                : ((i = (this[t] >> (r -= 8)) & 255),
                  r <= 0 && ((r += this.DB), --t)),
                0 != (128 & i) && (i |= -256),
                0 == n && (128 & this.s) != (128 & i) && ++n,
                (n > 0 || i != this.s) && (e[n++] = i));
          return e;
        }),
        (l.prototype.equals = function (t) {
          return 0 == this.compareTo(t);
        }),
        (l.prototype.min = function (t) {
          return this.compareTo(t) < 0 ? this : t;
        }),
        (l.prototype.max = function (t) {
          return this.compareTo(t) > 0 ? this : t;
        }),
        (l.prototype.and = function (t) {
          var e = f();
          return (this.bitwiseTo(t, w, e), e);
        }),
        (l.prototype.or = function (t) {
          var e = f();
          return (this.bitwiseTo(t, F, e), e);
        }),
        (l.prototype.xor = function (t) {
          var e = f();
          return (this.bitwiseTo(t, b, e), e);
        }),
        (l.prototype.andNot = function (t) {
          var e = f();
          return (this.bitwiseTo(t, A, e), e);
        }),
        (l.prototype.not = function () {
          for (var t = f(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
          return ((t.t = this.t), (t.s = ~this.s), t);
        }),
        (l.prototype.shiftLeft = function (t) {
          var e = f();
          return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
        }),
        (l.prototype.shiftRight = function (t) {
          var e = f();
          return (t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e);
        }),
        (l.prototype.getLowestSetBit = function () {
          for (var t = 0; t < this.t; ++t)
            if (0 != this[t]) return t * this.DB + C(this[t]);
          return this.s < 0 ? this.t * this.DB : -1;
        }),
        (l.prototype.bitCount = function () {
          for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
            t += D(this[i] ^ e);
          return t;
        }),
        (l.prototype.testBit = function (t) {
          var e = Math.floor(t / this.DB);
          return e >= this.t
            ? 0 != this.s
            : 0 != (this[e] & (1 << (t % this.DB)));
        }),
        (l.prototype.setBit = function (t) {
          return this.changeBit(t, F);
        }),
        (l.prototype.clearBit = function (t) {
          return this.changeBit(t, A);
        }),
        (l.prototype.flipBit = function (t) {
          return this.changeBit(t, b);
        }),
        (l.prototype.add = function (t) {
          var e = f();
          return (this.addTo(t, e), e);
        }),
        (l.prototype.subtract = function (t) {
          var e = f();
          return (this.subTo(t, e), e);
        }),
        (l.prototype.multiply = function (t) {
          var e = f();
          return (this.multiplyTo(t, e), e);
        }),
        (l.prototype.divide = function (t) {
          var e = f();
          return (this.divRemTo(t, e, null), e);
        }),
        (l.prototype.remainder = function (t) {
          var e = f();
          return (this.divRemTo(t, null, e), e);
        }),
        (l.prototype.divideAndRemainder = function (t) {
          var e = f(),
            i = f();
          return (this.divRemTo(t, e, i), new Array(e, i));
        }),
        (l.prototype.modPow = function (t, e) {
          var i,
            r,
            n = t.bitLength(),
            s = m(1);
          if (n <= 0) return s;
          ((i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
            (r = n < 8 ? new S(e) : e.isEven() ? new R(e) : new E(e)));
          var a = new Array(),
            o = 3,
            h = i - 1,
            u = (1 << i) - 1;
          if (((a[1] = r.convert(this)), i > 1)) {
            var c = f();
            for (r.sqrTo(a[1], c); o <= u; )
              ((a[o] = f()), r.mulTo(c, a[o - 2], a[o]), (o += 2));
          }
          var l,
            d,
            g = t.t - 1,
            p = !0,
            y = f();
          for (n = x(t[g]) - 1; g >= 0; ) {
            for (
              n >= h
                ? (l = (t[g] >> (n - h)) & u)
                : ((l = (t[g] & ((1 << (n + 1)) - 1)) << (h - n)),
                  g > 0 && (l |= t[g - 1] >> (this.DB + n - h))),
                o = i;
              0 == (1 & l);
            )
              ((l >>= 1), --o);
            if (((n -= o) < 0 && ((n += this.DB), --g), p))
              (a[l].copyTo(s), (p = !1));
            else {
              for (; o > 1; ) (r.sqrTo(s, y), r.sqrTo(y, s), (o -= 2));
              (o > 0 ? r.sqrTo(s, y) : ((d = s), (s = y), (y = d)),
                r.mulTo(y, a[l], s));
            }
            for (; g >= 0 && 0 == (t[g] & (1 << n)); )
              (r.sqrTo(s, y),
                (d = s),
                (s = y),
                (y = d),
                --n < 0 && ((n = this.DB - 1), --g));
          }
          return r.revert(s);
        }),
        (l.prototype.modInverse = function (t) {
          var e = t.isEven();
          if ((this.isEven() && e) || 0 == t.signum()) return l.ZERO;
          for (
            var i = t.clone(),
              r = this.clone(),
              n = m(1),
              s = m(0),
              a = m(0),
              o = m(1);
            0 != i.signum();
          ) {
            for (; i.isEven(); )
              (i.rShiftTo(1, i),
                e
                  ? ((n.isEven() && s.isEven()) ||
                      (n.addTo(this, n), s.subTo(t, s)),
                    n.rShiftTo(1, n))
                  : s.isEven() || s.subTo(t, s),
                s.rShiftTo(1, s));
            for (; r.isEven(); )
              (r.rShiftTo(1, r),
                e
                  ? ((a.isEven() && o.isEven()) ||
                      (a.addTo(this, a), o.subTo(t, o)),
                    a.rShiftTo(1, a))
                  : o.isEven() || o.subTo(t, o),
                o.rShiftTo(1, o));
            i.compareTo(r) >= 0
              ? (i.subTo(r, i), e && n.subTo(a, n), s.subTo(o, s))
              : (r.subTo(i, r), e && a.subTo(n, a), o.subTo(s, o));
          }
          return 0 != r.compareTo(l.ONE)
            ? l.ZERO
            : o.compareTo(t) >= 0
              ? o.subtract(t)
              : o.signum() < 0
                ? (o.addTo(t, o), o.signum() < 0 ? o.add(t) : o)
                : o;
        }),
        (l.prototype.pow = function (t) {
          return this.exp(t, new I());
        }),
        (l.prototype.gcd = function (t) {
          var e = this.s < 0 ? this.negate() : this.clone(),
            i = t.s < 0 ? t.negate() : t.clone();
          if (e.compareTo(i) < 0) {
            var r = e;
            ((e = i), (i = r));
          }
          var n = e.getLowestSetBit(),
            s = i.getLowestSetBit();
          if (s < 0) return e;
          for (
            n < s && (s = n), s > 0 && (e.rShiftTo(s, e), i.rShiftTo(s, i));
            e.signum() > 0;
          )
            ((n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
              (n = i.getLowestSetBit()) > 0 && i.rShiftTo(n, i),
              e.compareTo(i) >= 0
                ? (e.subTo(i, e), e.rShiftTo(1, e))
                : (i.subTo(e, i), i.rShiftTo(1, i)));
          return (s > 0 && i.lShiftTo(s, i), i);
        }),
        (l.prototype.isProbablePrime = function (t) {
          var e,
            i = this.abs();
          if (1 == i.t && i[0] <= T[T.length - 1]) {
            for (e = 0; e < T.length; ++e) if (i[0] == T[e]) return !0;
            return !1;
          }
          if (i.isEven()) return !1;
          for (e = 1; e < T.length; ) {
            for (var r = T[e], n = e + 1; n < T.length && r < H; ) r *= T[n++];
            for (r = i.modInt(r); e < n; ) if (r % T[e++] == 0) return !1;
          }
          return i.millerRabin(t);
        }),
        (l.prototype.square = function () {
          var t = f();
          return (this.squareTo(t), t);
        }),
        (B.prototype.init = function (t) {
          var e, i, r;
          for (e = 0; e < 256; ++e) this.S[e] = e;
          for (i = 0, e = 0; e < 256; ++e)
            ((i = (i + this.S[e] + t[e % t.length]) & 255),
              (r = this.S[e]),
              (this.S[e] = this.S[i]),
              (this.S[i] = r));
          ((this.i = 0), (this.j = 0));
        }),
        (B.prototype.next = function () {
          var t;
          return (
            (this.i = (this.i + 1) & 255),
            (this.j = (this.j + this.S[this.i]) & 255),
            (t = this.S[this.i]),
            (this.S[this.i] = this.S[this.j]),
            (this.S[this.j] = t),
            this.S[(t + this.S[this.i]) & 255]
          );
        }));
      var N, O, j;
      function V() {
        var t;
        ((t = new Date().getTime()),
          (O[j++] ^= 255 & t),
          (O[j++] ^= (t >> 8) & 255),
          (O[j++] ^= (t >> 16) & 255),
          (O[j++] ^= (t >> 24) & 255),
          j >= 256 && (j -= 256));
      }
      if (null == O) {
        var L;
        if (
          ((O = new Array()),
          (j = 0),
          void 0 !== r && (void 0 !== r.crypto || void 0 !== r.msCrypto))
        ) {
          var K = r.crypto || r.msCrypto;
          if (K.getRandomValues) {
            var _ = new Uint8Array(32);
            for (K.getRandomValues(_), L = 0; L < 32; ++L) O[j++] = _[L];
          } else if ("Netscape" == i.appName && i.appVersion < "5") {
            var M = r.crypto.random(32);
            for (L = 0; L < M.length; ++L) O[j++] = 255 & M.charCodeAt(L);
          }
        }
        for (; j < 256; )
          ((L = Math.floor(65536 * Math.random())),
            (O[j++] = L >>> 8),
            (O[j++] = 255 & L));
        ((j = 0), V());
      }
      function k() {
        if (null == N) {
          for (V(), (N = new B()).init(O), j = 0; j < O.length; ++j) O[j] = 0;
          j = 0;
        }
        return N.next();
      }
      function U() {}
      function q(t, e) {
        return new l(t, e);
      }
      function z(t, e, i) {
        for (var r = "", n = 0; r.length < e; )
          ((r += i(
            String.fromCharCode.apply(
              String,
              t.concat([
                (4278190080 & n) >> 24,
                (16711680 & n) >> 16,
                (65280 & n) >> 8,
                255 & n,
              ]),
            ),
          )),
            (n += 1));
        return r;
      }
      function G() {
        ((this.n = null),
          (this.e = 0),
          (this.d = null),
          (this.p = null),
          (this.q = null),
          (this.dmp1 = null),
          (this.dmq1 = null),
          (this.coeff = null));
      }
      function Y(t, e, i) {
        for (var r = "", n = 0; r.length < e; )
          ((r += i(
            t +
              String.fromCharCode.apply(String, [
                (4278190080 & n) >> 24,
                (16711680 & n) >> 16,
                (65280 & n) >> 8,
                255 & n,
              ]),
          )),
            (n += 1));
        return r;
      }
      function J(t, e) {
        ((this.x = e), (this.q = t));
      }
      function W(t, e, i, r) {
        ((this.curve = t),
          (this.x = e),
          (this.y = i),
          (this.z = null == r ? l.ONE : r),
          (this.zinv = null));
      }
      function X(t, e, i) {
        ((this.q = t),
          (this.a = this.fromBigInteger(e)),
          (this.b = this.fromBigInteger(i)),
          (this.infinity = new W(this, null, null)));
      }
      ((U.prototype.nextBytes = function (t) {
        var e;
        for (e = 0; e < t.length; ++e) t[e] = k();
      }),
        (G.prototype.doPublic = function (t) {
          return t.modPowInt(this.e, this.n);
        }),
        (G.prototype.setPublic = function (t, e) {
          if (
            ((this.isPublic = !0), (this.isPrivate = !1), "string" !== typeof t)
          )
            ((this.n = t), (this.e = e));
          else {
            if (!(null != t && null != e && t.length > 0 && e.length > 0))
              throw "Invalid RSA public key";
            ((this.n = q(t, 16)), (this.e = parseInt(e, 16)));
          }
        }),
        (G.prototype.encrypt = function (t) {
          var e = (function (t, e) {
            if (e < t.length + 11) throw "Message too long for RSA";
            for (var i = new Array(), r = t.length - 1; r >= 0 && e > 0; ) {
              var n = t.charCodeAt(r--);
              n < 128
                ? (i[--e] = n)
                : n > 127 && n < 2048
                  ? ((i[--e] = (63 & n) | 128), (i[--e] = (n >> 6) | 192))
                  : ((i[--e] = (63 & n) | 128),
                    (i[--e] = ((n >> 6) & 63) | 128),
                    (i[--e] = (n >> 12) | 224));
            }
            i[--e] = 0;
            for (var s = new U(), a = new Array(); e > 2; ) {
              for (a[0] = 0; 0 == a[0]; ) s.nextBytes(a);
              i[--e] = a[0];
            }
            return ((i[--e] = 2), (i[--e] = 0), new l(i));
          })(t, (this.n.bitLength() + 7) >> 3);
          if (null == e) return null;
          var i = this.doPublic(e);
          if (null == i) return null;
          var r = i.toString(16);
          return 0 == (1 & r.length) ? r : "0" + r;
        }),
        (G.prototype.encryptOAEP = function (t, e, i) {
          var r = (function (t, e, i, r) {
            var n = Z.crypto.MessageDigest,
              s = Z.crypto.Util,
              a = null;
            if (
              (i || (i = "sha1"),
              "string" === typeof i &&
                ((a = n.getCanonicalAlgName(i)),
                (r = n.getHashLength(a)),
                (i = function (t) {
                  return ft(s.hashHex(dt(t), a));
                })),
              t.length + 2 * r + 2 > e)
            )
              throw "Message too long for RSA";
            var o,
              h = "";
            for (o = 0; o < e - t.length - 2 * r - 2; o += 1) h += "\0";
            var u = i("") + h + "\x01" + t,
              c = new Array(r);
            new U().nextBytes(c);
            var f = z(c, u.length, i),
              d = [];
            for (o = 0; o < u.length; o += 1)
              d[o] = u.charCodeAt(o) ^ f.charCodeAt(o);
            var g = z(d, c.length, i),
              p = [0];
            for (o = 0; o < c.length; o += 1) p[o + 1] = c[o] ^ g.charCodeAt(o);
            return new l(p.concat(d));
          })(t, (this.n.bitLength() + 7) >> 3, e, i);
          if (null == r) return null;
          var n = this.doPublic(r);
          if (null == n) return null;
          var s = n.toString(16);
          return 0 == (1 & s.length) ? s : "0" + s;
        }),
        (G.prototype.type = "RSA"),
        (G.prototype.doPrivate = function (t) {
          if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
          for (
            var e = t.mod(this.p).modPow(this.dmp1, this.p),
              i = t.mod(this.q).modPow(this.dmq1, this.q);
            e.compareTo(i) < 0;
          )
            e = e.add(this.p);
          return e
            .subtract(i)
            .multiply(this.coeff)
            .mod(this.p)
            .multiply(this.q)
            .add(i);
        }),
        (G.prototype.setPrivate = function (t, e, i) {
          if (((this.isPrivate = !0), "string" !== typeof t))
            ((this.n = t), (this.e = e), (this.d = i));
          else {
            if (!(null != t && null != e && t.length > 0 && e.length > 0))
              throw "Invalid RSA private key";
            ((this.n = q(t, 16)),
              (this.e = parseInt(e, 16)),
              (this.d = q(i, 16)));
          }
        }),
        (G.prototype.setPrivateEx = function (t, e, i, r, n, s, a, o) {
          if (((this.isPrivate = !0), (this.isPublic = !1), null == t))
            throw "RSASetPrivateEx N == null";
          if (null == e) throw "RSASetPrivateEx E == null";
          if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
          if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
          if (!(null != t && null != e && t.length > 0 && e.length > 0))
            throw "Invalid RSA private key in RSASetPrivateEx";
          ((this.n = q(t, 16)),
            (this.e = parseInt(e, 16)),
            (this.d = q(i, 16)),
            (this.p = q(r, 16)),
            (this.q = q(n, 16)),
            (this.dmp1 = q(s, 16)),
            (this.dmq1 = q(a, 16)),
            (this.coeff = q(o, 16)));
        }),
        (G.prototype.generate = function (t, e) {
          var i = new U(),
            r = t >> 1;
          this.e = parseInt(e, 16);
          for (var n = new l(e, 16); ; ) {
            for (
              ;
              (this.p = new l(t - r, 1, i)),
                0 != this.p.subtract(l.ONE).gcd(n).compareTo(l.ONE) ||
                  !this.p.isProbablePrime(10);
            );
            for (
              ;
              (this.q = new l(r, 1, i)),
                0 != this.q.subtract(l.ONE).gcd(n).compareTo(l.ONE) ||
                  !this.q.isProbablePrime(10);
            );
            if (this.p.compareTo(this.q) <= 0) {
              var s = this.p;
              ((this.p = this.q), (this.q = s));
            }
            var a = this.p.subtract(l.ONE),
              o = this.q.subtract(l.ONE),
              h = a.multiply(o);
            if (
              0 == h.gcd(n).compareTo(l.ONE) &&
              ((this.n = this.p.multiply(this.q)), this.n.bitLength() == t)
            ) {
              ((this.d = n.modInverse(h)),
                (this.dmp1 = this.d.mod(a)),
                (this.dmq1 = this.d.mod(o)),
                (this.coeff = this.q.modInverse(this.p)));
              break;
            }
          }
          this.isPrivate = !0;
        }),
        (G.prototype.decrypt = function (t) {
          if (t.length != Math.ceil(this.n.bitLength() / 4))
            throw new Error("wrong ctext length");
          var e = q(t, 16),
            i = this.doPrivate(e);
          return null == i
            ? null
            : (function (t, e) {
                for (
                  var i = t.toByteArray(), r = 0;
                  r < i.length && 0 == i[r];
                )
                  ++r;
                if (i.length - r != e - 1 || 2 != i[r]) return null;
                for (++r; 0 != i[r]; ) if (++r >= i.length) return null;
                for (var n = ""; ++r < i.length; ) {
                  var s = 255 & i[r];
                  s < 128
                    ? (n += String.fromCharCode(s))
                    : s > 191 && s < 224
                      ? ((n += String.fromCharCode(
                          ((31 & s) << 6) | (63 & i[r + 1]),
                        )),
                        ++r)
                      : ((n += String.fromCharCode(
                          ((15 & s) << 12) |
                            ((63 & i[r + 1]) << 6) |
                            (63 & i[r + 2]),
                        )),
                        (r += 2));
                }
                return n;
              })(i, (this.n.bitLength() + 7) >> 3);
        }),
        (G.prototype.decryptOAEP = function (t, e, i) {
          if (t.length != Math.ceil(this.n.bitLength() / 4))
            throw new Error("wrong ctext length");
          var r = q(t, 16),
            n = this.doPrivate(r);
          return null == n
            ? null
            : (function (t, e, i, r) {
                var n = Z.crypto.MessageDigest,
                  s = Z.crypto.Util,
                  a = null;
                for (
                  i || (i = "sha1"),
                    "string" === typeof i &&
                      ((a = n.getCanonicalAlgName(i)),
                      (r = n.getHashLength(a)),
                      (i = function (t) {
                        return ft(s.hashHex(dt(t), a));
                      })),
                    t = t.toByteArray(),
                    o = 0;
                  o < t.length;
                  o += 1
                )
                  t[o] &= 255;
                for (; t.length < e; ) t.unshift(0);
                if (
                  (t = String.fromCharCode.apply(String, t)).length <
                  2 * r + 2
                )
                  throw "Cipher too short";
                var o,
                  h = t.substr(1, r),
                  u = t.substr(r + 1),
                  c = Y(u, r, i),
                  l = [];
                for (o = 0; o < h.length; o += 1)
                  l[o] = h.charCodeAt(o) ^ c.charCodeAt(o);
                var f = Y(
                    String.fromCharCode.apply(String, l),
                    t.length - r,
                    i,
                  ),
                  d = [];
                for (o = 0; o < u.length; o += 1)
                  d[o] = u.charCodeAt(o) ^ f.charCodeAt(o);
                if (
                  (d = String.fromCharCode.apply(String, d)).substr(0, r) !==
                  i("")
                )
                  throw "Hash mismatch";
                var g = (d = d.substr(r)).indexOf("\x01");
                if ((-1 != g ? d.substr(0, g).lastIndexOf("\0") : -1) + 1 != g)
                  throw "Malformed data";
                return d.substr(g + 1);
              })(n, (this.n.bitLength() + 7) >> 3, e, i);
        }),
        (J.prototype.equals = function (t) {
          return t == this || (this.q.equals(t.q) && this.x.equals(t.x));
        }),
        (J.prototype.toBigInteger = function () {
          return this.x;
        }),
        (J.prototype.negate = function () {
          return new J(this.q, this.x.negate().mod(this.q));
        }),
        (J.prototype.add = function (t) {
          return new J(this.q, this.x.add(t.toBigInteger()).mod(this.q));
        }),
        (J.prototype.subtract = function (t) {
          return new J(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
        }),
        (J.prototype.multiply = function (t) {
          return new J(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
        }),
        (J.prototype.square = function () {
          return new J(this.q, this.x.square().mod(this.q));
        }),
        (J.prototype.divide = function (t) {
          return new J(
            this.q,
            this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q),
          );
        }),
        (W.prototype.getX = function () {
          return (
            null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
            this.curve.fromBigInteger(
              this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q),
            )
          );
        }),
        (W.prototype.getY = function () {
          return (
            null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
            this.curve.fromBigInteger(
              this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q),
            )
          );
        }),
        (W.prototype.equals = function (t) {
          return (
            t == this ||
            (this.isInfinity()
              ? t.isInfinity()
              : t.isInfinity()
                ? this.isInfinity()
                : !!t.y
                    .toBigInteger()
                    .multiply(this.z)
                    .subtract(this.y.toBigInteger().multiply(t.z))
                    .mod(this.curve.q)
                    .equals(l.ZERO) &&
                  t.x
                    .toBigInteger()
                    .multiply(this.z)
                    .subtract(this.x.toBigInteger().multiply(t.z))
                    .mod(this.curve.q)
                    .equals(l.ZERO))
          );
        }),
        (W.prototype.isInfinity = function () {
          return (
            (null == this.x && null == this.y) ||
            (this.z.equals(l.ZERO) && !this.y.toBigInteger().equals(l.ZERO))
          );
        }),
        (W.prototype.negate = function () {
          return new W(this.curve, this.x, this.y.negate(), this.z);
        }),
        (W.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.y
              .toBigInteger()
              .multiply(this.z)
              .subtract(this.y.toBigInteger().multiply(t.z))
              .mod(this.curve.q),
            i = t.x
              .toBigInteger()
              .multiply(this.z)
              .subtract(this.x.toBigInteger().multiply(t.z))
              .mod(this.curve.q);
          if (l.ZERO.equals(i))
            return l.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
          var r = new l("3"),
            n = this.x.toBigInteger(),
            s = this.y.toBigInteger(),
            a = (t.x.toBigInteger(), t.y.toBigInteger(), i.square()),
            o = a.multiply(i),
            h = n.multiply(a),
            u = e.square().multiply(this.z),
            c = u
              .subtract(h.shiftLeft(1))
              .multiply(t.z)
              .subtract(o)
              .multiply(i)
              .mod(this.curve.q),
            f = h
              .multiply(r)
              .multiply(e)
              .subtract(s.multiply(o))
              .subtract(u.multiply(e))
              .multiply(t.z)
              .add(e.multiply(o))
              .mod(this.curve.q),
            d = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
          return new W(
            this.curve,
            this.curve.fromBigInteger(c),
            this.curve.fromBigInteger(f),
            d,
          );
        }),
        (W.prototype.twice = function () {
          if (this.isInfinity()) return this;
          if (0 == this.y.toBigInteger().signum())
            return this.curve.getInfinity();
          var t = new l("3"),
            e = this.x.toBigInteger(),
            i = this.y.toBigInteger(),
            r = i.multiply(this.z),
            n = r.multiply(i).mod(this.curve.q),
            s = this.curve.a.toBigInteger(),
            a = e.square().multiply(t);
          l.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s)));
          var o = (a = a.mod(this.curve.q))
              .square()
              .subtract(e.shiftLeft(3).multiply(n))
              .shiftLeft(1)
              .multiply(r)
              .mod(this.curve.q),
            h = a
              .multiply(t)
              .multiply(e)
              .subtract(n.shiftLeft(1))
              .shiftLeft(2)
              .multiply(n)
              .subtract(a.square().multiply(a))
              .mod(this.curve.q),
            u = r.square().multiply(r).shiftLeft(3).mod(this.curve.q);
          return new W(
            this.curve,
            this.curve.fromBigInteger(o),
            this.curve.fromBigInteger(h),
            u,
          );
        }),
        (W.prototype.multiply = function (t) {
          if (this.isInfinity()) return this;
          if (0 == t.signum()) return this.curve.getInfinity();
          var e,
            i = t,
            r = i.multiply(new l("3")),
            n = this.negate(),
            s = this,
            a = this.curve.q.subtract(t),
            o = a.multiply(new l("3")),
            h = new W(this.curve, this.x, this.y),
            u = h.negate();
          for (e = r.bitLength() - 2; e > 0; --e) {
            s = s.twice();
            var c = r.testBit(e);
            c != i.testBit(e) && (s = s.add(c ? this : n));
          }
          for (e = o.bitLength() - 2; e > 0; --e) {
            h = h.twice();
            var f = o.testBit(e);
            f != a.testBit(e) && (h = h.add(f ? h : u));
          }
          return s;
        }),
        (W.prototype.multiplyTwo = function (t, e, i) {
          var r;
          r =
            t.bitLength() > i.bitLength()
              ? t.bitLength() - 1
              : i.bitLength() - 1;
          for (var n = this.curve.getInfinity(), s = this.add(e); r >= 0; )
            ((n = n.twice()),
              t.testBit(r)
                ? (n = i.testBit(r) ? n.add(s) : n.add(this))
                : i.testBit(r) && (n = n.add(e)),
              --r);
          return n;
        }),
        (X.prototype.getQ = function () {
          return this.q;
        }),
        (X.prototype.getA = function () {
          return this.a;
        }),
        (X.prototype.getB = function () {
          return this.b;
        }),
        (X.prototype.equals = function (t) {
          return (
            t == this ||
            (this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b))
          );
        }),
        (X.prototype.getInfinity = function () {
          return this.infinity;
        }),
        (X.prototype.fromBigInteger = function (t) {
          return new J(this.q, t);
        }),
        (X.prototype.decodePointHex = function (t) {
          switch (parseInt(t.substr(0, 2), 16)) {
            case 0:
              return this.infinity;
            case 2:
            case 3:
              return null;
            case 4:
            case 6:
            case 7:
              var e = (t.length - 2) / 2,
                i = t.substr(2, e),
                r = t.substr(e + 2, e);
              return new W(
                this,
                this.fromBigInteger(new l(i, 16)),
                this.fromBigInteger(new l(r, 16)),
              );
            default:
              return null;
          }
        }),
        (J.prototype.getByteLength = function () {
          return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
        }),
        (W.prototype.getEncoded = function (t) {
          var e = function (t, e) {
              var i = t.toByteArrayUnsigned();
              if (e < i.length) i = i.slice(i.length - e);
              else for (; e > i.length; ) i.unshift(0);
              return i;
            },
            i = this.getX().toBigInteger(),
            r = this.getY().toBigInteger(),
            n = e(i, 32);
          return (
            t
              ? r.isEven()
                ? n.unshift(2)
                : n.unshift(3)
              : (n.unshift(4), (n = n.concat(e(r, 32)))),
            n
          );
        }),
        (W.decodeFrom = function (t, e) {
          e[0];
          var i = e.length - 1,
            r = e.slice(1, 1 + i / 2),
            n = e.slice(1 + i / 2, 1 + i);
          (r.unshift(0), n.unshift(0));
          var s = new l(r),
            a = new l(n);
          return new W(t, t.fromBigInteger(s), t.fromBigInteger(a));
        }),
        (W.decodeFromHex = function (t, e) {
          e.substr(0, 2);
          var i = e.length - 2,
            r = e.substr(2, i / 2),
            n = e.substr(2 + i / 2, i / 2),
            s = new l(r, 16),
            a = new l(n, 16);
          return new W(t, t.fromBigInteger(s), t.fromBigInteger(a));
        }),
        (W.prototype.add2D = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          if (this.x.equals(t.x))
            return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
          var e = t.x.subtract(this.x),
            i = t.y.subtract(this.y).divide(e),
            r = i.square().subtract(this.x).subtract(t.x),
            n = i.multiply(this.x.subtract(r)).subtract(this.y);
          return new W(this.curve, r, n);
        }),
        (W.prototype.twice2D = function () {
          if (this.isInfinity()) return this;
          if (0 == this.y.toBigInteger().signum())
            return this.curve.getInfinity();
          var t = this.curve.fromBigInteger(l.valueOf(2)),
            e = this.curve.fromBigInteger(l.valueOf(3)),
            i = this.x
              .square()
              .multiply(e)
              .add(this.curve.a)
              .divide(this.y.multiply(t)),
            r = i.square().subtract(this.x.multiply(t)),
            n = i.multiply(this.x.subtract(r)).subtract(this.y);
          return new W(this.curve, r, n);
        }),
        (W.prototype.multiply2D = function (t) {
          if (this.isInfinity()) return this;
          if (0 == t.signum()) return this.curve.getInfinity();
          var e,
            i = t,
            r = i.multiply(new l("3")),
            n = this.negate(),
            s = this;
          for (e = r.bitLength() - 2; e > 0; --e) {
            s = s.twice();
            var a = r.testBit(e);
            a != i.testBit(e) && (s = s.add2D(a ? this : n));
          }
          return s;
        }),
        (W.prototype.isOnCurve = function () {
          var t = this.getX().toBigInteger(),
            e = this.getY().toBigInteger(),
            i = this.curve.getA().toBigInteger(),
            r = this.curve.getB().toBigInteger(),
            n = this.curve.getQ(),
            s = e.multiply(e).mod(n),
            a = t.multiply(t).multiply(t).add(i.multiply(t)).add(r).mod(n);
          return s.equals(a);
        }),
        (W.prototype.toString = function () {
          return (
            "(" +
            this.getX().toBigInteger().toString() +
            "," +
            this.getY().toBigInteger().toString() +
            ")"
          );
        }),
        (W.prototype.validate = function () {
          var t = this.curve.getQ();
          if (this.isInfinity()) throw new Error("Point is at infinity.");
          var e = this.getX().toBigInteger(),
            i = this.getY().toBigInteger();
          if (e.compareTo(l.ONE) < 0 || e.compareTo(t.subtract(l.ONE)) > 0)
            throw new Error("x coordinate out of bounds");
          if (i.compareTo(l.ONE) < 0 || i.compareTo(t.subtract(l.ONE)) > 0)
            throw new Error("y coordinate out of bounds");
          if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
          if (this.multiply(t).isInfinity())
            throw new Error("Point is not a scalar multiple of G.");
          return !0;
        }));
      var $ = (function () {
        var t = new RegExp(
            '(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',
            "g",
          ),
          e = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"),
          i = {
            '"': '"',
            "/": "/",
            "\\": "\\",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t",
          };
        function r(t, e, r) {
          return e ? i[e] : String.fromCharCode(parseInt(r, 16));
        }
        var n = new String(""),
          s = Object.hasOwnProperty;
        return function (i, a) {
          var o,
            h,
            u = i.match(t),
            c = u[0],
            l = !1;
          "{" === c ? (o = {}) : "[" === c ? (o = []) : ((o = []), (l = !0));
          for (var f = [o], d = 1 - l, g = u.length; d < g; ++d) {
            var p;
            switch ((c = u[d]).charCodeAt(0)) {
              default:
                (((p = f[0])[h || p.length] = +c), (h = void 0));
                break;
              case 34:
                if (
                  (-1 !== (c = c.substring(1, c.length - 1)).indexOf("\\") &&
                    (c = c.replace(e, r)),
                  (p = f[0]),
                  !h)
                ) {
                  if (!(p instanceof Array)) {
                    h = c || n;
                    break;
                  }
                  h = p.length;
                }
                ((p[h] = c), (h = void 0));
                break;
              case 91:
                ((p = f[0]), f.unshift((p[h || p.length] = [])), (h = void 0));
                break;
              case 93:
                f.shift();
                break;
              case 102:
                (((p = f[0])[h || p.length] = !1), (h = void 0));
                break;
              case 110:
                (((p = f[0])[h || p.length] = null), (h = void 0));
                break;
              case 116:
                (((p = f[0])[h || p.length] = !0), (h = void 0));
                break;
              case 123:
                ((p = f[0]), f.unshift((p[h || p.length] = {})), (h = void 0));
                break;
              case 125:
                f.shift();
            }
          }
          if (l) {
            if (1 !== f.length) throw new Error();
            o = o[0];
          } else if (f.length) throw new Error();
          if (a) {
            o = (function t(e, i) {
              var r = e[i];
              if (r && "object" === typeof r) {
                var n = null;
                for (var o in r)
                  if (s.call(r, o) && r !== e) {
                    var h = t(r, o);
                    void 0 !== h ? (r[o] = h) : (n || (n = []), n.push(o));
                  }
                if (n) for (var u = n.length; --u >= 0; ) delete r[n[u]];
              }
              return a.call(e, i, r);
            })(
              {
                "": o,
              },
              "",
            );
          }
          return o;
        };
      })();
      (("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        (Z.asn1.ASN1Util = new (function () {
          ((this.integerToByteHex = function (t) {
            var e = t.toString(16);
            return (e.length % 2 == 1 && (e = "0" + e), e);
          }),
            (this.bigIntToMinTwosComplementsHex = function (t) {
              var e = t.toString(16);
              if ("-" != e.substr(0, 1))
                e.length % 2 == 1
                  ? (e = "0" + e)
                  : e.match(/^[0-7]/) || (e = "00" + e);
              else {
                var i = e.substr(1).length;
                i % 2 == 1 ? (i += 1) : e.match(/^[0-7]/) || (i += 2);
                for (var r = "", n = 0; n < i; n++) r += "f";
                e = new l(r, 16)
                  .xor(t)
                  .add(l.ONE)
                  .toString(16)
                  .replace(/^-/, "");
              }
              return e;
            }),
            (this.getPEMStringFromHex = function (t, e) {
              return vt(t, e);
            }),
            (this.newObject = function (t) {
              var e = Z.asn1,
                i = e.DERBoolean,
                r = e.DERInteger,
                n = e.DERBitString,
                s = e.DEROctetString,
                a = e.DERNull,
                o = e.DERObjectIdentifier,
                h = e.DEREnumerated,
                u = e.DERUTF8String,
                c = e.DERNumericString,
                l = e.DERPrintableString,
                f = e.DERTeletexString,
                d = e.DERIA5String,
                g = e.DERUTCTime,
                p = e.DERGeneralizedTime,
                y = e.DERVisibleString,
                v = e.DERBMPString,
                m = e.DERSequence,
                x = e.DERSet,
                S = e.DERTaggedObject,
                E = e.ASN1Util.newObject;
              if (t instanceof e.ASN1Object) return t;
              var w = Object.keys(t);
              if (1 != w.length)
                throw new Error("key of param shall be only one.");
              var F = w[0];
              if (
                -1 ==
                ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(
                  ":" + F + ":",
                )
              )
                throw new Error("undefined key: " + F);
              if ("bool" == F) return new i(t[F]);
              if ("int" == F) return new r(t[F]);
              if ("bitstr" == F) return new n(t[F]);
              if ("octstr" == F) return new s(t[F]);
              if ("null" == F) return new a(t[F]);
              if ("oid" == F) return new o(t[F]);
              if ("enum" == F) return new h(t[F]);
              if ("utf8str" == F) return new u(t[F]);
              if ("numstr" == F) return new c(t[F]);
              if ("prnstr" == F) return new l(t[F]);
              if ("telstr" == F) return new f(t[F]);
              if ("ia5str" == F) return new d(t[F]);
              if ("utctime" == F) return new g(t[F]);
              if ("gentime" == F) return new p(t[F]);
              if ("visstr" == F) return new y(t[F]);
              if ("bmpstr" == F) return new v(t[F]);
              if ("seq" == F) {
                for (var b = t[F], A = [], C = 0; C < b.length; C++) {
                  var D = E(b[C]);
                  A.push(D);
                }
                return new m({
                  array: A,
                });
              }
              if ("set" == F) {
                for (b = t[F], A = [], C = 0; C < b.length; C++) {
                  D = E(b[C]);
                  A.push(D);
                }
                return new x({
                  array: A,
                });
              }
              if ("tag" == F) {
                var I = t[F];
                if (
                  "[object Array]" === Object.prototype.toString.call(I) &&
                  3 == I.length
                ) {
                  var P = E(I[2]);
                  return new S({
                    tag: I[0],
                    explicit: I[1],
                    obj: P,
                  });
                }
                var R = {};
                if (
                  (void 0 !== I.explicit && (R.explicit = I.explicit),
                  void 0 !== I.tag && (R.tag = I.tag),
                  void 0 === I.obj)
                )
                  throw "obj shall be specified for 'tag'.";
                return ((R.obj = E(I.obj)), new S(R));
              }
            }),
            (this.jsonToASN1HEX = function (t) {
              return this.newObject(t).getEncodedHex();
            }));
        })()),
        (Z.asn1.ASN1Util.oidHexToInt = function (t) {
          for (
            var e = "",
              i = parseInt(t.substr(0, 2), 16),
              r = ((e = Math.floor(i / 40) + "." + (i % 40)), ""),
              n = 2;
            n < t.length;
            n += 2
          ) {
            var s = (
              "00000000" + parseInt(t.substr(n, 2), 16).toString(2)
            ).slice(-8);
            if (((r += s.substr(1, 7)), "0" == s.substr(0, 1)))
              ((e = e + "." + new l(r, 2).toString(10)), (r = ""));
          }
          return e;
        }),
        (Z.asn1.ASN1Util.oidIntToHex = function (t) {
          var e = function (t) {
              var e = t.toString(16);
              return (1 == e.length && (e = "0" + e), e);
            },
            i = function (t) {
              var i = "",
                r = new l(t, 10).toString(2),
                n = 7 - (r.length % 7);
              7 == n && (n = 0);
              for (var s = "", a = 0; a < n; a++) s += "0";
              r = s + r;
              for (a = 0; a < r.length - 1; a += 7) {
                var o = r.substr(a, 7);
                (a != r.length - 7 && (o = "1" + o), (i += e(parseInt(o, 2))));
              }
              return i;
            };
          if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
          var r = "",
            n = t.split("."),
            s = 40 * parseInt(n[0]) + parseInt(n[1]);
          ((r += e(s)), n.splice(0, 2));
          for (var a = 0; a < n.length; a++) r += i(n[a]);
          return r;
        }),
        (Z.asn1.ASN1Object = function (t) {
          ((this.getLengthHexFromValue = function () {
            if ("undefined" == typeof this.hV || null == this.hV)
              throw new Error("this.hV is null or undefined");
            if (this.hV.length % 2 == 1)
              throw new Error(
                "value hex must be even length: n=" +
                  "".length +
                  ",v=" +
                  this.hV,
              );
            var t = this.hV.length / 2,
              e = t.toString(16);
            if ((e.length % 2 == 1 && (e = "0" + e), t < 128)) return e;
            var i = e.length / 2;
            if (i > 15)
              throw (
                "ASN.1 length too long to represent by 8x: n = " +
                t.toString(16)
              );
            return (128 + i).toString(16) + e;
          }),
            (this.getEncodedHex = function () {
              return (
                (null == this.hTLV || this.isModified) &&
                  ((this.hV = this.getFreshValueHex()),
                  (this.hL = this.getLengthHexFromValue()),
                  (this.hTLV = this.hT + this.hL + this.hV),
                  (this.isModified = !1)),
                this.hTLV
              );
            }),
            (this.getValueHex = function () {
              return (this.getEncodedHex(), this.hV);
            }),
            (this.getFreshValueHex = function () {
              return "";
            }),
            void 0 != t &&
              void 0 != t.tlv &&
              ((this.hTLV = t.tlv), (this.isModified = !1)));
        }),
        (Z.asn1.DERAbstractString = function (t) {
          Z.asn1.DERAbstractString.superclass.constructor.call(this);
          ((this.getString = function () {
            return this.s;
          }),
            (this.setString = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.s = t),
                (this.hV = ct(this.s).toLowerCase()));
            }),
            (this.setStringHex = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.s = null),
                (this.hV = t));
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            "undefined" != typeof t &&
              ("string" == typeof t
                ? this.setString(t)
                : "undefined" != typeof t.str
                  ? this.setString(t.str)
                  : "undefined" != typeof t.hex && this.setStringHex(t.hex)));
        }),
        n.lang.extend(Z.asn1.DERAbstractString, Z.asn1.ASN1Object),
        (Z.asn1.DERAbstractTime = function (t) {
          Z.asn1.DERAbstractTime.superclass.constructor.call(this);
          ((this.localDateToUTC = function (t) {
            var e = t.getTime() + 6e4 * t.getTimezoneOffset();
            return new Date(e);
          }),
            (this.formatDate = function (t, e, i) {
              var r = this.zeroPadding,
                n = this.localDateToUTC(t),
                s = String(n.getFullYear());
              "utc" == e && (s = s.substr(2, 2));
              var a =
                s +
                r(String(n.getMonth() + 1), 2) +
                r(String(n.getDate()), 2) +
                r(String(n.getHours()), 2) +
                r(String(n.getMinutes()), 2) +
                r(String(n.getSeconds()), 2);
              if (!0 === i) {
                var o = n.getMilliseconds();
                if (0 != o) {
                  var h = r(String(o), 3);
                  a = a + "." + (h = h.replace(/[0]+$/, ""));
                }
              }
              return a + "Z";
            }),
            (this.zeroPadding = function (t, e) {
              return t.length >= e
                ? t
                : new Array(e - t.length + 1).join("0") + t;
            }),
            (this.getString = function () {
              return this.s;
            }),
            (this.setString = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.s = t),
                (this.hV = st(t)));
            }),
            (this.setByDateValue = function (t, e, i, r, n, s) {
              var a = new Date(Date.UTC(t, e - 1, i, r, n, s, 0));
              this.setByDate(a);
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }));
        }),
        n.lang.extend(Z.asn1.DERAbstractTime, Z.asn1.ASN1Object),
        (Z.asn1.DERAbstractStructured = function (t) {
          Z.asn1.DERAbstractString.superclass.constructor.call(this);
          ((this.setByASN1ObjectArray = function (t) {
            ((this.hTLV = null), (this.isModified = !0), (this.asn1Array = t));
          }),
            (this.appendASN1Object = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                this.asn1Array.push(t));
            }),
            (this.asn1Array = new Array()),
            "undefined" != typeof t &&
              "undefined" != typeof t.array &&
              (this.asn1Array = t.array));
        }),
        n.lang.extend(Z.asn1.DERAbstractStructured, Z.asn1.ASN1Object),
        (Z.asn1.DERBoolean = function () {
          (Z.asn1.DERBoolean.superclass.constructor.call(this),
            (this.hT = "01"),
            (this.hTLV = "0101ff"));
        }),
        n.lang.extend(Z.asn1.DERBoolean, Z.asn1.ASN1Object),
        (Z.asn1.DERInteger = function (t) {
          (Z.asn1.DERInteger.superclass.constructor.call(this),
            (this.hT = "02"),
            (this.setByBigInteger = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.hV = Z.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)));
            }),
            (this.setByInteger = function (t) {
              var e = new l(String(t), 10);
              this.setByBigInteger(e);
            }),
            (this.setValueHex = function (t) {
              this.hV = t;
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            "undefined" != typeof t &&
              ("undefined" != typeof t.bigint
                ? this.setByBigInteger(t.bigint)
                : "undefined" != typeof t.int
                  ? this.setByInteger(t.int)
                  : "number" == typeof t
                    ? this.setByInteger(t)
                    : "undefined" != typeof t.hex && this.setValueHex(t.hex)));
        }),
        n.lang.extend(Z.asn1.DERInteger, Z.asn1.ASN1Object),
        (Z.asn1.DERBitString = function (t) {
          if (void 0 !== t && "undefined" !== typeof t.obj) {
            var e = Z.asn1.ASN1Util.newObject(t.obj);
            t.hex = "00" + e.getEncodedHex();
          }
          (Z.asn1.DERBitString.superclass.constructor.call(this),
            (this.hT = "03"),
            (this.setHexValueIncludingUnusedBits = function (t) {
              ((this.hTLV = null), (this.isModified = !0), (this.hV = t));
            }),
            (this.setUnusedBitsAndHexValue = function (t, e) {
              if (t < 0 || 7 < t)
                throw "unused bits shall be from 0 to 7: u = " + t;
              var i = "0" + t;
              ((this.hTLV = null), (this.isModified = !0), (this.hV = i + e));
            }),
            (this.setByBinaryString = function (t) {
              var e = 8 - ((t = t.replace(/0+$/, "")).length % 8);
              8 == e && (e = 0);
              for (var i = 0; i <= e; i++) t += "0";
              var r = "";
              for (i = 0; i < t.length - 1; i += 8) {
                var n = t.substr(i, 8),
                  s = parseInt(n, 2).toString(16);
                (1 == s.length && (s = "0" + s), (r += s));
              }
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.hV = "0" + e + r));
            }),
            (this.setByBooleanArray = function (t) {
              for (var e = "", i = 0; i < t.length; i++)
                1 == t[i] ? (e += "1") : (e += "0");
              this.setByBinaryString(e);
            }),
            (this.newFalseArray = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = !1;
              return e;
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            "undefined" != typeof t &&
              ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/)
                ? this.setHexValueIncludingUnusedBits(t)
                : "undefined" != typeof t.hex
                  ? this.setHexValueIncludingUnusedBits(t.hex)
                  : "undefined" != typeof t.bin
                    ? this.setByBinaryString(t.bin)
                    : "undefined" != typeof t.array &&
                      this.setByBooleanArray(t.array)));
        }),
        n.lang.extend(Z.asn1.DERBitString, Z.asn1.ASN1Object),
        (Z.asn1.DEROctetString = function (t) {
          if (void 0 !== t && "undefined" !== typeof t.obj) {
            var e = Z.asn1.ASN1Util.newObject(t.obj);
            t.hex = e.getEncodedHex();
          }
          (Z.asn1.DEROctetString.superclass.constructor.call(this, t),
            (this.hT = "04"));
        }),
        n.lang.extend(Z.asn1.DEROctetString, Z.asn1.DERAbstractString),
        (Z.asn1.DERNull = function () {
          (Z.asn1.DERNull.superclass.constructor.call(this),
            (this.hT = "05"),
            (this.hTLV = "0500"));
        }),
        n.lang.extend(Z.asn1.DERNull, Z.asn1.ASN1Object),
        (Z.asn1.DERObjectIdentifier = function (t) {
          var e = function (t) {
              var e = t.toString(16);
              return (1 == e.length && (e = "0" + e), e);
            },
            i = function (t) {
              var i = "",
                r = new l(t, 10).toString(2),
                n = 7 - (r.length % 7);
              7 == n && (n = 0);
              for (var s = "", a = 0; a < n; a++) s += "0";
              r = s + r;
              for (a = 0; a < r.length - 1; a += 7) {
                var o = r.substr(a, 7);
                (a != r.length - 7 && (o = "1" + o), (i += e(parseInt(o, 2))));
              }
              return i;
            };
          (Z.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            (this.hT = "06"),
            (this.setValueHex = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.s = null),
                (this.hV = t));
            }),
            (this.setValueOidString = function (t) {
              if (!t.match(/^[0-9.]+$/))
                throw new Error("malformed oid string: " + t);
              var r = "",
                n = t.split("."),
                s = 40 * parseInt(n[0]) + parseInt(n[1]);
              ((r += e(s)), n.splice(0, 2));
              for (var a = 0; a < n.length; a++) r += i(n[a]);
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.s = null),
                (this.hV = r));
            }),
            (this.setValueName = function (t) {
              var e = Z.asn1.x509.OID.name2oid(t);
              if ("" === e)
                throw new Error("DERObjectIdentifier oidName undefined: " + t);
              this.setValueOidString(e);
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            void 0 !== t &&
              ("string" === typeof t
                ? t.match(/^[0-2].[0-9.]+$/)
                  ? this.setValueOidString(t)
                  : this.setValueName(t)
                : void 0 !== t.oid
                  ? this.setValueOidString(t.oid)
                  : void 0 !== t.hex
                    ? this.setValueHex(t.hex)
                    : void 0 !== t.name && this.setValueName(t.name)));
        }),
        n.lang.extend(Z.asn1.DERObjectIdentifier, Z.asn1.ASN1Object),
        (Z.asn1.DEREnumerated = function (t) {
          (Z.asn1.DEREnumerated.superclass.constructor.call(this),
            (this.hT = "0a"),
            (this.setByBigInteger = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.hV = Z.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)));
            }),
            (this.setByInteger = function (t) {
              var e = new l(String(t), 10);
              this.setByBigInteger(e);
            }),
            (this.setValueHex = function (t) {
              this.hV = t;
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            "undefined" != typeof t &&
              ("undefined" != typeof t.int
                ? this.setByInteger(t.int)
                : "number" == typeof t
                  ? this.setByInteger(t)
                  : "undefined" != typeof t.hex && this.setValueHex(t.hex)));
        }),
        n.lang.extend(Z.asn1.DEREnumerated, Z.asn1.ASN1Object),
        (Z.asn1.DERUTF8String = function (t) {
          (Z.asn1.DERUTF8String.superclass.constructor.call(this, t),
            (this.hT = "0c"));
        }),
        n.lang.extend(Z.asn1.DERUTF8String, Z.asn1.DERAbstractString),
        (Z.asn1.DERNumericString = function (t) {
          (Z.asn1.DERNumericString.superclass.constructor.call(this, t),
            (this.hT = "12"));
        }),
        n.lang.extend(Z.asn1.DERNumericString, Z.asn1.DERAbstractString),
        (Z.asn1.DERPrintableString = function (t) {
          (Z.asn1.DERPrintableString.superclass.constructor.call(this, t),
            (this.hT = "13"));
        }),
        n.lang.extend(Z.asn1.DERPrintableString, Z.asn1.DERAbstractString),
        (Z.asn1.DERTeletexString = function (t) {
          (Z.asn1.DERTeletexString.superclass.constructor.call(this, t),
            (this.hT = "14"));
        }),
        n.lang.extend(Z.asn1.DERTeletexString, Z.asn1.DERAbstractString),
        (Z.asn1.DERIA5String = function (t) {
          (Z.asn1.DERIA5String.superclass.constructor.call(this, t),
            (this.hT = "16"));
        }),
        n.lang.extend(Z.asn1.DERIA5String, Z.asn1.DERAbstractString),
        (Z.asn1.DERVisibleString = function (t) {
          (Z.asn1.DERIA5String.superclass.constructor.call(this, t),
            (this.hT = "1a"));
        }),
        n.lang.extend(Z.asn1.DERVisibleString, Z.asn1.DERAbstractString),
        (Z.asn1.DERBMPString = function (t) {
          (Z.asn1.DERBMPString.superclass.constructor.call(this, t),
            (this.hT = "1e"));
        }),
        n.lang.extend(Z.asn1.DERBMPString, Z.asn1.DERAbstractString),
        (Z.asn1.DERUTCTime = function (t) {
          (Z.asn1.DERUTCTime.superclass.constructor.call(this, t),
            (this.hT = "17"),
            (this.setByDate = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.date = t),
                (this.s = this.formatDate(this.date, "utc")),
                (this.hV = st(this.s)));
            }),
            (this.getFreshValueHex = function () {
              return (
                "undefined" == typeof this.date &&
                  "undefined" == typeof this.s &&
                  ((this.date = new Date()),
                  (this.s = this.formatDate(this.date, "utc")),
                  (this.hV = st(this.s))),
                this.hV
              );
            }),
            void 0 !== t &&
              (void 0 !== t.str
                ? this.setString(t.str)
                : "string" == typeof t && t.match(/^[0-9]{12}Z$/)
                  ? this.setString(t)
                  : void 0 !== t.hex
                    ? this.setStringHex(t.hex)
                    : void 0 !== t.date && this.setByDate(t.date)));
        }),
        n.lang.extend(Z.asn1.DERUTCTime, Z.asn1.DERAbstractTime),
        (Z.asn1.DERGeneralizedTime = function (t) {
          (Z.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            (this.hT = "18"),
            (this.withMillis = !1),
            (this.setByDate = function (t) {
              ((this.hTLV = null),
                (this.isModified = !0),
                (this.date = t),
                (this.s = this.formatDate(this.date, "gen", this.withMillis)),
                (this.hV = st(this.s)));
            }),
            (this.getFreshValueHex = function () {
              return (
                void 0 === this.date &&
                  void 0 === this.s &&
                  ((this.date = new Date()),
                  (this.s = this.formatDate(this.date, "gen", this.withMillis)),
                  (this.hV = st(this.s))),
                this.hV
              );
            }),
            void 0 !== t &&
              (void 0 !== t.str
                ? this.setString(t.str)
                : "string" == typeof t && t.match(/^[0-9]{14}Z$/)
                  ? this.setString(t)
                  : void 0 !== t.hex
                    ? this.setStringHex(t.hex)
                    : void 0 !== t.date && this.setByDate(t.date),
              !0 === t.millis && (this.withMillis = !0)));
        }),
        n.lang.extend(Z.asn1.DERGeneralizedTime, Z.asn1.DERAbstractTime),
        (Z.asn1.DERSequence = function (t) {
          (Z.asn1.DERSequence.superclass.constructor.call(this, t),
            (this.hT = "30"),
            (this.getFreshValueHex = function () {
              for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                t += this.asn1Array[e].getEncodedHex();
              }
              return ((this.hV = t), this.hV);
            }));
        }),
        n.lang.extend(Z.asn1.DERSequence, Z.asn1.DERAbstractStructured),
        (Z.asn1.DERSet = function (t) {
          (Z.asn1.DERSet.superclass.constructor.call(this, t),
            (this.hT = "31"),
            (this.sortFlag = !0),
            (this.getFreshValueHex = function () {
              for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
                var i = this.asn1Array[e];
                t.push(i.getEncodedHex());
              }
              return (
                1 == this.sortFlag && t.sort(),
                (this.hV = t.join("")),
                this.hV
              );
            }),
            "undefined" != typeof t &&
              "undefined" != typeof t.sortflag &&
              0 == t.sortflag &&
              (this.sortFlag = !1));
        }),
        n.lang.extend(Z.asn1.DERSet, Z.asn1.DERAbstractStructured),
        (Z.asn1.DERTaggedObject = function (t) {
          (Z.asn1.DERTaggedObject.superclass.constructor.call(this),
            (this.hT = "a0"),
            (this.hV = ""),
            (this.isExplicit = !0),
            (this.asn1Object = null),
            (this.setASN1Object = function (t, e, i) {
              ((this.hT = e),
                (this.isExplicit = t),
                (this.asn1Object = i),
                this.isExplicit
                  ? ((this.hV = this.asn1Object.getEncodedHex()),
                    (this.hTLV = null),
                    (this.isModified = !0))
                  : ((this.hV = null),
                    (this.hTLV = i.getEncodedHex()),
                    (this.hTLV = this.hTLV.replace(/^../, e)),
                    (this.isModified = !1)));
            }),
            (this.getFreshValueHex = function () {
              return this.hV;
            }),
            "undefined" != typeof t &&
              ("undefined" != typeof t.tag && (this.hT = t.tag),
              "undefined" != typeof t.explicit &&
                (this.isExplicit = t.explicit),
              "undefined" != typeof t.obj &&
                ((this.asn1Object = t.obj),
                this.setASN1Object(
                  this.isExplicit,
                  this.hT,
                  this.asn1Object,
                ))));
        }),
        n.lang.extend(Z.asn1.DERTaggedObject, Z.asn1.ASN1Object));
      var Z,
        Q,
        tt,
        et = new (function () {})();
      function it(t) {
        for (var e = new Array(), i = 0; i < t.length; i++)
          e[i] = t.charCodeAt(i);
        return e;
      }
      function rt(t) {
        for (var e = "", i = 0; i < t.length; i++)
          e += String.fromCharCode(t[i]);
        return e;
      }
      function nt(t) {
        for (var e = "", i = 0; i < t.length; i++) {
          var r = t[i].toString(16);
          (1 == r.length && (r = "0" + r), (e += r));
        }
        return e;
      }
      function st(t) {
        return nt(it(t));
      }
      function at(t) {
        return (t = (t = (t = t.replace(/\=/g, "")).replace(
          /\+/g,
          "-",
        )).replace(/\//g, "_"));
      }
      function ot(t) {
        return (
          t.length % 4 == 2 ? (t += "==") : t.length % 4 == 3 && (t += "="),
          (t = (t = t.replace(/-/g, "+")).replace(/_/g, "/"))
        );
      }
      function ht(t) {
        return (t.length % 2 == 1 && (t = "0" + t), at(h(t)));
      }
      window.tob64 = ht;
      function ut(t) {
        return u(ot(t));
      }
      function ct(t) {
        return Et(Ct(t));
      }
      function lt(t) {
        return decodeURIComponent(wt(t));
      }
      function ft(t) {
        for (var e = "", i = 0; i < t.length - 1; i += 2)
          e += String.fromCharCode(parseInt(t.substr(i, 2), 16));
        return e;
      }
      function dt(t) {
        for (var e = "", i = 0; i < t.length; i++)
          e += ("0" + t.charCodeAt(i).toString(16)).slice(-2);
        return e;
      }
      function gt(t) {
        return h(t);
      }
      function pt(t) {
        var e = gt(t).replace(/(.{64})/g, "$1\r\n");
        return (e = e.replace(/\r\n$/, ""));
      }
      function yt(t) {
        return u(t.replace(/[^0-9A-Za-z\/+=]*/g, ""));
      }
      function vt(t, e) {
        return (
          "-----BEGIN " +
          e +
          "-----\r\n" +
          pt(t) +
          "\r\n-----END " +
          e +
          "-----\r\n"
        );
      }
      function mt(t, e) {
        if (-1 == t.indexOf("-----BEGIN ")) throw "can't find PEM header: " + e;
        return yt(
          (t =
            void 0 !== e
              ? (t = t.replace(
                  new RegExp("^[^]*-----BEGIN " + e + "-----"),
                  "",
                )).replace(new RegExp("-----END " + e + "-----[^]*$"), "")
              : (t = t.replace(/^[^]*-----BEGIN [^-]+-----/, "")).replace(
                  /-----END [^-]+-----[^]*$/,
                  "",
                )),
        );
      }
      function xt(t) {
        var e, i, r, n, s, a, o, h, u, c, l;
        if (
          (l = t.match(
            /^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/,
          ))
        )
          return (
            (h = l[1]),
            (e = parseInt(h)),
            2 === h.length &&
              (50 <= e && e < 100
                ? (e = 1900 + e)
                : 0 <= e && e < 50 && (e = 2e3 + e)),
            (i = parseInt(l[2]) - 1),
            (r = parseInt(l[3])),
            (n = parseInt(l[4])),
            (s = parseInt(l[5])),
            (a = parseInt(l[6])),
            (o = 0),
            "" !== (u = l[7]) &&
              ((c = (u.substr(1) + "00").substr(0, 3)), (o = parseInt(c))),
            Date.UTC(e, i, r, n, s, a, o)
          );
        throw "unsupported zulu format: " + t;
      }
      function St(t) {
        return ~~(xt(t) / 1e3);
      }
      function Et(t) {
        return t.replace(/%/g, "");
      }
      function wt(t) {
        return t.replace(/(..)/g, "%$1");
      }
      function Ft(t) {
        var e = "malformed IPv6 address";
        if (!t.match(/^[0-9A-Fa-f:]+$/)) throw e;
        var i = (t = t.toLowerCase()).split(":").length - 1;
        if (i < 2) throw e;
        var r = ":".repeat(7 - i + 2),
          n = (t = t.replace("::", r)).split(":");
        if (8 != n.length) throw e;
        for (var s = 0; s < 8; s++) n[s] = ("0000" + n[s]).slice(-4);
        return n.join("");
      }
      function bt(t) {
        if (!t.match(/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
        for (var e = (t = t.toLowerCase()).match(/.{1,4}/g), i = 0; i < 8; i++)
          ((e[i] = e[i].replace(/^0+/, "")), "" == e[i] && (e[i] = "0"));
        var r = (t = ":" + e.join(":") + ":").match(/:(0:){2,}/g);
        if (null === r) return t.slice(1, -1);
        var n = "";
        for (i = 0; i < r.length; i++) r[i].length > n.length && (n = r[i]);
        return (t = t.replace(n, "::")).slice(1, -1);
      }
      function At(t) {
        var e = "malformed hex value";
        if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw e;
        if (8 != t.length) return 32 == t.length ? bt(t) : t;
        try {
          return (
            parseInt(t.substr(0, 2), 16) +
            "." +
            parseInt(t.substr(2, 2), 16) +
            "." +
            parseInt(t.substr(4, 2), 16) +
            "." +
            parseInt(t.substr(6, 2), 16)
          );
        } catch (i) {
          throw e;
        }
      }
      function Ct(t) {
        for (var e = encodeURIComponent(t), i = "", r = 0; r < e.length; r++)
          "%" == e[r]
            ? ((i += e.substr(r, 3)), (r += 2))
            : (i = i + "%" + st(e[r]));
        return i;
      }
      function Dt(t) {
        return t.length % 2 == 1
          ? "0" + t
          : t.substr(0, 1) > "7"
            ? "00" + t
            : t;
      }
      function It(t) {
        t = (t = (t = t.replace(/^\s*\[\s*/, "")).replace(
          /\s*\]\s*$/,
          "",
        )).replace(/\s*/g, "");
        try {
          return t
            .split(/,/)
            .map(function (t, e, i) {
              var r = parseInt(t);
              if (r < 0 || 255 < r) throw "integer not in range 0-255";
              return ("00" + r.toString(16)).slice(-2);
            })
            .join("");
        } catch (e) {
          throw "malformed integer array string: " + e;
        }
      }
      ((et.getLblen = function (t, e) {
        if ("8" != t.substr(e + 2, 1)) return 1;
        var i = parseInt(t.substr(e + 3, 1));
        return 0 == i ? -1 : 0 < i && i < 10 ? i + 1 : -2;
      }),
        (et.getL = function (t, e) {
          var i = et.getLblen(t, e);
          return i < 1 ? "" : t.substr(e + 2, 2 * i);
        }),
        (et.getVblen = function (t, e) {
          var i;
          return "" == (i = et.getL(t, e))
            ? -1
            : ("8" === i.substr(0, 1)
                ? new l(i.substr(2), 16)
                : new l(i, 16)
              ).intValue();
        }),
        (et.getVidx = function (t, e) {
          var i = et.getLblen(t, e);
          return i < 0 ? i : e + 2 * (i + 1);
        }),
        (et.getV = function (t, e) {
          var i = et.getVidx(t, e),
            r = et.getVblen(t, e);
          return t.substr(i, 2 * r);
        }),
        (et.getTLV = function (t, e) {
          return t.substr(e, 2) + et.getL(t, e) + et.getV(t, e);
        }),
        (et.getTLVblen = function (t, e) {
          return 2 + 2 * et.getLblen(t, e) + 2 * et.getVblen(t, e);
        }),
        (et.getNextSiblingIdx = function (t, e) {
          return et.getVidx(t, e) + 2 * et.getVblen(t, e);
        }),
        (et.getChildIdx = function (t, e) {
          var i,
            r,
            n,
            s = et,
            a = [];
          ((i = s.getVidx(t, e)),
            (r = 2 * s.getVblen(t, e)),
            "03" == t.substr(e, 2) && ((i += 2), (r -= 2)),
            (n = 0));
          for (var o = i; n <= r; ) {
            var h = s.getTLVblen(t, o);
            if (((n += h) <= r && a.push(o), (o += h), n >= r)) break;
          }
          return a;
        }),
        (et.getNthChildIdx = function (t, e, i) {
          return et.getChildIdx(t, e)[i];
        }),
        (et.getIdxbyList = function (t, e, i, r) {
          var n,
            s,
            a = et;
          return 0 == i.length
            ? void 0 !== r && t.substr(e, 2) !== r
              ? -1
              : e
            : (n = i.shift()) >= (s = a.getChildIdx(t, e)).length
              ? -1
              : a.getIdxbyList(t, s[n], i, r);
        }),
        (et.getIdxbyListEx = function (t, e, i, r) {
          var n,
            s,
            a = et;
          if (0 == i.length)
            return void 0 !== r && t.substr(e, 2) !== r ? -1 : e;
          ((n = i.shift()), (s = a.getChildIdx(t, e)));
          for (var o = 0, h = 0; h < s.length; h++) {
            var u = t.substr(s[h], 2);
            if (
              ("number" == typeof n && !a.isContextTag(u) && o == n) ||
              ("string" == typeof n && a.isContextTag(u, n))
            )
              return a.getIdxbyListEx(t, s[h], i, r);
            a.isContextTag(u) || o++;
          }
          return -1;
        }),
        (et.getTLVbyList = function (t, e, i, r) {
          var n = et,
            s = n.getIdxbyList(t, e, i, r);
          return -1 == s || s >= t.length ? null : n.getTLV(t, s);
        }),
        (et.getTLVbyListEx = function (t, e, i, r) {
          var n = et,
            s = n.getIdxbyListEx(t, e, i, r);
          return -1 == s ? null : n.getTLV(t, s);
        }),
        (et.getVbyList = function (t, e, i, r, n) {
          var s,
            a,
            o = et;
          return -1 == (s = o.getIdxbyList(t, e, i, r)) || s >= t.length
            ? null
            : ((a = o.getV(t, s)), !0 === n && (a = a.substr(2)), a);
        }),
        (et.getVbyListEx = function (t, e, i, r, n) {
          var s,
            a,
            o = et;
          return -1 == (s = o.getIdxbyListEx(t, e, i, r))
            ? null
            : ((a = o.getV(t, s)),
              "03" == t.substr(s, 2) && !1 !== n && (a = a.substr(2)),
              a);
        }),
        (et.hextooidstr = function (t) {
          var e = function (t, e) {
              return t.length >= e
                ? t
                : new Array(e - t.length + 1).join("0") + t;
            },
            i = [],
            r = t.substr(0, 2),
            n = parseInt(r, 16);
          ((i[0] = new String(Math.floor(n / 40))),
            (i[1] = new String(n % 40)));
          for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++)
            a.push(parseInt(s.substr(2 * o, 2), 16));
          var h = [],
            u = "";
          for (o = 0; o < a.length; o++)
            128 & a[o]
              ? (u += e((127 & a[o]).toString(2), 7))
              : ((u += e((127 & a[o]).toString(2), 7)),
                h.push(new String(parseInt(u, 2))),
                (u = ""));
          var c = i.join(".");
          return (h.length > 0 && (c = c + "." + h.join(".")), c);
        }),
        (et.dump = function (t, e, i, r) {
          var n = et,
            s = n.getV,
            a = n.dump,
            o = n.getChildIdx,
            h = t;
          t instanceof Z.asn1.ASN1Object && (h = t.getEncodedHex());
          var u = function (t, e) {
            return t.length <= 2 * e
              ? t
              : t.substr(0, e) +
                  "..(total " +
                  t.length / 2 +
                  "bytes).." +
                  t.substr(t.length - e, e);
          };
          (void 0 === e &&
            (e = {
              ommit_long_octet: 32,
            }),
            void 0 === i && (i = 0),
            void 0 === r && (r = ""));
          var c,
            l = e.ommit_long_octet;
          if ("01" == (c = h.substr(i, 2)))
            return "00" == (f = s(h, i))
              ? r + "BOOLEAN FALSE\n"
              : r + "BOOLEAN TRUE\n";
          if ("02" == c) return r + "INTEGER " + u((f = s(h, i)), l) + "\n";
          if ("03" == c) {
            var f = s(h, i);
            if (n.isASN1HEX(f.substr(2))) {
              var d = r + "BITSTRING, encapsulates\n";
              return (d += a(f.substr(2), e, 0, r + "  "));
            }
            return r + "BITSTRING " + u(f, l) + "\n";
          }
          if ("04" == c) {
            f = s(h, i);
            if (n.isASN1HEX(f)) {
              d = r + "OCTETSTRING, encapsulates\n";
              return (d += a(f, e, 0, r + "  "));
            }
            return r + "OCTETSTRING " + u(f, l) + "\n";
          }
          if ("05" == c) return r + "NULL\n";
          if ("06" == c) {
            var g = s(h, i),
              p = Z.asn1.ASN1Util.oidHexToInt(g),
              y = Z.asn1.x509.OID.oid2name(p),
              v = p.replace(/\./g, " ");
            return "" != y
              ? r + "ObjectIdentifier " + y + " (" + v + ")\n"
              : r + "ObjectIdentifier (" + v + ")\n";
          }
          if ("0a" == c) return r + "ENUMERATED " + parseInt(s(h, i)) + "\n";
          if ("0c" == c) return r + "UTF8String '" + lt(s(h, i)) + "'\n";
          if ("13" == c) return r + "PrintableString '" + lt(s(h, i)) + "'\n";
          if ("14" == c) return r + "TeletexString '" + lt(s(h, i)) + "'\n";
          if ("16" == c) return r + "IA5String '" + lt(s(h, i)) + "'\n";
          if ("17" == c) return r + "UTCTime " + lt(s(h, i)) + "\n";
          if ("18" == c) return r + "GeneralizedTime " + lt(s(h, i)) + "\n";
          if ("1a" == c) return r + "VisualString '" + lt(s(h, i)) + "'\n";
          if ("1e" == c) return r + "BMPString '" + lt(s(h, i)) + "'\n";
          if ("30" == c) {
            if ("3000" == h.substr(i, 4)) return r + "SEQUENCE {}\n";
            d = r + "SEQUENCE\n";
            var m = e;
            if (
              (2 == (E = o(h, i)).length || 3 == E.length) &&
              "06" == h.substr(E[0], 2) &&
              "04" == h.substr(E[E.length - 1], 2)
            ) {
              y = n.oidname(s(h, E[0]));
              var x = JSON.parse(JSON.stringify(e));
              ((x.x509ExtName = y), (m = x));
            }
            for (var S = 0; S < E.length; S++) d += a(h, m, E[S], r + "  ");
            return d;
          }
          if ("31" == c) {
            d = r + "SET\n";
            var E = o(h, i);
            for (S = 0; S < E.length; S++) d += a(h, e, E[S], r + "  ");
            return d;
          }
          if (0 != (128 & (c = parseInt(c, 16)))) {
            var w = 31 & c;
            if (0 != (32 & c)) {
              for (
                d = r + "[" + w + "]\n", E = o(h, i), S = 0;
                S < E.length;
                S++
              )
                d += a(h, e, E[S], r + "  ");
              return d;
            }
            f = s(h, i);
            if (et.isASN1HEX(f)) {
              var d = r + "[" + w + "]\n";
              return (d += a(f, e, 0, r + "  "));
            }
            return (
              ("68747470" == f.substr(0, 8) ||
                ("subjectAltName" === e.x509ExtName && 2 == w)) &&
                (f = lt(f)),
              (d = r + "[" + w + "] " + f + "\n")
            );
          }
          return r + "UNKNOWN(" + c + ") " + s(h, i) + "\n";
        }),
        (et.isContextTag = function (t, e) {
          var i, r;
          t = t.toLowerCase();
          try {
            i = parseInt(t, 16);
          } catch (n) {
            return -1;
          }
          if (void 0 === e) return 128 == (192 & i);
          try {
            return (
              null != e.match(/^\[[0-9]+\]$/) &&
              !((r = parseInt(e.substr(1, e.length - 1), 10)) > 31) &&
              128 == (192 & i) &&
              (31 & i) == r
            );
          } catch (n) {
            return !1;
          }
        }),
        (et.isASN1HEX = function (t) {
          var e = et;
          if (t.length % 2 == 1) return !1;
          var i = e.getVblen(t, 0),
            r = t.substr(0, 2),
            n = e.getL(t, 0);
          return t.length - r.length - n.length == 2 * i;
        }),
        (et.checkStrictDER = function (t, e, i, r, n) {
          var s = et;
          if (void 0 === i) {
            if ("string" != typeof t) throw new Error("not hex string");
            if (((t = t.toLowerCase()), !Z.lang.String.isHex(t)))
              throw new Error("not hex string");
            ((i = t.length),
              (n =
                (r = t.length / 2) < 128 ? 1 : Math.ceil(r.toString(16)) + 1));
          }
          if (s.getL(t, e).length > 2 * n)
            throw new Error("L of TLV too long: idx=" + e);
          var a = s.getVblen(t, e);
          if (a > r) throw new Error("value of L too long than hex: idx=" + e);
          var o = s.getTLV(t, e),
            h = o.length - 2 - s.getL(t, e).length;
          if (h !== 2 * a)
            throw new Error(
              "V string length and L's value not the same:" + h + "/" + 2 * a,
            );
          if (0 === e && t.length != o.length)
            throw new Error(
              "total length and TLV length unmatch:" +
                t.length +
                "!=" +
                o.length,
            );
          var u = t.substr(e, 2);
          if ("02" === u) {
            var c = s.getVidx(t, e);
            if ("00" == t.substr(c, 2) && t.charCodeAt(c + 2) < 56)
              throw new Error("not least zeros for DER INTEGER");
          }
          if (32 & parseInt(u, 16)) {
            for (
              var l = s.getVblen(t, e), f = 0, d = s.getChildIdx(t, e), g = 0;
              g < d.length;
              g++
            ) {
              ((f += s.getTLV(t, d[g]).length),
                s.checkStrictDER(t, d[g], i, r, n));
            }
            if (2 * l != f)
              throw new Error(
                "sum of children's TLV length and L unmatch: " +
                  2 * l +
                  "!=" +
                  f,
              );
          }
        }),
        (et.oidname = function (t) {
          var e = Z.asn1;
          Z.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
          var i = e.x509.OID.oid2name(t);
          return ("" === i && (i = t), i);
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        ("undefined" != typeof Z.asn1.x509 && Z.asn1.x509) ||
          (Z.asn1.x509 = {}),
        (Z.asn1.x509.Certificate = function (t) {
          Z.asn1.x509.Certificate.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERBitString,
            r = e.DERSequence,
            n = e.x509,
            s = n.TBSCertificate,
            a = n.AlgorithmIdentifier;
          ((this.params = void 0),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.sign = function () {
              var t = this.params,
                e = t.tbsobj.getEncodedHex(),
                i = new Z.crypto.Signature({
                  alg: t.sigalg,
                });
              (i.init(t.cakey), i.updateHex(e), (t.sighex = i.sign()));
            }),
            (this.getPEM = function () {
              return vt(this.getEncodedHex(), "CERTIFICATE");
            }),
            (this.getEncodedHex = function () {
              var t = this.params;
              if (
                ((void 0 != t.tbsobj && null != t.tbsobj) ||
                  (t.tbsobj = new s(t)),
                void 0 == t.sighex && void 0 != t.cakey && this.sign(),
                void 0 == t.sighex)
              )
                throw new Error("sighex or cakey parameter not defined");
              var e = [];
              return (
                e.push(t.tbsobj),
                e.push(
                  new a({
                    name: t.sigalg,
                  }),
                ),
                e.push(
                  new i({
                    hex: "00" + t.sighex,
                  }),
                ),
                new r({
                  array: e,
                }).getEncodedHex()
              );
            }),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.Certificate, Z.asn1.ASN1Object),
        (Z.asn1.x509.TBSCertificate = function (t) {
          Z.asn1.x509.TBSCertificate.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.x509,
            r = e.DERTaggedObject,
            n = e.DERInteger,
            s = e.DERSequence,
            a = i.AlgorithmIdentifier,
            o = i.Time,
            h = i.X500Name,
            u = i.Extensions,
            c = i.SubjectPublicKeyInfo;
          ((this.params = null),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.getEncodedHex = function () {
              var t = [],
                e = this.params;
              if (void 0 != e.version || 1 != e.version) {
                var i = 2;
                void 0 != e.version && (i = e.version - 1);
                var l = new r({
                  obj: new n({
                    int: i,
                  }),
                });
                t.push(l);
              }
              return (
                t.push(new n(e.serial)),
                t.push(
                  new a({
                    name: e.sigalg,
                  }),
                ),
                t.push(new h(e.issuer)),
                t.push(
                  new s({
                    array: [
                      new o({
                        str: e.notbefore,
                      }),
                      new o({
                        str: e.notafter,
                      }),
                    ],
                  }),
                ),
                t.push(new h(e.subject)),
                t.push(new c(Pt.getKey(e.sbjpubkey))),
                void 0 !== e.ext &&
                  e.ext.length > 0 &&
                  t.push(
                    new r({
                      tag: "a3",
                      obj: new u(e.ext),
                    }),
                  ),
                new Z.asn1.DERSequence({
                  array: t,
                }).getEncodedHex()
              );
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.TBSCertificate, Z.asn1.ASN1Object),
        (Z.asn1.x509.Extensions = function (t) {
          Z.asn1.x509.Extensions.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.x509;
          ((this.aParam = []),
            (this.setByParam = function (t) {
              this.aParam = t;
            }),
            (this.getEncodedHex = function () {
              for (var t = [], e = 0; e < this.aParam.length; e++) {
                var n = this.aParam[e],
                  s = n.extname,
                  a = null;
                if (void 0 != n.extn) a = new r.PrivateExtension(n);
                else if ("subjectKeyIdentifier" == s)
                  a = new r.SubjectKeyIdentifier(n);
                else if ("keyUsage" == s) a = new r.KeyUsage(n);
                else if ("subjectAltName" == s) a = new r.SubjectAltName(n);
                else if ("issuerAltName" == s) a = new r.IssuerAltName(n);
                else if ("basicConstraints" == s) a = new r.BasicConstraints(n);
                else if ("cRLDistributionPoints" == s)
                  a = new r.CRLDistributionPoints(n);
                else if ("certificatePolicies" == s)
                  a = new r.CertificatePolicies(n);
                else if ("authorityKeyIdentifier" == s)
                  a = new r.AuthorityKeyIdentifier(n);
                else if ("extKeyUsage" == s) a = new r.ExtKeyUsage(n);
                else if ("authorityInfoAccess" == s)
                  a = new r.AuthorityInfoAccess(n);
                else if ("cRLNumber" == s) a = new r.CRLNumber(n);
                else if ("cRLReason" == s) a = new r.CRLReason(n);
                else if ("ocspNonce" == s) a = new r.OCSPNonce(n);
                else {
                  if ("ocspNoCheck" != s)
                    throw new Error(
                      "extension not supported:" + JSON.stringify(n),
                    );
                  a = new r.OCSPNoCheck(n);
                }
                null != a && t.push(a);
              }
              return new i({
                array: t,
              }).getEncodedHex();
            }),
            void 0 != t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.Extensions, Z.asn1.ASN1Object),
        (Z.asn1.x509.Extension = function (t) {
          Z.asn1.x509.Extension.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERObjectIdentifier,
            r = e.DEROctetString,
            n = (e.DERBitString, e.DERBoolean),
            s = e.DERSequence;
          ((this.getEncodedHex = function () {
            var t = new i({
                oid: this.oid,
              }),
              e = new r({
                hex: this.getExtnValueHex(),
              }),
              a = new Array();
            return (
              a.push(t),
              this.critical && a.push(new n()),
              a.push(e),
              new s({
                array: a,
              }).getEncodedHex()
            );
          }),
            (this.critical = !1),
            void 0 !== t &&
              void 0 !== t.critical &&
              (this.critical = t.critical));
        }),
        n.lang.extend(Z.asn1.x509.Extension, Z.asn1.ASN1Object),
        (Z.asn1.x509.KeyUsage = function (t) {
          Z.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
          var e = Nt.KEYUSAGE_NAME;
          if (
            ((this.getExtnValueHex = function () {
              return this.asn1ExtnValue.getEncodedHex();
            }),
            (this.oid = "2.5.29.15"),
            void 0 !== t &&
              (void 0 !== t.bin &&
                (this.asn1ExtnValue = new Z.asn1.DERBitString(t)),
              void 0 !== t.names && void 0 !== t.names.length))
          ) {
            for (var i = t.names, r = "000000000", n = 0; n < i.length; n++)
              for (var s = 0; s < e.length; s++)
                i[n] === e[s] &&
                  (r = r.substring(0, s) + "1" + r.substring(s + 1, r.length));
            this.asn1ExtnValue = new Z.asn1.DERBitString({
              bin: r,
            });
          }
        }),
        n.lang.extend(Z.asn1.x509.KeyUsage, Z.asn1.x509.Extension),
        (Z.asn1.x509.BasicConstraints = function (t) {
          Z.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
          var e = Z.asn1,
            i = e.DERBoolean,
            r = e.DERInteger,
            n = e.DERSequence;
          ((this.getExtnValueHex = function () {
            var t = new Array();
            (this.cA && t.push(new i()),
              this.pathLen > -1 &&
                t.push(
                  new r({
                    int: this.pathLen,
                  }),
                ));
            var e = new n({
              array: t,
            });
            return (
              (this.asn1ExtnValue = e),
              this.asn1ExtnValue.getEncodedHex()
            );
          }),
            (this.oid = "2.5.29.19"),
            (this.cA = !1),
            (this.pathLen = -1),
            void 0 !== t &&
              (void 0 !== t.cA && (this.cA = t.cA),
              void 0 !== t.pathLen && (this.pathLen = t.pathLen)));
        }),
        n.lang.extend(Z.asn1.x509.BasicConstraints, Z.asn1.x509.Extension),
        (Z.asn1.x509.CRLDistributionPoints = function (t) {
          Z.asn1.x509.CRLDistributionPoints.superclass.constructor.call(
            this,
            t,
          );
          var e = Z.asn1,
            i = e.x509;
          ((this.getExtnValueHex = function () {
            return this.asn1ExtnValue.getEncodedHex();
          }),
            (this.setByDPArray = function (t) {
              for (var r = [], n = 0; n < t.length; n++)
                if (t[n] instanceof Z.asn1.ASN1Object) r.push(t[n]);
                else {
                  var s = new i.DistributionPoint(t[n]);
                  r.push(s);
                }
              this.asn1ExtnValue = new e.DERSequence({
                array: r,
              });
            }),
            (this.setByOneURI = function (t) {
              var e = new i.DistributionPoint({
                fulluri: t,
              });
              this.setByDPArray([e]);
            }),
            (this.oid = "2.5.29.31"),
            void 0 !== t &&
              (void 0 !== t.array
                ? this.setByDPArray(t.array)
                : void 0 !== t.uri && this.setByOneURI(t.uri)));
        }),
        n.lang.extend(Z.asn1.x509.CRLDistributionPoints, Z.asn1.x509.Extension),
        (Z.asn1.x509.DistributionPoint = function (t) {
          Z.asn1.x509.DistributionPoint.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.x509.DistributionPointName;
          ((this.getEncodedHex = function () {
            var t = new e.DERSequence();
            if (null != this.asn1DP) {
              var i = new e.DERTaggedObject({
                explicit: !0,
                tag: "a0",
                obj: this.asn1DP,
              });
              t.appendASN1Object(i);
            }
            return ((this.hTLV = t.getEncodedHex()), this.hTLV);
          }),
            void 0 !== t &&
              (void 0 !== t.dpobj
                ? (this.asn1DP = t.dpobj)
                : void 0 !== t.dpname
                  ? (this.asn1DP = new i(t.dpname))
                  : void 0 !== t.fulluri &&
                    (this.asn1DP = new i({
                      full: [
                        {
                          uri: t.fulluri,
                        },
                      ],
                    }))));
        }),
        n.lang.extend(Z.asn1.x509.DistributionPoint, Z.asn1.ASN1Object),
        (Z.asn1.x509.DistributionPointName = function (t) {
          Z.asn1.x509.DistributionPointName.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERTaggedObject;
          if (
            ((this.getEncodedHex = function () {
              if ("full" != this.type)
                throw new Error("currently type shall be 'full': " + this.type);
              return (
                (this.asn1Obj = new i({
                  explicit: !1,
                  tag: this.tag,
                  obj: this.asn1V,
                })),
                (this.hTLV = this.asn1Obj.getEncodedHex()),
                this.hTLV
              );
            }),
            void 0 !== t)
          )
            if (e.x509.GeneralNames.prototype.isPrototypeOf(t))
              ((this.type = "full"), (this.tag = "a0"), (this.asn1V = t));
            else {
              if (void 0 === t.full)
                throw new Error(
                  "This class supports GeneralNames only as argument",
                );
              ((this.type = "full"),
                (this.tag = "a0"),
                (this.asn1V = new e.x509.GeneralNames(t.full)));
            }
        }),
        n.lang.extend(Z.asn1.x509.DistributionPointName, Z.asn1.ASN1Object),
        (Z.asn1.x509.CertificatePolicies = function (t) {
          Z.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
          var e = Z.asn1,
            i = e.x509,
            r = e.DERSequence,
            n = i.PolicyInformation;
          ((this.params = null),
            (this.getExtnValueHex = function () {
              for (var t = [], e = 0; e < this.params.array.length; e++)
                t.push(new n(this.params.array[e]));
              var i = new r({
                array: t,
              });
              return (
                (this.asn1ExtnValue = i),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.oid = "2.5.29.32"),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.CertificatePolicies, Z.asn1.x509.Extension),
        (Z.asn1.x509.PolicyInformation = function (t) {
          Z.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERObjectIdentifier,
            n = e.x509.PolicyQualifierInfo;
          ((this.params = null),
            (this.getEncodedHex = function () {
              if (
                void 0 === this.params.policyoid &&
                void 0 === this.params.array
              )
                throw new Error("parameter oid and array missing");
              var t = [new r(this.params.policyoid)];
              if (void 0 !== this.params.array) {
                for (var e = [], s = 0; s < this.params.array.length; s++)
                  e.push(new n(this.params.array[s]));
                e.length > 0 &&
                  t.push(
                    new i({
                      array: e,
                    }),
                  );
              }
              return new i({
                array: t,
              }).getEncodedHex();
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.PolicyInformation, Z.asn1.ASN1Object),
        (Z.asn1.x509.PolicyQualifierInfo = function (t) {
          Z.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERIA5String,
            n = e.DERObjectIdentifier,
            s = e.x509.UserNotice;
          ((this.params = null),
            (this.getEncodedHex = function () {
              return void 0 !== this.params.cps
                ? new i({
                    array: [
                      new n({
                        oid: "1.3.6.1.5.5.7.2.1",
                      }),
                      new r({
                        str: this.params.cps,
                      }),
                    ],
                  }).getEncodedHex()
                : void 0 != this.params.unotice
                  ? new i({
                      array: [
                        new n({
                          oid: "1.3.6.1.5.5.7.2.2",
                        }),
                        new s(this.params.unotice),
                      ],
                    }).getEncodedHex()
                  : void 0;
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.PolicyQualifierInfo, Z.asn1.ASN1Object),
        (Z.asn1.x509.UserNotice = function (t) {
          Z.asn1.x509.UserNotice.superclass.constructor.call(this, t);
          var e = Z.asn1.DERSequence,
            i = (Z.asn1.DERInteger, Z.asn1.x509.DisplayText),
            r = Z.asn1.x509.NoticeReference;
          ((this.params = null),
            (this.getEncodedHex = function () {
              var t = [];
              return (
                void 0 !== this.params.noticeref &&
                  t.push(new r(this.params.noticeref)),
                void 0 !== this.params.exptext &&
                  t.push(new i(this.params.exptext)),
                new e({
                  array: t,
                }).getEncodedHex()
              );
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.UserNotice, Z.asn1.ASN1Object),
        (Z.asn1.x509.NoticeReference = function (t) {
          Z.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
          var e = Z.asn1.DERSequence,
            i = Z.asn1.DERInteger,
            r = Z.asn1.x509.DisplayText;
          ((this.params = null),
            (this.getEncodedHex = function () {
              var t = [];
              if (
                (void 0 !== this.params.org && t.push(new r(this.params.org)),
                void 0 !== this.params.noticenum)
              ) {
                for (
                  var n = [], s = this.params.noticenum, a = 0;
                  a < s.length;
                  a++
                )
                  n.push(new i(s[a]));
                t.push(
                  new e({
                    array: n,
                  }),
                );
              }
              if (0 == t.length) throw new Error("parameter is empty");
              return new e({
                array: t,
              }).getEncodedHex();
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.NoticeReference, Z.asn1.ASN1Object),
        (Z.asn1.x509.DisplayText = function (t) {
          (Z.asn1.x509.DisplayText.superclass.constructor.call(this, t),
            (this.hT = "0c"),
            void 0 !== t &&
              ("ia5" === t.type
                ? (this.hT = "16")
                : "vis" === t.type
                  ? (this.hT = "1a")
                  : "bmp" === t.type && (this.hT = "1e")));
        }),
        n.lang.extend(Z.asn1.x509.DisplayText, Z.asn1.DERAbstractString),
        (Z.asn1.x509.ExtKeyUsage = function (t) {
          Z.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
          var e = Z.asn1;
          ((this.setPurposeArray = function (t) {
            this.asn1ExtnValue = new e.DERSequence();
            for (var i = 0; i < t.length; i++) {
              var r = new e.DERObjectIdentifier(t[i]);
              this.asn1ExtnValue.appendASN1Object(r);
            }
          }),
            (this.getExtnValueHex = function () {
              return this.asn1ExtnValue.getEncodedHex();
            }),
            (this.oid = "2.5.29.37"),
            void 0 !== t &&
              void 0 !== t.array &&
              this.setPurposeArray(t.array));
        }),
        n.lang.extend(Z.asn1.x509.ExtKeyUsage, Z.asn1.x509.Extension),
        (Z.asn1.x509.AuthorityKeyIdentifier = function (t) {
          Z.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(
            this,
            t,
          );
          var e = Z,
            i = e.asn1,
            r = i.DERTaggedObject,
            n = i.x509.GeneralNames;
          e.crypto.Util.isKey;
          ((this.asn1KID = null),
            (this.asn1CertIssuer = null),
            (this.asn1CertSN = null),
            (this.getExtnValueHex = function () {
              var t = new Array();
              (this.asn1KID &&
                t.push(
                  new r({
                    explicit: !1,
                    tag: "80",
                    obj: this.asn1KID,
                  }),
                ),
                this.asn1CertIssuer &&
                  t.push(
                    new r({
                      explicit: !1,
                      tag: "a1",
                      obj: new n([
                        {
                          dn: this.asn1CertIssuer,
                        },
                      ]),
                    }),
                  ),
                this.asn1CertSN &&
                  t.push(
                    new r({
                      explicit: !1,
                      tag: "82",
                      obj: this.asn1CertSN,
                    }),
                  ));
              var e = new i.DERSequence({
                array: t,
              });
              return (
                (this.asn1ExtnValue = e),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.setKIDByParam = function (t) {
              if (void 0 !== t.str || void 0 !== t.hex)
                this.asn1KID = new Z.asn1.DEROctetString(t);
              else if (
                ("object" === typeof t && Z.crypto.Util.isKey(t)) ||
                ("string" === typeof t && -1 != t.indexOf("BEGIN "))
              ) {
                var e = t;
                "string" === typeof t && (e = Pt.getKey(t));
                var i = Pt.getKeyID(e);
                this.asn1KID = new Z.asn1.DEROctetString({
                  hex: i,
                });
              }
            }),
            (this.setCertIssuerByParam = function (t) {
              void 0 !== t.str ||
              void 0 !== t.ldapstr ||
              void 0 !== t.hex ||
              void 0 !== t.certsubject ||
              void 0 !== t.certissuer
                ? (this.asn1CertIssuer = new Z.asn1.x509.X500Name(t))
                : "string" === typeof t &&
                  -1 != t.indexOf("BEGIN ") &&
                  -1 != t.indexOf("CERTIFICATE") &&
                  (this.asn1CertIssuer = new Z.asn1.x509.X500Name({
                    certissuer: t,
                  }));
            }),
            (this.setCertSNByParam = function (t) {
              if (void 0 !== t.str || void 0 !== t.bigint || void 0 !== t.hex)
                this.asn1CertSN = new Z.asn1.DERInteger(t);
              else if (
                "string" === typeof t &&
                -1 != t.indexOf("BEGIN ") &&
                t.indexOf("CERTIFICATE")
              ) {
                var e = new Nt();
                e.readCertPEM(t);
                var i = e.getSerialNumberHex();
                this.asn1CertSN = new Z.asn1.DERInteger({
                  hex: i,
                });
              }
            }),
            (this.oid = "2.5.29.35"),
            void 0 !== t &&
              (void 0 !== t.kid && this.setKIDByParam(t.kid),
              void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer),
              void 0 !== t.sn && this.setCertSNByParam(t.sn),
              void 0 !== t.issuersn &&
                "string" === typeof t.issuersn &&
                -1 != t.issuersn.indexOf("BEGIN ") &&
                t.issuersn.indexOf("CERTIFICATE") &&
                (this.setCertSNByParam(t.issuersn),
                this.setCertIssuerByParam(t.issuersn))));
        }),
        n.lang.extend(
          Z.asn1.x509.AuthorityKeyIdentifier,
          Z.asn1.x509.Extension,
        ),
        (Z.asn1.x509.SubjectKeyIdentifier = function (t) {
          Z.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
          var e = Z.asn1.DEROctetString;
          ((this.asn1KID = null),
            (this.getExtnValueHex = function () {
              return (
                (this.asn1ExtnValue = this.asn1KID),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.setKIDByParam = function (t) {
              if (void 0 !== t.str || void 0 !== t.hex) this.asn1KID = new e(t);
              else if (
                ("object" === typeof t && Z.crypto.Util.isKey(t)) ||
                ("string" === typeof t && -1 != t.indexOf("BEGIN"))
              ) {
                var i = t;
                "string" === typeof t && (i = Pt.getKey(t));
                var r = Pt.getKeyID(i);
                this.asn1KID = new Z.asn1.DEROctetString({
                  hex: r,
                });
              }
            }),
            (this.oid = "2.5.29.14"),
            void 0 !== t && void 0 !== t.kid && this.setKIDByParam(t.kid));
        }),
        n.lang.extend(Z.asn1.x509.SubjectKeyIdentifier, Z.asn1.x509.Extension),
        (Z.asn1.x509.AuthorityInfoAccess = function (t) {
          (Z.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t),
            (this.setAccessDescriptionArray = function (t) {
              for (
                var e = new Array(),
                  i = Z.asn1,
                  r = i.DERSequence,
                  n = i.DERObjectIdentifier,
                  s = i.x509.GeneralName,
                  a = 0;
                a < t.length;
                a++
              ) {
                var o,
                  h = t[a];
                if (void 0 !== h.ocsp)
                  o = new r({
                    array: [
                      new n({
                        oid: "1.3.6.1.5.5.7.48.1",
                      }),
                      new s({
                        uri: h.ocsp,
                      }),
                    ],
                  });
                else {
                  if (void 0 === h.caissuer)
                    throw new Error(
                      "unknown AccessMethod parameter: " + JSON.stringify(h),
                    );
                  o = new r({
                    array: [
                      new n({
                        oid: "1.3.6.1.5.5.7.48.2",
                      }),
                      new s({
                        uri: h.caissuer,
                      }),
                    ],
                  });
                }
                e.push(o);
              }
              this.asn1ExtnValue = new r({
                array: e,
              });
            }),
            (this.getExtnValueHex = function () {
              return this.asn1ExtnValue.getEncodedHex();
            }),
            (this.oid = "1.3.6.1.5.5.7.1.1"),
            void 0 !== t &&
              void 0 !== t.array &&
              this.setAccessDescriptionArray(t.array));
        }),
        n.lang.extend(Z.asn1.x509.AuthorityInfoAccess, Z.asn1.x509.Extension),
        (Z.asn1.x509.SubjectAltName = function (t) {
          (Z.asn1.x509.SubjectAltName.superclass.constructor.call(this, t),
            (this.setNameArray = function (t) {
              this.asn1ExtnValue = new Z.asn1.x509.GeneralNames(t);
            }),
            (this.getExtnValueHex = function () {
              return this.asn1ExtnValue.getEncodedHex();
            }),
            (this.oid = "2.5.29.17"),
            void 0 !== t && void 0 !== t.array && this.setNameArray(t.array));
        }),
        n.lang.extend(Z.asn1.x509.SubjectAltName, Z.asn1.x509.Extension),
        (Z.asn1.x509.IssuerAltName = function (t) {
          (Z.asn1.x509.IssuerAltName.superclass.constructor.call(this, t),
            (this.setNameArray = function (t) {
              this.asn1ExtnValue = new Z.asn1.x509.GeneralNames(t);
            }),
            (this.getExtnValueHex = function () {
              return this.asn1ExtnValue.getEncodedHex();
            }),
            (this.oid = "2.5.29.18"),
            void 0 !== t && void 0 !== t.array && this.setNameArray(t.array));
        }),
        n.lang.extend(Z.asn1.x509.IssuerAltName, Z.asn1.x509.Extension),
        (Z.asn1.x509.PrivateExtension = function (t) {
          Z.asn1.x509.PrivateExtension.superclass.constructor.call(this, t);
          var e = Z,
            i = e.lang.String.isHex,
            r = e.asn1,
            n = r.x509.OID.name2oid,
            s = r.ASN1Util.newObject;
          ((this.params = null),
            (this.setByParam = function (t) {
              ((this.oid = n(t.extname)), (this.params = t));
            }),
            (this.getExtnValueHex = function () {
              if (void 0 == this.params.extname || void 0 == this.params.extn)
                throw new Error("extname or extnhex not specified");
              var t = this.params.extn;
              if ("string" == typeof t && i(t)) return t;
              if ("object" == typeof t)
                try {
                  return s(t).getEncodedHex();
                } catch (e) {}
              throw new Error("unsupported extn value");
            }),
            void 0 != t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.PrivateExtension, Z.asn1.x509.Extension),
        (Z.asn1.x509.CRL = function (t) {
          Z.asn1.x509.CRL.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERBitString,
            n = e.x509,
            s = n.AlgorithmIdentifier,
            a = n.TBSCertList;
          ((this.params = void 0),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.sign = function () {
              var t = new a(this.params).getEncodedHex(),
                e = new Z.crypto.Signature({
                  alg: this.params.sigalg,
                });
              (e.init(this.params.cakey), e.updateHex(t));
              var i = e.sign();
              this.params.sighex = i;
            }),
            (this.getPEM = function () {
              return vt(this.getEncodedHex(), "X509 CRL");
            }),
            (this.getEncodedHex = function () {
              var t = this.params;
              if (
                (void 0 == t.tbsobj && (t.tbsobj = new a(t)),
                void 0 == t.sighex && void 0 != t.cakey && this.sign(),
                void 0 == t.sighex)
              )
                throw new Error("sighex or cakey parameter not defined");
              var e = [];
              return (
                e.push(t.tbsobj),
                e.push(
                  new s({
                    name: t.sigalg,
                  }),
                ),
                e.push(
                  new r({
                    hex: "00" + t.sighex,
                  }),
                ),
                new i({
                  array: e,
                }).getEncodedHex()
              );
            }),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.CRL, Z.asn1.ASN1Object),
        (Z.asn1.x509.TBSCertList = function (t) {
          Z.asn1.x509.TBSCertList.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERInteger,
            r = e.DERSequence,
            n = e.DERTaggedObject,
            s = (e.DERObjectIdentifier, e.x509),
            a = s.AlgorithmIdentifier,
            o = s.Time,
            h = s.Extensions,
            u = s.X500Name;
          ((this.params = null),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.getRevCertSequence = function () {
              for (
                var t = [], e = this.params.revcert, n = 0;
                n < e.length;
                n++
              ) {
                var s = [new i(e[n].sn), new o(e[n].date)];
                (void 0 != e[n].ext && s.push(new h(e[n].ext)),
                  t.push(
                    new r({
                      array: s,
                    }),
                  ));
              }
              return new r({
                array: t,
              });
            }),
            (this.getEncodedHex = function () {
              var t = [],
                e = this.params;
              if (void 0 != e.version) {
                var s = e.version - 1,
                  c = new i({
                    int: s,
                  });
                t.push(c);
              }
              if (
                (t.push(
                  new a({
                    name: e.sigalg,
                  }),
                ),
                t.push(new u(e.issuer)),
                t.push(new o(e.thisupdate)),
                void 0 != e.nextupdate && t.push(new o(e.nextupdate)),
                void 0 != e.revcert && t.push(this.getRevCertSequence()),
                void 0 != e.ext)
              ) {
                var l = new h(e.ext);
                t.push(
                  new n({
                    tag: "a0",
                    explicit: !0,
                    obj: l,
                  }),
                );
              }
              return new r({
                array: t,
              }).getEncodedHex();
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.TBSCertList, Z.asn1.ASN1Object),
        (Z.asn1.x509.CRLEntry = function (t) {
          Z.asn1.x509.CRLEntry.superclass.constructor.call(this);
          var e = Z.asn1;
          ((this.setCertSerial = function (t) {
            this.sn = new e.DERInteger(t);
          }),
            (this.setRevocationDate = function (t) {
              this.time = new e.x509.Time(t);
            }),
            (this.getEncodedHex = function () {
              var t = new e.DERSequence({
                array: [this.sn, this.time],
              });
              return ((this.TLV = t.getEncodedHex()), this.TLV);
            }),
            void 0 !== t &&
              (void 0 !== t.time && this.setRevocationDate(t.time),
              void 0 !== t.sn && this.setCertSerial(t.sn)));
        }),
        n.lang.extend(Z.asn1.x509.CRLEntry, Z.asn1.ASN1Object),
        (Z.asn1.x509.CRLNumber = function (t) {
          (Z.asn1.x509.CRLNumber.superclass.constructor.call(this, t),
            (this.params = void 0),
            (this.getExtnValueHex = function () {
              return (
                (this.asn1ExtnValue = new Z.asn1.DERInteger(this.params.num)),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.oid = "2.5.29.20"),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.CRLNumber, Z.asn1.x509.Extension),
        (Z.asn1.x509.CRLReason = function (t) {
          (Z.asn1.x509.CRLReason.superclass.constructor.call(this, t),
            (this.params = void 0),
            (this.getExtnValueHex = function () {
              return (
                (this.asn1ExtnValue = new Z.asn1.DEREnumerated(
                  this.params.code,
                )),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.oid = "2.5.29.21"),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.CRLReason, Z.asn1.x509.Extension),
        (Z.asn1.x509.OCSPNonce = function (t) {
          (Z.asn1.x509.OCSPNonce.superclass.constructor.call(this, t),
            (this.params = void 0),
            (this.getExtnValueHex = function () {
              return (
                (this.asn1ExtnValue = new Z.asn1.DEROctetString(this.params)),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.oid = "1.3.6.1.5.5.7.48.1.2"),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.OCSPNonce, Z.asn1.x509.Extension),
        (Z.asn1.x509.OCSPNoCheck = function (t) {
          (Z.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, t),
            (this.params = void 0),
            (this.getExtnValueHex = function () {
              return (
                (this.asn1ExtnValue = new Z.asn1.DERNull()),
                this.asn1ExtnValue.getEncodedHex()
              );
            }),
            (this.oid = "1.3.6.1.5.5.7.48.1.5"),
            void 0 != t && (this.params = t));
        }),
        n.lang.extend(Z.asn1.x509.OCSPNoCheck, Z.asn1.x509.Extension),
        (Z.asn1.x509.X500Name = function (t) {
          (Z.asn1.x509.X500Name.superclass.constructor.call(this),
            (this.asn1Array = []),
            (this.paramArray = []),
            (this.sRule = "utf8"));
          var e = Z.asn1,
            i = e.x509,
            r = i.RDN;
          ((this.setByString = function (t, e) {
            void 0 !== e && (this.sRule = e);
            var i = t.split("/");
            i.shift();
            for (var n = [], s = 0; s < i.length; s++)
              if (i[s].match(/^[^=]+=.+$/)) n.push(i[s]);
              else {
                var a = n.length - 1;
                n[a] = n[a] + "/" + i[s];
              }
            for (s = 0; s < n.length; s++)
              this.asn1Array.push(
                new r({
                  str: n[s],
                  rule: this.sRule,
                }),
              );
          }),
            (this.setByLdapString = function (t, e) {
              void 0 !== e && (this.sRule = e);
              var r = i.X500Name.ldapToCompat(t);
              this.setByString(r, e);
            }),
            (this.setByObject = function (t, e) {
              for (var i in (void 0 !== e && (this.sRule = e), t))
                if (t.hasOwnProperty(i)) {
                  var n = new r({
                    str: i + "=" + t[i],
                    rule: this.sRule,
                  });
                  this.asn1Array
                    ? this.asn1Array.push(n)
                    : (this.asn1Array = [n]);
                }
            }),
            (this.setByParam = function (t) {
              var e;
              (void 0 !== t.rule && (this.sRule = t.rule), void 0 !== t.array)
                ? (this.paramArray = t.array)
                : void 0 !== t.str
                  ? this.setByString(t.str)
                  : void 0 !== t.ldapstr
                    ? this.setByLdapString(t.ldapstr)
                    : void 0 !== t.hex
                      ? (this.hTLV = t.hex)
                      : void 0 !== t.certissuer
                        ? ((e = new Nt()).readCertPEM(t.certissuer),
                          (this.hTLV = e.getIssuerHex()))
                        : void 0 !== t.certsubject
                          ? ((e = new Nt()).readCertPEM(t.certsubject),
                            (this.hTLV = e.getSubjectHex()))
                          : "object" === typeof t &&
                            void 0 === t.certsubject &&
                            void 0 === t.certissuer &&
                            this.setByObject(t);
            }),
            (this.getEncodedHex = function () {
              if ("string" == typeof this.hTLV) return this.hTLV;
              if (0 == this.asn1Array.length && this.paramArray.length > 0)
                for (var t = 0; t < this.paramArray.length; t++) {
                  var i = {
                    array: this.paramArray[t],
                  };
                  "utf8" != this.sRule && (i.rule = this.sRule);
                  var n = new r(i);
                  this.asn1Array.push(n);
                }
              var s = new e.DERSequence({
                array: this.asn1Array,
              });
              return ((this.hTLV = s.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.X500Name, Z.asn1.ASN1Object),
        (Z.asn1.x509.X500Name.compatToLDAP = function (t) {
          if ("/" !== t.substr(0, 1)) throw "malformed input";
          var e = (t = t.substr(1)).split("/");
          return (
            e.reverse(),
            (e = e.map(function (t) {
              return t.replace(/,/, "\\,");
            })).join(",")
          );
        }),
        (Z.asn1.x509.X500Name.onelineToLDAP = function (t) {
          return Z.asn1.x509.X500Name.compatToLDAP(t);
        }),
        (Z.asn1.x509.X500Name.ldapToCompat = function (t) {
          for (var e = t.split(","), i = !1, r = [], n = 0; e.length > 0; n++) {
            var s = e.shift();
            if (!0 === i) {
              var a = (r.pop() + "," + s).replace(/\\,/g, ",");
              (r.push(a), (i = !1));
            } else r.push(s);
            "\\" === s.substr(-1, 1) && (i = !0);
          }
          return (
            (r = r.map(function (t) {
              return t.replace("/", "\\/");
            })).reverse(),
            "/" + r.join("/")
          );
        }),
        (Z.asn1.x509.X500Name.ldapToOneline = function (t) {
          return Z.asn1.x509.X500Name.ldapToCompat(t);
        }),
        (Z.asn1.x509.RDN = function (t) {
          (Z.asn1.x509.RDN.superclass.constructor.call(this),
            (this.asn1Array = []),
            (this.paramArray = []),
            (this.sRule = "utf8"));
          var e = Z.asn1.x509.AttributeTypeAndValue;
          ((this.setByParam = function (t) {
            (void 0 !== t.rule && (this.sRule = t.rule),
              void 0 !== t.str && this.addByMultiValuedString(t.str),
              void 0 !== t.array && (this.paramArray = t.array));
          }),
            (this.addByString = function (t) {
              this.asn1Array.push(
                new Z.asn1.x509.AttributeTypeAndValue({
                  str: t,
                  rule: this.sRule,
                }),
              );
            }),
            (this.addByMultiValuedString = function (t) {
              for (
                var e = Z.asn1.x509.RDN.parseString(t), i = 0;
                i < e.length;
                i++
              )
                this.addByString(e[i]);
            }),
            (this.getEncodedHex = function () {
              if (0 == this.asn1Array.length && this.paramArray.length > 0)
                for (var t = 0; t < this.paramArray.length; t++) {
                  var i = this.paramArray[t];
                  void 0 !== i.rule &&
                    "utf8" != this.sRule &&
                    (i.rule = this.sRule);
                  var r = new e(i);
                  this.asn1Array.push(r);
                }
              var n = new Z.asn1.DERSet({
                array: this.asn1Array,
              });
              return ((this.TLV = n.getEncodedHex()), this.TLV);
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.RDN, Z.asn1.ASN1Object),
        (Z.asn1.x509.RDN.parseString = function (t) {
          for (
            var e = t.split(/\+/), i = !1, r = [], n = 0;
            e.length > 0;
            n++
          ) {
            var s = e.shift();
            if (!0 === i) {
              var a = (r.pop() + "+" + s).replace(/\\\+/g, "+");
              (r.push(a), (i = !1));
            } else r.push(s);
            "\\" === s.substr(-1, 1) && (i = !0);
          }
          var o = !1,
            h = [];
          for (n = 0; r.length > 0; n++) {
            s = r.shift();
            if (!0 === o) {
              var u = h.pop();
              if (s.match(/"$/)) {
                a = (u + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                (h.push(a), (o = !1));
              } else h.push(u + "+" + s);
            } else h.push(s);
            s.match(/^[^=]+="/) && (o = !0);
          }
          return h;
        }),
        (Z.asn1.x509.AttributeTypeAndValue = function (t) {
          (Z.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this),
            (this.sRule = "utf8"),
            (this.sType = null),
            (this.sValue = null),
            (this.dsType = null));
          var e = Z,
            i = e.asn1,
            r = i.DERSequence,
            n = i.DERUTF8String,
            s = i.DERPrintableString,
            a = i.DERTeletexString,
            o = i.DERIA5String,
            h = i.DERVisibleString,
            u = i.DERBMPString,
            c = e.lang.String.isMail,
            l = e.lang.String.isPrintable;
          ((this.setByParam = function (t) {
            if (
              (void 0 !== t.rule && (this.sRule = t.rule),
              void 0 !== t.ds && (this.dsType = t.ds),
              void 0 === t.value && void 0 !== t.str)
            ) {
              var e = t.str.match(/^([^=]+)=(.+)$/);
              if (!e)
                throw new Error(
                  "malformed attrTypeAndValueStr: " + attrTypeAndValueStr,
                );
              ((this.sType = e[1]), (this.sValue = e[2]));
            } else ((this.sType = t.type), (this.sValue = t.value));
          }),
            (this.setByString = function (t, e) {
              void 0 !== e && (this.sRule = e);
              var i = t.match(/^([^=]+)=(.+)$/);
              if (!i)
                throw new Error(
                  "malformed attrTypeAndValueStr: " + attrTypeAndValueStr,
                );
              this.setByAttrTypeAndValueStr(i[1], i[2]);
            }),
            (this._getDsType = function () {
              var t = this.sType,
                e = this.sValue,
                i = this.sRule;
              return "prn" === i
                ? "CN" == t && c(e)
                  ? "ia5"
                  : l(e)
                    ? "prn"
                    : "utf8"
                : "utf8" === i
                  ? "CN" == t && c(e)
                    ? "ia5"
                    : "C" == t
                      ? "prn"
                      : "utf8"
                  : "utf8";
            }),
            (this.setByAttrTypeAndValueStr = function (t, e, i) {
              (void 0 !== i && (this.sRule = i),
                (this.sType = t),
                (this.sValue = e));
            }),
            (this.getValueObj = function (t, e) {
              if ("utf8" == t)
                return new n({
                  str: e,
                });
              if ("prn" == t)
                return new s({
                  str: e,
                });
              if ("tel" == t)
                return new a({
                  str: e,
                });
              if ("ia5" == t)
                return new o({
                  str: e,
                });
              if ("vis" == t)
                return new h({
                  str: e,
                });
              if ("bmp" == t)
                return new u({
                  str: e,
                });
              throw new Error(
                "unsupported directory string type: type=" + t + " value=" + e,
              );
            }),
            (this.getEncodedHex = function () {
              null == this.dsType && (this.dsType = this._getDsType());
              var t = Z.asn1.x509.OID.atype2obj(this.sType),
                e = this.getValueObj(this.dsType, this.sValue),
                i = new r({
                  array: [t, e],
                });
              return ((this.TLV = i.getEncodedHex()), this.TLV);
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.AttributeTypeAndValue, Z.asn1.ASN1Object),
        (Z.asn1.x509.SubjectPublicKeyInfo = function (t) {
          Z.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
          var e = Z,
            i = e.asn1,
            r = i.DERInteger,
            n = i.DERBitString,
            s = i.DERObjectIdentifier,
            a = i.DERSequence,
            o = i.ASN1Util.newObject,
            h = i.x509.AlgorithmIdentifier,
            u = e.crypto;
          (u.ECDSA, u.DSA);
          ((this.getASN1Object = function () {
            if (null == this.asn1AlgId || null == this.asn1SubjPKey)
              throw "algId and/or subjPubKey not set";
            return new a({
              array: [this.asn1AlgId, this.asn1SubjPKey],
            });
          }),
            (this.getEncodedHex = function () {
              var t = this.getASN1Object();
              return ((this.hTLV = t.getEncodedHex()), this.hTLV);
            }),
            (this.setPubKey = function (t) {
              try {
                if (t instanceof G) {
                  var e = o({
                    seq: [
                      {
                        int: {
                          bigint: t.n,
                        },
                      },
                      {
                        int: {
                          int: t.e,
                        },
                      },
                    ],
                  }).getEncodedHex();
                  ((this.asn1AlgId = new h({
                    name: "rsaEncryption",
                  })),
                    (this.asn1SubjPKey = new n({
                      hex: "00" + e,
                    })));
                }
              } catch (u) {}
              try {
                if (t instanceof Z.crypto.ECDSA) {
                  var i = new s({
                    name: t.curveName,
                  });
                  ((this.asn1AlgId = new h({
                    name: "ecPublicKey",
                    asn1params: i,
                  })),
                    (this.asn1SubjPKey = new n({
                      hex: "00" + t.pubKeyHex,
                    })));
                }
              } catch (u) {}
              try {
                if (t instanceof Z.crypto.DSA) {
                  i = new o({
                    seq: [
                      {
                        int: {
                          bigint: t.p,
                        },
                      },
                      {
                        int: {
                          bigint: t.q,
                        },
                      },
                      {
                        int: {
                          bigint: t.g,
                        },
                      },
                    ],
                  });
                  this.asn1AlgId = new h({
                    name: "dsa",
                    asn1params: i,
                  });
                  var a = new r({
                    bigint: t.y,
                  });
                  this.asn1SubjPKey = new n({
                    hex: "00" + a.getEncodedHex(),
                  });
                }
              } catch (u) {}
            }),
            void 0 !== t && this.setPubKey(t));
        }),
        n.lang.extend(Z.asn1.x509.SubjectPublicKeyInfo, Z.asn1.ASN1Object),
        (Z.asn1.x509.Time = function (t) {
          Z.asn1.x509.Time.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERUTCTime,
            r = e.DERGeneralizedTime;
          ((this.setTimeParams = function (t) {
            this.timeParams = t;
          }),
            (this.getEncodedHex = function () {
              var t = null;
              return (
                (t =
                  null != this.timeParams
                    ? "utc" == this.type
                      ? new i(this.timeParams)
                      : new r(this.timeParams)
                    : "utc" == this.type
                      ? new i()
                      : new r()),
                (this.TLV = t.getEncodedHex()),
                this.TLV
              );
            }),
            (this.type = "utc"),
            void 0 !== t &&
              (void 0 !== t.type
                ? (this.type = t.type)
                : void 0 !== t.str &&
                  (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"),
                  t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")),
              (this.timeParams = t)));
        }),
        n.lang.extend(Z.asn1.x509.Time, Z.asn1.ASN1Object),
        (Z.asn1.x509.AlgorithmIdentifier = function (t) {
          (Z.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),
            (this.nameAlg = null),
            (this.asn1Alg = null),
            (this.asn1Params = null),
            (this.paramEmpty = !1));
          var e = Z.asn1,
            i = e.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
          if (
            ((this.getEncodedHex = function () {
              if (null === this.nameAlg && null === this.asn1Alg)
                throw new Error("algorithm not specified");
              if (null !== this.nameAlg) {
                var t = null;
                for (var r in i) r === this.nameAlg && (t = i[r]);
                if (null !== t) return ((this.hTLV = t), this.hTLV);
              }
              null !== this.nameAlg &&
                null === this.asn1Alg &&
                (this.asn1Alg = e.x509.OID.name2obj(this.nameAlg));
              var n = [this.asn1Alg];
              null !== this.asn1Params && n.push(this.asn1Params);
              var s = new e.DERSequence({
                array: n,
              });
              return ((this.hTLV = s.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              (void 0 !== t.name && (this.nameAlg = t.name),
              void 0 !== t.asn1params && (this.asn1Params = t.asn1params),
              void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)),
            null === this.asn1Params &&
              !1 === this.paramEmpty &&
              null !== this.nameAlg)
          ) {
            void 0 !== this.nameAlg.name && (this.nameAlg = this.nameAlg.name);
            var r = this.nameAlg.toLowerCase();
            "withdsa" !== r.substr(-7, 7) &&
              "withecdsa" !== r.substr(-9, 9) &&
              (this.asn1Params = new e.DERNull());
          }
        }),
        n.lang.extend(Z.asn1.x509.AlgorithmIdentifier, Z.asn1.ASN1Object),
        (Z.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
          SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000",
          SHA256withRSAandMGF1:
            "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120",
          SHA384withRSAandMGF1:
            "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130",
          SHA512withRSAandMGF1:
            "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140",
        }),
        (Z.asn1.x509.GeneralName = function (t) {
          Z.asn1.x509.GeneralName.superclass.constructor.call(this);
          var e = {
              rfc822: "81",
              dns: "82",
              dn: "a4",
              uri: "86",
              ip: "87",
            },
            i = Z.asn1,
            r = (i.DERSequence, i.DEROctetString),
            n = i.DERIA5String,
            s = i.DERTaggedObject,
            a = i.ASN1Object,
            o = i.x509.X500Name,
            h = mt;
          ((this.explicit = !1),
            (this.setByParam = function (t) {
              var i = null;
              if (void 0 !== t) {
                if (
                  (void 0 !== t.rfc822 &&
                    ((this.type = "rfc822"),
                    (i = new n({
                      str: t[this.type],
                    }))),
                  void 0 !== t.dns &&
                    ((this.type = "dns"),
                    (i = new n({
                      str: t[this.type],
                    }))),
                  void 0 !== t.uri &&
                    ((this.type = "uri"),
                    (i = new n({
                      str: t[this.type],
                    }))),
                  void 0 !== t.dn &&
                    ((this.type = "dn"),
                    (this.explicit = !0),
                    (i =
                      "string" === typeof t.dn
                        ? new o({
                            str: t.dn,
                          })
                        : t.dn instanceof Z.asn1.x509.X500Name
                          ? t.dn
                          : new o(t.dn))),
                  void 0 !== t.ldapdn &&
                    ((this.type = "dn"),
                    (this.explicit = !0),
                    (i = new o({
                      ldapstr: t.ldapdn,
                    }))),
                  void 0 !== t.certissuer)
                ) {
                  ((this.type = "dn"), (this.explicit = !0));
                  var u = null;
                  if (
                    ((l = t.certissuer).match(/^[0-9A-Fa-f]+$/),
                    -1 != l.indexOf("-----BEGIN ") && (u = h(l)),
                    null == u)
                  )
                    throw "certissuer param not cert";
                  (f = new Nt()).hex = u;
                  var c = f.getIssuerHex();
                  (i = new a()).hTLV = c;
                }
                if (void 0 !== t.certsubj) {
                  ((this.type = "dn"), (this.explicit = !0));
                  var l, f;
                  u = null;
                  if (
                    ((l = t.certsubj).match(/^[0-9A-Fa-f]+$/),
                    -1 != l.indexOf("-----BEGIN ") && (u = h(l)),
                    null == u)
                  )
                    throw "certsubj param not cert";
                  (f = new Nt()).hex = u;
                  c = f.getSubjectHex();
                  (i = new a()).hTLV = c;
                }
                if (void 0 !== t.ip) {
                  ((this.type = "ip"), (this.explicit = !1));
                  var d,
                    g = t.ip,
                    p = "malformed IP address";
                  if (g.match(/^[0-9.]+[.][0-9.]+$/)) {
                    if (
                      8 !== (d = It("[" + g.split(".").join(",") + "]")).length
                    )
                      throw p;
                  } else if (g.match(/^[0-9A-Fa-f:]+:[0-9A-Fa-f:]+$/))
                    d = Ft(g);
                  else {
                    if (!g.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw p;
                    d = g;
                  }
                  i = new r({
                    hex: d,
                  });
                }
                if (null == this.type) throw "unsupported type in params=" + t;
                this.asn1Obj = new s({
                  explicit: this.explicit,
                  tag: e[this.type],
                  obj: i,
                });
              }
            }),
            (this.getEncodedHex = function () {
              return this.asn1Obj.getEncodedHex();
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.x509.GeneralName, Z.asn1.ASN1Object),
        (Z.asn1.x509.GeneralNames = function (t) {
          Z.asn1.x509.GeneralNames.superclass.constructor.call(this);
          var e = Z.asn1;
          ((this.setByParamArray = function (t) {
            for (var i = 0; i < t.length; i++) {
              var r = new e.x509.GeneralName(t[i]);
              this.asn1Array.push(r);
            }
          }),
            (this.getEncodedHex = function () {
              return new e.DERSequence({
                array: this.asn1Array,
              }).getEncodedHex();
            }),
            (this.asn1Array = new Array()),
            "undefined" != typeof t && this.setByParamArray(t));
        }),
        n.lang.extend(Z.asn1.x509.GeneralNames, Z.asn1.ASN1Object),
        (Z.asn1.x509.OID = new (function (t) {
          ((this.atype2oidList = {
            CN: "2.5.4.3",
            L: "2.5.4.7",
            ST: "2.5.4.8",
            O: "2.5.4.10",
            OU: "2.5.4.11",
            C: "2.5.4.6",
            STREET: "2.5.4.9",
            DC: "0.9.2342.19200300.100.1.25",
            UID: "0.9.2342.19200300.100.1.1",
            SN: "2.5.4.4",
            T: "2.5.4.12",
            DN: "2.5.4.49",
            E: "1.2.840.113549.1.9.1",
            description: "2.5.4.13",
            businessCategory: "2.5.4.15",
            postalCode: "2.5.4.17",
            serialNumber: "2.5.4.5",
            uniqueIdentifier: "2.5.4.45",
            organizationIdentifier: "2.5.4.97",
            jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
            jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
            jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
          }),
            (this.name2oidList = {
              sha1: "1.3.14.3.2.26",
              sha256: "2.16.840.1.101.3.4.2.1",
              sha384: "2.16.840.1.101.3.4.2.2",
              sha512: "2.16.840.1.101.3.4.2.3",
              sha224: "2.16.840.1.101.3.4.2.4",
              md5: "1.2.840.113549.2.5",
              md2: "1.3.14.7.2.2.1",
              ripemd160: "1.3.36.3.2.1",
              MD2withRSA: "1.2.840.113549.1.1.2",
              MD4withRSA: "1.2.840.113549.1.1.3",
              MD5withRSA: "1.2.840.113549.1.1.4",
              SHA1withRSA: "1.2.840.113549.1.1.5",
              "pkcs1-MGF": "1.2.840.113549.1.1.8",
              rsaPSS: "1.2.840.113549.1.1.10",
              SHA224withRSA: "1.2.840.113549.1.1.14",
              SHA256withRSA: "1.2.840.113549.1.1.11",
              SHA384withRSA: "1.2.840.113549.1.1.12",
              SHA512withRSA: "1.2.840.113549.1.1.13",
              SHA1withECDSA: "1.2.840.10045.4.1",
              SHA224withECDSA: "1.2.840.10045.4.3.1",
              SHA256withECDSA: "1.2.840.10045.4.3.2",
              SHA384withECDSA: "1.2.840.10045.4.3.3",
              SHA512withECDSA: "1.2.840.10045.4.3.4",
              dsa: "1.2.840.10040.4.1",
              SHA1withDSA: "1.2.840.10040.4.3",
              SHA224withDSA: "2.16.840.1.101.3.4.3.1",
              SHA256withDSA: "2.16.840.1.101.3.4.3.2",
              rsaEncryption: "1.2.840.113549.1.1.1",
              commonName: "2.5.4.3",
              countryName: "2.5.4.6",
              localityName: "2.5.4.7",
              stateOrProvinceName: "2.5.4.8",
              streetAddress: "2.5.4.9",
              organizationName: "2.5.4.10",
              organizationalUnitName: "2.5.4.11",
              domainComponent: "0.9.2342.19200300.100.1.25",
              userId: "0.9.2342.19200300.100.1.1",
              surname: "2.5.4.4",
              title: "2.5.4.12",
              distinguishedName: "2.5.4.49",
              emailAddress: "1.2.840.113549.1.9.1",
              description: "2.5.4.13",
              businessCategory: "2.5.4.15",
              postalCode: "2.5.4.17",
              uniqueIdentifier: "2.5.4.45",
              organizationIdentifier: "2.5.4.97",
              jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
              jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
              jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
              subjectKeyIdentifier: "2.5.29.14",
              keyUsage: "2.5.29.15",
              subjectAltName: "2.5.29.17",
              issuerAltName: "2.5.29.18",
              basicConstraints: "2.5.29.19",
              cRLNumber: "2.5.29.20",
              cRLReason: "2.5.29.21",
              nameConstraints: "2.5.29.30",
              cRLDistributionPoints: "2.5.29.31",
              certificatePolicies: "2.5.29.32",
              anyPolicy: "2.5.29.32.0",
              authorityKeyIdentifier: "2.5.29.35",
              policyConstraints: "2.5.29.36",
              extKeyUsage: "2.5.29.37",
              authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
              ocsp: "1.3.6.1.5.5.7.48.1",
              ocspBasic: "1.3.6.1.5.5.7.48.1.1",
              ocspNonce: "1.3.6.1.5.5.7.48.1.2",
              ocspNoCheck: "1.3.6.1.5.5.7.48.1.5",
              caIssuers: "1.3.6.1.5.5.7.48.2",
              anyExtendedKeyUsage: "2.5.29.37.0",
              serverAuth: "1.3.6.1.5.5.7.3.1",
              clientAuth: "1.3.6.1.5.5.7.3.2",
              codeSigning: "1.3.6.1.5.5.7.3.3",
              emailProtection: "1.3.6.1.5.5.7.3.4",
              timeStamping: "1.3.6.1.5.5.7.3.8",
              ocspSigning: "1.3.6.1.5.5.7.3.9",
              ecPublicKey: "1.2.840.10045.2.1",
              secp256r1: "1.2.840.10045.3.1.7",
              secp256k1: "1.3.132.0.10",
              secp384r1: "1.3.132.0.34",
              pkcs5PBES2: "1.2.840.113549.1.5.13",
              pkcs5PBKDF2: "1.2.840.113549.1.5.12",
              "des-EDE3-CBC": "1.2.840.113549.3.7",
              data: "1.2.840.113549.1.7.1",
              "signed-data": "1.2.840.113549.1.7.2",
              "enveloped-data": "1.2.840.113549.1.7.3",
              "digested-data": "1.2.840.113549.1.7.5",
              "encrypted-data": "1.2.840.113549.1.7.6",
              "authenticated-data": "1.2.840.113549.1.9.16.1.2",
              tstinfo: "1.2.840.113549.1.9.16.1.4",
              signingCertificate: "1.2.840.113549.1.9.16.2.12",
              timeStampToken: "1.2.840.113549.1.9.16.2.14",
              etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27",
              signingCertificateV2: "1.2.840.113549.1.9.16.2.47",
              etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48",
              extensionRequest: "1.2.840.113549.1.9.14",
              contentType: "1.2.840.113549.1.9.3",
              messageDigest: "1.2.840.113549.1.9.4",
              signingTime: "1.2.840.113549.1.9.5",
              counterSignature: "1.2.840.113549.1.9.6",
              archiveTimeStampV3: "0.4.0.1733.2.4",
              pdfRevocationInfoArchival: "1.2.840.113583.1.1.8",
            }),
            (this.objCache = {}),
            (this.name2obj = function (t) {
              if ("undefined" != typeof this.objCache[t])
                return this.objCache[t];
              if ("undefined" == typeof this.name2oidList[t])
                throw "Name of ObjectIdentifier not defined: " + t;
              var e = this.name2oidList[t],
                i = new Z.asn1.DERObjectIdentifier({
                  oid: e,
                });
              return ((this.objCache[t] = i), i);
            }),
            (this.atype2obj = function (t) {
              if ("undefined" != typeof this.objCache[t])
                return this.objCache[t];
              if ("undefined" == typeof this.atype2oidList[t])
                throw "AttributeType name undefined: " + t;
              var e = this.atype2oidList[t],
                i = new Z.asn1.DERObjectIdentifier({
                  oid: e,
                });
              return ((this.objCache[t] = i), i);
            }));
        })()),
        (Z.asn1.x509.OID.oid2name = function (t) {
          var e = Z.asn1.x509.OID.name2oidList;
          for (var i in e) if (e[i] == t) return i;
          return "";
        }),
        (Z.asn1.x509.OID.oid2atype = function (t) {
          var e = Z.asn1.x509.OID.atype2oidList;
          for (var i in e) if (e[i] == t) return i;
          return t;
        }),
        (Z.asn1.x509.OID.name2oid = function (t) {
          if (t.match(/^[0-9.]+$/)) return t;
          var e = Z.asn1.x509.OID.name2oidList;
          return void 0 === e[t] ? "" : e[t];
        }),
        (Z.asn1.x509.X509Util = {}),
        (Z.asn1.x509.X509Util.newCertPEM = function (t) {
          var e = Z.asn1.x509;
          e.TBSCertificate;
          return new (0, e.Certificate)(t).getPEM();
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        ("undefined" != typeof Z.asn1.cms && Z.asn1.cms) || (Z.asn1.cms = {}),
        (Z.asn1.cms.Attribute = function (t) {
          var e = Z.asn1;
          (e.cms.Attribute.superclass.constructor.call(this),
            (this.getEncodedHex = function () {
              var t, i, r;
              ((t = new e.DERObjectIdentifier({
                oid: this.attrTypeOid,
              })),
                (i = new e.DERSet({
                  array: this.valueList,
                })));
              try {
                i.getEncodedHex();
              } catch (n) {
                throw "fail valueSet.getEncodedHex in Attribute(1)/" + n;
              }
              r = new e.DERSequence({
                array: [t, i],
              });
              try {
                this.hTLV = r.getEncodedHex();
              } catch (n) {
                throw "failed seq.getEncodedHex in Attribute(2)/" + n;
              }
              return this.hTLV;
            }));
        }),
        n.lang.extend(Z.asn1.cms.Attribute, Z.asn1.ASN1Object),
        (Z.asn1.cms.ContentType = function (t) {
          var e = Z.asn1;
          (e.cms.ContentType.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.3"));
          var i = null;
          if ("undefined" != typeof t) {
            i = new e.DERObjectIdentifier(t);
            this.valueList = [i];
          }
        }),
        n.lang.extend(Z.asn1.cms.ContentType, Z.asn1.cms.Attribute),
        (Z.asn1.cms.MessageDigest = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.DEROctetString,
            n = i.cms;
          if (
            (n.MessageDigest.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.4"),
            void 0 !== t)
          )
            if (
              t.eciObj instanceof n.EncapsulatedContentInfo &&
              "string" === typeof t.hashAlg
            ) {
              var s = t.eciObj.eContentValueHex,
                a = t.hashAlg;
              ((o = new r({
                hex: e.crypto.Util.hashHex(s, a),
              })).getEncodedHex(),
                (this.valueList = [o]));
            } else {
              var o;
              ((o = new r(t)).getEncodedHex(), (this.valueList = [o]));
            }
        }),
        n.lang.extend(Z.asn1.cms.MessageDigest, Z.asn1.cms.Attribute),
        (Z.asn1.cms.SigningTime = function (t) {
          var e = Z.asn1;
          if (
            (e.cms.SigningTime.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.5"),
            void 0 !== t)
          ) {
            var i = new e.x509.Time(t);
            try {
              i.getEncodedHex();
            } catch (r) {
              throw "SigningTime.getEncodedHex() failed/" + r;
            }
            this.valueList = [i];
          }
        }),
        n.lang.extend(Z.asn1.cms.SigningTime, Z.asn1.cms.Attribute),
        (Z.asn1.cms.SigningCertificate = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.DERSequence,
            n = i.cms;
          e.crypto;
          (n.SigningCertificate.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.16.2.12"),
            (this.setCerts = function (t) {
              for (var s = [], a = 0; a < t.length; a++) {
                var o = mt(t[a]),
                  h = e.crypto.Util.hashHex(o, "sha1"),
                  u = new i.DEROctetString({
                    hex: h,
                  });
                u.getEncodedHex();
                var c = new n.IssuerSerial({
                  cert: t[a],
                });
                c.getEncodedHex();
                var l = new r({
                  array: [u, c],
                });
                (l.getEncodedHex(), s.push(l));
              }
              var f = new r({
                array: [
                  new r({
                    array: s,
                  }),
                ],
              });
              (f.getEncodedHex(), (this.valueList = [f]));
            }),
            void 0 !== t &&
              "object" == typeof t.array &&
              this.setCerts(t.array));
        }),
        n.lang.extend(Z.asn1.cms.SigningCertificate, Z.asn1.cms.Attribute),
        (Z.asn1.cms.SigningCertificateV2 = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.DERSequence,
            n = i.x509,
            s = i.cms,
            a = e.crypto;
          if (
            (s.SigningCertificateV2.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.16.2.47"),
            (this.setCerts = function (t, e) {
              for (var o = [], h = 0; h < t.length; h++) {
                var u = mt(t[h]),
                  c = [];
                "sha256" !== e &&
                  c.push(
                    new n.AlgorithmIdentifier({
                      name: e,
                    }),
                  );
                var l = a.Util.hashHex(u, e),
                  f = new i.DEROctetString({
                    hex: l,
                  });
                (f.getEncodedHex(), c.push(f));
                var d = new s.IssuerSerial({
                  cert: t[h],
                });
                (d.getEncodedHex(), c.push(d));
                var g = new r({
                  array: c,
                });
                (g.getEncodedHex(), o.push(g));
              }
              var p = new r({
                array: [
                  new r({
                    array: o,
                  }),
                ],
              });
              (p.getEncodedHex(), (this.valueList = [p]));
            }),
            void 0 !== t && "object" == typeof t.array)
          ) {
            var o = "sha256";
            ("string" == typeof t.hashAlg && (o = t.hashAlg),
              this.setCerts(t.array, o));
          }
        }),
        n.lang.extend(Z.asn1.cms.SigningCertificateV2, Z.asn1.cms.Attribute),
        (Z.asn1.cms.IssuerSerial = function (t) {
          var e = Z.asn1,
            i = e.DERInteger,
            r = e.cms,
            n = e.x509,
            s = n.X500Name,
            a = n.GeneralNames,
            o = Nt;
          r.IssuerSerial.superclass.constructor.call(this);
          ((this.setByCertPEM = function (t) {
            var e = mt(t),
              r = new o();
            r.hex = e;
            var n = r.getIssuerHex();
            ((this.dIssuer = new s()), (this.dIssuer.hTLV = n));
            var a = r.getSerialNumberHex();
            this.dSerial = new i({
              hex: a,
            });
          }),
            (this.getEncodedHex = function () {
              var t = new a([
                  {
                    dn: this.dIssuer,
                  },
                ]),
                i = new e.DERSequence({
                  array: [t, this.dSerial],
                });
              return ((this.hTLV = i.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("string" == typeof t &&
                -1 != t.indexOf("-----BEGIN ") &&
                this.setByCertPEM(t),
              t.issuer &&
                t.serial &&
                (t.issuer instanceof s
                  ? (this.dIssuer = t.issuer)
                  : (this.dIssuer = new s(t.issuer)),
                t.serial instanceof i
                  ? (this.dSerial = t.serial)
                  : (this.dSerial = new i(t.serial))),
              "string" == typeof t.cert && this.setByCertPEM(t.cert)));
        }),
        n.lang.extend(Z.asn1.cms.IssuerSerial, Z.asn1.ASN1Object),
        (Z.asn1.cms.IssuerAndSerialNumber = function (t) {
          var e = Z.asn1,
            i = e.DERInteger,
            r = e.cms,
            n = e.x509.X500Name,
            s = Nt;
          r.IssuerAndSerialNumber.superclass.constructor.call(this);
          ((this.setByCertPEM = function (t) {
            var e = mt(t),
              r = new s();
            r.hex = e;
            var a = r.getIssuerHex();
            ((this.dIssuer = new n()), (this.dIssuer.hTLV = a));
            var o = r.getSerialNumberHex();
            this.dSerial = new i({
              hex: o,
            });
          }),
            (this.getEncodedHex = function () {
              var t = new e.DERSequence({
                array: [this.dIssuer, this.dSerial],
              });
              return ((this.hTLV = t.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("string" == typeof t &&
                -1 != t.indexOf("-----BEGIN ") &&
                this.setByCertPEM(t),
              t.issuer &&
                t.serial &&
                (t.issuer instanceof n
                  ? (this.dIssuer = t.issuer)
                  : (this.dIssuer = new n(t.issuer)),
                t.serial instanceof i
                  ? (this.dSerial = t.serial)
                  : (this.dSerial = new i(t.serial))),
              "string" == typeof t.cert && this.setByCertPEM(t.cert)));
        }),
        n.lang.extend(Z.asn1.cms.IssuerAndSerialNumber, Z.asn1.ASN1Object),
        (Z.asn1.cms.AttributeList = function (t) {
          var e = Z.asn1,
            i = e.cms;
          (i.AttributeList.superclass.constructor.call(this),
            (this.list = new Array()),
            (this.sortFlag = !0),
            (this.add = function (t) {
              t instanceof i.Attribute && this.list.push(t);
            }),
            (this.length = function () {
              return this.list.length;
            }),
            (this.clear = function () {
              ((this.list = new Array()), (this.hTLV = null), (this.hV = null));
            }),
            (this.getEncodedHex = function () {
              if ("string" == typeof this.hTLV) return this.hTLV;
              var t = new e.DERSet({
                array: this.list,
                sortflag: this.sortFlag,
              });
              return ((this.hTLV = t.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              "undefined" != typeof t.sortflag &&
              0 == t.sortflag &&
              (this.sortFlag = !1));
        }),
        n.lang.extend(Z.asn1.cms.AttributeList, Z.asn1.ASN1Object),
        (Z.asn1.cms.SignerInfo = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.DERTaggedObject,
            n = i.cms,
            s = n.AttributeList,
            a = n.ContentType,
            o = n.EncapsulatedContentInfo,
            h = n.MessageDigest,
            u = n.SignedData,
            c = i.x509.AlgorithmIdentifier,
            l = e.crypto,
            f = Pt;
          (n.SignerInfo.superclass.constructor.call(this),
            (this.dCMSVersion = new i.DERInteger({
              int: 1,
            })),
            (this.dSignerIdentifier = null),
            (this.dDigestAlgorithm = null),
            (this.dSignedAttrs = new s()),
            (this.dSigAlg = null),
            (this.dSig = null),
            (this.dUnsignedAttrs = new s()),
            (this.setSignerIdentifier = function (t) {
              if (
                "string" == typeof t &&
                -1 != t.indexOf("CERTIFICATE") &&
                -1 != t.indexOf("BEGIN") &&
                -1 != t.indexOf("END")
              ) {
                this.dSignerIdentifier = new n.IssuerAndSerialNumber({
                  cert: t,
                });
              }
            }),
            (this.setForContentAndHash = function (t) {
              var e = "data";
              (void 0 !== t.contentType && (e = t.contentType),
                void 0 !== t &&
                  (t.eciObj instanceof o &&
                    (this.dSignedAttrs.add(new a(e)),
                    this.dSignedAttrs.add(
                      new h({
                        eciObj: t.eciObj,
                        hashAlg: t.hashAlg,
                      }),
                    )),
                  void 0 !== t.sdObj &&
                    t.sdObj instanceof u &&
                    -1 ==
                      t.sdObj.digestAlgNameList.join(":").indexOf(t.hashAlg) &&
                    t.sdObj.digestAlgNameList.push(t.hashAlg),
                  "string" == typeof t.hashAlg &&
                    (this.dDigestAlgorithm = new c({
                      name: t.hashAlg,
                    }))));
            }),
            (this.sign = function (t, e) {
              this.dSigAlg = new c({
                name: e,
              });
              var r = this.dSignedAttrs.getEncodedHex(),
                n = f.getKey(t),
                s = new l.Signature({
                  alg: e,
                });
              (s.init(n), s.updateHex(r));
              var a = s.sign();
              this.dSig = new i.DEROctetString({
                hex: a,
              });
            }),
            (this.addUnsigned = function (t) {
              ((this.hTLV = null),
                (this.dUnsignedAttrs.hTLV = null),
                this.dUnsignedAttrs.add(t));
            }),
            (this.getEncodedHex = function () {
              if (
                this.dSignedAttrs instanceof s &&
                0 == this.dSignedAttrs.length()
              )
                throw "SignedAttrs length = 0 (empty)";
              var t = new r({
                  obj: this.dSignedAttrs,
                  tag: "a0",
                  explicit: !1,
                }),
                e = null;
              this.dUnsignedAttrs.length() > 0 &&
                (e = new r({
                  obj: this.dUnsignedAttrs,
                  tag: "a1",
                  explicit: !1,
                }));
              var n = [
                this.dCMSVersion,
                this.dSignerIdentifier,
                this.dDigestAlgorithm,
                t,
                this.dSigAlg,
                this.dSig,
              ];
              null != e && n.push(e);
              var a = new i.DERSequence({
                array: n,
              });
              return ((this.hTLV = a.getEncodedHex()), this.hTLV);
            }));
        }),
        n.lang.extend(Z.asn1.cms.SignerInfo, Z.asn1.ASN1Object),
        (Z.asn1.cms.EncapsulatedContentInfo = function (t) {
          var e = Z.asn1,
            i = e.DERTaggedObject,
            r = e.DERSequence,
            n = e.DERObjectIdentifier,
            s = e.DEROctetString;
          (e.cms.EncapsulatedContentInfo.superclass.constructor.call(this),
            (this.dEContentType = new n({
              name: "data",
            })),
            (this.dEContent = null),
            (this.isDetached = !1),
            (this.eContentValueHex = null),
            (this.setContentType = function (t) {
              t.match(/^[0-2][.][0-9.]+$/)
                ? (this.dEContentType = new n({
                    oid: t,
                  }))
                : (this.dEContentType = new n({
                    name: t,
                  }));
            }),
            (this.setContentValue = function (t) {
              void 0 !== t &&
                ("string" == typeof t.hex
                  ? (this.eContentValueHex = t.hex)
                  : "string" == typeof t.str &&
                    (this.eContentValueHex = ct(t.str)));
            }),
            (this.setContentValueHex = function (t) {
              this.eContentValueHex = t;
            }),
            (this.setContentValueStr = function (t) {
              this.eContentValueHex = ct(t);
            }),
            (this.getEncodedHex = function () {
              if ("string" != typeof this.eContentValueHex)
                throw "eContentValue not yet set";
              var t = new s({
                hex: this.eContentValueHex,
              });
              this.dEContent = new i({
                obj: t,
                tag: "a0",
                explicit: !0,
              });
              var e = [this.dEContentType];
              this.isDetached || e.push(this.dEContent);
              var n = new r({
                array: e,
              });
              return ((this.hTLV = n.getEncodedHex()), this.hTLV);
            }));
        }),
        n.lang.extend(Z.asn1.cms.EncapsulatedContentInfo, Z.asn1.ASN1Object),
        (Z.asn1.cms.ContentInfo = function (t) {
          var e = Z.asn1,
            i = e.DERTaggedObject,
            r = e.DERSequence,
            n = e.x509;
          (Z.asn1.cms.ContentInfo.superclass.constructor.call(this),
            (this.dContentType = null),
            (this.dContent = null),
            (this.setContentType = function (t) {
              "string" == typeof t && (this.dContentType = n.OID.name2obj(t));
            }),
            (this.getEncodedHex = function () {
              var t = new i({
                  obj: this.dContent,
                  tag: "a0",
                  explicit: !0,
                }),
                e = new r({
                  array: [this.dContentType, t],
                });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              (t.type && this.setContentType(t.type),
              t.obj &&
                t.obj instanceof e.ASN1Object &&
                (this.dContent = t.obj)));
        }),
        n.lang.extend(Z.asn1.cms.ContentInfo, Z.asn1.ASN1Object),
        (Z.asn1.cms.SignedData = function (t) {
          var e = Z.asn1,
            i = e.ASN1Object,
            r = e.DERInteger,
            n = e.DERSet,
            s = e.DERSequence,
            a = e.DERTaggedObject,
            o = e.cms,
            h = o.EncapsulatedContentInfo,
            u = o.SignerInfo,
            c = o.ContentInfo,
            l = e.x509.AlgorithmIdentifier;
          (Z.asn1.cms.SignedData.superclass.constructor.call(this),
            (this.dCMSVersion = new r({
              int: 1,
            })),
            (this.dDigestAlgs = null),
            (this.digestAlgNameList = []),
            (this.dEncapContentInfo = new h()),
            (this.dCerts = null),
            (this.certificateList = []),
            (this.crlList = []),
            (this.signerInfoList = [new u()]),
            (this.addCertificatesByPEM = function (t) {
              var e = mt(t),
                r = new i();
              ((r.hTLV = e), this.certificateList.push(r));
            }),
            (this.getEncodedHex = function () {
              if ("string" == typeof this.hTLV) return this.hTLV;
              if (null == this.dDigestAlgs) {
                for (
                  var t = [], e = 0;
                  e < this.digestAlgNameList.length;
                  e++
                ) {
                  var i = this.digestAlgNameList[e],
                    r = new l({
                      name: i,
                    });
                  t.push(r);
                }
                this.dDigestAlgs = new n({
                  array: t,
                });
              }
              var o = [
                this.dCMSVersion,
                this.dDigestAlgs,
                this.dEncapContentInfo,
              ];
              if (null == this.dCerts && this.certificateList.length > 0) {
                var h = new n({
                  array: this.certificateList,
                });
                this.dCerts = new a({
                  obj: h,
                  tag: "a0",
                  explicit: !1,
                });
              }
              null != this.dCerts && o.push(this.dCerts);
              var u = new n({
                array: this.signerInfoList,
              });
              o.push(u);
              var c = new s({
                array: o,
              });
              return ((this.hTLV = c.getEncodedHex()), this.hTLV);
            }),
            (this.getContentInfo = function () {
              return (
                this.getEncodedHex(),
                new c({
                  type: "signed-data",
                  obj: this,
                })
              );
            }),
            (this.getContentInfoEncodedHex = function () {
              return this.getContentInfo().getEncodedHex();
            }),
            (this.getPEM = function () {
              return vt(this.getContentInfoEncodedHex(), "CMS");
            }));
        }),
        n.lang.extend(Z.asn1.cms.SignedData, Z.asn1.ASN1Object),
        (Z.asn1.cms.CMSUtil = new (function () {})()),
        (Z.asn1.cms.CMSUtil.newSignedData = function (t) {
          var e = Z.asn1,
            i = e.cms,
            r = i.SignerInfo,
            n = i.SignedData,
            s = i.SigningTime,
            a = i.SigningCertificate,
            o = i.SigningCertificateV2,
            h = e.cades.SignaturePolicyIdentifier,
            u = new n();
          if (
            (u.dEncapContentInfo.setContentValue(t.content),
            "boolean" == typeof t.detached &&
              (u.dEncapContentInfo.isDetached = t.detached),
            "object" == typeof t.certs)
          )
            for (var c = 0; c < t.certs.length; c++)
              u.addCertificatesByPEM(t.certs[c]);
          u.signerInfoList = [];
          for (c = 0; c < t.signerInfos.length; c++) {
            var l = t.signerInfos[c],
              f = new r();
            for (attrName in (f.setSignerIdentifier(l.signerCert),
            f.setForContentAndHash({
              sdObj: u,
              eciObj: u.dEncapContentInfo,
              hashAlg: l.hashAlg,
            }),
            l.sAttr)) {
              var d = l.sAttr[attrName];
              if ("SigningTime" == attrName) {
                var g = new s(d);
                f.dSignedAttrs.add(g);
              }
              if ("SigningCertificate" == attrName) {
                g = new a(d);
                f.dSignedAttrs.add(g);
              }
              if ("SigningCertificateV2" == attrName) {
                g = new o(d);
                f.dSignedAttrs.add(g);
              }
              if ("SignaturePolicyIdentifier" == attrName) {
                g = new h(d);
                f.dSignedAttrs.add(g);
              }
            }
            (f.sign(l.signerPrvKey, l.sigAlg), u.signerInfoList.push(f));
          }
          return u;
        }),
        (Z.asn1.cms.CMSUtil.verifySignedData = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.cms,
            n =
              (r.SignerInfo,
              r.SignedData,
              r.SigningTime,
              r.SigningCertificate,
              r.SigningCertificateV2,
              i.cades.SignaturePolicyIdentifier,
              e.lang.String.isHex),
            s = et,
            a = s.getVbyList,
            o = s.getTLVbyList,
            h = s.getIdxbyList,
            u = s.getChildIdx,
            c = s.getTLV,
            l = s.oidname,
            f = e.crypto.Util.hashHex;
          void 0 === t.cms && n(t.cms);
          var d = t.cms,
            g = function (t, e) {
              var i = e.idx;
              ((e.signerid_issuer1 = o(t, i, [1, 0], "30")),
                (e.signerid_serial1 = a(t, i, [1, 1], "02")),
                (e.hashalg = l(a(t, i, [2, 0], "06"))));
              var r = h(t, i, [3], "a0");
              ((e.idxSignedAttrs = r), p(t, e, r));
              var n = u(t, i).length;
              if (n < 6) throw "malformed SignerInfo";
              ((e.sigalg = l(a(t, i, [n - 2, 0], "06"))),
                (e.sigval = a(t, i, [n - 1], "04")));
            },
            p = function (t, e, i) {
              var r = u(t, i);
              e.signedAttrIdxList = r;
              for (var n = 0; n < r.length; n++) {
                var s,
                  o = r[n],
                  h = a(t, o, [0], "06");
                "2a864886f70d010905" === h
                  ? ((s = lt(a(t, o, [1, 0]))), (e.saSigningTime = s))
                  : "2a864886f70d010904" === h &&
                    ((s = a(t, o, [1, 0], "04")), (e.saMessageDigest = s));
              }
            },
            y = function (t, e, i, r) {
              i.verifyDetail = {};
              var n = i.verifyDetail,
                s = e.parse.econtent,
                a = i.hashalg,
                o = i.saMessageDigest;
              ((n.validMessageDigest = !1),
                f(s, a) === o && (n.validMessageDigest = !0),
                (function (t, e, i, r) {
                  var n,
                    s = e.parse.certsIdx;
                  if (void 0 === e.certs) {
                    ((n = []), (e.certkeys = []));
                    for (var a = u(t, s), o = 0; o < a.length; o++) {
                      var h = c(t, a[o]),
                        l = new Nt();
                      (l.readCertHex(h),
                        (n[o] = l),
                        (e.certkeys[o] = l.getPublicKey()));
                    }
                    e.certs = n;
                  } else n = e.certs;
                  ((e.cccc = n.length), (e.cccci = a.length));
                  for (o = 0; o < n.length; o++) {
                    var f = l.getIssuerHex(),
                      d = l.getSerialNumberHex();
                    i.signerid_issuer1 === f &&
                      i.signerid_serial1 === d &&
                      (i.certkey_idx = o);
                  }
                })(t, e, i),
                (n.validSignatureValue = !1));
              var h = i.sigalg,
                l = "31" + c(t, i.idxSignedAttrs).substr(2);
              i.signedattrshex = l;
              var d = e.certs[i.certkey_idx].getPublicKey(),
                g = new Z.crypto.Signature({
                  alg: h,
                });
              (g.init(d), g.updateHex(l));
              var p = g.verify(i.sigval);
              ((n.validSignatureValue_isValid = p),
                !0 === p && (n.validSignatureValue = !0),
                (i.isValid = !1),
                n.validMessageDigest &&
                  n.validSignatureValue &&
                  (i.isValid = !0));
            },
            v = {
              isValid: !1,
              parse: {},
            };
          return (
            (function (t, e) {
              if ("2a864886f70d010702" !== a(t, 0, [0], "06")) return e;
              ((e.cmsType = "signedData"),
                (e.econtent = a(t, 0, [1, 0, 2, 1, 0])),
                (function (t, e) {
                  for (var i, r = 3; r < 6; r++)
                    if (void 0 !== (i = h(t, 0, [1, 0, r]))) {
                      var n = t.substr(i, 2);
                      ("a0" === n && (e.certsIdx = i),
                        "a1" === n && (e.revinfosIdx = i),
                        "31" === n && (e.signerinfosIdx = i));
                    }
                })(t, e),
                (e.signerInfos = []),
                (function (t, e) {
                  var i = e.signerinfosIdx;
                  if (void 0 !== i) {
                    var r = u(t, i);
                    e.signerInfoIdxList = r;
                    for (var n = 0; n < r.length; n++) {
                      var s = {
                        idx: r[n],
                      };
                      (g(t, s), e.signerInfos.push(s));
                    }
                  }
                })(t, e));
            })(d, v.parse),
            (function (t, e) {
              for (
                var i = e.parse.signerInfos, r = i.length, n = !0, s = 0;
                s < r;
                s++
              ) {
                var a = i[s];
                (y(t, e, a, s), a.isValid || (n = !1));
              }
              e.isValid = n;
            })(d, v),
            v
          );
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        ("undefined" != typeof Z.asn1.tsp && Z.asn1.tsp) || (Z.asn1.tsp = {}),
        (Z.asn1.tsp.Accuracy = function (t) {
          var e = Z.asn1,
            i = e.DERInteger,
            r = e.DERSequence,
            n = e.DERTaggedObject;
          (e.tsp.Accuracy.superclass.constructor.call(this),
            (this.seconds = null),
            (this.millis = null),
            (this.micros = null),
            (this.getEncodedHex = function () {
              var t = null,
                e = null,
                s = null,
                a = [];
              if (
                (null != this.seconds &&
                  ((t = new i({
                    int: this.seconds,
                  })),
                  a.push(t)),
                null != this.millis)
              ) {
                var o = new i({
                  int: this.millis,
                });
                ((e = new n({
                  obj: o,
                  tag: "80",
                  explicit: !1,
                })),
                  a.push(e));
              }
              if (null != this.micros) {
                var h = new i({
                  int: this.micros,
                });
                ((s = new n({
                  obj: h,
                  tag: "81",
                  explicit: !1,
                })),
                  a.push(s));
              }
              var u = new r({
                array: a,
              });
              return ((this.hTLV = u.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("number" == typeof t.seconds && (this.seconds = t.seconds),
              "number" == typeof t.millis && (this.millis = t.millis),
              "number" == typeof t.micros && (this.micros = t.micros)));
        }),
        n.lang.extend(Z.asn1.tsp.Accuracy, Z.asn1.ASN1Object),
        (Z.asn1.tsp.MessageImprint = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DEROctetString,
            n = e.x509.AlgorithmIdentifier;
          (e.tsp.MessageImprint.superclass.constructor.call(this),
            (this.dHashAlg = null),
            (this.dHashValue = null),
            (this.getEncodedHex = function () {
              return "string" == typeof this.hTLV
                ? this.hTLV
                : new i({
                    array: [this.dHashAlg, this.dHashValue],
                  }).getEncodedHex();
            }),
            void 0 !== t &&
              ("string" == typeof t.hashAlg &&
                (this.dHashAlg = new n({
                  name: t.hashAlg,
                })),
              "string" == typeof t.hashValue &&
                (this.dHashValue = new r({
                  hex: t.hashValue,
                }))));
        }),
        n.lang.extend(Z.asn1.tsp.MessageImprint, Z.asn1.ASN1Object),
        (Z.asn1.tsp.TimeStampReq = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERInteger,
            n = e.DERBoolean,
            s = e.DERObjectIdentifier,
            a = e.tsp,
            o = a.MessageImprint;
          (a.TimeStampReq.superclass.constructor.call(this),
            (this.dVersion = new r({
              int: 1,
            })),
            (this.dMessageImprint = null),
            (this.dPolicy = null),
            (this.dNonce = null),
            (this.certReq = !0),
            (this.setMessageImprint = function (t) {
              t instanceof o
                ? (this.dMessageImprint = t)
                : "object" == typeof t && (this.dMessageImprint = new o(t));
            }),
            (this.getEncodedHex = function () {
              if (null == this.dMessageImprint)
                throw "messageImprint shall be specified";
              var t = [this.dVersion, this.dMessageImprint];
              (null != this.dPolicy && t.push(this.dPolicy),
                null != this.dNonce && t.push(this.dNonce),
                this.certReq && t.push(new n()));
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("object" == typeof t.mi && this.setMessageImprint(t.mi),
              "object" == typeof t.policy && (this.dPolicy = new s(t.policy)),
              "object" == typeof t.nonce && (this.dNonce = new r(t.nonce)),
              "boolean" == typeof t.certreq && (this.certReq = t.certreq)));
        }),
        n.lang.extend(Z.asn1.tsp.TimeStampReq, Z.asn1.ASN1Object),
        (Z.asn1.tsp.TSTInfo = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERInteger,
            n = e.DERBoolean,
            s = e.DERGeneralizedTime,
            a = e.DERObjectIdentifier,
            o = e.DERTaggedObject,
            h = e.tsp,
            u = h.MessageImprint,
            c = h.Accuracy,
            l = (e.x509.X500Name, e.x509.GeneralName);
          if (
            (h.TSTInfo.superclass.constructor.call(this),
            (this.dVersion = new r({
              int: 1,
            })),
            (this.dPolicy = null),
            (this.dMessageImprint = null),
            (this.dSerialNumber = null),
            (this.dGenTime = null),
            (this.dAccuracy = null),
            (this.dOrdering = null),
            (this.dNonce = null),
            (this.dTsa = null),
            (this.getEncodedHex = function () {
              var t = [this.dVersion];
              if (null == this.dPolicy) throw "policy shall be specified.";
              if ((t.push(this.dPolicy), null == this.dMessageImprint))
                throw "messageImprint shall be specified.";
              if ((t.push(this.dMessageImprint), null == this.dSerialNumber))
                throw "serialNumber shall be specified.";
              if ((t.push(this.dSerialNumber), null == this.dGenTime))
                throw "genTime shall be specified.";
              (t.push(this.dGenTime),
                null != this.dAccuracy && t.push(this.dAccuracy),
                null != this.dOrdering && t.push(this.dOrdering),
                null != this.dNonce && t.push(this.dNonce),
                null != this.dTsa && t.push(this.dTsa));
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t)
          ) {
            if ("string" == typeof t.policy) {
              if (!t.policy.match(/^[0-9.]+$/))
                throw "policy shall be oid like 0.1.4.134";
              this.dPolicy = new a({
                oid: t.policy,
              });
            }
            (void 0 !== t.messageImprint &&
              (this.dMessageImprint = new u(t.messageImprint)),
              void 0 !== t.serialNumber &&
                (this.dSerialNumber = new r(t.serialNumber)),
              void 0 !== t.genTime && (this.dGenTime = new s(t.genTime)),
              void 0 !== t.accuracy && (this.dAccuracy = new c(t.accuracy)),
              void 0 !== t.ordering &&
                1 == t.ordering &&
                (this.dOrdering = new n()),
              void 0 !== t.nonce && (this.dNonce = new r(t.nonce)),
              void 0 !== t.tsa &&
                (this.dTsa = new o({
                  tag: "a0",
                  explicit: !0,
                  obj: new l({
                    dn: t.tsa,
                  }),
                })));
          }
        }),
        n.lang.extend(Z.asn1.tsp.TSTInfo, Z.asn1.ASN1Object),
        (Z.asn1.tsp.TimeStampResp = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.ASN1Object,
            n = e.tsp,
            s = n.PKIStatusInfo;
          (n.TimeStampResp.superclass.constructor.call(this),
            (this.dStatus = null),
            (this.dTST = null),
            (this.getEncodedHex = function () {
              if (null == this.dStatus) throw "status shall be specified";
              var t = [this.dStatus];
              null != this.dTST && t.push(this.dTST);
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("object" == typeof t.status && (this.dStatus = new s(t.status)),
              void 0 !== t.tst &&
                t.tst instanceof r &&
                (this.dTST = t.tst.getContentInfo())));
        }),
        n.lang.extend(Z.asn1.tsp.TimeStampResp, Z.asn1.ASN1Object),
        (Z.asn1.tsp.PKIStatusInfo = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.tsp,
            n = r.PKIStatus,
            s = r.PKIFreeText,
            a = r.PKIFailureInfo;
          (r.PKIStatusInfo.superclass.constructor.call(this),
            (this.dStatus = null),
            (this.dStatusString = null),
            (this.dFailureInfo = null),
            (this.getEncodedHex = function () {
              if (null == this.dStatus) throw "status shall be specified";
              var t = [this.dStatus];
              (null != this.dStatusString && t.push(this.dStatusString),
                null != this.dFailureInfo && t.push(this.dFailureInfo));
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("object" == typeof t.status && (this.dStatus = new n(t.status)),
              "object" == typeof t.statstr &&
                (this.dStatusString = new s({
                  array: t.statstr,
                })),
              "object" == typeof t.failinfo &&
                (this.dFailureInfo = new a(t.failinfo))));
        }),
        n.lang.extend(Z.asn1.tsp.PKIStatusInfo, Z.asn1.ASN1Object),
        (Z.asn1.tsp.PKIStatus = function (t) {
          var e = Z.asn1,
            i = e.DERInteger,
            r = e.tsp,
            n = r.PKIStatus;
          r.PKIStatus.superclass.constructor.call(this);
          if (
            ((this.getEncodedHex = function () {
              return ((this.hTLV = this.dStatus.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t)
          )
            if (void 0 !== t.name) {
              var s = n.valueList;
              if (void 0 === s[t.name]) throw "name undefined: " + t.name;
              this.dStatus = new i({
                int: s[t.name],
              });
            } else this.dStatus = new i(t);
        }),
        n.lang.extend(Z.asn1.tsp.PKIStatus, Z.asn1.ASN1Object),
        (Z.asn1.tsp.PKIStatus.valueList = {
          granted: 0,
          grantedWithMods: 1,
          rejection: 2,
          waiting: 3,
          revocationWarning: 4,
          revocationNotification: 5,
        }),
        (Z.asn1.tsp.PKIFreeText = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERUTF8String;
          (e.tsp.PKIFreeText.superclass.constructor.call(this),
            (this.textList = []),
            (this.getEncodedHex = function () {
              for (var t = [], e = 0; e < this.textList.length; e++)
                t.push(
                  new r({
                    str: this.textList[e],
                  }),
                );
              var n = new i({
                array: t,
              });
              return ((this.hTLV = n.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              "object" == typeof t.array &&
              (this.textList = t.array));
        }),
        n.lang.extend(Z.asn1.tsp.PKIFreeText, Z.asn1.ASN1Object),
        (Z.asn1.tsp.PKIFailureInfo = function (t) {
          var e = Z.asn1,
            i = e.DERBitString,
            r = e.tsp.PKIFailureInfo;
          if (
            (r.superclass.constructor.call(this),
            (this.value = null),
            (this.getEncodedHex = function () {
              if (null == this.value) throw "value shall be specified";
              var t = new Number(this.value).toString(2),
                e = new i();
              return (
                e.setByBinaryString(t),
                (this.hTLV = e.getEncodedHex()),
                this.hTLV
              );
            }),
            void 0 !== t)
          )
            if ("string" == typeof t.name) {
              var n = r.valueList;
              if (void 0 === n[t.name]) throw "name undefined: " + t.name;
              this.value = n[t.name];
            } else "number" == typeof t.int && (this.value = t.int);
        }),
        n.lang.extend(Z.asn1.tsp.PKIFailureInfo, Z.asn1.ASN1Object),
        (Z.asn1.tsp.PKIFailureInfo.valueList = {
          badAlg: 0,
          badRequest: 2,
          badDataFormat: 5,
          timeNotAvailable: 14,
          unacceptedPolicy: 15,
          unacceptedExtension: 16,
          addInfoNotAvailable: 17,
          systemFailure: 25,
        }),
        (Z.asn1.tsp.AbstractTSAAdapter = function (t) {
          this.getTSTHex = function (t, e) {
            throw "not implemented yet";
          };
        }),
        (Z.asn1.tsp.SimpleTSAAdapter = function (t) {
          var e = Z,
            i = e.asn1.tsp,
            r = e.crypto.Util.hashHex;
          (i.SimpleTSAAdapter.superclass.constructor.call(this),
            (this.params = null),
            (this.serial = 0),
            (this.getTSTHex = function (t, e) {
              var n = r(t, e);
              ((this.params.tstInfo.messageImprint = {
                hashAlg: e,
                hashValue: n,
              }),
                (this.params.tstInfo.serialNumber = {
                  int: this.serial++,
                }));
              var s = Math.floor(1e9 * Math.random());
              return (
                (this.params.tstInfo.nonce = {
                  int: s,
                }),
                i.TSPUtil.newTimeStampToken(
                  this.params,
                ).getContentInfoEncodedHex()
              );
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(
          Z.asn1.tsp.SimpleTSAAdapter,
          Z.asn1.tsp.AbstractTSAAdapter,
        ),
        (Z.asn1.tsp.FixedTSAAdapter = function (t) {
          var e = Z,
            i = e.asn1.tsp,
            r = e.crypto.Util.hashHex;
          (i.FixedTSAAdapter.superclass.constructor.call(this),
            (this.params = null),
            (this.getTSTHex = function (t, e) {
              var n = r(t, e);
              return (
                (this.params.tstInfo.messageImprint = {
                  hashAlg: e,
                  hashValue: n,
                }),
                i.TSPUtil.newTimeStampToken(
                  this.params,
                ).getContentInfoEncodedHex()
              );
            }),
            void 0 !== t && (this.params = t));
        }),
        n.lang.extend(
          Z.asn1.tsp.FixedTSAAdapter,
          Z.asn1.tsp.AbstractTSAAdapter,
        ),
        (Z.asn1.tsp.TSPUtil = new (function () {})()),
        (Z.asn1.tsp.TSPUtil.newTimeStampToken = function (t) {
          var e = Z,
            i = e.asn1,
            r = e.asn1.DERInteger,
            n = i.cms,
            s = (i.tsp, i.tsp.TSTInfo),
            a = new n.SignedData(),
            o = new s(t.tstInfo).getEncodedHex();
          if (
            ((a.dCMSVersion = new r({
              int: 3,
            })),
            a.dEncapContentInfo.setContentValue({
              hex: o,
            }),
            a.dEncapContentInfo.setContentType("tstinfo"),
            "object" == typeof t.certs)
          )
            for (var h = 0; h < t.certs.length; h++)
              a.addCertificatesByPEM(t.certs[h]);
          var u = a.signerInfoList[0];
          (u.setSignerIdentifier(t.signerCert),
            u.setForContentAndHash({
              sdObj: a,
              eciObj: a.dEncapContentInfo,
              contentType: "tstinfo",
              hashAlg: t.hashAlg,
            }));
          var c = new n.SigningCertificate({
            array: [t.signerCert],
          });
          return (u.dSignedAttrs.add(c), u.sign(t.signerPrvKey, t.sigAlg), a);
        }),
        (Z.asn1.tsp.TSPUtil.parseTimeStampReq = function (t) {
          var e = et,
            i = e.getChildIdx,
            r = e.getV,
            n = e.getTLV,
            s = {
              certreq: !1,
            },
            a = i(t, 0);
          if (a.length < 2) throw "TimeStampReq must have at least 2 items";
          var o = n(t, a[1]);
          s.mi = Z.asn1.tsp.TSPUtil.parseMessageImprint(o);
          for (var h = 2; h < a.length; h++) {
            var u = a[h],
              c = t.substr(u, 2);
            if ("06" == c) {
              var l = r(t, u);
              s.policy = e.hextooidstr(l);
            }
            ("02" == c && (s.nonce = r(t, u)), "01" == c && (s.certreq = !0));
          }
          return s;
        }),
        (Z.asn1.tsp.TSPUtil.parseMessageImprint = function (t) {
          var e = et,
            i = e.getChildIdx,
            r = e.getV,
            n = e.getIdxbyList,
            s = {};
          if ("30" != t.substr(0, 2))
            throw "head of messageImprint hex shall be '30'";
          i(t, 0);
          var a = r(t, n(t, 0, [0, 0])),
            o = e.hextooidstr(a),
            h = Z.asn1.x509.OID.oid2name(o);
          if ("" == h) throw "hashAlg name undefined: " + o;
          var u = h,
            c = n(t, 0, [1]);
          return ((s.hashAlg = u), (s.hashValue = r(t, c)), s);
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        ("undefined" != typeof Z.asn1.cades && Z.asn1.cades) ||
          (Z.asn1.cades = {}),
        (Z.asn1.cades.SignaturePolicyIdentifier = function (t) {
          var e = Z.asn1,
            i = e.DERObjectIdentifier,
            r = e.DERSequence,
            n = e.cades,
            s = n.OtherHashAlgAndValue;
          if (
            (n.SignaturePolicyIdentifier.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.16.2.15"),
            void 0 !== t &&
              "string" == typeof t.oid &&
              "object" == typeof t.hash)
          ) {
            var a = new r({
              array: [
                new i({
                  oid: t.oid,
                }),
                new s(t.hash),
              ],
            });
            this.valueList = [a];
          }
        }),
        n.lang.extend(
          Z.asn1.cades.SignaturePolicyIdentifier,
          Z.asn1.cms.Attribute,
        ),
        (Z.asn1.cades.OtherHashAlgAndValue = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DEROctetString,
            n = e.x509.AlgorithmIdentifier;
          (e.cades.OtherHashAlgAndValue.superclass.constructor.call(this),
            (this.dAlg = null),
            (this.dHash = null),
            (this.getEncodedHex = function () {
              var t = new i({
                array: [this.dAlg, this.dHash],
              });
              return ((this.hTLV = t.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              "string" == typeof t.alg &&
              "string" == typeof t.hash &&
              ((this.dAlg = new n({
                name: t.alg,
              })),
              (this.dHash = new r({
                hex: t.hash,
              }))));
        }),
        n.lang.extend(Z.asn1.cades.OtherHashAlgAndValue, Z.asn1.ASN1Object),
        (Z.asn1.cades.SignatureTimeStamp = function (t) {
          var e = Z.asn1,
            i = e.ASN1Object;
          e.x509;
          if (
            (e.cades.SignatureTimeStamp.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.16.2.14"),
            (this.tstHex = null),
            void 0 !== t)
          ) {
            if (void 0 !== t.res)
              if ("string" == typeof t.res && t.res.match(/^[0-9A-Fa-f]+$/));
              else if (!(t.res instanceof i))
                throw "res param shall be ASN1Object or hex string";
            if (void 0 !== t.tst)
              if ("string" == typeof t.tst && t.tst.match(/^[0-9A-Fa-f]+$/)) {
                var r = new i();
                ((this.tstHex = t.tst),
                  (r.hTLV = this.tstHex),
                  r.getEncodedHex(),
                  (this.valueList = [r]));
              } else if (!(t.tst instanceof i))
                throw "tst param shall be ASN1Object or hex string";
          }
        }),
        n.lang.extend(Z.asn1.cades.SignatureTimeStamp, Z.asn1.cms.Attribute),
        (Z.asn1.cades.CompleteCertificateRefs = function (t) {
          var e = Z.asn1.cades;
          (e.CompleteCertificateRefs.superclass.constructor.call(this),
            (this.attrTypeOid = "1.2.840.113549.1.9.16.2.21"),
            (this.setByArray = function (t) {
              this.valueList = [];
              for (var i = 0; i < t.length; i++) {
                var r = new e.OtherCertID(t[i]);
                this.valueList.push(r);
              }
            }),
            void 0 !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              this.setByArray(t));
        }),
        n.lang.extend(
          Z.asn1.cades.CompleteCertificateRefs,
          Z.asn1.cms.Attribute,
        ),
        (Z.asn1.cades.OtherCertID = function (t) {
          var e = Z.asn1,
            i = e.cms,
            r = e.cades;
          (r.OtherCertID.superclass.constructor.call(this),
            (this.hasIssuerSerial = !0),
            (this.dOtherCertHash = null),
            (this.dIssuerSerial = null),
            (this.setByCertPEM = function (t) {
              ((this.dOtherCertHash = new r.OtherHash(t)),
                this.hasIssuerSerial &&
                  (this.dIssuerSerial = new i.IssuerAndSerialNumber(t)));
            }),
            (this.getEncodedHex = function () {
              if (null != this.hTLV) return this.hTLV;
              if (null == this.dOtherCertHash) throw "otherCertHash not set";
              var t = [this.dOtherCertHash];
              null != this.dIssuerSerial && t.push(this.dIssuerSerial);
              var i = new e.DERSequence({
                array: t,
              });
              return ((this.hTLV = i.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              ("string" == typeof t &&
                -1 != t.indexOf("-----BEGIN ") &&
                this.setByCertPEM(t),
              "object" == typeof t &&
                (!1 === t.hasis && (this.hasIssuerSerial = !1),
                "string" == typeof t.cert && this.setByCertPEM(t.cert))));
        }),
        n.lang.extend(Z.asn1.cades.OtherCertID, Z.asn1.ASN1Object),
        (Z.asn1.cades.OtherHash = function (t) {
          var e = Z,
            i = e.asn1,
            r = (i.cms, i.cades),
            n = r.OtherHashAlgAndValue,
            s = e.crypto.Util.hashHex;
          if (
            (r.OtherHash.superclass.constructor.call(this),
            (this.alg = "sha256"),
            (this.dOtherHash = null),
            (this.setByCertPEM = function (t) {
              if (-1 == t.indexOf("-----BEGIN "))
                throw "certPEM not to seem PEM format";
              var e = mt(t),
                i = s(e, this.alg);
              this.dOtherHash = new n({
                alg: this.alg,
                hash: i,
              });
            }),
            (this.getEncodedHex = function () {
              if (null == this.dOtherHash) throw "OtherHash not set";
              return this.dOtherHash.getEncodedHex();
            }),
            void 0 !== t)
          )
            if ("string" == typeof t)
              if (-1 != t.indexOf("-----BEGIN ")) this.setByCertPEM(t);
              else {
                if (!t.match(/^[0-9A-Fa-f]+$/))
                  throw "unsupported string value for params";
                this.dOtherHash = new i.DEROctetString({
                  hex: t,
                });
              }
            else
              "object" == typeof t &&
                ("string" == typeof t.cert
                  ? ("string" == typeof t.alg && (this.alg = t.alg),
                    this.setByCertPEM(t.cert))
                  : (this.dOtherHash = new n(t)));
        }),
        n.lang.extend(Z.asn1.cades.OtherHash, Z.asn1.ASN1Object),
        (Z.asn1.cades.CAdESUtil = new (function () {})()),
        (Z.asn1.cades.CAdESUtil.addSigTS = function (t, e, i) {}),
        (Z.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function (
          t,
        ) {
          var e = et,
            i = e.getChildIdx,
            r = e.getTLV,
            n = e.getTLVbyList,
            s = (e.getTLVbyListEx, e.getIdxbyList),
            a = (e.getIdxbyListEx, Z.asn1),
            o = a.ASN1Object,
            h = a.cms.SignedData,
            u = a.cades.CAdESUtil,
            c = {};
          if ("06092a864886f70d010702" != n(t, 0, [0]))
            throw "hex is not CMS SignedData";
          var l = i(t, s(t, 0, [1, 0]));
          if (l.length < 4) throw "num of SignedData elem shall be 4 at least";
          var f = l.shift();
          c.version = r(t, f);
          var d = l.shift();
          c.algs = r(t, d);
          var g = l.shift();
          ((c.encapcontent = r(t, g)),
            (c.certs = null),
            (c.revs = null),
            (c.si = []));
          var p = l.shift();
          ("a0" == t.substr(p, 2) && ((c.certs = r(t, p)), (p = l.shift())),
            "a1" == t.substr(p, 2) && ((c.revs = r(t, p)), (p = l.shift())));
          var y = p;
          if ("31" != t.substr(y, 2)) throw "Can't find signerInfos";
          for (var v = i(t, y), m = 0; m < v.length; m++) {
            var x = v[m],
              S = u.parseSignerInfoForAddingUnsigned(t, x, m);
            c.si[m] = S;
          }
          var E = null;
          ((c.obj = new h()),
            ((E = new o()).hTLV = c.version),
            (c.obj.dCMSVersion = E),
            ((E = new o()).hTLV = c.algs),
            (c.obj.dDigestAlgs = E),
            ((E = new o()).hTLV = c.encapcontent),
            (c.obj.dEncapContentInfo = E),
            ((E = new o()).hTLV = c.certs),
            (c.obj.dCerts = E),
            (c.obj.signerInfoList = []));
          for (m = 0; m < c.si.length; m++)
            c.obj.signerInfoList.push(c.si[m].obj);
          return c;
        }),
        (Z.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function (
          t,
          e,
          i,
        ) {
          var r = et,
            n = r.getChildIdx,
            s = r.getTLV,
            a = r.getV,
            o = Z.asn1,
            h = o.ASN1Object,
            u = o.cms,
            c = u.AttributeList,
            l = u.SignerInfo,
            f = {},
            d = n(t, e);
          if (6 != d.length) throw "not supported items for SignerInfo (!=6)";
          var g = d.shift();
          f.version = s(t, g);
          var p = d.shift();
          f.si = s(t, p);
          var y = d.shift();
          f.digalg = s(t, y);
          var v = d.shift();
          f.sattrs = s(t, v);
          var m = d.shift();
          f.sigalg = s(t, m);
          var x = d.shift();
          ((f.sig = s(t, x)), (f.sigval = a(t, x)));
          var S = null;
          return (
            (f.obj = new l()),
            ((S = new h()).hTLV = f.version),
            (f.obj.dCMSVersion = S),
            ((S = new h()).hTLV = f.si),
            (f.obj.dSignerIdentifier = S),
            ((S = new h()).hTLV = f.digalg),
            (f.obj.dDigestAlgorithm = S),
            ((S = new h()).hTLV = f.sattrs),
            (f.obj.dSignedAttrs = S),
            ((S = new h()).hTLV = f.sigalg),
            (f.obj.dSigAlg = S),
            ((S = new h()).hTLV = f.sig),
            (f.obj.dSig = S),
            (f.obj.dUnsignedAttrs = new c()),
            f
          );
        }),
        ("undefined" != typeof Z.asn1.csr && Z.asn1.csr) || (Z.asn1.csr = {}),
        (Z.asn1.csr.CertificationRequest = function (t) {
          var e = Z.asn1,
            i = e.DERBitString,
            r = e.DERSequence,
            n = e.csr,
            s = (e.x509, n.CertificationRequestInfo);
          (n.CertificationRequest.superclass.constructor.call(this),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.sign = function () {
              var t = new s(this.params).getEncodedHex(),
                e = new Z.crypto.Signature({
                  alg: this.params.sigalg,
                });
              (e.init(this.params.sbjprvkey), e.updateHex(t));
              var i = e.sign();
              this.params.sighex = i;
            }),
            (this.getPEM = function () {
              return vt(this.getEncodedHex(), "CERTIFICATE REQUEST");
            }),
            (this.getEncodedHex = function () {
              var t = this.params,
                e = new Z.asn1.csr.CertificationRequestInfo(this.params),
                n = new Z.asn1.x509.AlgorithmIdentifier({
                  name: t.sigalg,
                });
              if (
                (void 0 == t.sighex && void 0 != t.sbjprvkey && this.sign(),
                void 0 == t.sighex)
              )
                throw new Error("sighex or sbjprvkey parameter not defined");
              var s = new i({
                hex: "00" + t.sighex,
              });
              return new r({
                array: [e, n, s],
              }).getEncodedHex();
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.csr.CertificationRequest, Z.asn1.ASN1Object),
        (Z.asn1.csr.CertificationRequestInfo = function (t) {
          var e = Z.asn1,
            i = (e.DERBitString, e.DERSequence),
            r = e.DERInteger,
            n = e.DERUTF8String,
            s = e.DERTaggedObject,
            a = e.ASN1Util.newObject,
            o = e.csr,
            h = e.x509,
            u = h.X500Name,
            c = h.Extensions,
            l = h.SubjectPublicKeyInfo;
          (o.CertificationRequestInfo.superclass.constructor.call(this),
            (this.params = null),
            (this.setByParam = function (t) {
              void 0 != t && (this.params = t);
            }),
            (this.getEncodedHex = function () {
              var t = this.params,
                e = [];
              if (
                (e.push(
                  new r({
                    int: 0,
                  }),
                ),
                e.push(new u(t.subject)),
                e.push(new l(Pt.getKey(t.sbjpubkey))),
                void 0 != t.extreq)
              ) {
                var o = new c(t.extreq),
                  h = a({
                    tag: {
                      tag: "a0",
                      explict: !0,
                      obj: {
                        seq: [
                          {
                            oid: "1.2.840.113549.1.9.14",
                          },
                          {
                            set: [o],
                          },
                        ],
                      },
                    },
                  });
                e.push(h);
              } else
                e.push(
                  new s({
                    tag: "a0",
                    explicit: !1,
                    obj: new n({
                      str: "",
                    }),
                  }),
                );
              return new i({
                array: e,
              }).getEncodedHex();
            }),
            void 0 != t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.csr.CertificationRequestInfo, Z.asn1.ASN1Object),
        (Z.asn1.csr.CSRUtil = new (function () {})()),
        (Z.asn1.csr.CSRUtil.newCSRPEM = function (t) {
          return new Z.asn1.csr.CertificationRequest(t).getPEM();
        }),
        (Z.asn1.csr.CSRUtil.getParam = function (t) {
          var e = et,
            i = e.getV;
          ((_getIdxbyList = e.getIdxbyList),
            (_getTLVbyList = e.getTLVbyList),
            (_getTLVbyListEx = e.getTLVbyListEx),
            (_getVbyListEx = e.getVbyListEx));
          var r = {};
          if (-1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST"))
            throw new Error("argument is not PEM file");
          var n = mt(t, "CERTIFICATE REQUEST");
          try {
            var s = _getTLVbyListEx(n, 0, [0, 1]),
              a = new Nt();
            ((r.subject = {}),
              (r.subject.array = a.getX500Name(s)),
              (r.subject.str = Nt.hex2dn(s)));
          } catch (f) {}
          var o = _getTLVbyListEx(n, 0, [0, 2]),
            h = Pt.getKey(o, null, "pkcs8pub");
          r.sbjpubkey = Pt.getPEM(h, "PKCS8PUB");
          var u = (function (t) {
            var e = _getIdxbyList(t, 0, [0, 3, 0, 0], "06");
            return "2a864886f70d01090e" != i(t, e)
              ? null
              : _getTLVbyList(t, 0, [0, 3, 0, 1, 0], "30");
          })(n);
          a = new Nt();
          null != u && (r.extreq = a.getExtParamArray(u));
          try {
            var c = _getTLVbyListEx(n, 0, [1], "30");
            a = new Nt();
            r.sigalg = a.getAlgorithmIdentifierName(c);
          } catch (f) {}
          try {
            var l = _getVbyListEx(n, 0, [2]);
            r.sighex = l;
          } catch (f) {}
          return r;
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.asn1 && Z.asn1) || (Z.asn1 = {}),
        ("undefined" != typeof Z.asn1.ocsp && Z.asn1.ocsp) ||
          (Z.asn1.ocsp = {}),
        (Z.asn1.ocsp.DEFAULT_HASH = "sha1"),
        (Z.asn1.ocsp.OCSPResponse = function (t) {
          Z.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
          Z.asn1.DEREnumerated;
          var e = Z.asn1.ASN1Util.newObject,
            i = Z.asn1.ocsp.ResponseBytes,
            r = [
              "successful",
              "malformedRequest",
              "internalError",
              "tryLater",
              "_not_used_",
              "sigRequired",
              "unauthorized",
            ];
          ((this.params = null),
            (this._getStatusCode = function () {
              var t = this.params.resstatus;
              return "number" == typeof t
                ? t
                : "string" != typeof t
                  ? -1
                  : r.indexOf(t);
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.getEncodedHex = function () {
              var t = this.params,
                r = this._getStatusCode();
              if (-1 == r)
                throw new Error("responseStatus not supported: " + t.resstatus);
              if (0 != r)
                return e({
                  seq: [
                    {
                      enum: {
                        int: r,
                      },
                    },
                  ],
                }).getEncodedHex();
              var n = new i(t);
              return e({
                seq: [
                  {
                    enum: {
                      int: 0,
                    },
                  },
                  {
                    tag: {
                      tag: "a0",
                      explicit: !0,
                      obj: n,
                    },
                  },
                ],
              }).getEncodedHex();
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.OCSPResponse, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.ResponseBytes = function (t) {
          Z.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.DERObjectIdentifier,
            n = e.DEROctetString,
            s = e.ocsp.BasicOCSPResponse;
          ((this.params = null),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.getEncodedHex = function () {
              var t = this.params;
              if ("ocspBasic" != t.restype)
                throw new Error("not supported responseType: " + t.restype);
              var e = new s(t),
                a = [];
              return (
                a.push(
                  new r({
                    name: "ocspBasic",
                  }),
                ),
                a.push(
                  new n({
                    hex: e.getEncodedHex(),
                  }),
                ),
                new i({
                  array: a,
                }).getEncodedHex()
              );
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.ResponseBytes, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.BasicOCSPResponse = function (t) {
          Z.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
          var e = Error,
            i = Z.asn1,
            r = i.ASN1Object,
            n = i.DERSequence,
            s = (i.DERGeneralizedTime, i.DERTaggedObject),
            a = i.DERBitString,
            o = (i.x509.Extensions, i.x509.AlgorithmIdentifier),
            h = i.ocsp;
          h.ResponderID;
          ((_SingleResponseList = h.SingleResponseList),
            (_ResponseData = h.ResponseData),
            (this.params = null),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            (this.sign = function () {
              var t = this.params,
                e = t.tbsresp.getEncodedHex(),
                i = new Z.crypto.Signature({
                  alg: t.sigalg,
                });
              (i.init(t.reskey), i.updateHex(e), (t.sighex = i.sign()));
            }),
            (this.getEncodedHex = function () {
              var t = this.params;
              (void 0 == t.tbsresp && (t.tbsresp = new _ResponseData(t)),
                void 0 == t.sighex && void 0 != t.reskey && this.sign());
              var i = [];
              if (
                (i.push(t.tbsresp),
                i.push(
                  new o({
                    name: t.sigalg,
                  }),
                ),
                i.push(
                  new a({
                    hex: "00" + t.sighex,
                  }),
                ),
                void 0 != t.certs && void 0 != t.certs.length)
              ) {
                for (var h = [], u = 0; u < t.certs.length; u++) {
                  var c = t.certs[u],
                    l = null;
                  if (et.isASN1HEX(c)) l = c;
                  else {
                    if (!c.match(/-----BEGIN/))
                      throw new e("certs[" + u + "] not hex or PEM");
                    l = mt(c);
                  }
                  h.push(
                    new r({
                      tlv: l,
                    }),
                  );
                }
                var f = new n({
                  array: h,
                });
                i.push(
                  new s({
                    tag: "a0",
                    explicit: !0,
                    obj: f,
                  }),
                );
              }
              return new n({
                array: i,
              }).getEncodedHex();
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.BasicOCSPResponse, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.ResponseData = function (t) {
          Z.asn1.ocsp.ResponseData.superclass.constructor.call(this);
          var e = Error,
            i = Z.asn1,
            r = i.DERSequence,
            n = i.DERGeneralizedTime,
            s = i.DERTaggedObject,
            a = i.x509.Extensions,
            o = i.ocsp,
            h = o.ResponderID;
          ((_SingleResponseList = o.SingleResponseList),
            (this.params = null),
            (this.getEncodedHex = function () {
              var t = this.params;
              (void 0 != t.respid && new e("respid not specified"),
                void 0 != t.prodat && new e("prodat not specified"),
                void 0 != t.array && new e("array not specified"));
              var i = [];
              if (
                (i.push(new h(t.respid)),
                i.push(new n(t.prodat)),
                i.push(new _SingleResponseList(t.array)),
                void 0 != t.ext)
              ) {
                var o = new a(t.ext);
                i.push(
                  new s({
                    tag: "a1",
                    explicit: !0,
                    obj: o,
                  }),
                );
              }
              return new r({
                array: i,
              }).getEncodedHex();
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.ResponseData, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.ResponderID = function (t) {
          Z.asn1.ocsp.ResponderID.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.ASN1Util.newObject,
            r = e.x509.X500Name;
          ((this.params = null),
            (this.getEncodedHex = function () {
              var t = this.params;
              if (void 0 != t.key)
                return i({
                  tag: {
                    tag: "a2",
                    explicit: !0,
                    obj: {
                      octstr: {
                        hex: t.key,
                      },
                    },
                  },
                }).getEncodedHex();
              if (void 0 != t.name)
                return i({
                  tag: {
                    tag: "a1",
                    explicit: !0,
                    obj: new r(t.name),
                  },
                }).getEncodedHex();
              throw new Error("key or name not specified");
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.ResponderID, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.SingleResponseList = function (t) {
          Z.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.ocsp.SingleResponse;
          ((this.params = null),
            (this.getEncodedHex = function () {
              var t = this.params;
              if ("object" != typeof t || void 0 == t.length)
                throw new Error("params not specified properly");
              for (var e = [], n = 0; n < t.length; n++) e.push(new r(t[n]));
              return new i({
                array: e,
              }).getEncodedHex();
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.SingleResponseList, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.SingleResponse = function (t) {
          var e = Error,
            i = Z.asn1,
            r = i.DERSequence,
            n = i.DERGeneralizedTime,
            s = i.DERTaggedObject,
            a = i.ocsp,
            o = a.CertID,
            h = a.CertStatus,
            u = i.x509.Extensions;
          (a.SingleResponse.superclass.constructor.call(this),
            (this.params = null),
            (this.getEncodedHex = function () {
              var t = this.params,
                i = [];
              if (void 0 == t.certid) throw new e("certid unspecified");
              if (void 0 == t.status) throw new e("status unspecified");
              if (void 0 == t.thisupdate) throw new e("thisupdate unspecified");
              if (
                (i.push(new o(t.certid)),
                i.push(new h(t.status)),
                i.push(new n(t.thisupdate)),
                void 0 != t.nextupdate)
              ) {
                var a = new n(t.nextupdate);
                i.push(
                  new s({
                    tag: "a0",
                    explicit: !0,
                    obj: a,
                  }),
                );
              }
              if (void 0 != t.ext) {
                var c = new u(t.ext);
                i.push(
                  new s({
                    tag: "a1",
                    explicit: !0,
                    obj: c,
                  }),
                );
              }
              return new r({
                array: i,
              }).getEncodedHex();
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.SingleResponse, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.CertID = function (t) {
          var e = Z,
            i = e.asn1,
            r = i.DEROctetString,
            n = i.DERInteger,
            s = i.DERSequence,
            a = i.x509.AlgorithmIdentifier,
            o = i.ocsp,
            h = o.DEFAULT_HASH,
            u = e.crypto.Util.hashHex,
            c = Nt,
            l = et;
          if (
            (o.CertID.superclass.constructor.call(this),
            (this.dHashAlg = null),
            (this.dIssuerNameHash = null),
            (this.dIssuerKeyHash = null),
            (this.dSerialNumber = null),
            (this.setByValue = function (t, e, i, s) {
              (void 0 === s && (s = h),
                (this.dHashAlg = new a({
                  name: s,
                })),
                (this.dIssuerNameHash = new r({
                  hex: t,
                })),
                (this.dIssuerKeyHash = new r({
                  hex: e,
                })),
                (this.dSerialNumber = new n({
                  hex: i,
                })));
            }),
            (this.setByCert = function (t, e, i) {
              void 0 === i && (i = h);
              var r = new c();
              r.readCertPEM(e);
              var n = new c();
              n.readCertPEM(t);
              var s = n.getPublicKeyHex(),
                a = l.getTLVbyList(s, 0, [1, 0], "30"),
                o = r.getSerialNumberHex(),
                f = u(n.getSubjectHex(), i),
                d = u(a, i);
              (this.setByValue(f, d, o, i),
                (this.hoge = r.getSerialNumberHex()));
            }),
            (this.getEncodedHex = function () {
              if (
                null === this.dHashAlg &&
                null === this.dIssuerNameHash &&
                null === this.dIssuerKeyHash &&
                null === this.dSerialNumber
              )
                throw "not yet set values";
              var t = [
                  this.dHashAlg,
                  this.dIssuerNameHash,
                  this.dIssuerKeyHash,
                  this.dSerialNumber,
                ],
                e = new s({
                  array: t,
                });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t)
          ) {
            var f = t;
            if (void 0 !== f.issuerCert && void 0 !== f.subjectCert) {
              var d = h;
              (void 0 === f.alg && (d = void 0),
                this.setByCert(f.issuerCert, f.subjectCert, d));
            } else {
              if (
                void 0 === f.issname ||
                void 0 === f.isskey ||
                void 0 === f.sbjsn
              )
                throw new Error("invalid constructor arguments");
              d = h;
              (void 0 === f.alg && (d = void 0),
                this.setByValue(f.issname, f.isskey, f.sbjsn, d));
            }
          }
        }),
        n.lang.extend(Z.asn1.ocsp.CertID, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.CertStatus = function (t) {
          (Z.asn1.ocsp.CertStatus.superclass.constructor.call(this),
            (this.params = null),
            (this.getEncodedHex = function () {
              var t = this.params;
              if ("good" == t.status) return "8000";
              if ("unknown" == t.status) return "8200";
              if ("revoked" == t.status) {
                var e = [
                  {
                    gentime: {
                      str: t.time,
                    },
                  },
                ];
                void 0 != t.reason &&
                  e.push({
                    tag: {
                      tag: "a0",
                      explicit: !0,
                      obj: {
                        enum: {
                          int: t.reason,
                        },
                      },
                    },
                  });
                var i = {
                  tag: "a1",
                  explicit: !1,
                  obj: {
                    seq: e,
                  },
                };
                return Z.asn1.ASN1Util.newObject({
                  tag: i,
                }).getEncodedHex();
              }
              throw new Error("bad status");
            }),
            (this.setByParam = function (t) {
              this.params = t;
            }),
            void 0 !== t && this.setByParam(t));
        }),
        n.lang.extend(Z.asn1.ocsp.CertStatus, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.Request = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.ocsp;
          if (
            (r.Request.superclass.constructor.call(this),
            (this.dReqCert = null),
            (this.dExt = null),
            (this.getEncodedHex = function () {
              var t = [];
              if (null === this.dReqCert) throw "reqCert not set";
              t.push(this.dReqCert);
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            "undefined" !== typeof t)
          ) {
            var n = new r.CertID(t);
            this.dReqCert = n;
          }
        }),
        n.lang.extend(Z.asn1.ocsp.Request, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.TBSRequest = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.ocsp;
          (r.TBSRequest.superclass.constructor.call(this),
            (this.version = 0),
            (this.dRequestorName = null),
            (this.dRequestList = []),
            (this.dRequestExt = null),
            (this.setRequestListByParam = function (t) {
              for (var e = [], i = 0; i < t.length; i++) {
                var n = new r.Request(t[0]);
                e.push(n);
              }
              this.dRequestList = e;
            }),
            (this.getEncodedHex = function () {
              var t = [];
              if (0 !== this.version)
                throw "not supported version: " + this.version;
              if (null !== this.dRequestorName)
                throw "requestorName not supported";
              var e = new i({
                array: this.dRequestList,
              });
              if ((t.push(e), null !== this.dRequestExt))
                throw "requestExtensions not supported";
              var r = new i({
                array: t,
              });
              return ((this.hTLV = r.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t &&
              void 0 !== t.reqList &&
              this.setRequestListByParam(t.reqList));
        }),
        n.lang.extend(Z.asn1.ocsp.TBSRequest, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.OCSPRequest = function (t) {
          var e = Z.asn1,
            i = e.DERSequence,
            r = e.ocsp;
          if (
            (r.OCSPRequest.superclass.constructor.call(this),
            (this.dTbsRequest = null),
            (this.dOptionalSignature = null),
            (this.getEncodedHex = function () {
              var t = [];
              if (null === this.dTbsRequest) throw "tbsRequest not set";
              if ((t.push(this.dTbsRequest), null !== this.dOptionalSignature))
                throw "optionalSignature not supported";
              var e = new i({
                array: t,
              });
              return ((this.hTLV = e.getEncodedHex()), this.hTLV);
            }),
            void 0 !== t && void 0 !== t.reqList)
          ) {
            var n = new r.TBSRequest(t);
            this.dTbsRequest = n;
          }
        }),
        n.lang.extend(Z.asn1.ocsp.OCSPRequest, Z.asn1.ASN1Object),
        (Z.asn1.ocsp.OCSPUtil = {}),
        (Z.asn1.ocsp.OCSPUtil.getRequestHex = function (t, e, i) {
          var r = Z.asn1.ocsp;
          void 0 === i && (i = r.DEFAULT_HASH);
          var n = {
            alg: i,
            issuerCert: t,
            subjectCert: e,
          };
          return new r.OCSPRequest({
            reqList: [n],
          }).getEncodedHex();
        }),
        (Z.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function (t) {
          var e = et,
            i = e.getVbyList,
            r = e.getVbyListEx,
            n = e.getIdxbyList,
            s = (e.getIdxbyListEx, e.getV),
            a = {};
          try {
            var o = r(t, 0, [0], "0a");
            a.responseStatus = parseInt(o, 16);
          } catch (l) {}
          if (0 !== a.responseStatus) return a;
          try {
            var h = n(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
            "80" === t.substr(h, 2)
              ? (a.certStatus = "good")
              : "a1" === t.substr(h, 2)
                ? ((a.certStatus = "revoked"),
                  (a.revocationTime = lt(i(t, h, [0]))))
                : "82" === t.substr(h, 2) && (a.certStatus = "unknown");
          } catch (l) {}
          try {
            var u = n(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
            a.thisUpdate = lt(s(t, u));
          } catch (l) {}
          try {
            var c = n(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
            "a0" === t.substr(c, 2) && (a.nextUpdate = lt(i(t, c, [0])));
          } catch (l) {}
          return a;
        }),
        (Z.asn1.ocsp.OCSPParser = function () {
          var t = Error,
            e = Nt,
            i = new e(),
            r = et,
            n = r.getV,
            s = r.getTLV,
            a = r.getIdxbyList,
            o = r.getTLVbyListEx,
            h = r.getChildIdx;
          ((this.getOCSPRequest = function (e) {
            var i = h(e, 0);
            if (1 != i.length && 2 != i.length)
              throw new t("wrong number elements: " + i.length);
            return this.getTBSRequest(s(e, i[0]));
          }),
            (this.getTBSRequest = function (t) {
              var e = {},
                r = o(t, 0, [0], "30");
              e.array = this.getRequestList(r);
              var n = o(t, 0, ["[2]", 0], "30");
              return (null != n && (e.ext = i.getExtParamArray(n)), e);
            }),
            (this.getRequestList = function (t) {
              for (var e = [], i = h(t, 0), r = 0; r < i.length; r++) {
                t = s(t, i[r]);
                e.push(this.getRequest(t));
              }
              return e;
            }),
            (this.getRequest = function (e) {
              var r = h(e, 0);
              if (1 != r.length && 2 != r.length)
                throw new t("wrong number elements: " + r.length);
              var n = this.getCertID(s(e, r[0]));
              if (2 == r.length) {
                var o = a(e, 0, [1, 0]);
                n.ext = i.getExtParamArray(s(e, o));
              }
              return n;
            }),
            (this.getCertID = function (i) {
              var r = h(i, 0);
              if (4 != r.length)
                throw new t("wrong number elements: " + r.length);
              var a = new e(),
                o = {};
              return (
                (o.alg = a.getAlgorithmIdentifierName(s(i, r[0]))),
                (o.issname = n(i, r[1])),
                (o.isskey = n(i, r[2])),
                (o.sbjsn = n(i, r[3])),
                o
              );
            }));
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.lang && Z.lang) || (Z.lang = {}),
        (Z.lang.String = function () {}),
        "function" === typeof t
          ? ((Q = function (e) {
              return at(new t(e, "utf8").toString("base64"));
            }),
            (tt = function (e) {
              return new t(ot(e), "base64").toString("utf8");
            }))
          : ((Q = function (t) {
              return ht(Et(Ct(t)));
            }),
            (tt = function (t) {
              return decodeURIComponent(wt(ut(t)));
            })),
        (Z.lang.String.isInteger = function (t) {
          return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
        }),
        (Z.lang.String.isHex = function (t) {
          return !(
            t.length % 2 != 0 ||
            (!t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
          );
        }),
        (Z.lang.String.isBase64 = function (t) {
          return !(
            !(t = t.replace(/\s+/g, "")).match(/^[0-9A-Za-z+\/]+={0,3}$/) ||
            t.length % 4 != 0
          );
        }),
        (Z.lang.String.isBase64URL = function (t) {
          return !t.match(/[+/=]/) && ((t = ot(t)), Z.lang.String.isBase64(t));
        }),
        (Z.lang.String.isIntegerArray = function (t) {
          return !!(t = t.replace(/\s+/g, "")).match(/^\[[0-9,]+\]$/);
        }),
        (Z.lang.String.isPrintable = function (t) {
          return null !== t.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
        }),
        (Z.lang.String.isIA5 = function (t) {
          return null !== t.match(/^[\x20-\x21\x23-\x7f]*$/);
        }),
        (Z.lang.String.isMail = function (t) {
          return (
            null !==
            t.match(
              /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
            )
          );
        }));
      (("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.crypto && Z.crypto) || (Z.crypto = {}),
        (Z.crypto.Util = new (function () {
          ((this.DIGESTINFOHEAD = {
            sha1: "3021300906052b0e03021a05000414",
            sha224: "302d300d06096086480165030402040500041c",
            sha256: "3031300d060960864801650304020105000420",
            sha384: "3041300d060960864801650304020205000430",
            sha512: "3051300d060960864801650304020305000440",
            md2: "3020300c06082a864886f70d020205000410",
            md5: "3020300c06082a864886f70d020505000410",
            ripemd160: "3021300906052b2403020105000414",
          }),
            (this.DEFAULTPROVIDER = {
              md5: "cryptojs",
              sha1: "cryptojs",
              sha224: "cryptojs",
              sha256: "cryptojs",
              sha384: "cryptojs",
              sha512: "cryptojs",
              ripemd160: "cryptojs",
              hmacmd5: "cryptojs",
              hmacsha1: "cryptojs",
              hmacsha224: "cryptojs",
              hmacsha256: "cryptojs",
              hmacsha384: "cryptojs",
              hmacsha512: "cryptojs",
              hmacripemd160: "cryptojs",
              MD5withRSA: "cryptojs/jsrsa",
              SHA1withRSA: "cryptojs/jsrsa",
              SHA224withRSA: "cryptojs/jsrsa",
              SHA256withRSA: "cryptojs/jsrsa",
              SHA384withRSA: "cryptojs/jsrsa",
              SHA512withRSA: "cryptojs/jsrsa",
              RIPEMD160withRSA: "cryptojs/jsrsa",
              MD5withECDSA: "cryptojs/jsrsa",
              SHA1withECDSA: "cryptojs/jsrsa",
              SHA224withECDSA: "cryptojs/jsrsa",
              SHA256withECDSA: "cryptojs/jsrsa",
              SHA384withECDSA: "cryptojs/jsrsa",
              SHA512withECDSA: "cryptojs/jsrsa",
              RIPEMD160withECDSA: "cryptojs/jsrsa",
              SHA1withDSA: "cryptojs/jsrsa",
              SHA224withDSA: "cryptojs/jsrsa",
              SHA256withDSA: "cryptojs/jsrsa",
              MD5withRSAandMGF1: "cryptojs/jsrsa",
              SHAwithRSAandMGF1: "cryptojs/jsrsa",
              SHA1withRSAandMGF1: "cryptojs/jsrsa",
              SHA224withRSAandMGF1: "cryptojs/jsrsa",
              SHA256withRSAandMGF1: "cryptojs/jsrsa",
              SHA384withRSAandMGF1: "cryptojs/jsrsa",
              SHA512withRSAandMGF1: "cryptojs/jsrsa",
              RIPEMD160withRSAandMGF1: "cryptojs/jsrsa",
            }),
            (this.CRYPTOJSMESSAGEDIGESTNAME = {
              md5: s.algo.MD5,
              sha1: s.algo.SHA1,
              sha224: s.algo.SHA224,
              sha256: s.algo.SHA256,
              sha384: s.algo.SHA384,
              sha512: s.algo.SHA512,
              ripemd160: s.algo.RIPEMD160,
            }),
            (this.getDigestInfoHex = function (t, e) {
              if ("undefined" == typeof this.DIGESTINFOHEAD[e])
                throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
              return this.DIGESTINFOHEAD[e] + t;
            }),
            (this.getPaddedDigestInfoHex = function (t, e, i) {
              var r = this.getDigestInfoHex(t, e),
                n = i / 4;
              if (r.length + 22 > n)
                throw "key is too short for SigAlg: keylen=" + i + "," + e;
              for (
                var s = "0001",
                  a = "00" + r,
                  o = "",
                  h = n - s.length - a.length,
                  u = 0;
                u < h;
                u += 2
              )
                o += "ff";
              return s + o + a;
            }),
            (this.hashString = function (t, e) {
              return new Z.crypto.MessageDigest({
                alg: e,
              }).digestString(t);
            }),
            (this.hashHex = function (t, e) {
              return new Z.crypto.MessageDigest({
                alg: e,
              }).digestHex(t);
            }),
            (this.sha1 = function (t) {
              return this.hashString(t, "sha1");
            }),
            (this.sha256 = function (t) {
              return this.hashString(t, "sha256");
            }),
            (this.sha256Hex = function (t) {
              return this.hashHex(t, "sha256");
            }),
            (this.sha512 = function (t) {
              return this.hashString(t, "sha512");
            }),
            (this.sha512Hex = function (t) {
              return this.hashHex(t, "sha512");
            }),
            (this.isKey = function (t) {
              return (
                t instanceof G ||
                t instanceof Z.crypto.DSA ||
                t instanceof Z.crypto.ECDSA
              );
            }));
        })()),
        (Z.crypto.Util.md5 = function (t) {
          return new Z.crypto.MessageDigest({
            alg: "md5",
            prov: "cryptojs",
          }).digestString(t);
        }),
        (Z.crypto.Util.ripemd160 = function (t) {
          return new Z.crypto.MessageDigest({
            alg: "ripemd160",
            prov: "cryptojs",
          }).digestString(t);
        }),
        (Z.crypto.Util.SECURERANDOMGEN = new U()),
        (Z.crypto.Util.getRandomHexOfNbytes = function (t) {
          var e = new Array(t);
          return (Z.crypto.Util.SECURERANDOMGEN.nextBytes(e), nt(e));
        }),
        (Z.crypto.Util.getRandomBigIntegerOfNbytes = function (t) {
          return new l(Z.crypto.Util.getRandomHexOfNbytes(t), 16);
        }),
        (Z.crypto.Util.getRandomHexOfNbits = function (t) {
          var e = t % 8,
            i = new Array((t - e) / 8 + 1);
          return (
            Z.crypto.Util.SECURERANDOMGEN.nextBytes(i),
            (i[0] = (((255 << e) & 255) ^ 255) & i[0]),
            nt(i)
          );
        }),
        (Z.crypto.Util.getRandomBigIntegerOfNbits = function (t) {
          return new l(Z.crypto.Util.getRandomHexOfNbits(t), 16);
        }),
        (Z.crypto.Util.getRandomBigIntegerZeroToMax = function (t) {
          for (var e = t.bitLength(); ; ) {
            var i = Z.crypto.Util.getRandomBigIntegerOfNbits(e);
            if (-1 != t.compareTo(i)) return i;
          }
        }),
        (Z.crypto.Util.getRandomBigIntegerMinToMax = function (t, e) {
          var i = t.compareTo(e);
          if (1 == i) throw "biMin is greater than biMax";
          if (0 == i) return t;
          var r = e.subtract(t);
          return Z.crypto.Util.getRandomBigIntegerZeroToMax(r).add(t);
        }),
        (Z.crypto.MessageDigest = function (t) {
          ((this.setAlgAndProvider = function (t, e) {
            if (
              (null !== (t = Z.crypto.MessageDigest.getCanonicalAlgName(t)) &&
                void 0 === e &&
                (e = Z.crypto.Util.DEFAULTPROVIDER[t]),
              -1 !=
                ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) &&
                "cryptojs" == e)
            ) {
              try {
                this.md = Z.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
              } catch (i) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + i;
              }
              ((this.updateString = function (t) {
                this.md.update(t);
              }),
                (this.updateHex = function (t) {
                  var e = s.enc.Hex.parse(t);
                  this.md.update(e);
                }),
                (this.digest = function () {
                  return this.md.finalize().toString(s.enc.Hex);
                }),
                (this.digestString = function (t) {
                  return (this.updateString(t), this.digest());
                }),
                (this.digestHex = function (t) {
                  return (this.updateHex(t), this.digest());
                }));
            }
            if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
              try {
                this.md = new sjcl.hash.sha256();
              } catch (i) {
                throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + i;
              }
              ((this.updateString = function (t) {
                this.md.update(t);
              }),
                (this.updateHex = function (t) {
                  var e = sjcl.codec.hex.toBits(t);
                  this.md.update(e);
                }),
                (this.digest = function () {
                  var t = this.md.finalize();
                  return sjcl.codec.hex.fromBits(t);
                }),
                (this.digestString = function (t) {
                  return (this.updateString(t), this.digest());
                }),
                (this.digestHex = function (t) {
                  return (this.updateHex(t), this.digest());
                }));
            }
          }),
            (this.updateString = function (t) {
              throw (
                "updateString(str) not supported for this alg/prov: " +
                this.algName +
                "/" +
                this.provName
              );
            }),
            (this.updateHex = function (t) {
              throw (
                "updateHex(hex) not supported for this alg/prov: " +
                this.algName +
                "/" +
                this.provName
              );
            }),
            (this.digest = function () {
              throw (
                "digest() not supported for this alg/prov: " +
                this.algName +
                "/" +
                this.provName
              );
            }),
            (this.digestString = function (t) {
              throw (
                "digestString(str) not supported for this alg/prov: " +
                this.algName +
                "/" +
                this.provName
              );
            }),
            (this.digestHex = function (t) {
              throw (
                "digestHex(hex) not supported for this alg/prov: " +
                this.algName +
                "/" +
                this.provName
              );
            }),
            void 0 !== t &&
              void 0 !== t.alg &&
              ((this.algName = t.alg),
              void 0 === t.prov &&
                (this.provName = Z.crypto.Util.DEFAULTPROVIDER[this.algName]),
              this.setAlgAndProvider(this.algName, this.provName)));
        }),
        (Z.crypto.MessageDigest.getCanonicalAlgName = function (t) {
          return (
            "string" === typeof t &&
              (t = (t = t.toLowerCase()).replace(/-/, "")),
            t
          );
        }),
        (Z.crypto.MessageDigest.getHashLength = function (t) {
          var e = Z.crypto.MessageDigest,
            i = e.getCanonicalAlgName(t);
          if (void 0 === e.HASHLENGTH[i]) throw "not supported algorithm: " + t;
          return e.HASHLENGTH[i];
        }),
        (Z.crypto.MessageDigest.HASHLENGTH = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          ripemd160: 20,
        }),
        (Z.crypto.Mac = function (t) {
          ((this.setAlgAndProvider = function (t, e) {
            if (
              (null == (t = t.toLowerCase()) && (t = "hmacsha1"),
              "hmac" != (t = t.toLowerCase()).substr(0, 4))
            )
              throw "setAlgAndProvider unsupported HMAC alg: " + t;
            (void 0 === e && (e = Z.crypto.Util.DEFAULTPROVIDER[t]),
              (this.algProv = t + "/" + e));
            var i = t.substr(4);
            if (
              -1 !=
                ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(i) &&
              "cryptojs" == e
            ) {
              try {
                var r = Z.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[i];
                this.mac = s.algo.HMAC.create(r, this.pass);
              } catch (n) {
                throw (
                  "setAlgAndProvider hash alg set fail hashAlg=" + i + "/" + n
                );
              }
              ((this.updateString = function (t) {
                this.mac.update(t);
              }),
                (this.updateHex = function (t) {
                  var e = s.enc.Hex.parse(t);
                  this.mac.update(e);
                }),
                (this.doFinal = function () {
                  return this.mac.finalize().toString(s.enc.Hex);
                }),
                (this.doFinalString = function (t) {
                  return (this.updateString(t), this.doFinal());
                }),
                (this.doFinalHex = function (t) {
                  return (this.updateHex(t), this.doFinal());
                }));
            }
          }),
            (this.updateString = function (t) {
              throw (
                "updateString(str) not supported for this alg/prov: " +
                this.algProv
              );
            }),
            (this.updateHex = function (t) {
              throw (
                "updateHex(hex) not supported for this alg/prov: " +
                this.algProv
              );
            }),
            (this.doFinal = function () {
              throw "digest() not supported for this alg/prov: " + this.algProv;
            }),
            (this.doFinalString = function (t) {
              throw (
                "digestString(str) not supported for this alg/prov: " +
                this.algProv
              );
            }),
            (this.doFinalHex = function (t) {
              throw (
                "digestHex(hex) not supported for this alg/prov: " +
                this.algProv
              );
            }),
            (this.setPassword = function (t) {
              if ("string" == typeof t) {
                var e = t;
                return (
                  (t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/)) ||
                    (e = dt(t)),
                  void (this.pass = s.enc.Hex.parse(e))
                );
              }
              if ("object" != typeof t)
                throw "KJUR.crypto.Mac unsupported password type: " + t;
              e = null;
              if (void 0 !== t.hex) {
                if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
                  throw "Mac: wrong hex password: " + t.hex;
                e = t.hex;
              }
              if (
                (void 0 !== t.utf8 && (e = ct(t.utf8)),
                void 0 !== t.rstr && (e = dt(t.rstr)),
                void 0 !== t.b64 && (e = u(t.b64)),
                void 0 !== t.b64u && (e = ut(t.b64u)),
                null == e)
              )
                throw "KJUR.crypto.Mac unsupported password type: " + t;
              this.pass = s.enc.Hex.parse(e);
            }),
            void 0 !== t &&
              (void 0 !== t.pass && this.setPassword(t.pass),
              void 0 !== t.alg &&
                ((this.algName = t.alg),
                void 0 === t.prov &&
                  (this.provName = Z.crypto.Util.DEFAULTPROVIDER[this.algName]),
                this.setAlgAndProvider(this.algName, this.provName))));
        }),
        (Z.crypto.Signature = function (t) {
          var e = null;
          if (
            ((this._setAlgNames = function () {
              var t = this.algName.match(/^(.+)with(.+)$/);
              t &&
                ((this.mdAlgName = t[1].toLowerCase()),
                (this.pubkeyAlgName = t[2].toLowerCase()),
                "rsaandmgf1" == this.pubkeyAlgName &&
                  "sha" == this.mdAlgName &&
                  (this.mdAlgName = "sha1"));
            }),
            (this._zeroPaddingOfSignature = function (t, e) {
              for (var i = "", r = e / 4 - t.length, n = 0; n < r; n++)
                i += "0";
              return i + t;
            }),
            (this.setAlgAndProvider = function (t, e) {
              if ((this._setAlgNames(), "cryptojs/jsrsa" != e))
                throw new Error("provider not supported: " + e);
              if (
                -1 !=
                ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(
                  this.mdAlgName,
                )
              ) {
                try {
                  this.md = new Z.crypto.MessageDigest({
                    alg: this.mdAlgName,
                  });
                } catch (i) {
                  throw new Error(
                    "setAlgAndProvider hash alg set fail alg=" +
                      this.mdAlgName +
                      "/" +
                      i,
                  );
                }
                ((this.init = function (t, e) {
                  var i = null;
                  try {
                    i = void 0 === e ? Pt.getKey(t) : Pt.getKey(t, e);
                  } catch (r) {
                    throw "init failed:" + r;
                  }
                  if (!0 === i.isPrivate)
                    ((this.prvKey = i), (this.state = "SIGN"));
                  else {
                    if (!0 !== i.isPublic) throw "init failed.:" + i;
                    ((this.pubKey = i), (this.state = "VERIFY"));
                  }
                }),
                  (this.updateString = function (t) {
                    this.md.updateString(t);
                  }),
                  (this.updateHex = function (t) {
                    this.md.updateHex(t);
                  }),
                  (this.sign = function () {
                    if (
                      ((this.sHashHex = this.md.digest()),
                      void 0 === this.prvKey &&
                        void 0 !== this.ecprvhex &&
                        void 0 !== this.eccurvename &&
                        void 0 !== Z.crypto.ECDSA &&
                        (this.prvKey = new Z.crypto.ECDSA({
                          curve: this.eccurvename,
                          prv: this.ecprvhex,
                        })),
                      this.prvKey instanceof G &&
                        "rsaandmgf1" === this.pubkeyAlgName)
                    )
                      this.hSign = this.prvKey.signWithMessageHashPSS(
                        this.sHashHex,
                        this.mdAlgName,
                        this.pssSaltLen,
                      );
                    else if (
                      this.prvKey instanceof G &&
                      "rsa" === this.pubkeyAlgName
                    )
                      this.hSign = this.prvKey.signWithMessageHash(
                        this.sHashHex,
                        this.mdAlgName,
                      );
                    else if (this.prvKey instanceof Z.crypto.ECDSA)
                      this.hSign = this.prvKey.signWithMessageHash(
                        this.sHashHex,
                      );
                    else {
                      if (!(this.prvKey instanceof Z.crypto.DSA))
                        throw (
                          "Signature: unsupported private key alg: " +
                          this.pubkeyAlgName
                        );
                      this.hSign = this.prvKey.signWithMessageHash(
                        this.sHashHex,
                      );
                    }
                    return this.hSign;
                  }),
                  (this.signString = function (t) {
                    return (this.updateString(t), this.sign());
                  }),
                  (this.signHex = function (t) {
                    return (this.updateHex(t), this.sign());
                  }),
                  (this.verify = function (t) {
                    if (
                      ((this.sHashHex = this.md.digest()),
                      void 0 === this.pubKey &&
                        void 0 !== this.ecpubhex &&
                        void 0 !== this.eccurvename &&
                        void 0 !== Z.crypto.ECDSA &&
                        (this.pubKey = new Z.crypto.ECDSA({
                          curve: this.eccurvename,
                          pub: this.ecpubhex,
                        })),
                      this.pubKey instanceof G &&
                        "rsaandmgf1" === this.pubkeyAlgName)
                    )
                      return this.pubKey.verifyWithMessageHashPSS(
                        this.sHashHex,
                        t,
                        this.mdAlgName,
                        this.pssSaltLen,
                      );
                    if (
                      this.pubKey instanceof G &&
                      "rsa" === this.pubkeyAlgName
                    )
                      return this.pubKey.verifyWithMessageHash(
                        this.sHashHex,
                        t,
                      );
                    if (
                      void 0 !== Z.crypto.ECDSA &&
                      this.pubKey instanceof Z.crypto.ECDSA
                    )
                      return this.pubKey.verifyWithMessageHash(
                        this.sHashHex,
                        t,
                      );
                    if (
                      void 0 !== Z.crypto.DSA &&
                      this.pubKey instanceof Z.crypto.DSA
                    )
                      return this.pubKey.verifyWithMessageHash(
                        this.sHashHex,
                        t,
                      );
                    throw (
                      "Signature: unsupported public key alg: " +
                      this.pubkeyAlgName
                    );
                  }));
              }
            }),
            (this.init = function (t, e) {
              throw (
                "init(key, pass) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.updateString = function (t) {
              throw (
                "updateString(str) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.updateHex = function (t) {
              throw (
                "updateHex(hex) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.sign = function () {
              throw (
                "sign() not supported for this alg:prov=" + this.algProvName
              );
            }),
            (this.signString = function (t) {
              throw (
                "digestString(str) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.signHex = function (t) {
              throw (
                "digestHex(hex) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.verify = function (t) {
              throw (
                "verify(hSigVal) not supported for this alg:prov=" +
                this.algProvName
              );
            }),
            (this.initParams = t),
            void 0 !== t &&
              (void 0 !== t.alg &&
                ((this.algName = t.alg),
                void 0 === t.prov
                  ? (this.provName =
                      Z.crypto.Util.DEFAULTPROVIDER[this.algName])
                  : (this.provName = t.prov),
                (this.algProvName = this.algName + ":" + this.provName),
                this.setAlgAndProvider(this.algName, this.provName),
                this._setAlgNames()),
              void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen),
              void 0 !== t.prvkeypem))
          ) {
            if (void 0 !== t.prvkeypas)
              throw "both prvkeypem and prvkeypas parameters not supported";
            try {
              e = Pt.getKey(t.prvkeypem);
              this.init(e);
            } catch (i) {
              throw "fatal error to load pem private key: " + i;
            }
          }
        }),
        (Z.crypto.Cipher = function (t) {}),
        (Z.crypto.Cipher.encrypt = function (t, e, i) {
          if (e instanceof G && e.isPublic) {
            var r = Z.crypto.Cipher.getAlgByKeyAndName(e, i);
            if ("RSA" === r) return e.encrypt(t);
            if ("RSAOAEP" === r) return e.encryptOAEP(t, "sha1");
            var n = r.match(/^RSAOAEP(\d+)$/);
            if (null !== n) return e.encryptOAEP(t, "sha" + n[1]);
            throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + i;
          }
          throw "Cipher.encrypt: unsupported key or algorithm";
        }),
        (window.encrypt = Z.crypto.Cipher.encrypt),
        (Z.crypto.Cipher.decrypt = function (t, e, i) {
          if (e instanceof G && e.isPrivate) {
            var r = Z.crypto.Cipher.getAlgByKeyAndName(e, i);
            if ("RSA" === r) return e.decrypt(t);
            if ("RSAOAEP" === r) return e.decryptOAEP(t, "sha1");
            var n = r.match(/^RSAOAEP(\d+)$/);
            if (null !== n) return e.decryptOAEP(t, "sha" + n[1]);
            throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + i;
          }
          throw "Cipher.decrypt: unsupported key or algorithm";
        }),
        (Z.crypto.Cipher.getAlgByKeyAndName = function (t, e) {
          if (t instanceof G) {
            if (
              -1 !=
              ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(
                e,
              )
            )
              return e;
            if (null === e || void 0 === e) return "RSA";
            throw (
              "getAlgByKeyAndName: not supported algorithm name for RSAKey: " +
              e
            );
          }
          throw "getAlgByKeyAndName: not supported algorithm name: " + e;
        }),
        (Z.crypto.OID = new (function () {
          this.oidhex2name = {
            "2a864886f70d010101": "rsaEncryption",
            "2a8648ce3d0201": "ecPublicKey",
            "2a8648ce380401": "dsa",
            "2a8648ce3d030107": "secp256r1",
            "2b8104001f": "secp192k1",
            "2b81040021": "secp224r1",
            "2b8104000a": "secp256k1",
            "2b81040023": "secp521r1",
            "2b81040022": "secp384r1",
            "2a8648ce380403": "SHA1withDSA",
            "608648016503040301": "SHA224withDSA",
            "608648016503040302": "SHA256withDSA",
          };
        })()),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.crypto && Z.crypto) || (Z.crypto = {}),
        (Z.crypto.ECDSA = function (t) {
          var e = Error,
            i = l,
            r = W,
            n = Z.crypto.ECDSA,
            s = Z.crypto.ECParameterDB,
            a = n.getName,
            o = et,
            h = o.getVbyListEx,
            u = o.isASN1HEX,
            c = new U();
          ((this.type = "EC"),
            (this.isPrivate = !1),
            (this.isPublic = !1),
            (this.getBigRandom = function (t) {
              return new i(t.bitLength(), c).mod(t.subtract(i.ONE)).add(i.ONE);
            }),
            (this.setNamedCurve = function (t) {
              ((this.ecparams = s.getByName(t)),
                (this.prvKeyHex = null),
                (this.pubKeyHex = null),
                (this.curveName = t));
            }),
            (this.setPrivateKeyHex = function (t) {
              ((this.isPrivate = !0), (this.prvKeyHex = t));
            }),
            (this.setPublicKeyHex = function (t) {
              ((this.isPublic = !0), (this.pubKeyHex = t));
            }),
            (this.getPublicKeyXYHex = function () {
              var t = this.pubKeyHex;
              if ("04" !== t.substr(0, 2))
                throw "this method supports uncompressed format(04) only";
              var e = this.ecparams.keylen / 4;
              if (t.length !== 2 + 2 * e)
                throw "malformed public key hex length";
              var i = {};
              return ((i.x = t.substr(2, e)), (i.y = t.substr(2 + e)), i);
            }),
            (this.getShortNISTPCurveName = function () {
              var t = this.curveName;
              return "secp256r1" === t ||
                "NIST P-256" === t ||
                "P-256" === t ||
                "prime256v1" === t
                ? "P-256"
                : "secp384r1" === t || "NIST P-384" === t || "P-384" === t
                  ? "P-384"
                  : null;
            }),
            (this.generateKeyPairHex = function () {
              var t = this.ecparams.n,
                e = this.getBigRandom(t),
                i = this.ecparams.G.multiply(e),
                r = i.getX().toBigInteger(),
                n = i.getY().toBigInteger(),
                s = this.ecparams.keylen / 4,
                a = ("0000000000" + e.toString(16)).slice(-s),
                o =
                  "04" +
                  ("0000000000" + r.toString(16)).slice(-s) +
                  ("0000000000" + n.toString(16)).slice(-s);
              return (
                this.setPrivateKeyHex(a),
                this.setPublicKeyHex(o),
                {
                  ecprvhex: a,
                  ecpubhex: o,
                }
              );
            }),
            (this.signWithMessageHash = function (t) {
              return this.signHex(t, this.prvKeyHex);
            }),
            (this.signHex = function (t, e) {
              var r = new i(e, 16),
                s = this.ecparams.n,
                a = new i(t.substring(0, this.ecparams.keylen / 4), 16);
              do {
                var o = this.getBigRandom(s),
                  h = this.ecparams.G.multiply(o).getX().toBigInteger().mod(s);
              } while (h.compareTo(i.ZERO) <= 0);
              var u = o
                .modInverse(s)
                .multiply(a.add(r.multiply(h)))
                .mod(s);
              return n.biRSSigToASN1Sig(h, u);
            }),
            (this.sign = function (t, e) {
              var r = e,
                n = this.ecparams.n,
                s = i.fromByteArrayUnsigned(t);
              do {
                var a = this.getBigRandom(n),
                  o = this.ecparams.G.multiply(a).getX().toBigInteger().mod(n);
              } while (o.compareTo(l.ZERO) <= 0);
              var h = a
                .modInverse(n)
                .multiply(s.add(r.multiply(o)))
                .mod(n);
              return this.serializeSig(o, h);
            }),
            (this.verifyWithMessageHash = function (t, e) {
              return this.verifyHex(t, e, this.pubKeyHex);
            }),
            (this.verifyHex = function (t, e, s) {
              try {
                var a,
                  o,
                  h = n.parseSigHex(e);
                ((a = h.r), (o = h.s));
                var u = r.decodeFromHex(this.ecparams.curve, s),
                  c = new i(t.substring(0, this.ecparams.keylen / 4), 16);
                return this.verifyRaw(c, a, o, u);
              } catch (l) {
                return !1;
              }
            }),
            (this.verify = function (t, e, n) {
              var s, a, o;
              if (Bitcoin.Util.isArray(e)) {
                var h = this.parseSig(e);
                ((s = h.r), (a = h.s));
              } else {
                if ("object" !== typeof e || !e.r || !e.s)
                  throw "Invalid value for signature";
                ((s = e.r), (a = e.s));
              }
              if (n instanceof W) o = n;
              else {
                if (!Bitcoin.Util.isArray(n))
                  throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                o = r.decodeFrom(this.ecparams.curve, n);
              }
              var u = i.fromByteArrayUnsigned(t);
              return this.verifyRaw(u, s, a, o);
            }),
            (this.verifyRaw = function (t, e, r, n) {
              var s = this.ecparams.n,
                a = this.ecparams.G;
              if (e.compareTo(i.ONE) < 0 || e.compareTo(s) >= 0) return !1;
              if (r.compareTo(i.ONE) < 0 || r.compareTo(s) >= 0) return !1;
              var o = r.modInverse(s),
                h = t.multiply(o).mod(s),
                u = e.multiply(o).mod(s);
              return a
                .multiply(h)
                .add(n.multiply(u))
                .getX()
                .toBigInteger()
                .mod(s)
                .equals(e);
            }),
            (this.serializeSig = function (t, e) {
              var i = t.toByteArraySigned(),
                r = e.toByteArraySigned(),
                n = [];
              return (
                n.push(2),
                n.push(i.length),
                (n = n.concat(i)).push(2),
                n.push(r.length),
                (n = n.concat(r)).unshift(n.length),
                n.unshift(48),
                n
              );
            }),
            (this.parseSig = function (t) {
              var e;
              if (48 != t[0])
                throw new Error("Signature not a valid DERSequence");
              if (2 != t[(e = 2)])
                throw new Error(
                  "First element in signature must be a DERInteger",
                );
              var r = t.slice(e + 2, e + 2 + t[e + 1]);
              if (2 != t[(e += 2 + t[e + 1])])
                throw new Error(
                  "Second element in signature must be a DERInteger",
                );
              var n = t.slice(e + 2, e + 2 + t[e + 1]);
              return (
                (e += 2 + t[e + 1]),
                {
                  r: i.fromByteArrayUnsigned(r),
                  s: i.fromByteArrayUnsigned(n),
                }
              );
            }),
            (this.parseSigCompact = function (t) {
              if (65 !== t.length) throw "Signature has the wrong length";
              var e = t[0] - 27;
              if (e < 0 || e > 7) throw "Invalid signature type";
              var r = this.ecparams.n;
              return {
                r: i.fromByteArrayUnsigned(t.slice(1, 33)).mod(r),
                s: i.fromByteArrayUnsigned(t.slice(33, 65)).mod(r),
                i: e,
              };
            }),
            (this.readPKCS5PrvKeyHex = function (t) {
              if (!1 === u(t)) throw new Error("not ASN.1 hex string");
              var e, i, r;
              try {
                ((e = h(t, 0, ["[0]", 0], "06")), (i = h(t, 0, [1], "04")));
                try {
                  r = h(t, 0, ["[1]", 0], "03");
                } catch (n) {}
              } catch (n) {
                throw new Error("malformed PKCS#1/5 plain ECC private key");
              }
              if (((this.curveName = a(e)), void 0 === this.curveName))
                throw "unsupported curve name";
              (this.setNamedCurve(this.curveName),
                this.setPublicKeyHex(r),
                this.setPrivateKeyHex(i),
                (this.isPublic = !1));
            }),
            (this.readPKCS8PrvKeyHex = function (t) {
              if (!1 === u(t)) throw new e("not ASN.1 hex string");
              var i, r, n;
              try {
                (h(t, 0, [1, 0], "06"),
                  (i = h(t, 0, [1, 1], "06")),
                  (r = h(t, 0, [2, 0, 1], "04")));
                try {
                  n = h(t, 0, [2, 0, "[1]", 0], "03");
                } catch (s) {}
              } catch (s) {
                throw new e("malformed PKCS#8 plain ECC private key");
              }
              if (((this.curveName = a(i)), void 0 === this.curveName))
                throw new e("unsupported curve name");
              (this.setNamedCurve(this.curveName),
                this.setPublicKeyHex(n),
                this.setPrivateKeyHex(r),
                (this.isPublic = !1));
            }),
            (this.readPKCS8PubKeyHex = function (t) {
              if (!1 === u(t)) throw new e("not ASN.1 hex string");
              var i, r;
              try {
                (h(t, 0, [0, 0], "06"),
                  (i = h(t, 0, [0, 1], "06")),
                  (r = h(t, 0, [1], "03")));
              } catch (n) {
                throw new e("malformed PKCS#8 ECC public key");
              }
              if (((this.curveName = a(i)), null === this.curveName))
                throw new e("unsupported curve name");
              (this.setNamedCurve(this.curveName), this.setPublicKeyHex(r));
            }),
            (this.readCertPubKeyHex = function (t, i) {
              if (!1 === u(t)) throw new e("not ASN.1 hex string");
              var r, n;
              try {
                ((r = h(t, 0, [0, 5, 0, 1], "06")),
                  (n = h(t, 0, [0, 5, 1], "03")));
              } catch (s) {
                throw new e("malformed X.509 certificate ECC public key");
              }
              if (((this.curveName = a(r)), null === this.curveName))
                throw new e("unsupported curve name");
              (this.setNamedCurve(this.curveName), this.setPublicKeyHex(n));
            }),
            void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve),
            void 0 === this.curveName && (this.curveName = "secp256r1"),
            this.setNamedCurve(this.curveName),
            void 0 !== t &&
              (void 0 !== t.prv && this.setPrivateKeyHex(t.prv),
              void 0 !== t.pub && this.setPublicKeyHex(t.pub)));
        }),
        (Z.crypto.ECDSA.parseSigHex = function (t) {
          var e = Z.crypto.ECDSA.parseSigHexInHexRS(t);
          return {
            r: new l(e.r, 16),
            s: new l(e.s, 16),
          };
        }),
        (Z.crypto.ECDSA.parseSigHexInHexRS = function (t) {
          var e = et,
            i = e.getChildIdx,
            r = e.getV;
          if ((e.checkStrictDER(t, 0), "30" != t.substr(0, 2)))
            throw new Error("signature is not a ASN.1 sequence");
          var n = i(t, 0);
          if (2 != n.length)
            throw new Error("signature shall have two elements");
          var s = n[0],
            a = n[1];
          if ("02" != t.substr(s, 2))
            throw new Error("1st item not ASN.1 integer");
          if ("02" != t.substr(a, 2))
            throw new Error("2nd item not ASN.1 integer");
          return {
            r: r(t, s),
            s: r(t, a),
          };
        }),
        (Z.crypto.ECDSA.asn1SigToConcatSig = function (t) {
          var e = Z.crypto.ECDSA.parseSigHexInHexRS(t),
            i = e.r,
            r = e.s;
          if (
            ("00" == i.substr(0, 2) && i.length % 32 == 2 && (i = i.substr(2)),
            "00" == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)),
            i.length % 32 == 30 && (i = "00" + i),
            r.length % 32 == 30 && (r = "00" + r),
            i.length % 32 != 0)
          )
            throw "unknown ECDSA sig r length error";
          if (r.length % 32 != 0) throw "unknown ECDSA sig s length error";
          return i + r;
        }),
        (Z.crypto.ECDSA.concatSigToASN1Sig = function (t) {
          if (((t.length / 2) * 8) % 128 != 0)
            throw "unknown ECDSA concatinated r-s sig  length error";
          var e = t.substr(0, t.length / 2),
            i = t.substr(t.length / 2);
          return Z.crypto.ECDSA.hexRSSigToASN1Sig(e, i);
        }),
        (Z.crypto.ECDSA.hexRSSigToASN1Sig = function (t, e) {
          var i = new l(t, 16),
            r = new l(e, 16);
          return Z.crypto.ECDSA.biRSSigToASN1Sig(i, r);
        }),
        (Z.crypto.ECDSA.biRSSigToASN1Sig = function (t, e) {
          var i = Z.asn1,
            r = new i.DERInteger({
              bigint: t,
            }),
            n = new i.DERInteger({
              bigint: e,
            });
          return new i.DERSequence({
            array: [r, n],
          }).getEncodedHex();
        }),
        (Z.crypto.ECDSA.getName = function (t) {
          return "2b8104001f" === t
            ? "secp192k1"
            : "2a8648ce3d030107" === t
              ? "secp256r1"
              : "2b8104000a" === t
                ? "secp256k1"
                : "2b81040021" === t
                  ? "secp224r1"
                  : "2b81040022" === t
                    ? "secp384r1"
                    : -1 !==
                        "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t)
                      ? "secp256r1"
                      : -1 !== "|secp256k1|".indexOf(t)
                        ? "secp256k1"
                        : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(t)
                          ? "secp224r1"
                          : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t)
                            ? "secp384r1"
                            : null;
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.crypto && Z.crypto) || (Z.crypto = {}),
        (Z.crypto.ECParameterDB = new (function () {
          var t = {},
            e = {};
          function i(t) {
            return new l(t, 16);
          }
          ((this.getByName = function (i) {
            var r = i;
            if (
              ("undefined" != typeof e[r] && (r = e[i]),
              "undefined" != typeof t[r])
            )
              return t[r];
            throw "unregistered EC curve name: " + r;
          }),
            (this.regist = function (r, n, s, a, o, h, u, c, l, f, d, g) {
              t[r] = {};
              var p = i(s),
                y = i(a),
                v = i(o),
                m = i(h),
                x = i(u),
                S = new X(p, y, v),
                E = S.decodePointHex("04" + c + l);
              ((t[r].name = r),
                (t[r].keylen = n),
                (t[r].curve = S),
                (t[r].G = E),
                (t[r].n = m),
                (t[r].h = x),
                (t[r].oid = d),
                (t[r].info = g));
              for (var w = 0; w < f.length; w++) e[f[w]] = r;
            }));
        })()),
        Z.crypto.ECParameterDB.regist(
          "secp128r1",
          128,
          "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF",
          "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC",
          "E87579C11079F43DD824993C2CEE5ED3",
          "FFFFFFFE0000000075A30D1B9038A115",
          "1",
          "161FF7528B899B2D0C28607CA52C5B86",
          "CF5AC8395BAFEB13C02DA292DDED7A83",
          [],
          "",
          "secp128r1 : SECG curve over a 128 bit prime field",
        ),
        Z.crypto.ECParameterDB.regist(
          "secp160k1",
          160,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73",
          "0",
          "7",
          "0100000000000000000001B8FA16DFAB9ACA16B6B3",
          "1",
          "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB",
          "938CF935318FDCED6BC28286531733C3F03C4FEE",
          [],
          "",
          "secp160k1 : SECG curve over a 160 bit prime field",
        ),
        Z.crypto.ECParameterDB.regist(
          "secp160r1",
          160,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC",
          "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45",
          "0100000000000000000001F4C8F927AED3CA752257",
          "1",
          "4A96B5688EF573284664698968C38BB913CBFC82",
          "23A628553168947D59DCC912042351377AC5FB32",
          [],
          "",
          "secp160r1 : SECG curve over a 160 bit prime field",
        ),
        Z.crypto.ECParameterDB.regist(
          "secp192k1",
          192,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37",
          "0",
          "3",
          "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D",
          "1",
          "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D",
          "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",
          [],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp192r1",
          192,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC",
          "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1",
          "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831",
          "1",
          "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012",
          "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",
          [],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp224r1",
          224,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE",
          "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D",
          "1",
          "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21",
          "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",
          [],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp256k1",
          256,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
          "0",
          "7",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
          "1",
          "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798",
          "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",
          [],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp256r1",
          256,
          "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF",
          "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC",
          "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B",
          "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551",
          "1",
          "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296",
          "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",
          ["NIST P-256", "P-256", "prime256v1"],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp384r1",
          384,
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC",
          "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF",
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973",
          "1",
          "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7",
          "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",
          ["NIST P-384", "P-384"],
        ),
        Z.crypto.ECParameterDB.regist(
          "secp521r1",
          521,
          "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC",
          "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00",
          "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409",
          "1",
          "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66",
          "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",
          ["NIST P-521", "P-521"],
        ),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.crypto && Z.crypto) || (Z.crypto = {}),
        (Z.crypto.DSA = function () {
          var t = et,
            e = (t.getVbyList, t.getVbyListEx),
            i = t.isASN1HEX,
            r = l;
          ((this.p = null),
            (this.q = null),
            (this.g = null),
            (this.y = null),
            (this.x = null),
            (this.type = "DSA"),
            (this.isPrivate = !1),
            (this.isPublic = !1),
            (this.setPrivate = function (t, e, i, r, n) {
              ((this.isPrivate = !0),
                (this.p = t),
                (this.q = e),
                (this.g = i),
                (this.y = r),
                (this.x = n));
            }),
            (this.setPrivateHex = function (t, e, i, r, n) {
              var s, a, o, h, u;
              ((s = new l(t, 16)),
                (a = new l(e, 16)),
                (o = new l(i, 16)),
                (h =
                  "string" === typeof r && r.length > 1 ? new l(r, 16) : null),
                (u = new l(n, 16)),
                this.setPrivate(s, a, o, h, u));
            }),
            (this.setPublic = function (t, e, i, r) {
              ((this.isPublic = !0),
                (this.p = t),
                (this.q = e),
                (this.g = i),
                (this.y = r),
                (this.x = null));
            }),
            (this.setPublicHex = function (t, e, i, r) {
              var n, s, a, o;
              ((n = new l(t, 16)),
                (s = new l(e, 16)),
                (a = new l(i, 16)),
                (o = new l(r, 16)),
                this.setPublic(n, s, a, o));
            }),
            (this.signWithMessageHash = function (t) {
              var e = this.p,
                i = this.q,
                r = this.g,
                n = (this.y, this.x),
                s = Z.crypto.Util.getRandomBigIntegerMinToMax(
                  l.ONE.add(l.ONE),
                  i.subtract(l.ONE),
                ),
                a = new l(t.substr(0, i.bitLength() / 4), 16),
                o = r.modPow(s, e).mod(i),
                h = s
                  .modInverse(i)
                  .multiply(a.add(n.multiply(o)))
                  .mod(i);
              return Z.asn1.ASN1Util.jsonToASN1HEX({
                seq: [
                  {
                    int: {
                      bigint: o,
                    },
                  },
                  {
                    int: {
                      bigint: h,
                    },
                  },
                ],
              });
            }),
            (this.verifyWithMessageHash = function (t, e) {
              var i = this.p,
                r = this.q,
                n = this.g,
                s = this.y,
                a = this.parseASN1Signature(e),
                o = a[0],
                h = a[1],
                u = new l(t.substr(0, r.bitLength() / 4), 16);
              if (l.ZERO.compareTo(o) > 0 || o.compareTo(r) > 0)
                throw "invalid DSA signature";
              if (l.ZERO.compareTo(h) >= 0 || h.compareTo(r) > 0)
                throw "invalid DSA signature";
              var c = h.modInverse(r),
                f = u.multiply(c).mod(r),
                d = o.multiply(c).mod(r);
              return (
                0 ==
                n
                  .modPow(f, i)
                  .multiply(s.modPow(d, i))
                  .mod(i)
                  .mod(r)
                  .compareTo(o)
              );
            }),
            (this.parseASN1Signature = function (t) {
              try {
                return [
                  new r(e(t, 0, [0], "02"), 16),
                  new r(e(t, 0, [1], "02"), 16),
                ];
              } catch (i) {
                throw new Error("malformed ASN.1 DSA signature");
              }
            }),
            (this.readPKCS5PrvKeyHex = function (t) {
              var r, n, s, a, o;
              if (!1 === i(t)) throw new Error("not ASN.1 hex string");
              try {
                ((r = e(t, 0, [1], "02")),
                  (n = e(t, 0, [2], "02")),
                  (s = e(t, 0, [3], "02")),
                  (a = e(t, 0, [4], "02")),
                  (o = e(t, 0, [5], "02")));
              } catch (h) {
                throw new Error("malformed PKCS#1/5 plain DSA private key");
              }
              this.setPrivateHex(r, n, s, a, o);
            }),
            (this.readPKCS8PrvKeyHex = function (t) {
              var r, n, s, a;
              if (!1 === i(t)) throw new Error("not ASN.1 hex string");
              try {
                ((r = e(t, 0, [1, 1, 0], "02")),
                  (n = e(t, 0, [1, 1, 1], "02")),
                  (s = e(t, 0, [1, 1, 2], "02")),
                  (a = e(t, 0, [2, 0], "02")));
              } catch (o) {
                throw new Error("malformed PKCS#8 plain DSA private key");
              }
              this.setPrivateHex(r, n, s, null, a);
            }),
            (this.readPKCS8PubKeyHex = function (t) {
              var r, n, s, a;
              if (!1 === i(t)) throw new Error("not ASN.1 hex string");
              try {
                ((r = e(t, 0, [0, 1, 0], "02")),
                  (n = e(t, 0, [0, 1, 1], "02")),
                  (s = e(t, 0, [0, 1, 2], "02")),
                  (a = e(t, 0, [1, 0], "02")));
              } catch (o) {
                throw new Error("malformed PKCS#8 DSA public key");
              }
              this.setPublicHex(r, n, s, a);
            }),
            (this.readCertPubKeyHex = function (t, r) {
              var n, s, a, o;
              if (!1 === i(t)) throw new Error("not ASN.1 hex string");
              try {
                ((n = e(t, 0, [0, 5, 0, 1, 0], "02")),
                  (s = e(t, 0, [0, 5, 0, 1, 1], "02")),
                  (a = e(t, 0, [0, 5, 0, 1, 2], "02")),
                  (o = e(t, 0, [0, 5, 1, 0], "02")));
              } catch (h) {
                throw new Error("malformed X.509 certificate DSA public key");
              }
              this.setPublicHex(n, s, a, o);
            }));
        }));
      var Pt = (function () {
        var t = function (t, i, r) {
            return e(s.AES, t, i, r);
          },
          e = function (t, e, i, r) {
            var n = s.enc.Hex.parse(e),
              a = s.enc.Hex.parse(i),
              o = s.enc.Hex.parse(r),
              h = {};
            ((h.key = a), (h.iv = o), (h.ciphertext = n));
            var u = t.decrypt(h, a, {
              iv: o,
            });
            return s.enc.Hex.stringify(u);
          },
          i = function (t, e, i) {
            return r(s.AES, t, e, i);
          },
          r = function (t, e, i, r) {
            var n = s.enc.Hex.parse(e),
              a = s.enc.Hex.parse(i),
              o = s.enc.Hex.parse(r),
              h = t.encrypt(n, a, {
                iv: o,
              }),
              u = s.enc.Hex.parse(h.toString());
            return s.enc.Base64.stringify(u);
          },
          n = {
            "AES-256-CBC": {
              proc: t,
              eproc: i,
              keylen: 32,
              ivlen: 16,
            },
            "AES-192-CBC": {
              proc: t,
              eproc: i,
              keylen: 24,
              ivlen: 16,
            },
            "AES-128-CBC": {
              proc: t,
              eproc: i,
              keylen: 16,
              ivlen: 16,
            },
            "DES-EDE3-CBC": {
              proc: function (t, i, r) {
                return e(s.TripleDES, t, i, r);
              },
              eproc: function (t, e, i) {
                return r(s.TripleDES, t, e, i);
              },
              keylen: 24,
              ivlen: 8,
            },
            "DES-CBC": {
              proc: function (t, i, r) {
                return e(s.DES, t, i, r);
              },
              eproc: function (t, e, i) {
                return r(s.DES, t, e, i);
              },
              keylen: 8,
              ivlen: 8,
            },
          },
          a = function (t) {
            var e = {},
              i = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
            i && ((e.cipher = i[1]), (e.ivsalt = i[2]));
            var r = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
            r && (e.type = r[1]);
            var n = -1,
              s = 0;
            (-1 != t.indexOf("\r\n\r\n") &&
              ((n = t.indexOf("\r\n\r\n")), (s = 2)),
              -1 != t.indexOf("\n\n") && ((n = t.indexOf("\n\n")), (s = 1)));
            var a = t.indexOf("-----END");
            if (-1 != n && -1 != a) {
              var o = t.substring(n + 2 * s, a - s);
              ((o = o.replace(/\s+/g, "")), (e.data = o));
            }
            return e;
          },
          o = function (t, e, i) {
            for (
              var r = i.substring(0, 16),
                a = s.enc.Hex.parse(r),
                o = s.enc.Utf8.parse(e),
                h = n[t].keylen + n[t].ivlen,
                u = "",
                c = null;
              ;
            ) {
              var l = s.algo.MD5.create();
              if (
                (null != c && l.update(c),
                l.update(o),
                l.update(a),
                (c = l.finalize()),
                (u += s.enc.Hex.stringify(c)).length >= 2 * h)
              )
                break;
            }
            var f = {};
            return (
              (f.keyhex = u.substr(0, 2 * n[t].keylen)),
              (f.ivhex = u.substr(2 * n[t].keylen, 2 * n[t].ivlen)),
              f
            );
          },
          h = function (t, e, i, r) {
            var a = s.enc.Base64.parse(t),
              o = s.enc.Hex.stringify(a);
            return (0, n[e].proc)(o, i, r);
          };
        return {
          version: "1.0.0",
          parsePKCS5PEM: function (t) {
            return a(t);
          },
          getKeyAndUnusedIvByPasscodeAndIvsalt: function (t, e, i) {
            return o(t, e, i);
          },
          decryptKeyB64: function (t, e, i, r) {
            return h(t, e, i, r);
          },
          getDecryptedKeyHex: function (t, e) {
            var i = a(t),
              r = (i.type, i.cipher),
              n = i.ivsalt,
              s = i.data,
              u = o(r, e, n).keyhex;
            return h(s, r, u, n);
          },
          getEncryptedPKCS5PEMFromPrvKeyHex: function (t, e, i, r, a) {
            var h = "";
            if (
              (("undefined" != typeof r && null != r) || (r = "AES-256-CBC"),
              "undefined" == typeof n[r])
            )
              throw "KEYUTIL unsupported algorithm: " + r;
            ("undefined" != typeof a && null != a) ||
              (a = (function (t) {
                var e = s.lib.WordArray.random(t);
                return s.enc.Hex.stringify(e);
              })(n[r].ivlen).toUpperCase());
            var u = (function (t, e, i, r) {
              return (0, n[e].eproc)(t, i, r);
            })(e, r, o(r, i, a).keyhex, a);
            h = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
            return (
              (h += "Proc-Type: 4,ENCRYPTED\r\n"),
              (h += "DEK-Info: " + r + "," + a + "\r\n"),
              (h += "\r\n"),
              (h += u.replace(/(.{64})/g, "$1\r\n")),
              (h += "\r\n-----END " + t + " PRIVATE KEY-----\r\n")
            );
          },
          parseHexOfEncryptedPKCS8: function (t) {
            var e = et,
              i = e.getChildIdx,
              r = e.getV,
              n = {},
              s = i(t, 0);
            if (2 != s.length)
              throw "malformed format: SEQUENCE(0).items != 2: " + s.length;
            n.ciphertext = r(t, s[1]);
            var a = i(t, s[0]);
            if (2 != a.length)
              throw "malformed format: SEQUENCE(0.0).items != 2: " + a.length;
            if ("2a864886f70d01050d" != r(t, a[0]))
              throw "this only supports pkcs5PBES2";
            var o = i(t, a[1]);
            if (2 != a.length)
              throw "malformed format: SEQUENCE(0.0.1).items != 2: " + o.length;
            var h = i(t, o[1]);
            if (2 != h.length)
              throw (
                "malformed format: SEQUENCE(0.0.1.1).items != 2: " + h.length
              );
            if ("2a864886f70d0307" != r(t, h[0]))
              throw "this only supports TripleDES";
            ((n.encryptionSchemeAlg = "TripleDES"),
              (n.encryptionSchemeIV = r(t, h[1])));
            var u = i(t, o[0]);
            if (2 != u.length)
              throw (
                "malformed format: SEQUENCE(0.0.1.0).items != 2: " + u.length
              );
            if ("2a864886f70d01050c" != r(t, u[0]))
              throw "this only supports pkcs5PBKDF2";
            var c = i(t, u[1]);
            if (c.length < 2)
              throw (
                "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + c.length
              );
            n.pbkdf2Salt = r(t, c[0]);
            var l = r(t, c[1]);
            try {
              n.pbkdf2Iter = parseInt(l, 16);
            } catch (f) {
              throw "malformed format pbkdf2Iter: " + l;
            }
            return n;
          },
          getPBKDF2KeyHexFromParam: function (t, e) {
            var i = s.enc.Hex.parse(t.pbkdf2Salt),
              r = t.pbkdf2Iter,
              n = s.PBKDF2(e, i, {
                keySize: 6,
                iterations: r,
              });
            return s.enc.Hex.stringify(n);
          },
          _getPlainPKCS8HexFromEncryptedPKCS8PEM: function (t, e) {
            var i = mt(t, "ENCRYPTED PRIVATE KEY"),
              r = this.parseHexOfEncryptedPKCS8(i),
              n = Pt.getPBKDF2KeyHexFromParam(r, e),
              a = {};
            a.ciphertext = s.enc.Hex.parse(r.ciphertext);
            var o = s.enc.Hex.parse(n),
              h = s.enc.Hex.parse(r.encryptionSchemeIV),
              u = s.TripleDES.decrypt(a, o, {
                iv: h,
              });
            return s.enc.Hex.stringify(u);
          },
          getKeyFromEncryptedPKCS8PEM: function (t, e) {
            var i = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e);
            return this.getKeyFromPlainPrivatePKCS8Hex(i);
          },
          parsePlainPrivatePKCS8Hex: function (t) {
            var e = et,
              i = e.getChildIdx,
              r = e.getV,
              n = {
                algparam: null,
              };
            if ("30" != t.substr(0, 2))
              throw "malformed plain PKCS8 private key(code:001)";
            var s = i(t, 0);
            if (3 != s.length)
              throw "malformed plain PKCS8 private key(code:002)";
            if ("30" != t.substr(s[1], 2))
              throw "malformed PKCS8 private key(code:003)";
            var a = i(t, s[1]);
            if (2 != a.length) throw "malformed PKCS8 private key(code:004)";
            if ("06" != t.substr(a[0], 2))
              throw "malformed PKCS8 private key(code:005)";
            if (
              ((n.algoid = r(t, a[0])),
              "06" == t.substr(a[1], 2) && (n.algparam = r(t, a[1])),
              "04" != t.substr(s[2], 2))
            )
              throw "malformed PKCS8 private key(code:006)";
            return ((n.keyidx = e.getVidx(t, s[2])), n);
          },
          getKeyFromPlainPrivatePKCS8PEM: function (t) {
            var e = mt(t, "PRIVATE KEY");
            return this.getKeyFromPlainPrivatePKCS8Hex(e);
          },
          getKeyFromPlainPrivatePKCS8Hex: function (t) {
            var e,
              i = this.parsePlainPrivatePKCS8Hex(t);
            if ("2a864886f70d010101" == i.algoid) e = new G();
            else if ("2a8648ce380401" == i.algoid) e = new Z.crypto.DSA();
            else {
              if ("2a8648ce3d0201" != i.algoid)
                throw "unsupported private key algorithm";
              e = new Z.crypto.ECDSA();
            }
            return (e.readPKCS8PrvKeyHex(t), e);
          },
          _getKeyFromPublicPKCS8Hex: function (t) {
            var e,
              i = et.getVbyList(t, 0, [0, 0], "06");
            if ("2a864886f70d010101" === i) e = new G();
            else if ("2a8648ce380401" === i) e = new Z.crypto.DSA();
            else {
              if ("2a8648ce3d0201" !== i)
                throw "unsupported PKCS#8 public key hex";
              e = new Z.crypto.ECDSA();
            }
            return (e.readPKCS8PubKeyHex(t), e);
          },
          parsePublicRawRSAKeyHex: function (t) {
            var e = et,
              i = e.getChildIdx,
              r = e.getV,
              n = {};
            if ("30" != t.substr(0, 2)) throw "malformed RSA key(code:001)";
            var s = i(t, 0);
            if (2 != s.length) throw "malformed RSA key(code:002)";
            if ("02" != t.substr(s[0], 2)) throw "malformed RSA key(code:003)";
            if (((n.n = r(t, s[0])), "02" != t.substr(s[1], 2)))
              throw "malformed RSA key(code:004)";
            return ((n.e = r(t, s[1])), n);
          },
          parsePublicPKCS8Hex: function (t) {
            var e = et,
              i = e.getChildIdx,
              r = e.getV,
              n = {
                algparam: null,
              },
              s = i(t, 0);
            if (2 != s.length)
              throw "outer DERSequence shall have 2 elements: " + s.length;
            var a = s[0];
            if ("30" != t.substr(a, 2))
              throw "malformed PKCS8 public key(code:001)";
            var o = i(t, a);
            if (2 != o.length) throw "malformed PKCS8 public key(code:002)";
            if ("06" != t.substr(o[0], 2))
              throw "malformed PKCS8 public key(code:003)";
            if (
              ((n.algoid = r(t, o[0])),
              "06" == t.substr(o[1], 2)
                ? (n.algparam = r(t, o[1]))
                : "30" == t.substr(o[1], 2) &&
                  ((n.algparam = {}),
                  (n.algparam.p = e.getVbyList(t, o[1], [0], "02")),
                  (n.algparam.q = e.getVbyList(t, o[1], [1], "02")),
                  (n.algparam.g = e.getVbyList(t, o[1], [2], "02"))),
              "03" != t.substr(s[1], 2))
            )
              throw "malformed PKCS8 public key(code:004)";
            return ((n.key = r(t, s[1]).substr(2)), n);
          },
        };
      })();
      ((Pt.getKey = function (t, e, i) {
        var r = (v = et).getChildIdx,
          n = (v.getV, v.getVbyList),
          s = Z.crypto,
          a = s.ECDSA,
          o = s.DSA,
          h = G,
          u = mt,
          c = Pt;
        if ("undefined" != typeof h && t instanceof h) return t;
        if ("undefined" != typeof a && t instanceof a) return t;
        if ("undefined" != typeof o && t instanceof o) return t;
        if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d)
          return new a({
            pub: t.xy,
            curve: t.curve,
          });
        if (void 0 !== t.curve && void 0 !== t.d)
          return new a({
            prv: t.d,
            curve: t.curve,
          });
        if (
          void 0 === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 === t.d
        )
          return ((I = new h()).setPublic(t.n, t.e), I);
        if (
          void 0 === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 !== t.d &&
          void 0 !== t.p &&
          void 0 !== t.q &&
          void 0 !== t.dp &&
          void 0 !== t.dq &&
          void 0 !== t.co &&
          void 0 === t.qi
        )
          return (
            (I = new h()).setPrivateEx(
              t.n,
              t.e,
              t.d,
              t.p,
              t.q,
              t.dp,
              t.dq,
              t.co,
            ),
            I
          );
        if (
          void 0 === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 !== t.d &&
          void 0 === t.p
        )
          return ((I = new h()).setPrivate(t.n, t.e, t.d), I);
        if (
          void 0 !== t.p &&
          void 0 !== t.q &&
          void 0 !== t.g &&
          void 0 !== t.y &&
          void 0 === t.x
        )
          return ((I = new o()).setPublic(t.p, t.q, t.g, t.y), I);
        if (
          void 0 !== t.p &&
          void 0 !== t.q &&
          void 0 !== t.g &&
          void 0 !== t.y &&
          void 0 !== t.x
        )
          return ((I = new o()).setPrivate(t.p, t.q, t.g, t.y, t.x), I);
        if (
          "RSA" === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 === t.d
        )
          return ((I = new h()).setPublic(ut(t.n), ut(t.e)), I);
        if (
          "RSA" === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 !== t.d &&
          void 0 !== t.p &&
          void 0 !== t.q &&
          void 0 !== t.dp &&
          void 0 !== t.dq &&
          void 0 !== t.qi
        )
          return (
            (I = new h()).setPrivateEx(
              ut(t.n),
              ut(t.e),
              ut(t.d),
              ut(t.p),
              ut(t.q),
              ut(t.dp),
              ut(t.dq),
              ut(t.qi),
            ),
            I
          );
        if (
          "RSA" === t.kty &&
          void 0 !== t.n &&
          void 0 !== t.e &&
          void 0 !== t.d
        )
          return ((I = new h()).setPrivate(ut(t.n), ut(t.e), ut(t.d)), I);
        if (
          "EC" === t.kty &&
          void 0 !== t.crv &&
          void 0 !== t.x &&
          void 0 !== t.y &&
          void 0 === t.d
        ) {
          var f =
              (D = new a({
                curve: t.crv,
              })).ecparams.keylen / 4,
            d =
              "04" +
              ("0000000000" + ut(t.x)).slice(-f) +
              ("0000000000" + ut(t.y)).slice(-f);
          return (D.setPublicKeyHex(d), D);
        }
        if (
          "EC" === t.kty &&
          void 0 !== t.crv &&
          void 0 !== t.x &&
          void 0 !== t.y &&
          void 0 !== t.d
        ) {
          ((f =
            (D = new a({
              curve: t.crv,
            })).ecparams.keylen / 4),
            (d =
              "04" +
              ("0000000000" + ut(t.x)).slice(-f) +
              ("0000000000" + ut(t.y)).slice(-f)));
          var g = ("0000000000" + ut(t.d)).slice(-f);
          return (D.setPublicKeyHex(d), D.setPrivateKeyHex(g), D);
        }
        if ("pkcs5prv" === i) {
          var p,
            y = t,
            v = et;
          if (9 === (p = r(y, 0)).length) (I = new h()).readPKCS5PrvKeyHex(y);
          else if (6 === p.length) (I = new o()).readPKCS5PrvKeyHex(y);
          else {
            if (!(p.length > 2 && "04" === y.substr(p[1], 2)))
              throw "unsupported PKCS#1/5 hexadecimal key";
            (I = new a()).readPKCS5PrvKeyHex(y);
          }
          return I;
        }
        if ("pkcs8prv" === i) return (I = c.getKeyFromPlainPrivatePKCS8Hex(t));
        if ("pkcs8pub" === i) return c._getKeyFromPublicPKCS8Hex(t);
        if ("x509pub" === i) return Nt.getPublicKeyFromCertHex(t);
        if (
          -1 != t.indexOf("-END CERTIFICATE-", 0) ||
          -1 != t.indexOf("-END X509 CERTIFICATE-", 0) ||
          -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)
        )
          return Nt.getPublicKeyFromCertPEM(t);
        if (-1 != t.indexOf("-END PUBLIC KEY-")) {
          var m = mt(t, "PUBLIC KEY");
          return c._getKeyFromPublicPKCS8Hex(m);
        }
        if (
          -1 != t.indexOf("-END RSA PRIVATE KEY-") &&
          -1 == t.indexOf("4,ENCRYPTED")
        ) {
          var x = u(t, "RSA PRIVATE KEY");
          return c.getKey(x, null, "pkcs5prv");
        }
        if (
          -1 != t.indexOf("-END DSA PRIVATE KEY-") &&
          -1 == t.indexOf("4,ENCRYPTED")
        ) {
          var S = n((T = u(t, "DSA PRIVATE KEY")), 0, [1], "02"),
            E = n(T, 0, [2], "02"),
            w = n(T, 0, [3], "02"),
            F = n(T, 0, [4], "02"),
            b = n(T, 0, [5], "02");
          return (
            (I = new o()).setPrivate(
              new l(S, 16),
              new l(E, 16),
              new l(w, 16),
              new l(F, 16),
              new l(b, 16),
            ),
            I
          );
        }
        if (
          -1 != t.indexOf("-END EC PRIVATE KEY-") &&
          -1 == t.indexOf("4,ENCRYPTED")
        ) {
          x = u(t, "EC PRIVATE KEY");
          return c.getKey(x, null, "pkcs5prv");
        }
        if (-1 != t.indexOf("-END PRIVATE KEY-"))
          return c.getKeyFromPlainPrivatePKCS8PEM(t);
        if (
          -1 != t.indexOf("-END RSA PRIVATE KEY-") &&
          -1 != t.indexOf("4,ENCRYPTED")
        ) {
          var A = c.getDecryptedKeyHex(t, e),
            C = new G();
          return (C.readPKCS5PrvKeyHex(A), C);
        }
        if (
          -1 != t.indexOf("-END EC PRIVATE KEY-") &&
          -1 != t.indexOf("4,ENCRYPTED")
        ) {
          var D,
            I = n((T = c.getDecryptedKeyHex(t, e)), 0, [1], "04"),
            P = n(T, 0, [2, 0], "06"),
            R = n(T, 0, [3, 0], "03").substr(2);
          if (void 0 === Z.crypto.OID.oidhex2name[P])
            throw "undefined OID(hex) in KJUR.crypto.OID: " + P;
          return (
            (D = new a({
              curve: Z.crypto.OID.oidhex2name[P],
            })).setPublicKeyHex(R),
            D.setPrivateKeyHex(I),
            (D.isPublic = !1),
            D
          );
        }
        if (
          -1 != t.indexOf("-END DSA PRIVATE KEY-") &&
          -1 != t.indexOf("4,ENCRYPTED")
        ) {
          var T;
          ((S = n((T = c.getDecryptedKeyHex(t, e)), 0, [1], "02")),
            (E = n(T, 0, [2], "02")),
            (w = n(T, 0, [3], "02")),
            (F = n(T, 0, [4], "02")),
            (b = n(T, 0, [5], "02")));
          return (
            (I = new o()).setPrivate(
              new l(S, 16),
              new l(E, 16),
              new l(w, 16),
              new l(F, 16),
              new l(b, 16),
            ),
            I
          );
        }
        if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-"))
          return c.getKeyFromEncryptedPKCS8PEM(t, e);
        throw new Error("not supported argument");
      }),
        (Pt.generateKeypair = function (t, e) {
          if ("RSA" == t) {
            var i = e;
            ((a = new G()).generate(i, "10001"),
              (a.isPrivate = !0),
              (a.isPublic = !0));
            var r = new G(),
              n = a.n.toString(16),
              s = a.e.toString(16);
            return (
              r.setPublic(n, s),
              (r.isPrivate = !1),
              (r.isPublic = !0),
              ((o = {}).prvKeyObj = a),
              (o.pubKeyObj = r),
              o
            );
          }
          if ("EC" == t) {
            var a,
              o,
              h = e,
              u = new Z.crypto.ECDSA({
                curve: h,
              }).generateKeyPairHex();
            return (
              (a = new Z.crypto.ECDSA({
                curve: h,
              })).setPublicKeyHex(u.ecpubhex),
              a.setPrivateKeyHex(u.ecprvhex),
              (a.isPrivate = !0),
              (a.isPublic = !1),
              (r = new Z.crypto.ECDSA({
                curve: h,
              })).setPublicKeyHex(u.ecpubhex),
              (r.isPrivate = !1),
              (r.isPublic = !0),
              ((o = {}).prvKeyObj = a),
              (o.pubKeyObj = r),
              o
            );
          }
          throw "unknown algorithm: " + t;
        }),
        (Pt.getPEM = function (t, e, i, r, n, a) {
          var o = Z,
            h = o.asn1,
            u = h.DERObjectIdentifier,
            c = h.DERInteger,
            l = h.ASN1Util.newObject,
            f = h.x509.SubjectPublicKeyInfo,
            d = o.crypto,
            g = d.DSA,
            p = d.ECDSA,
            y = G;
          function v(t) {
            return l({
              seq: [
                {
                  int: 0,
                },
                {
                  int: {
                    bigint: t.n,
                  },
                },
                {
                  int: t.e,
                },
                {
                  int: {
                    bigint: t.d,
                  },
                },
                {
                  int: {
                    bigint: t.p,
                  },
                },
                {
                  int: {
                    bigint: t.q,
                  },
                },
                {
                  int: {
                    bigint: t.dmp1,
                  },
                },
                {
                  int: {
                    bigint: t.dmq1,
                  },
                },
                {
                  int: {
                    bigint: t.coeff,
                  },
                },
              ],
            });
          }
          function m(t) {
            return l({
              seq: [
                {
                  int: 1,
                },
                {
                  octstr: {
                    hex: t.prvKeyHex,
                  },
                },
                {
                  tag: [
                    "a0",
                    !0,
                    {
                      oid: {
                        name: t.curveName,
                      },
                    },
                  ],
                },
                {
                  tag: [
                    "a1",
                    !0,
                    {
                      bitstr: {
                        hex: "00" + t.pubKeyHex,
                      },
                    },
                  ],
                },
              ],
            });
          }
          function x(t) {
            return l({
              seq: [
                {
                  int: 0,
                },
                {
                  int: {
                    bigint: t.p,
                  },
                },
                {
                  int: {
                    bigint: t.q,
                  },
                },
                {
                  int: {
                    bigint: t.g,
                  },
                },
                {
                  int: {
                    bigint: t.y,
                  },
                },
                {
                  int: {
                    bigint: t.x,
                  },
                },
              ],
            });
          }
          if (
            ((void 0 !== y && t instanceof y) ||
              (void 0 !== g && t instanceof g) ||
              (void 0 !== p && t instanceof p)) &&
            1 == t.isPublic &&
            (void 0 === e || "PKCS8PUB" == e)
          )
            return vt((F = new f(t).getEncodedHex()), "PUBLIC KEY");
          if (
            "PKCS1PRV" == e &&
            void 0 !== y &&
            t instanceof y &&
            (void 0 === i || null == i) &&
            1 == t.isPrivate
          )
            return vt((F = v(t).getEncodedHex()), "RSA PRIVATE KEY");
          if (
            "PKCS1PRV" == e &&
            void 0 !== p &&
            t instanceof p &&
            (void 0 === i || null == i) &&
            1 == t.isPrivate
          ) {
            var S = new u({
                name: t.curveName,
              }).getEncodedHex(),
              E = m(t).getEncodedHex(),
              w = "";
            return (
              (w += vt(S, "EC PARAMETERS")),
              (w += vt(E, "EC PRIVATE KEY"))
            );
          }
          if (
            "PKCS1PRV" == e &&
            void 0 !== g &&
            t instanceof g &&
            (void 0 === i || null == i) &&
            1 == t.isPrivate
          )
            return vt((F = x(t).getEncodedHex()), "DSA PRIVATE KEY");
          if (
            "PKCS5PRV" == e &&
            void 0 !== y &&
            t instanceof y &&
            void 0 !== i &&
            null != i &&
            1 == t.isPrivate
          ) {
            var F = v(t).getEncodedHex();
            return (
              void 0 === r && (r = "DES-EDE3-CBC"),
              this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", F, i, r, a)
            );
          }
          if (
            "PKCS5PRV" == e &&
            void 0 !== p &&
            t instanceof p &&
            void 0 !== i &&
            null != i &&
            1 == t.isPrivate
          ) {
            F = m(t).getEncodedHex();
            return (
              void 0 === r && (r = "DES-EDE3-CBC"),
              this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", F, i, r, a)
            );
          }
          if (
            "PKCS5PRV" == e &&
            void 0 !== g &&
            t instanceof g &&
            void 0 !== i &&
            null != i &&
            1 == t.isPrivate
          ) {
            F = x(t).getEncodedHex();
            return (
              void 0 === r && (r = "DES-EDE3-CBC"),
              this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", F, i, r, a)
            );
          }
          var b = function (t, e) {
              var i = A(t, e);
              return new l({
                seq: [
                  {
                    seq: [
                      {
                        oid: {
                          name: "pkcs5PBES2",
                        },
                      },
                      {
                        seq: [
                          {
                            seq: [
                              {
                                oid: {
                                  name: "pkcs5PBKDF2",
                                },
                              },
                              {
                                seq: [
                                  {
                                    octstr: {
                                      hex: i.pbkdf2Salt,
                                    },
                                  },
                                  {
                                    int: i.pbkdf2Iter,
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            seq: [
                              {
                                oid: {
                                  name: "des-EDE3-CBC",
                                },
                              },
                              {
                                octstr: {
                                  hex: i.encryptionSchemeIV,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    octstr: {
                      hex: i.ciphertext,
                    },
                  },
                ],
              }).getEncodedHex();
            },
            A = function (t, e) {
              var i = s.lib.WordArray.random(8),
                r = s.lib.WordArray.random(8),
                n = s.PBKDF2(e, i, {
                  keySize: 6,
                  iterations: 100,
                }),
                a = s.enc.Hex.parse(t),
                o =
                  s.TripleDES.encrypt(a, n, {
                    iv: r,
                  }) + "",
                h = {};
              return (
                (h.ciphertext = o),
                (h.pbkdf2Salt = s.enc.Hex.stringify(i)),
                (h.pbkdf2Iter = 100),
                (h.encryptionSchemeAlg = "DES-EDE3-CBC"),
                (h.encryptionSchemeIV = s.enc.Hex.stringify(r)),
                h
              );
            };
          if (
            "PKCS8PRV" == e &&
            void 0 != y &&
            t instanceof y &&
            1 == t.isPrivate
          ) {
            var C = v(t).getEncodedHex();
            F = l({
              seq: [
                {
                  int: 0,
                },
                {
                  seq: [
                    {
                      oid: {
                        name: "rsaEncryption",
                      },
                    },
                    {
                      null: !0,
                    },
                  ],
                },
                {
                  octstr: {
                    hex: C,
                  },
                },
              ],
            }).getEncodedHex();
            return void 0 === i || null == i
              ? vt(F, "PRIVATE KEY")
              : vt((E = b(F, i)), "ENCRYPTED PRIVATE KEY");
          }
          if (
            "PKCS8PRV" == e &&
            void 0 !== p &&
            t instanceof p &&
            1 == t.isPrivate
          ) {
            ((C = new l({
              seq: [
                {
                  int: 1,
                },
                {
                  octstr: {
                    hex: t.prvKeyHex,
                  },
                },
                {
                  tag: [
                    "a1",
                    !0,
                    {
                      bitstr: {
                        hex: "00" + t.pubKeyHex,
                      },
                    },
                  ],
                },
              ],
            }).getEncodedHex()),
              (F = l({
                seq: [
                  {
                    int: 0,
                  },
                  {
                    seq: [
                      {
                        oid: {
                          name: "ecPublicKey",
                        },
                      },
                      {
                        oid: {
                          name: t.curveName,
                        },
                      },
                    ],
                  },
                  {
                    octstr: {
                      hex: C,
                    },
                  },
                ],
              }).getEncodedHex()));
            return void 0 === i || null == i
              ? vt(F, "PRIVATE KEY")
              : vt((E = b(F, i)), "ENCRYPTED PRIVATE KEY");
          }
          if (
            "PKCS8PRV" == e &&
            void 0 !== g &&
            t instanceof g &&
            1 == t.isPrivate
          ) {
            ((C = new c({
              bigint: t.x,
            }).getEncodedHex()),
              (F = l({
                seq: [
                  {
                    int: 0,
                  },
                  {
                    seq: [
                      {
                        oid: {
                          name: "dsa",
                        },
                      },
                      {
                        seq: [
                          {
                            int: {
                              bigint: t.p,
                            },
                          },
                          {
                            int: {
                              bigint: t.q,
                            },
                          },
                          {
                            int: {
                              bigint: t.g,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    octstr: {
                      hex: C,
                    },
                  },
                ],
              }).getEncodedHex()));
            return void 0 === i || null == i
              ? vt(F, "PRIVATE KEY")
              : vt((E = b(F, i)), "ENCRYPTED PRIVATE KEY");
          }
          throw new Error("unsupported object nor format");
        }),
        (Pt.getKeyFromCSRPEM = function (t) {
          var e = mt(t, "CERTIFICATE REQUEST");
          return Pt.getKeyFromCSRHex(e);
        }),
        (Pt.getKeyFromCSRHex = function (t) {
          var e = Pt.parseCSRHex(t);
          return Pt.getKey(e.p8pubkeyhex, null, "pkcs8pub");
        }),
        (Pt.parseCSRHex = function (t) {
          var e = et,
            i = e.getChildIdx,
            r = e.getTLV,
            n = {},
            s = t;
          if ("30" != s.substr(0, 2)) throw "malformed CSR(code:001)";
          var a = i(s, 0);
          if (a.length < 1) throw "malformed CSR(code:002)";
          if ("30" != s.substr(a[0], 2)) throw "malformed CSR(code:003)";
          var o = i(s, a[0]);
          if (o.length < 3) throw "malformed CSR(code:004)";
          return ((n.p8pubkeyhex = r(s, o[2])), n);
        }),
        (Pt.getKeyID = function (t) {
          var e = Pt,
            i = et;
          "string" === typeof t &&
            -1 != t.indexOf("BEGIN ") &&
            (t = e.getKey(t));
          var r = mt(e.getPEM(t)),
            n = i.getIdxbyList(r, 0, [1]),
            s = i.getV(r, n).substring(2);
          return Z.crypto.Util.hashHex(s, "sha1");
        }),
        (Pt.getJWKFromKey = function (t) {
          var e = {};
          if (t instanceof G && t.isPrivate)
            return (
              (e.kty = "RSA"),
              (e.n = ht(t.n.toString(16))),
              (e.e = ht(t.e.toString(16))),
              (e.d = ht(t.d.toString(16))),
              (e.p = ht(t.p.toString(16))),
              (e.q = ht(t.q.toString(16))),
              (e.dp = ht(t.dmp1.toString(16))),
              (e.dq = ht(t.dmq1.toString(16))),
              (e.qi = ht(t.coeff.toString(16))),
              e
            );
          if (t instanceof G && t.isPublic)
            return (
              (e.kty = "RSA"),
              (e.n = ht(t.n.toString(16))),
              (e.e = ht(t.e.toString(16))),
              e
            );
          if (t instanceof Z.crypto.ECDSA && t.isPrivate) {
            if ("P-256" !== (r = t.getShortNISTPCurveName()) && "P-384" !== r)
              throw "unsupported curve name for JWT: " + r;
            var i = t.getPublicKeyXYHex();
            return (
              (e.kty = "EC"),
              (e.crv = r),
              (e.x = ht(i.x)),
              (e.y = ht(i.y)),
              (e.d = ht(t.prvKeyHex)),
              e
            );
          }
          if (t instanceof Z.crypto.ECDSA && t.isPublic) {
            var r;
            if ("P-256" !== (r = t.getShortNISTPCurveName()) && "P-384" !== r)
              throw "unsupported curve name for JWT: " + r;
            i = t.getPublicKeyXYHex();
            return (
              (e.kty = "EC"),
              (e.crv = r),
              (e.x = ht(i.x)),
              (e.y = ht(i.y)),
              e
            );
          }
          throw "not supported key object";
        }),
        (G.getPosArrayOfChildrenFromHex = function (t) {
          return et.getChildIdx(t, 0);
        }),
        (G.getHexValueArrayOfChildrenFromHex = function (t) {
          var e,
            i = et.getV,
            r = i(t, (e = G.getPosArrayOfChildrenFromHex(t))[0]),
            n = i(t, e[1]),
            s = i(t, e[2]),
            a = i(t, e[3]),
            o = i(t, e[4]),
            h = i(t, e[5]),
            u = i(t, e[6]),
            c = i(t, e[7]),
            l = i(t, e[8]);
          return ((e = new Array()).push(r, n, s, a, o, h, u, c, l), e);
        }),
        (G.prototype.readPrivateKeyFromPEMString = function (t) {
          var e = mt(t),
            i = G.getHexValueArrayOfChildrenFromHex(e);
          this.setPrivateEx(i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8]);
        }),
        (G.prototype.readPKCS5PrvKeyHex = function (t) {
          var e = G.getHexValueArrayOfChildrenFromHex(t);
          this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
        }),
        (G.prototype.readPKCS8PrvKeyHex = function (t) {
          var e,
            i,
            r,
            n,
            s,
            a,
            o,
            h,
            u = et,
            c = u.getVbyListEx;
          if (!1 === u.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
          try {
            ((e = c(t, 0, [2, 0, 1], "02")),
              (i = c(t, 0, [2, 0, 2], "02")),
              (r = c(t, 0, [2, 0, 3], "02")),
              (n = c(t, 0, [2, 0, 4], "02")),
              (s = c(t, 0, [2, 0, 5], "02")),
              (a = c(t, 0, [2, 0, 6], "02")),
              (o = c(t, 0, [2, 0, 7], "02")),
              (h = c(t, 0, [2, 0, 8], "02")));
          } catch (l) {
            throw new Error("malformed PKCS#8 plain RSA private key");
          }
          this.setPrivateEx(e, i, r, n, s, a, o, h);
        }),
        (G.prototype.readPKCS5PubKeyHex = function (t) {
          var e = et,
            i = e.getV;
          if (!1 === e.isASN1HEX(t))
            throw new Error("keyHex is not ASN.1 hex string");
          var r = e.getChildIdx(t, 0);
          if (
            2 !== r.length ||
            "02" !== t.substr(r[0], 2) ||
            "02" !== t.substr(r[1], 2)
          )
            throw new Error("wrong hex for PKCS#5 public key");
          var n = i(t, r[0]),
            s = i(t, r[1]);
          this.setPublic(n, s);
        }),
        (G.prototype.readPKCS8PubKeyHex = function (t) {
          var e = et;
          if (!1 === e.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
          if ("06092a864886f70d010101" !== e.getTLVbyListEx(t, 0, [0, 0]))
            throw new Error("not PKCS8 RSA public key");
          var i = e.getTLVbyListEx(t, 0, [1, 0]);
          this.readPKCS5PubKeyHex(i);
        }),
        (G.prototype.readCertPubKeyHex = function (t, e) {
          var i, r;
          ((i = new Nt()).readCertHex(t),
            (r = i.getPublicKeyHex()),
            this.readPKCS8PubKeyHex(r));
        }));
      window.getKey = Pt.getKey;
      var Rt = new RegExp("[^0-9a-f]", "gi");
      function Tt(t, e) {
        for (var i = "", r = e / 4 - t.length, n = 0; n < r; n++) i += "0";
        return i + t;
      }
      function Ht(t, e, i) {
        for (var r = "", n = 0; r.length < e; )
          ((r += ft(
            i(
              dt(
                t +
                  String.fromCharCode.apply(String, [
                    (4278190080 & n) >> 24,
                    (16711680 & n) >> 16,
                    (65280 & n) >> 8,
                    255 & n,
                  ]),
              ),
            ),
          )),
            (n += 1));
        return r;
      }
      function Bt(t) {
        for (var e in Z.crypto.Util.DIGESTINFOHEAD) {
          var i = Z.crypto.Util.DIGESTINFOHEAD[e],
            r = i.length;
          if (t.substring(0, r) == i) return [e, t.substring(r)];
        }
        return [];
      }
      function Nt() {
        var t,
          e = et,
          i = e.getChildIdx,
          r = e.getV,
          n = e.getTLV,
          s = e.getVbyList,
          a = e.getVbyListEx,
          o = e.getTLVbyList,
          h = e.getTLVbyListEx,
          u = e.getIdxbyList,
          c = e.getIdxbyListEx,
          l = e.getVidx,
          f = e.oidname,
          d = e.hextooidstr,
          g = Nt,
          p = mt;
        try {
          t = Z.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
        } catch (y) {}
        ((this.HEX2STAG = {
          "0c": "utf8",
          13: "prn",
          16: "ia5",
          "1a": "vis",
          "1e": "bmp",
        }),
          (this.hex = null),
          (this.version = 0),
          (this.foffset = 0),
          (this.aExtInfo = null),
          (this.getVersion = function () {
            return null === this.hex || 0 !== this.version
              ? this.version
              : "a003020102" !== o(this.hex, 0, [0, 0])
                ? ((this.version = 1), (this.foffset = -1), 1)
                : ((this.version = 3), 3);
          }),
          (this.getSerialNumberHex = function () {
            return a(this.hex, 0, [0, 0], "02");
          }),
          (this.getSignatureAlgorithmField = function () {
            var t = h(this.hex, 0, [0, 1]);
            return this.getAlgorithmIdentifierName(t);
          }),
          (this.getAlgorithmIdentifierName = function (e) {
            for (var i in t) if (e === t[i]) return i;
            return f(a(e, 0, [0], "06"));
          }),
          (this.getIssuer = function () {
            var t = {};
            return (
              (t.array = this.getX500Name(this.getIssuerHex())),
              (t.str = this.getIssuerString()),
              t
            );
          }),
          (this.getIssuerHex = function () {
            return o(this.hex, 0, [0, 3 + this.foffset], "30");
          }),
          (this.getIssuerString = function () {
            return g.hex2dn(this.getIssuerHex());
          }),
          (this.getSubject = function () {
            var t = {};
            return (
              (t.array = this.getX500Name(this.getSubjectHex())),
              (t.str = this.getSubjectString()),
              t
            );
          }),
          (this.getSubjectHex = function () {
            return o(this.hex, 0, [0, 5 + this.foffset], "30");
          }),
          (this.getSubjectString = function () {
            return g.hex2dn(this.getSubjectHex());
          }),
          (this.getNotBefore = function () {
            var t = s(this.hex, 0, [0, 4 + this.foffset, 0]);
            return (
              (t = t.replace(/(..)/g, "%$1")),
              (t = decodeURIComponent(t))
            );
          }),
          (this.getNotAfter = function () {
            var t = s(this.hex, 0, [0, 4 + this.foffset, 1]);
            return (
              (t = t.replace(/(..)/g, "%$1")),
              (t = decodeURIComponent(t))
            );
          }),
          (this.getPublicKeyHex = function () {
            return e.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30");
          }),
          (this.getPublicKeyIdx = function () {
            return u(this.hex, 0, [0, 6 + this.foffset], "30");
          }),
          (this.getPublicKeyContentIdx = function () {
            var t = this.getPublicKeyIdx();
            return u(this.hex, t, [1, 0], "30");
          }),
          (this.getPublicKey = function () {
            return Pt.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
          }),
          (this.getSignatureAlgorithmName = function () {
            var t = o(this.hex, 0, [1], "30");
            return this.getAlgorithmIdentifierName(t);
          }),
          (this.getSignatureValueHex = function () {
            return s(this.hex, 0, [2], "03", !0);
          }),
          (this.verifySignature = function (t) {
            var e = this.getSignatureAlgorithmField(),
              i = this.getSignatureValueHex(),
              r = o(this.hex, 0, [0], "30"),
              n = new Z.crypto.Signature({
                alg: e,
              });
            return (n.init(t), n.updateHex(r), n.verify(i));
          }),
          (this.parseExt = function (t) {
            var n, a, o;
            if (void 0 === t) {
              if (((o = this.hex), 3 !== this.version)) return -1;
              ((n = u(o, 0, [0, 7, 0], "30")), (a = i(o, n)));
            } else {
              o = mt(t);
              var h = u(o, 0, [0, 3, 0, 0], "06");
              if ("2a864886f70d01090e" != r(o, h))
                return void (this.aExtInfo = new Array());
              ((n = u(o, 0, [0, 3, 0, 1, 0], "30")),
                (a = i(o, n)),
                (this.hex = o));
            }
            this.aExtInfo = new Array();
            for (var c = 0; c < a.length; c++) {
              var f = {
                  critical: !1,
                },
                d = 0;
              (3 === i(o, a[c]).length && ((f.critical = !0), (d = 1)),
                (f.oid = e.hextooidstr(s(o, a[c], [0], "06"))));
              var g = u(o, a[c], [1 + d]);
              ((f.vidx = l(o, g)), this.aExtInfo.push(f));
            }
          }),
          (this.getExtInfo = function (t) {
            var e = this.aExtInfo,
              i = t;
            if (
              (t.match(/^[0-9.]+$/) || (i = Z.asn1.x509.OID.name2oid(t)),
              "" !== i)
            )
              for (var r = 0; r < e.length; r++)
                if (e[r].oid === i) return e[r];
          }),
          (this.getExtBasicConstraints = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var i = this.getExtInfo("basicConstraints");
              if (void 0 === i) return;
              ((t = n(this.hex, i.vidx)), (e = i.critical));
            }
            var s = {
              extname: "basicConstraints",
            };
            if ((e && (s.critical = !0), "3000" === t)) return s;
            if ("30030101ff" === t) return ((s.cA = !0), s);
            if ("30060101ff02" === t.substr(0, 12)) {
              var a = r(t, 10),
                o = parseInt(a, 16);
              return ((s.cA = !0), (s.pathLen = o), s);
            }
            throw new Error("hExtV parse error: " + t);
          }),
          (this.getExtKeyUsage = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var i = this.getExtInfo("keyUsage");
              if (void 0 === i) return;
              ((t = n(this.hex, i.vidx)), (e = i.critical));
            }
            var r = {
              extname: "keyUsage",
            };
            return (
              e && (r.critical = !0),
              (r.names = this.getExtKeyUsageString(t).split(",")),
              r
            );
          }),
          (this.getExtKeyUsageBin = function (t) {
            if (void 0 === t) {
              var e = this.getExtInfo("keyUsage");
              if (void 0 === e) return "";
              t = n(this.hex, e.vidx);
            }
            if (8 != t.length && 10 != t.length)
              throw new Error("malformed key usage value: " + t);
            var i = "000000000000000" + parseInt(t.substr(6), 16).toString(2);
            return (
              8 == t.length && (i = i.slice(-8)),
              10 == t.length && (i = i.slice(-16)),
              "" == (i = i.replace(/0+$/, "")) && (i = "0"),
              i
            );
          }),
          (this.getExtKeyUsageString = function (t) {
            for (
              var e = this.getExtKeyUsageBin(t), i = new Array(), r = 0;
              r < e.length;
              r++
            )
              "1" == e.substr(r, 1) && i.push(Nt.KEYUSAGE_NAME[r]);
            return i.join(",");
          }),
          (this.getExtSubjectKeyIdentifier = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var i = this.getExtInfo("subjectKeyIdentifier");
              if (void 0 === i) return;
              ((t = n(this.hex, i.vidx)), (e = i.critical));
            }
            var s = {
              extname: "subjectKeyIdentifier",
            };
            e && (s.critical = !0);
            var a = r(t, 0);
            return (
              (s.kid = {
                hex: a,
              }),
              s
            );
          }),
          (this.getExtAuthorityKeyIdentifier = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var s = this.getExtInfo("authorityKeyIdentifier");
              if (void 0 === s) return;
              ((t = n(this.hex, s.vidx)), (e = s.critical));
            }
            var a = {
              extname: "authorityKeyIdentifier",
            };
            e && (a.critical = !0);
            for (var o = i(t, 0), h = 0; h < o.length; h++) {
              var u = t.substr(o[h], 2);
              if (
                ("80" === u &&
                  (a.kid = {
                    hex: r(t, o[h]),
                  }),
                "a1" === u)
              ) {
                var c = n(t, o[h]),
                  l = this.getGeneralNames(c);
                a.issuer = l[0].dn;
              }
              "82" === u &&
                (a.sn = {
                  hex: r(t, o[h]),
                });
            }
            return a;
          }),
          (this.getExtExtKeyUsage = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var s = this.getExtInfo("extKeyUsage");
              if (void 0 === s) return;
              ((t = n(this.hex, s.vidx)), (e = s.critical));
            }
            var a = {
              extname: "extKeyUsage",
              array: [],
            };
            e && (a.critical = !0);
            for (var o = i(t, 0), h = 0; h < o.length; h++)
              a.array.push(f(r(t, o[h])));
            return a;
          }),
          (this.getExtExtKeyUsageName = function () {
            var t = this.getExtInfo("extKeyUsage");
            if (void 0 === t) return t;
            var e = new Array(),
              s = n(this.hex, t.vidx);
            if ("" === s) return e;
            for (var a = i(s, 0), o = 0; o < a.length; o++)
              e.push(f(r(s, a[o])));
            return e;
          }),
          (this.getExtSubjectAltName = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var i = this.getExtInfo("subjectAltName");
              if (void 0 === i) return;
              ((t = n(this.hex, i.vidx)), (e = i.critical));
            }
            var r = {
              extname: "subjectAltName",
              array: [],
            };
            return (
              e && (r.critical = !0),
              (r.array = this.getGeneralNames(t)),
              r
            );
          }),
          (this.getExtIssuerAltName = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var i = this.getExtInfo("issuerAltName");
              if (void 0 === i) return;
              ((t = n(this.hex, i.vidx)), (e = i.critical));
            }
            var r = {
              extname: "issuerAltName",
              array: [],
            };
            return (
              e && (r.critical = !0),
              (r.array = this.getGeneralNames(t)),
              r
            );
          }),
          (this.getGeneralNames = function (t) {
            for (var e = i(t, 0), r = [], s = 0; s < e.length; s++) {
              var a = this.getGeneralName(n(t, e[s]));
              void 0 !== a && r.push(a);
            }
            return r;
          }),
          (this.getGeneralName = function (t) {
            var e = t.substr(0, 2),
              i = r(t, 0),
              n = ft(i);
            return "81" == e
              ? {
                  rfc822: n,
                }
              : "82" == e
                ? {
                    dns: n,
                  }
                : "a4" == e
                  ? {
                      dn: {
                        hex: i,
                      },
                    }
                  : "86" == e
                    ? {
                        uri: n,
                      }
                    : "87" == e
                      ? {
                          ip: At(i),
                        }
                      : void 0;
          }),
          (this.getExtSubjectAltName2 = function () {
            var t,
              e,
              s,
              a = this.getExtInfo("subjectAltName");
            if (void 0 === a) return a;
            for (
              var o = new Array(), h = n(this.hex, a.vidx), u = i(h, 0), c = 0;
              c < u.length;
              c++
            )
              ((s = h.substr(u[c], 2)),
                (t = r(h, u[c])),
                "81" === s && ((e = lt(t)), o.push(["MAIL", e])),
                "82" === s && ((e = lt(t)), o.push(["DNS", e])),
                "84" === s && ((e = Nt.hex2dn(t, 0)), o.push(["DN", e])),
                "86" === s && ((e = lt(t)), o.push(["URI", e])),
                "87" === s && ((e = At(t)), o.push(["IP", e])));
            return o;
          }),
          (this.getExtCRLDistributionPoints = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var r = this.getExtInfo("cRLDistributionPoints");
              if (void 0 === r) return;
              ((t = n(this.hex, r.vidx)), (e = r.critical));
            }
            var s = {
              extname: "cRLDistributionPoints",
              array: [],
            };
            e && (s.critical = !0);
            for (var a = i(t, 0), o = 0; o < a.length; o++) {
              var h = n(t, a[o]);
              s.array.push(this.getDistributionPoint(h));
            }
            return s;
          }),
          (this.getDistributionPoint = function (t) {
            for (var e = {}, r = i(t, 0), s = 0; s < r.length; s++) {
              var a = t.substr(r[s], 2),
                o = n(t, r[s]);
              "a0" == a && (e.dpname = this.getDistributionPointName(o));
            }
            return e;
          }),
          (this.getDistributionPointName = function (t) {
            for (var e = {}, r = i(t, 0), s = 0; s < r.length; s++) {
              var a = t.substr(r[s], 2),
                o = n(t, r[s]);
              "a0" == a && (e.full = this.getGeneralNames(o));
            }
            return e;
          }),
          (this.getExtCRLDistributionPointsURI = function () {
            var t = this.getExtInfo("cRLDistributionPoints");
            if (void 0 === t) return t;
            for (
              var e = new Array(), r = i(this.hex, t.vidx), n = 0;
              n < r.length;
              n++
            )
              try {
                var a = lt(s(this.hex, r[n], [0, 0, 0], "86"));
                e.push(a);
              } catch (L) {}
            return e;
          }),
          (this.getExtAIAInfo = function () {
            var t = this.getExtInfo("authorityInfoAccess");
            if (void 0 === t) return t;
            for (
              var e = {
                  ocsp: [],
                  caissuer: [],
                },
                r = i(this.hex, t.vidx),
                n = 0;
              n < r.length;
              n++
            ) {
              var a = s(this.hex, r[n], [0], "06"),
                o = s(this.hex, r[n], [1], "86");
              ("2b06010505073001" === a && e.ocsp.push(lt(o)),
                "2b06010505073002" === a && e.caissuer.push(lt(o)));
            }
            return e;
          }),
          (this.getExtAuthorityInfoAccess = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var r = this.getExtInfo("authorityInfoAccess");
              if (void 0 === r) return;
              ((t = n(this.hex, r.vidx)), (e = r.critical));
            }
            var o = {
              extname: "authorityInfoAccess",
              array: [],
            };
            e && (o.critical = !0);
            for (var h = i(t, 0), u = 0; u < h.length; u++) {
              var c = a(t, h[u], [0], "06"),
                l = lt(s(t, h[u], [1], "86"));
              if ("2b06010505073001" == c)
                o.array.push({
                  ocsp: l,
                });
              else {
                if ("2b06010505073002" != c)
                  throw new Error("unknown method: " + c);
                o.array.push({
                  caissuer: l,
                });
              }
            }
            return o;
          }),
          (this.getExtCertificatePolicies = function (t, e) {
            if (void 0 === t && void 0 === e) {
              var r = this.getExtInfo("certificatePolicies");
              if (void 0 === r) return;
              ((t = n(this.hex, r.vidx)), (e = r.critical));
            }
            var s = {
              extname: "certificatePolicies",
              array: [],
            };
            e && (s.critical = !0);
            for (var a = i(t, 0), o = 0; o < a.length; o++) {
              var h = n(t, a[o]),
                u = this.getPolicyInformation(h);
              s.array.push(u);
            }
            return s;
          }),
          (this.getPolicyInformation = function (t) {
            var e = {},
              r = s(t, 0, [0], "06");
            e.policyoid = f(r);
            var a = c(t, 0, [1], "30");
            if (-1 != a) {
              e.array = [];
              for (var o = i(t, a), h = 0; h < o.length; h++) {
                var u = n(t, o[h]),
                  l = this.getPolicyQualifierInfo(u);
                e.array.push(l);
              }
            }
            return e;
          }),
          (this.getPolicyQualifierInfo = function (t) {
            var e = {},
              i = s(t, 0, [0], "06");
            if ("2b06010505070201" === i) {
              var r = a(t, 0, [1], "16");
              e.cps = ft(r);
            } else if ("2b06010505070202" === i) {
              var n = o(t, 0, [1], "30");
              e.unotice = this.getUserNotice(n);
            }
            return e;
          }),
          (this.getUserNotice = function (t) {
            for (var e = {}, r = i(t, 0), s = 0; s < r.length; s++) {
              var a = n(t, r[s]);
              "30" != a.substr(0, 2) && (e.exptext = this.getDisplayText(a));
            }
            return e;
          }),
          (this.getDisplayText = function (t) {
            var e = {};
            return (
              (e.type = {
                "0c": "utf8",
                16: "ia5",
                "1a": "vis",
                "1e": "bmp",
              }[t.substr(0, 2)]),
              (e.str = ft(r(t, 0))),
              e
            );
          }),
          (this.getExtCRLNumber = function (t, e) {
            var i = {
              extname: "cRLNumber",
            };
            if ((e && (i.critical = !0), "02" == t.substr(0, 2)))
              return (
                (i.num = {
                  hex: r(t, 0),
                }),
                i
              );
            throw new Error("hExtV parse error: " + t);
          }),
          (this.getExtCRLReason = function (t, e) {
            var i = {
              extname: "cRLReason",
            };
            if ((e && (i.critical = !0), "0a" == t.substr(0, 2)))
              return ((i.code = parseInt(r(t, 0), 16)), i);
            throw new Error("hExtV parse error: " + t);
          }),
          (this.getExtOcspNonce = function (t, e) {
            var i = {
              extname: "ocspNonce",
            };
            e && (i.critical = !0);
            var n = r(t, 0);
            return ((i.hex = n), i);
          }),
          (this.getExtOcspNoCheck = function (t, e) {
            var i = {
              extname: "ocspNoCheck",
            };
            return (e && (i.critical = !0), i);
          }),
          (this.getX500NameRule = function (t) {
            for (var e = null, i = [], r = 0; r < t.length; r++)
              for (var n = t[r], s = 0; s < n.length; s++) i.push(n[s]);
            for (r = 0; r < i.length; r++) {
              var a = i[r],
                o = a.ds,
                h = a.value,
                u = a.type;
              if ((":" + o, "prn" != o && "utf8" != o && "ia5" != o))
                return "mixed";
              if ("ia5" == o) {
                if ("CN" != u) return "mixed";
                if (Z.lang.String.isMail(h)) continue;
                return "mixed";
              }
              if ("C" == u) {
                if ("prn" == o) continue;
                return "mixed";
              }
              if ((":" + o, null == e)) e = o;
              else if (e !== o) return "mixed";
            }
            return null == e ? "prn" : e;
          }),
          (this.getX500Name = function (t) {
            for (var e = [], r = i(t, 0), s = 0; s < r.length; s++)
              e.push(this.getRDN(n(t, r[s])));
            return e;
          }),
          (this.getRDN = function (t) {
            for (var e = [], r = i(t, 0), s = 0; s < r.length; s++)
              e.push(this.getAttrTypeAndValue(n(t, r[s])));
            return e;
          }),
          (this.getAttrTypeAndValue = function (t) {
            var e = {
                type: null,
                value: null,
                ds: null,
              },
              r = i(t, 0),
              n = s(t, r[0], [], "06"),
              a = s(t, r[1], []),
              o = Z.asn1.ASN1Util.oidHexToInt(n);
            return (
              (e.type = Z.asn1.x509.OID.oid2atype(o)),
              (e.value = ft(a)),
              (e.ds = this.HEX2STAG[t.substr(r[1], 2)]),
              e
            );
          }),
          (this.readCertPEM = function (t) {
            this.readCertHex(p(t));
          }),
          (this.readCertHex = function (t) {
            ((this.hex = t), this.getVersion());
            try {
              (u(this.hex, 0, [0, 7], "a3"), this.parseExt());
            } catch (e) {}
          }),
          (this.getParam = function () {
            var t = {};
            return (
              (t.version = this.getVersion()),
              (t.serial = {
                hex: this.getSerialNumberHex(),
              }),
              (t.sigalg = this.getSignatureAlgorithmField()),
              (t.issuer = this.getIssuer()),
              (t.notbefore = this.getNotBefore()),
              (t.notafter = this.getNotAfter()),
              (t.subject = this.getSubject()),
              (t.sbjpubkey = vt(this.getPublicKeyHex(), "PUBLIC KEY")),
              this.aExtInfo.length > 0 && (t.ext = this.getExtParamArray()),
              (t.sighex = this.getSignatureValueHex()),
              t
            );
          }),
          (this.getExtParamArray = function (t) {
            void 0 == t &&
              -1 != c(this.hex, 0, [0, "[3]"]) &&
              (t = h(this.hex, 0, [0, "[3]", 0], "30"));
            for (var e = [], r = i(t, 0), s = 0; s < r.length; s++) {
              var a = n(t, r[s]),
                o = this.getExtParam(a);
              null != o && e.push(o);
            }
            return e;
          }),
          (this.getExtParam = function (t) {
            var e = i(t, 0).length;
            if (2 != e && 3 != e)
              throw new Error(
                "wrong number elements in Extension: " + e + " " + t,
              );
            var r = d(s(t, 0, [0], "06")),
              n = !1;
            3 == e && "0101ff" == o(t, 0, [1]) && (n = !0);
            var a = o(t, 0, [e - 1, 0]),
              h = void 0;
            if (
              ("2.5.29.14" == r
                ? (h = this.getExtSubjectKeyIdentifier(a, n))
                : "2.5.29.15" == r
                  ? (h = this.getExtKeyUsage(a, n))
                  : "2.5.29.17" == r
                    ? (h = this.getExtSubjectAltName(a, n))
                    : "2.5.29.18" == r
                      ? (h = this.getExtIssuerAltName(a, n))
                      : "2.5.29.19" == r
                        ? (h = this.getExtBasicConstraints(a, n))
                        : "2.5.29.31" == r
                          ? (h = this.getExtCRLDistributionPoints(a, n))
                          : "2.5.29.32" == r
                            ? (h = this.getExtCertificatePolicies(a, n))
                            : "2.5.29.35" == r
                              ? (h = this.getExtAuthorityKeyIdentifier(a, n))
                              : "2.5.29.37" == r
                                ? (h = this.getExtExtKeyUsage(a, n))
                                : "1.3.6.1.5.5.7.1.1" == r
                                  ? (h = this.getExtAuthorityInfoAccess(a, n))
                                  : "2.5.29.20" == r
                                    ? (h = this.getExtCRLNumber(a, n))
                                    : "2.5.29.21" == r
                                      ? (h = this.getExtCRLReason(a, n))
                                      : "1.3.6.1.5.5.7.48.1.2" == r
                                        ? (h = this.getExtOcspNonce(a, n))
                                        : "1.3.6.1.5.5.7.48.1.5" == r &&
                                          (h = this.getExtOcspNoCheck(a, n)),
              void 0 != h)
            )
              return h;
            var u = {
              extname: r,
              extn: a,
            };
            return (n && (u.critical = !0), u);
          }),
          (this.getInfo = function () {
            var t,
              e,
              i,
              r,
              n = function (t) {
                for (var e = "", i = t.array, r = 0; r < i.length; r++) {
                  var n = i[r];
                  if (
                    ((e += "    policy oid: " + n.policyoid + "\n"),
                    void 0 !== n.array)
                  )
                    for (var s = 0; s < n.array.length; s++) {
                      var a = n.array[s];
                      void 0 !== a.cps && (e += "    cps: " + a.cps + "\n");
                    }
                }
                return e;
              },
              s = function (t) {
                for (var e = "", i = t.array, n = 0; n < i.length; n++) {
                  var s = i[n];
                  try {
                    void 0 !== s.dpname.full[0].uri &&
                      (e += "    " + s.dpname.full[0].uri + "\n");
                  } catch (r) {}
                  try {
                    void 0 !== s.dname.full[0].dn.hex &&
                      (e += "    " + Nt.hex2dn(s.dpname.full[0].dn.hex) + "\n");
                  } catch (r) {}
                }
                return e;
              },
              a = function (t) {
                for (var e = "", i = t.array, r = 0; r < i.length; r++) {
                  var n = i[r];
                  (void 0 !== n.caissuer &&
                    (e += "    caissuer: " + n.caissuer + "\n"),
                    void 0 !== n.ocsp && (e += "    ocsp: " + n.ocsp + "\n"));
                }
                return e;
              };
            if (
              ((t = "Basic Fields\n"),
              (t += "  serial number: " + this.getSerialNumberHex() + "\n"),
              (t +=
                "  signature algorithm: " +
                this.getSignatureAlgorithmField() +
                "\n"),
              (t += "  issuer: " + this.getIssuerString() + "\n"),
              (t += "  notBefore: " + this.getNotBefore() + "\n"),
              (t += "  notAfter: " + this.getNotAfter() + "\n"),
              (t += "  subject: " + this.getSubjectString() + "\n"),
              (t += "  subject public key info: \n"),
              (t +=
                "    key algorithm: " + (e = this.getPublicKey()).type + "\n"),
              "RSA" === e.type &&
                ((t += "    n=" + Dt(e.n.toString(16)).substr(0, 16) + "...\n"),
                (t += "    e=" + Dt(e.e.toString(16)) + "\n")),
              void 0 !== (i = this.aExtInfo) && null !== i)
            ) {
              t += "X509v3 Extensions:\n";
              for (var o = 0; o < i.length; o++) {
                var h = i[o],
                  u = Z.asn1.x509.OID.oid2name(h.oid);
                "" === u && (u = h.oid);
                var c = "";
                if (
                  (!0 === h.critical && (c = "CRITICAL"),
                  (t += "  " + u + " " + c + ":\n"),
                  "basicConstraints" === u)
                ) {
                  var l = this.getExtBasicConstraints();
                  void 0 === l.cA
                    ? (t += "    {}\n")
                    : ((t += "    cA=true"),
                      void 0 !== l.pathLen && (t += ", pathLen=" + l.pathLen),
                      (t += "\n"));
                } else if ("keyUsage" === u)
                  t += "    " + this.getExtKeyUsageString() + "\n";
                else if ("subjectKeyIdentifier" === u)
                  t +=
                    "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
                else if ("authorityKeyIdentifier" === u) {
                  var f = this.getExtAuthorityKeyIdentifier();
                  void 0 !== f.kid && (t += "    kid=" + f.kid.hex + "\n");
                } else {
                  if ("extKeyUsage" === u)
                    t +=
                      "    " + this.getExtExtKeyUsage().array.join(", ") + "\n";
                  else if ("subjectAltName" === u)
                    t +=
                      "    " +
                      ((r = this.getExtSubjectAltName()),
                      JSON.stringify(r.array).replace(/[\[\]\{\}\"]/g, "")) +
                      "\n";
                  else if ("cRLDistributionPoints" === u)
                    t += s(this.getExtCRLDistributionPoints());
                  else if ("authorityInfoAccess" === u)
                    t += a(this.getExtAuthorityInfoAccess());
                  else
                    "certificatePolicies" === u &&
                      (t += n(this.getExtCertificatePolicies()));
                }
              }
            }
            return (
              (t +=
                "signature algorithm: " +
                this.getSignatureAlgorithmName() +
                "\n"),
              (t +=
                "signature: " +
                this.getSignatureValueHex().substr(0, 16) +
                "...\n")
            );
          }));
      }
      ((G.prototype.sign = function (t, e) {
        var i,
          r = ((i = t), Z.crypto.Util.hashString(i, e));
        return this.signWithMessageHash(r, e);
      }),
        (G.prototype.signWithMessageHash = function (t, e) {
          var i = q(
            Z.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()),
            16,
          );
          return Tt(this.doPrivate(i).toString(16), this.n.bitLength());
        }),
        (G.prototype.signPSS = function (t, e, i) {
          var r,
            n = ((r = dt(t)), Z.crypto.Util.hashHex(r, e));
          return (
            void 0 === i && (i = -1),
            this.signWithMessageHashPSS(n, e, i)
          );
        }),
        (G.prototype.signWithMessageHashPSS = function (t, e, i) {
          var r,
            n = ft(t),
            s = n.length,
            a = this.n.bitLength() - 1,
            o = Math.ceil(a / 8),
            h = function (t) {
              return Z.crypto.Util.hashHex(t, e);
            };
          if (-1 === i || void 0 === i) i = s;
          else if (-2 === i) i = o - s - 2;
          else if (i < -2) throw new Error("invalid salt length");
          if (o < s + i + 2) throw new Error("data too long");
          var u = "";
          i > 0 &&
            ((u = new Array(i)),
            new U().nextBytes(u),
            (u = String.fromCharCode.apply(String, u)));
          var c = ft(h(dt("\0\0\0\0\0\0\0\0" + n + u))),
            f = [];
          for (r = 0; r < o - i - s - 2; r += 1) f[r] = 0;
          var d = String.fromCharCode.apply(String, f) + "\x01" + u,
            g = Ht(c, d.length, h),
            p = [];
          for (r = 0; r < d.length; r += 1)
            p[r] = d.charCodeAt(r) ^ g.charCodeAt(r);
          var y = (65280 >> (8 * o - a)) & 255;
          for (p[0] &= ~y, r = 0; r < s; r++) p.push(c.charCodeAt(r));
          return (
            p.push(188),
            Tt(this.doPrivate(new l(p)).toString(16), this.n.bitLength())
          );
        }),
        (G.prototype.verify = function (t, e) {
          var i = q((e = (e = e.replace(Rt, "")).replace(/[ \n]+/g, "")), 16);
          if (i.bitLength() > this.n.bitLength()) return 0;
          var r = Bt(
            this.doPublic(i)
              .toString(16)
              .replace(/^1f+00/, ""),
          );
          if (0 == r.length) return !1;
          var n,
            s = r[0];
          return r[1] == ((n = t), Z.crypto.Util.hashString(n, s));
        }),
        (G.prototype.verifyWithMessageHash = function (t, e) {
          if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
          var i = q(e, 16);
          if (i.bitLength() > this.n.bitLength()) return 0;
          var r = Bt(
            this.doPublic(i)
              .toString(16)
              .replace(/^1f+00/, ""),
          );
          if (0 == r.length) return !1;
          r[0];
          return r[1] == t;
        }),
        (G.prototype.verifyPSS = function (t, e, i, r) {
          var n,
            s = ((n = dt(t)), Z.crypto.Util.hashHex(n, i));
          return (
            void 0 === r && (r = -1),
            this.verifyWithMessageHashPSS(s, e, i, r)
          );
        }),
        (G.prototype.verifyWithMessageHashPSS = function (t, e, i, r) {
          if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
          var n,
            s = new l(e, 16),
            a = function (t) {
              return Z.crypto.Util.hashHex(t, i);
            },
            o = ft(t),
            h = o.length,
            u = this.n.bitLength() - 1,
            c = Math.ceil(u / 8);
          if (-1 === r || void 0 === r) r = h;
          else if (-2 === r) r = c - h - 2;
          else if (r < -2) throw new Error("invalid salt length");
          if (c < h + r + 2) throw new Error("data too long");
          var f = this.doPublic(s).toByteArray();
          for (n = 0; n < f.length; n += 1) f[n] &= 255;
          for (; f.length < c; ) f.unshift(0);
          if (188 !== f[c - 1])
            throw new Error("encoded message does not end in 0xbc");
          var d = (f = String.fromCharCode.apply(String, f)).substr(
              0,
              c - h - 1,
            ),
            g = f.substr(d.length, h),
            p = (65280 >> (8 * c - u)) & 255;
          if (0 !== (d.charCodeAt(0) & p))
            throw new Error("bits beyond keysize not zero");
          var y = Ht(g, d.length, a),
            v = [];
          for (n = 0; n < d.length; n += 1)
            v[n] = d.charCodeAt(n) ^ y.charCodeAt(n);
          v[0] &= ~p;
          var m = c - h - r - 2;
          for (n = 0; n < m; n += 1)
            if (0 !== v[n]) throw new Error("leftmost octets not zero");
          if (1 !== v[m]) throw new Error("0x01 marker not found");
          return (
            g ===
            ft(
              a(
                dt(
                  "\0\0\0\0\0\0\0\0" +
                    o +
                    String.fromCharCode.apply(String, v.slice(-r)),
                ),
              ),
            )
          );
        }),
        (G.SALT_LEN_HLEN = -1),
        (G.SALT_LEN_MAX = -2),
        (G.SALT_LEN_RECOVER = -2),
        (Nt.hex2dn = function (t, e) {
          if ((void 0 === e && (e = 0), "30" !== t.substr(e, 2)))
            throw new Error("malformed DN");
          for (
            var i = new Array(), r = et.getChildIdx(t, e), n = 0;
            n < r.length;
            n++
          )
            i.push(Nt.hex2rdn(t, r[n]));
          return (
            "/" +
            (i = i.map(function (t) {
              return t.replace("/", "\\/");
            })).join("/")
          );
        }),
        (Nt.hex2rdn = function (t, e) {
          if ((void 0 === e && (e = 0), "31" !== t.substr(e, 2)))
            throw new Error("malformed RDN");
          for (
            var i = new Array(), r = et.getChildIdx(t, e), n = 0;
            n < r.length;
            n++
          )
            i.push(Nt.hex2attrTypeValue(t, r[n]));
          return (i = i.map(function (t) {
            return t.replace("+", "\\+");
          })).join("+");
        }),
        (Nt.hex2attrTypeValue = function (t, e) {
          var i = et,
            r = i.getV;
          if ((void 0 === e && (e = 0), "30" !== t.substr(e, 2)))
            throw new Error("malformed attribute type and value");
          var n = i.getChildIdx(t, e);
          2 !== n.length || t.substr(n[0], 2);
          var s = r(t, n[0]),
            a = Z.asn1.ASN1Util.oidHexToInt(s);
          return Z.asn1.x509.OID.oid2atype(a) + "=" + ft(r(t, n[1]));
        }),
        (Nt.getPublicKeyFromCertHex = function (t) {
          var e = new Nt();
          return (e.readCertHex(t), e.getPublicKey());
        }),
        (Nt.getPublicKeyFromCertPEM = function (t) {
          var e = new Nt();
          return (e.readCertPEM(t), e.getPublicKey());
        }),
        (Nt.getPublicKeyInfoPropOfCertPEM = function (t) {
          var e,
            i,
            r = et.getVbyList,
            n = {};
          return (
            (n.algparam = null),
            (e = new Nt()).readCertPEM(t),
            (i = e.getPublicKeyHex()),
            (n.keyhex = r(i, 0, [1], "03").substr(2)),
            (n.algoid = r(i, 0, [0, 0], "06")),
            "2a8648ce3d0201" === n.algoid &&
              (n.algparam = r(i, 0, [0, 1], "06")),
            n
          );
        }),
        (Nt.KEYUSAGE_NAME = [
          "digitalSignature",
          "nonRepudiation",
          "keyEncipherment",
          "dataEncipherment",
          "keyAgreement",
          "keyCertSign",
          "cRLSign",
          "encipherOnly",
          "decipherOnly",
        ]));
      (("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.jws && Z.jws) || (Z.jws = {}),
        (Z.jws.JWS = function () {
          var t = Z.jws.JWS.isSafeJSONString;
          this.parseJWS = function (e, i) {
            if (
              void 0 === this.parsedJWS ||
              (!i && void 0 === this.parsedJWS.sigvalH)
            ) {
              var r = e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
              if (null == r)
                throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
              var n = r[1],
                s = r[2],
                a = r[3],
                o = n + "." + s;
              if (
                ((this.parsedJWS = {}),
                (this.parsedJWS.headB64U = n),
                (this.parsedJWS.payloadB64U = s),
                (this.parsedJWS.sigvalB64U = a),
                (this.parsedJWS.si = o),
                !i)
              ) {
                var h = ut(a),
                  u = q(h, 16);
                ((this.parsedJWS.sigvalH = h), (this.parsedJWS.sigvalBI = u));
              }
              var c = tt(n),
                l = tt(s);
              if (
                ((this.parsedJWS.headS = c),
                (this.parsedJWS.payloadS = l),
                !t(c, this.parsedJWS, "headP"))
              )
                throw "malformed JSON string for JWS Head: " + c;
            }
          };
        }),
        (Z.jws.JWS.sign = function (t, e, i, r, n) {
          var s,
            a,
            o,
            h = Z,
            u = h.jws.JWS,
            c = u.readSafeJSONString,
            l = u.isSafeJSONString,
            f = h.crypto,
            d = (f.ECDSA, f.Mac),
            g = f.Signature,
            p = JSON;
          if ("string" != typeof e && "object" != typeof e)
            throw "spHeader must be JSON string or object: " + e;
          if (
            ("object" == typeof e && ((a = e), (s = p.stringify(a))),
            "string" == typeof e)
          ) {
            if (!l((s = e))) throw "JWS Head is not safe JSON string: " + s;
            a = c(s);
          }
          if (
            ((o = i),
            "object" == typeof i && (o = p.stringify(i)),
            ("" != t && null != t) || void 0 === a.alg || (t = a.alg),
            "" != t &&
              null != t &&
              void 0 === a.alg &&
              ((a.alg = t), (s = p.stringify(a))),
            t !== a.alg)
          )
            throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
          var y = null;
          if (void 0 === u.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
          y = u.jwsalg2sigalg[t];
          var v = Q(s) + "." + Q(o),
            m = "";
          if ("Hmac" == y.substr(0, 4)) {
            if (void 0 === r) throw "mac key shall be specified for HS* alg";
            var x = new d({
              alg: y,
              prov: "cryptojs",
              pass: r,
            });
            (x.updateString(v), (m = x.doFinal()));
          } else if (-1 != y.indexOf("withECDSA")) {
            ((E = new g({
              alg: y,
            })).init(r, n),
              E.updateString(v));
            var S = E.sign();
            m = Z.crypto.ECDSA.asn1SigToConcatSig(S);
          } else {
            var E;
            if ("none" != y)
              ((E = new g({
                alg: y,
              })).init(r, n),
                E.updateString(v),
                (m = E.sign()));
          }
          return v + "." + ht(m);
        }),
        (Z.jws.JWS.verify = function (t, e, i) {
          var r,
            n = Z,
            s = n.jws.JWS,
            a = s.readSafeJSONString,
            o = n.crypto,
            h = o.ECDSA,
            u = o.Mac,
            c = o.Signature;
          r = G;
          var l = t.split(".");
          if (3 !== l.length) return !1;
          var f = l[0] + "." + l[1],
            d = ut(l[2]),
            g = a(tt(l[0])),
            p = null,
            y = null;
          if (void 0 === g.alg) throw "algorithm not specified in header";
          if (
            ((y = (p = g.alg).substr(0, 2)),
            null != i &&
              "[object Array]" === Object.prototype.toString.call(i) &&
              i.length > 0) &&
            -1 == (":" + i.join(":") + ":").indexOf(":" + p + ":")
          )
            throw "algorithm '" + p + "' not accepted in the list";
          if ("none" != p && null === e)
            throw "key shall be specified to verify.";
          if (
            ("string" == typeof e &&
              -1 != e.indexOf("-----BEGIN ") &&
              (e = Pt.getKey(e)),
            ("RS" == y || "PS" == y) && !(e instanceof r))
          )
            throw "key shall be a RSAKey obj for RS* and PS* algs";
          if ("ES" == y && !(e instanceof h))
            throw "key shall be a ECDSA obj for ES* algs";
          var v = null;
          if (void 0 === s.jwsalg2sigalg[g.alg])
            throw "unsupported alg name: " + p;
          if ("none" == (v = s.jwsalg2sigalg[p])) throw "not supported";
          if ("Hmac" == v.substr(0, 4)) {
            if (void 0 === e)
              throw "hexadecimal key shall be specified for HMAC";
            var m = new u({
              alg: v,
              pass: e,
            });
            return (m.updateString(f), d == m.doFinal());
          }
          if (-1 != v.indexOf("withECDSA")) {
            var x,
              S = null;
            try {
              S = h.concatSigToASN1Sig(d);
            } catch (E) {
              return !1;
            }
            return (
              (x = new c({
                alg: v,
              })).init(e),
              x.updateString(f),
              x.verify(S)
            );
          }
          return (
            (x = new c({
              alg: v,
            })).init(e),
            x.updateString(f),
            x.verify(d)
          );
        }),
        (Z.jws.JWS.parse = function (t) {
          var e,
            i,
            r,
            n = t.split("."),
            s = {};
          if (2 != n.length && 3 != n.length)
            throw "malformed sJWS: wrong number of '.' splitted elements";
          return (
            (e = n[0]),
            (i = n[1]),
            3 == n.length && (r = n[2]),
            (s.headerObj = Z.jws.JWS.readSafeJSONString(tt(e))),
            (s.payloadObj = Z.jws.JWS.readSafeJSONString(tt(i))),
            (s.headerPP = JSON.stringify(s.headerObj, null, "  ")),
            null == s.payloadObj
              ? (s.payloadPP = tt(i))
              : (s.payloadPP = JSON.stringify(s.payloadObj, null, "  ")),
            void 0 !== r && (s.sigHex = ut(r)),
            s
          );
        }),
        (Z.jws.JWS.verifyJWT = function (t, e, i) {
          var r = Z.jws,
            n = r.JWS,
            s = n.readSafeJSONString,
            a = n.inArray,
            o = n.includedArray,
            h = t.split("."),
            u = h[0],
            c = h[1],
            l = (ut(h[2]), s(tt(u))),
            f = s(tt(c));
          if (void 0 === l.alg) return !1;
          if (void 0 === i.alg) throw "acceptField.alg shall be specified";
          if (!a(l.alg, i.alg)) return !1;
          if (void 0 !== f.iss && "object" === typeof i.iss && !a(f.iss, i.iss))
            return !1;
          if (void 0 !== f.sub && "object" === typeof i.sub && !a(f.sub, i.sub))
            return !1;
          if (void 0 !== f.aud && "object" === typeof i.aud)
            if ("string" == typeof f.aud) {
              if (!a(f.aud, i.aud)) return !1;
            } else if ("object" == typeof f.aud && !o(f.aud, i.aud)) return !1;
          var d = r.IntDate.getNow();
          return (
            void 0 !== i.verifyAt &&
              "number" === typeof i.verifyAt &&
              (d = i.verifyAt),
            (void 0 !== i.gracePeriod && "number" === typeof i.gracePeriod) ||
              (i.gracePeriod = 0),
            !(
              void 0 !== f.exp &&
              "number" == typeof f.exp &&
              f.exp + i.gracePeriod < d
            ) &&
              !(
                void 0 !== f.nbf &&
                "number" == typeof f.nbf &&
                d < f.nbf - i.gracePeriod
              ) &&
              !(
                void 0 !== f.iat &&
                "number" == typeof f.iat &&
                d < f.iat - i.gracePeriod
              ) &&
              (void 0 === f.jti || void 0 === i.jti || f.jti === i.jti) &&
              !!n.verify(t, e, i.alg)
          );
        }),
        (Z.jws.JWS.includedArray = function (t, e) {
          var i = Z.jws.JWS.inArray;
          if (null === t) return !1;
          if ("object" !== typeof t) return !1;
          if ("number" !== typeof t.length) return !1;
          for (var r = 0; r < t.length; r++) if (!i(t[r], e)) return !1;
          return !0;
        }),
        (Z.jws.JWS.inArray = function (t, e) {
          if (null === e) return !1;
          if ("object" !== typeof e) return !1;
          if ("number" !== typeof e.length) return !1;
          for (var i = 0; i < e.length; i++) if (e[i] == t) return !0;
          return !1;
        }),
        (Z.jws.JWS.jwsalg2sigalg = {
          HS256: "HmacSHA256",
          HS384: "HmacSHA384",
          HS512: "HmacSHA512",
          RS256: "SHA256withRSA",
          RS384: "SHA384withRSA",
          RS512: "SHA512withRSA",
          ES256: "SHA256withECDSA",
          ES384: "SHA384withECDSA",
          PS256: "SHA256withRSAandMGF1",
          PS384: "SHA384withRSAandMGF1",
          PS512: "SHA512withRSAandMGF1",
          none: "none",
        }),
        (Z.jws.JWS.isSafeJSONString = function (t, e, i) {
          var r = null;
          try {
            return "object" != typeof (r = $(t)) || r.constructor === Array
              ? 0
              : (e && (e[i] = r), 1);
          } catch (n) {
            return 0;
          }
        }),
        (Z.jws.JWS.readSafeJSONString = function (t) {
          var e = null;
          try {
            return "object" != typeof (e = $(t)) || e.constructor === Array
              ? null
              : e;
          } catch (i) {
            return null;
          }
        }),
        (Z.jws.JWS.getEncodedSignatureValueFromJWS = function (t) {
          var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
          if (null == e)
            throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
          return e[1];
        }),
        (Z.jws.JWS.getJWKthumbprint = function (t) {
          if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty)
            throw "unsupported algorithm for JWK Thumprint";
          var e = "{";
          if ("RSA" === t.kty) {
            if ("string" != typeof t.n || "string" != typeof t.e)
              throw "wrong n and e value for RSA key";
            ((e += '"e":"' + t.e + '",'),
              (e += '"kty":"' + t.kty + '",'),
              (e += '"n":"' + t.n + '"}'));
          } else if ("EC" === t.kty) {
            if (
              "string" != typeof t.crv ||
              "string" != typeof t.x ||
              "string" != typeof t.y
            )
              throw "wrong crv, x and y value for EC key";
            ((e += '"crv":"' + t.crv + '",'),
              (e += '"kty":"' + t.kty + '",'),
              (e += '"x":"' + t.x + '",'),
              (e += '"y":"' + t.y + '"}'));
          } else if ("oct" === t.kty) {
            if ("string" != typeof t.k)
              throw "wrong k value for oct(symmetric) key";
            ((e += '"kty":"' + t.kty + '",'), (e += '"k":"' + t.k + '"}'));
          }
          var i = dt(e);
          return ht(Z.crypto.Util.hashHex(i, "sha256"));
        }),
        (Z.jws.IntDate = {}),
        (Z.jws.IntDate.get = function (t) {
          var e = Z.jws.IntDate,
            i = e.getNow,
            r = e.getZulu;
          if ("now" == t) return i();
          if ("now + 1hour" == t) return i() + 3600;
          if ("now + 1day" == t) return i() + 86400;
          if ("now + 1month" == t) return i() + 2592e3;
          if ("now + 1year" == t) return i() + 31536e3;
          if (t.match(/Z$/)) return r(t);
          if (t.match(/^[0-9]+$/)) return parseInt(t);
          throw "unsupported format: " + t;
        }),
        (Z.jws.IntDate.getZulu = function (t) {
          return St(t);
        }),
        (Z.jws.IntDate.getNow = function () {
          return ~~(new Date() / 1e3);
        }),
        (Z.jws.IntDate.intDate2UTCString = function (t) {
          return new Date(1e3 * t).toUTCString();
        }),
        (Z.jws.IntDate.intDate2Zulu = function (t) {
          var e = new Date(1e3 * t);
          return (
            ("0000" + e.getUTCFullYear()).slice(-4) +
            ("00" + (e.getUTCMonth() + 1)).slice(-2) +
            ("00" + e.getUTCDate()).slice(-2) +
            ("00" + e.getUTCHours()).slice(-2) +
            ("00" + e.getUTCMinutes()).slice(-2) +
            ("00" + e.getUTCSeconds()).slice(-2) +
            "Z"
          );
        }),
        ("undefined" != typeof Z && Z) || (Z = {}),
        ("undefined" != typeof Z.jws && Z.jws) || (Z.jws = {}),
        (Z.jws.JWSJS = function () {
          var t = Z.jws.JWS,
            e = t.readSafeJSONString;
          ((this.aHeader = []),
            (this.sPayload = ""),
            (this.aSignature = []),
            (this.init = function () {
              ((this.aHeader = []),
                (this.sPayload = void 0),
                (this.aSignature = []));
            }),
            (this.initWithJWS = function (t) {
              this.init();
              var e = t.split(".");
              if (3 != e.length) throw "malformed input JWS";
              (this.aHeader.push(e[0]),
                (this.sPayload = e[1]),
                this.aSignature.push(e[2]));
            }),
            (this.addSignature = function (t, e, i, r) {
              if (void 0 === this.sPayload || null === this.sPayload)
                throw "there's no JSON-JS signature to add.";
              var n = this.aHeader.length;
              if (this.aHeader.length != this.aSignature.length)
                throw "aHeader.length != aSignature.length";
              try {
                var s = Z.jws.JWS.sign(t, e, this.sPayload, i, r).split(".");
                (s[0], s[2]);
                (this.aHeader.push(s[0]), this.aSignature.push(s[2]));
              } catch (a) {
                throw (
                  this.aHeader.length > n && this.aHeader.pop(),
                  this.aSignature.length > n && this.aSignature.pop(),
                  "addSignature failed: " + a
                );
              }
            }),
            (this.verifyAll = function (t) {
              if (
                this.aHeader.length !== t.length ||
                this.aSignature.length !== t.length
              )
                return !1;
              for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (2 !== i.length) return !1;
                if (!1 === this.verifyNth(e, i[0], i[1])) return !1;
              }
              return !0;
            }),
            (this.verifyNth = function (e, i, r) {
              if (this.aHeader.length <= e || this.aSignature.length <= e)
                return !1;
              var n = this.aHeader[e],
                s = this.aSignature[e],
                a = n + "." + this.sPayload + "." + s,
                o = !1;
              try {
                o = t.verify(a, i, r);
              } catch (h) {
                return !1;
              }
              return o;
            }),
            (this.readJWSJS = function (t) {
              if ("string" === typeof t) {
                var i = e(t);
                if (null == i) throw "argument is not safe JSON object string";
                ((this.aHeader = i.headers),
                  (this.sPayload = i.payload),
                  (this.aSignature = i.signatures));
              } else
                try {
                  if (!(t.headers.length > 0)) throw "malformed header";
                  if (
                    ((this.aHeader = t.headers), "string" !== typeof t.payload)
                  )
                    throw "malformed signatures";
                  if (((this.sPayload = t.payload), !(t.signatures.length > 0)))
                    throw "malformed signatures";
                  this.aSignature = t.signatures;
                } catch (r) {
                  throw "malformed JWS-JS JSON object: " + r;
                }
            }),
            (this.getJSON = function () {
              return {
                headers: this.aHeader,
                payload: this.sPayload,
                signatures: this.aSignature,
              };
            }),
            (this.isEmpty = function () {
              return 0 == this.aHeader.length ? 1 : 0;
            }));
        }),
        (e.SecureRandom = U),
        (e.rng_seed_time = V),
        (e.BigInteger = l),
        (e.RSAKey = G),
        (e.ECDSA = Z.crypto.ECDSA),
        (e.DSA = Z.crypto.DSA),
        (e.Signature = Z.crypto.Signature),
        (e.MessageDigest = Z.crypto.MessageDigest),
        (e.Mac = Z.crypto.Mac),
        (e.Cipher = Z.crypto.Cipher),
        (e.KEYUTIL = Pt),
        (e.ASN1HEX = et),
        (e.X509 = Nt),
        (e.X509CRL = function (t) {
          var e = Z.lang.String.isHex,
            i = et,
            r = i.getV,
            n = i.getTLV,
            s = i.getVbyList,
            a = i.getTLVbyList,
            o = i.getTLVbyListEx,
            h = i.getIdxbyList,
            u = i.getIdxbyListEx,
            c = i.getChildIdx,
            l = new Nt();
          ((this.hex = null),
            (this.posSigAlg = null),
            (this.posRevCert = null),
            (this._setPos = function () {
              var t = h(this.hex, 0, [0, 0]),
                e = this.hex.substr(t, 2);
              if ("02" == e) this.posSigAlg = 1;
              else {
                if ("30" != e)
                  throw new Error("malformed 1st item of TBSCertList: " + e);
                this.posSigAlg = 0;
              }
              var i,
                r = h(this.hex, 0, [0, this.posSigAlg + 3]),
                n = this.hex.substr(r, 2);
              if ("17" == n || "18" == n)
                ((i = h(this.hex, 0, [0, this.posSigAlg + 4])),
                  (this.posRevCert = null),
                  -1 != i &&
                    "30" == this.hex.substr(i, 2) &&
                    (this.posRevCert = this.posSigAlg + 4));
              else if ("30" == n) this.posRevCert = this.posSigAlg + 3;
              else {
                if ("a0" != n)
                  throw new Error("malformed nextUpdate or revCert tag: " + n);
                this.posRevCert = null;
              }
            }),
            (this.getVersion = function () {
              return 0 == this.posSigAlg
                ? null
                : parseInt(s(this.hex, 0, [0, 0], "02"), 16) + 1;
            }),
            (this.getSignatureAlgorithmField = function () {
              var t = a(this.hex, 0, [0, this.posSigAlg], "30");
              return l.getAlgorithmIdentifierName(t);
            }),
            (this.getIssuer = function () {
              var t = a(this.hex, 0, [0, this.posSigAlg + 1], "30"),
                e = {};
              return ((e.array = l.getX500Name(t)), e);
            }),
            (this.getThisUpdate = function () {
              var t = s(this.hex, 0, [0, this.posSigAlg + 2]);
              return (result = ft(t));
            }),
            (this.getNextUpdate = function () {
              var t = h(this.hex, 0, [0, this.posSigAlg + 3]),
                e = this.hex.substr(t, 2);
              return "17" != e && "18" != e ? null : ft(r(this.hex, t));
            }),
            (this.getRevCertArray = function () {
              if (null == this.posRevCert) return null;
              for (
                var t = [],
                  e = h(this.hex, 0, [0, this.posRevCert]),
                  i = c(this.hex, e),
                  r = 0;
                r < i.length;
                r++
              ) {
                var s = n(this.hex, i[r]);
                t.push(this.getRevCert(s));
              }
              return t;
            }),
            (this.getRevCert = function (t) {
              var e = {},
                i = c(t, 0);
              return (
                (e.sn = {
                  hex: s(t, 0, [0], "02"),
                }),
                (e.date = ft(s(t, 0, [1]))),
                3 == i.length && (e.ext = l.getExtParamArray(a(t, 0, [2]))),
                e
              );
            }),
            (this.getSignatureValueHex = function () {
              return s(this.hex, 0, [2], "03", !0);
            }),
            (this.verifySignature = function (t) {
              var e = this.getSignatureAlgorithmField(),
                i = this.getSignatureValueHex(),
                r = a(this.hex, 0, [0], "30"),
                n = new Z.crypto.Signature({
                  alg: e,
                });
              return (n.init(t), n.updateHex(r), n.verify(i));
            }),
            (this.getParam = function () {
              var t = {},
                e = this.getVersion();
              (null != e && (t.version = e),
                (t.sigalg = this.getSignatureAlgorithmField()),
                (t.issuer = this.getIssuer()),
                (t.thisupdate = this.getThisUpdate()));
              var i = this.getNextUpdate();
              null != i && (t.nextupdate = i);
              var r = this.getRevCertArray();
              if (
                (null != r && (t.revcert = r), -1 != u(this.hex, 0, [0, "[0]"]))
              ) {
                var n = o(this.hex, 0, [0, "[0]", 0]);
                t.ext = l.getExtParamArray(n);
              }
              return ((t.sighex = this.getSignatureValueHex()), t);
            }),
            "string" == typeof t &&
              (e(t)
                ? (this.hex = t)
                : t.match(/-----BEGIN X509 CRL/) && (this.hex = mt(t)),
              this._setPos()));
        }),
        (e.CryptoJS = s),
        (e.b64tohex = u),
        (e.b64toBA = c),
        (e.ECFieldElementFp = J),
        (e.ECPointFp = W),
        (e.ECCurveFp = X),
        (e.stoBA = it),
        (e.BAtos = rt),
        (e.BAtohex = nt),
        (e.stohex = st),
        (e.stob64 = function (t) {
          return h(st(t));
        }),
        (e.stob64u = function (t) {
          return at(h(st(t)));
        }),
        (e.b64utos = function (t) {
          return rt(c(ot(t)));
        }),
        (e.b64tob64u = at),
        (e.b64utob64 = ot),
        (e.hex2b64 = h),
        (e.hextob64u = ht),
        (e.b64utohex = ut),
        (e.utf8tob64u = Q),
        (e.b64utoutf8 = tt),
        (e.utf8tob64 = function (t) {
          return h(Et(Ct(t)));
        }),
        (e.b64toutf8 = function (t) {
          return decodeURIComponent(wt(u(t)));
        }),
        (e.utf8tohex = ct),
        (e.hextoutf8 = lt),
        (e.hextorstr = ft),
        (e.rstrtohex = dt),
        (e.hextob64 = gt),
        (e.hextob64nl = pt),
        (e.b64nltohex = yt),
        (e.hextopem = vt),
        (e.pemtohex = mt),
        (e.hextoArrayBuffer = function (t) {
          if (t.length % 2 != 0) throw "input is not even length";
          if (null == t.match(/^[0-9A-Fa-f]+$/))
            throw "input is not hexadecimal";
          for (
            var e = new ArrayBuffer(t.length / 2), i = new DataView(e), r = 0;
            r < t.length / 2;
            r++
          )
            i.setUint8(r, parseInt(t.substr(2 * r, 2), 16));
          return e;
        }),
        (e.ArrayBuffertohex = function (t) {
          for (var e = "", i = new DataView(t), r = 0; r < t.byteLength; r++)
            e += ("00" + i.getUint8(r).toString(16)).slice(-2);
          return e;
        }),
        (e.zulutomsec = xt),
        (e.zulutosec = St),
        (e.zulutodate = function (t) {
          return new Date(xt(t));
        }),
        (e.datetozulu = function (t, e, i) {
          var r,
            n = t.getUTCFullYear();
          if (e) {
            if (n < 1950 || 2049 < n) throw "not proper year for UTCTime: " + n;
            r = ("" + n).slice(-2);
          } else r = ("000" + n).slice(-4);
          if (
            ((r += ("0" + (t.getUTCMonth() + 1)).slice(-2)),
            (r += ("0" + t.getUTCDate()).slice(-2)),
            (r += ("0" + t.getUTCHours()).slice(-2)),
            (r += ("0" + t.getUTCMinutes()).slice(-2)),
            (r += ("0" + t.getUTCSeconds()).slice(-2)),
            i)
          ) {
            var s = t.getUTCMilliseconds();
            0 !== s &&
              (r += "." + (s = (s = ("00" + s).slice(-3)).replace(/0+$/g, "")));
          }
          return (r += "Z");
        }),
        (e.uricmptohex = Et),
        (e.hextouricmp = wt),
        (e.ipv6tohex = Ft),
        (e.hextoipv6 = bt),
        (e.hextoip = At),
        (e.iptohex = function (t) {
          var e = "malformed IP address";
          if (!(t = t.toLowerCase(t)).match(/^[0-9.]+$/)) {
            if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(":")) return Ft(t);
            throw e;
          }
          var i = t.split(".");
          if (4 !== i.length) throw e;
          var r = "";
          try {
            for (var n = 0; n < 4; n++) {
              r += ("0" + parseInt(i[n]).toString(16)).slice(-2);
            }
            return r;
          } catch (s) {
            throw e;
          }
        }),
        (e.encodeURIComponentAll = Ct),
        (e.newline_toUnix = function (t) {
          return (t = t.replace(/\r\n/gm, "\n"));
        }),
        (e.newline_toDos = function (t) {
          return (t = (t = t.replace(/\r\n/gm, "\n")).replace(/\n/gm, "\r\n"));
        }),
        (e.hextoposhex = Dt),
        (e.intarystrtohex = It),
        (e.strdiffidx = function (t, e) {
          var i = t.length;
          t.length > e.length && (i = e.length);
          for (var r = 0; r < i; r++)
            if (t.charCodeAt(r) != e.charCodeAt(r)) return r;
          return t.length != e.length ? i : -1;
        }),
        (e.KJUR = Z),
        (e.crypto = Z.crypto),
        (e.asn1 = Z.asn1),
        (e.jws = Z.jws),
        (e.lang = Z.lang));
    }).call(this, i(1598).Buffer);
  },
  1598: function (t, e, i) {
    "use strict";
    (function (t) {
      var r = i(1773),
        n = i(1774),
        s = i(1775);
      function a() {
        return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function o(t, e) {
        if (a() < e) throw new RangeError("Invalid typed array length");
        return (
          h.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = h.prototype)
            : (null === t && (t = new h(e)), (t.length = e)),
          t
        );
      }
      function h(t, e, i) {
        if (!h.TYPED_ARRAY_SUPPORT && !(this instanceof h))
          return new h(t, e, i);
        if ("number" === typeof t) {
          if ("string" === typeof e)
            throw new Error(
              "If encoding is specified then the first argument must be a string",
            );
          return l(this, t);
        }
        return u(this, t, e, i);
      }
      function u(t, e, i, r) {
        if ("number" === typeof e)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function (t, e, i, r) {
              if ((e.byteLength, i < 0 || e.byteLength < i))
                throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < i + (r || 0))
                throw new RangeError("'length' is out of bounds");
              e =
                void 0 === i && void 0 === r
                  ? new Uint8Array(e)
                  : void 0 === r
                    ? new Uint8Array(e, i)
                    : new Uint8Array(e, i, r);
              h.TYPED_ARRAY_SUPPORT
                ? ((t = e).__proto__ = h.prototype)
                : (t = f(t, e));
              return t;
            })(t, e, i, r)
          : "string" === typeof e
            ? (function (t, e, i) {
                ("string" === typeof i && "" !== i) || (i = "utf8");
                if (!h.isEncoding(i))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding',
                  );
                var r = 0 | g(e, i),
                  n = (t = o(t, r)).write(e, i);
                n !== r && (t = t.slice(0, n));
                return t;
              })(t, e, i)
            : (function (t, e) {
                if (h.isBuffer(e)) {
                  var i = 0 | d(e.length);
                  return (0 === (t = o(t, i)).length || e.copy(t, 0, 0, i), t);
                }
                if (e) {
                  if (
                    ("undefined" !== typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" !== typeof e.length || (r = e.length) !== r
                      ? o(t, 0)
                      : f(t, e);
                  if ("Buffer" === e.type && s(e.data)) return f(t, e.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
                );
              })(t, e);
      }
      function c(t) {
        if ("number" !== typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function l(t, e) {
        if ((c(e), (t = o(t, e < 0 ? 0 : 0 | d(e))), !h.TYPED_ARRAY_SUPPORT))
          for (var i = 0; i < e; ++i) t[i] = 0;
        return t;
      }
      function f(t, e) {
        var i = e.length < 0 ? 0 : 0 | d(e.length);
        t = o(t, i);
        for (var r = 0; r < i; r += 1) t[r] = 255 & e[r];
        return t;
      }
      function d(t) {
        if (t >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes",
          );
        return 0 | t;
      }
      function g(t, e) {
        if (h.isBuffer(t)) return t.length;
        if (
          "undefined" !== typeof ArrayBuffer &&
          "function" === typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" !== typeof t && (t = "" + t);
        var i = t.length;
        if (0 === i) return 0;
        for (var r = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return i;
            case "utf8":
            case "utf-8":
            case void 0:
              return _(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * i;
            case "hex":
              return i >>> 1;
            case "base64":
              return M(t).length;
            default:
              if (r) return _(t).length;
              ((e = ("" + e).toLowerCase()), (r = !0));
          }
      }
      function p(t, e, i) {
        var r = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === i || i > this.length) && (i = this.length), i <= 0))
          return "";
        if ((i >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return P(this, e, i);
            case "utf8":
            case "utf-8":
              return C(this, e, i);
            case "ascii":
              return D(this, e, i);
            case "latin1":
            case "binary":
              return I(this, e, i);
            case "base64":
              return A(this, e, i);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, e, i);
            default:
              if (r) throw new TypeError("Unknown encoding: " + t);
              ((t = (t + "").toLowerCase()), (r = !0));
          }
      }
      function y(t, e, i) {
        var r = t[e];
        ((t[e] = t[i]), (t[i] = r));
      }
      function v(t, e, i, r, n) {
        if (0 === t.length) return -1;
        if (
          ("string" === typeof i
            ? ((r = i), (i = 0))
            : i > 2147483647
              ? (i = 2147483647)
              : i < -2147483648 && (i = -2147483648),
          (i = +i),
          isNaN(i) && (i = n ? 0 : t.length - 1),
          i < 0 && (i = t.length + i),
          i >= t.length)
        ) {
          if (n) return -1;
          i = t.length - 1;
        } else if (i < 0) {
          if (!n) return -1;
          i = 0;
        }
        if (("string" === typeof e && (e = h.from(e, r)), h.isBuffer(e)))
          return 0 === e.length ? -1 : m(t, e, i, r, n);
        if ("number" === typeof e)
          return (
            (e &= 255),
            h.TYPED_ARRAY_SUPPORT &&
            "function" === typeof Uint8Array.prototype.indexOf
              ? n
                ? Uint8Array.prototype.indexOf.call(t, e, i)
                : Uint8Array.prototype.lastIndexOf.call(t, e, i)
              : m(t, [e], i, r, n)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(t, e, i, r, n) {
        var s,
          a = 1,
          o = t.length,
          h = e.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          ((a = 2), (o /= 2), (h /= 2), (i /= 2));
        }
        function u(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (n) {
          var c = -1;
          for (s = i; s < o; s++)
            if (u(t, s) === u(e, -1 === c ? 0 : s - c)) {
              if ((-1 === c && (c = s), s - c + 1 === h)) return c * a;
            } else (-1 !== c && (s -= s - c), (c = -1));
        } else
          for (i + h > o && (i = o - h), s = i; s >= 0; s--) {
            for (var l = !0, f = 0; f < h; f++)
              if (u(t, s + f) !== u(e, f)) {
                l = !1;
                break;
              }
            if (l) return s;
          }
        return -1;
      }
      function x(t, e, i, r) {
        i = Number(i) || 0;
        var n = t.length - i;
        r ? (r = Number(r)) > n && (r = n) : (r = n);
        var s = e.length;
        if (s % 2 !== 0) throw new TypeError("Invalid hex string");
        r > s / 2 && (r = s / 2);
        for (var a = 0; a < r; ++a) {
          var o = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(o)) return a;
          t[i + a] = o;
        }
        return a;
      }
      function S(t, e, i, r) {
        return k(_(e, t.length - i), t, i, r);
      }
      function E(t, e, i, r) {
        return k(
          (function (t) {
            for (var e = [], i = 0; i < t.length; ++i)
              e.push(255 & t.charCodeAt(i));
            return e;
          })(e),
          t,
          i,
          r,
        );
      }
      function w(t, e, i, r) {
        return E(t, e, i, r);
      }
      function F(t, e, i, r) {
        return k(M(e), t, i, r);
      }
      function b(t, e, i, r) {
        return k(
          (function (t, e) {
            for (
              var i, r, n, s = [], a = 0;
              a < t.length && !((e -= 2) < 0);
              ++a
            )
              ((i = t.charCodeAt(a)),
                (r = i >> 8),
                (n = i % 256),
                s.push(n),
                s.push(r));
            return s;
          })(e, t.length - i),
          t,
          i,
          r,
        );
      }
      function A(t, e, i) {
        return 0 === e && i === t.length
          ? r.fromByteArray(t)
          : r.fromByteArray(t.slice(e, i));
      }
      function C(t, e, i) {
        i = Math.min(t.length, i);
        for (var r = [], n = e; n < i; ) {
          var s,
            a,
            o,
            h,
            u = t[n],
            c = null,
            l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
          if (n + l <= i)
            switch (l) {
              case 1:
                u < 128 && (c = u);
                break;
              case 2:
                128 === (192 & (s = t[n + 1])) &&
                  (h = ((31 & u) << 6) | (63 & s)) > 127 &&
                  (c = h);
                break;
              case 3:
                ((s = t[n + 1]),
                  (a = t[n + 2]),
                  128 === (192 & s) &&
                    128 === (192 & a) &&
                    (h = ((15 & u) << 12) | ((63 & s) << 6) | (63 & a)) >
                      2047 &&
                    (h < 55296 || h > 57343) &&
                    (c = h));
                break;
              case 4:
                ((s = t[n + 1]),
                  (a = t[n + 2]),
                  (o = t[n + 3]),
                  128 === (192 & s) &&
                    128 === (192 & a) &&
                    128 === (192 & o) &&
                    (h =
                      ((15 & u) << 18) |
                      ((63 & s) << 12) |
                      ((63 & a) << 6) |
                      (63 & o)) > 65535 &&
                    h < 1114112 &&
                    (c = h));
            }
          (null === c
            ? ((c = 65533), (l = 1))
            : c > 65535 &&
              ((c -= 65536),
              r.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            r.push(c),
            (n += l));
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var i = "",
            r = 0;
          for (; r < e; )
            i += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
          return i;
        })(r);
      }
      ((e.Buffer = h),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return h.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (h.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo() &&
                      "function" === typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (e.kMaxLength = a()),
        (h.poolSize = 8192),
        (h._augment = function (t) {
          return ((t.__proto__ = h.prototype), t);
        }),
        (h.from = function (t, e, i) {
          return u(null, t, e, i);
        }),
        h.TYPED_ARRAY_SUPPORT &&
          ((h.prototype.__proto__ = Uint8Array.prototype),
          (h.__proto__ = Uint8Array),
          "undefined" !== typeof Symbol &&
            Symbol.species &&
            h[Symbol.species] === h &&
            Object.defineProperty(h, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (h.alloc = function (t, e, i) {
          return (function (t, e, i, r) {
            return (
              c(e),
              e <= 0
                ? o(t, e)
                : void 0 !== i
                  ? "string" === typeof r
                    ? o(t, e).fill(i, r)
                    : o(t, e).fill(i)
                  : o(t, e)
            );
          })(null, t, e, i);
        }),
        (h.allocUnsafe = function (t) {
          return l(null, t);
        }),
        (h.allocUnsafeSlow = function (t) {
          return l(null, t);
        }),
        (h.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (h.compare = function (t, e) {
          if (!h.isBuffer(t) || !h.isBuffer(e))
            throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (
            var i = t.length, r = e.length, n = 0, s = Math.min(i, r);
            n < s;
            ++n
          )
            if (t[n] !== e[n]) {
              ((i = t[n]), (r = e[n]));
              break;
            }
          return i < r ? -1 : r < i ? 1 : 0;
        }),
        (h.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (h.concat = function (t, e) {
          if (!s(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return h.alloc(0);
          var i;
          if (void 0 === e)
            for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
          var r = h.allocUnsafe(e),
            n = 0;
          for (i = 0; i < t.length; ++i) {
            var a = t[i];
            if (!h.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            (a.copy(r, n), (n += a.length));
          }
          return r;
        }),
        (h.byteLength = g),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) y(this, e, e + 1);
          return this;
        }),
        (h.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            (y(this, e, e + 3), y(this, e + 1, e + 2));
          return this;
        }),
        (h.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            (y(this, e, e + 7),
              y(this, e + 1, e + 6),
              y(this, e + 2, e + 5),
              y(this, e + 3, e + 4));
          return this;
        }),
        (h.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
              ? C(this, 0, t)
              : p.apply(this, arguments);
        }),
        (h.prototype.equals = function (t) {
          if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === h.compare(this, t);
        }),
        (h.prototype.inspect = function () {
          var t = "",
            i = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, i).match(/.{2}/g).join(" ")),
              this.length > i && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (h.prototype.compare = function (t, e, i, r, n) {
          if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === i && (i = t ? t.length : 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = this.length),
            e < 0 || i > t.length || r < 0 || n > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= n && e >= i) return 0;
          if (r >= n) return -1;
          if (e >= i) return 1;
          if (this === t) return 0;
          for (
            var s = (n >>>= 0) - (r >>>= 0),
              a = (i >>>= 0) - (e >>>= 0),
              o = Math.min(s, a),
              u = this.slice(r, n),
              c = t.slice(e, i),
              l = 0;
            l < o;
            ++l
          )
            if (u[l] !== c[l]) {
              ((s = u[l]), (a = c[l]));
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (h.prototype.includes = function (t, e, i) {
          return -1 !== this.indexOf(t, e, i);
        }),
        (h.prototype.indexOf = function (t, e, i) {
          return v(this, t, e, i, !0);
        }),
        (h.prototype.lastIndexOf = function (t, e, i) {
          return v(this, t, e, i, !1);
        }),
        (h.prototype.write = function (t, e, i, r) {
          if (void 0 === e) ((r = "utf8"), (i = this.length), (e = 0));
          else if (void 0 === i && "string" === typeof e)
            ((r = e), (i = this.length), (e = 0));
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            ((e |= 0),
              isFinite(i)
                ? ((i |= 0), void 0 === r && (r = "utf8"))
                : ((r = i), (i = void 0)));
          }
          var n = this.length - e;
          if (
            ((void 0 === i || i > n) && (i = n),
            (t.length > 0 && (i < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var s = !1; ; )
            switch (r) {
              case "hex":
                return x(this, t, e, i);
              case "utf8":
              case "utf-8":
                return S(this, t, e, i);
              case "ascii":
                return E(this, t, e, i);
              case "latin1":
              case "binary":
                return w(this, t, e, i);
              case "base64":
                return F(this, t, e, i);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return b(this, t, e, i);
              default:
                if (s) throw new TypeError("Unknown encoding: " + r);
                ((r = ("" + r).toLowerCase()), (s = !0));
            }
        }),
        (h.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }));
      function D(t, e, i) {
        var r = "";
        i = Math.min(t.length, i);
        for (var n = e; n < i; ++n) r += String.fromCharCode(127 & t[n]);
        return r;
      }
      function I(t, e, i) {
        var r = "";
        i = Math.min(t.length, i);
        for (var n = e; n < i; ++n) r += String.fromCharCode(t[n]);
        return r;
      }
      function P(t, e, i) {
        var r = t.length;
        ((!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r));
        for (var n = "", s = e; s < i; ++s) n += K(t[s]);
        return n;
      }
      function R(t, e, i) {
        for (var r = t.slice(e, i), n = "", s = 0; s < r.length; s += 2)
          n += String.fromCharCode(r[s] + 256 * r[s + 1]);
        return n;
      }
      function T(t, e, i) {
        if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > i)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function H(t, e, i, r, n, s) {
        if (!h.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > n || e < s)
          throw new RangeError('"value" argument is out of bounds');
        if (i + r > t.length) throw new RangeError("Index out of range");
      }
      function B(t, e, i, r) {
        e < 0 && (e = 65535 + e + 1);
        for (var n = 0, s = Math.min(t.length - i, 2); n < s; ++n)
          t[i + n] =
            (e & (255 << (8 * (r ? n : 1 - n)))) >>> (8 * (r ? n : 1 - n));
      }
      function N(t, e, i, r) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var n = 0, s = Math.min(t.length - i, 4); n < s; ++n)
          t[i + n] = (e >>> (8 * (r ? n : 3 - n))) & 255;
      }
      function O(t, e, i, r, n, s) {
        if (i + r > t.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("Index out of range");
      }
      function j(t, e, i, r, s) {
        return (s || O(t, 0, i, 4), n.write(t, e, i, r, 23, 4), i + 4);
      }
      function V(t, e, i, r, s) {
        return (s || O(t, 0, i, 8), n.write(t, e, i, r, 52, 8), i + 8);
      }
      ((h.prototype.slice = function (t, e) {
        var i,
          r = this.length;
        if (
          ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0
            ? (e += r) < 0 && (e = 0)
            : e > r && (e = r),
          e < t && (e = t),
          h.TYPED_ARRAY_SUPPORT)
        )
          (i = this.subarray(t, e)).__proto__ = h.prototype;
        else {
          var n = e - t;
          i = new h(n, void 0);
          for (var s = 0; s < n; ++s) i[s] = this[s + t];
        }
        return i;
      }),
        (h.prototype.readUIntLE = function (t, e, i) {
          ((t |= 0), (e |= 0), i || T(t, e, this.length));
          for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256); )
            r += this[t + s] * n;
          return r;
        }),
        (h.prototype.readUIntBE = function (t, e, i) {
          ((t |= 0), (e |= 0), i || T(t, e, this.length));
          for (var r = this[t + --e], n = 1; e > 0 && (n *= 256); )
            r += this[t + --e] * n;
          return r;
        }),
        (h.prototype.readUInt8 = function (t, e) {
          return (e || T(t, 1, this.length), this[t]);
        }),
        (h.prototype.readUInt16LE = function (t, e) {
          return (e || T(t, 2, this.length), this[t] | (this[t + 1] << 8));
        }),
        (h.prototype.readUInt16BE = function (t, e) {
          return (e || T(t, 2, this.length), (this[t] << 8) | this[t + 1]);
        }),
        (h.prototype.readUInt32LE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (h.prototype.readUInt32BE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (h.prototype.readIntLE = function (t, e, i) {
          ((t |= 0), (e |= 0), i || T(t, e, this.length));
          for (var r = this[t], n = 1, s = 0; ++s < e && (n *= 256); )
            r += this[t + s] * n;
          return (r >= (n *= 128) && (r -= Math.pow(2, 8 * e)), r);
        }),
        (h.prototype.readIntBE = function (t, e, i) {
          ((t |= 0), (e |= 0), i || T(t, e, this.length));
          for (var r = e, n = 1, s = this[t + --r]; r > 0 && (n *= 256); )
            s += this[t + --r] * n;
          return (s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s);
        }),
        (h.prototype.readInt8 = function (t, e) {
          return (
            e || T(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (h.prototype.readInt16LE = function (t, e) {
          e || T(t, 2, this.length);
          var i = this[t] | (this[t + 1] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (h.prototype.readInt16BE = function (t, e) {
          e || T(t, 2, this.length);
          var i = this[t + 1] | (this[t] << 8);
          return 32768 & i ? 4294901760 | i : i;
        }),
        (h.prototype.readInt32LE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (h.prototype.readInt32BE = function (t, e) {
          return (
            e || T(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (h.prototype.readFloatLE = function (t, e) {
          return (e || T(t, 4, this.length), n.read(this, t, !0, 23, 4));
        }),
        (h.prototype.readFloatBE = function (t, e) {
          return (e || T(t, 4, this.length), n.read(this, t, !1, 23, 4));
        }),
        (h.prototype.readDoubleLE = function (t, e) {
          return (e || T(t, 8, this.length), n.read(this, t, !0, 52, 8));
        }),
        (h.prototype.readDoubleBE = function (t, e) {
          return (e || T(t, 8, this.length), n.read(this, t, !1, 52, 8));
        }),
        (h.prototype.writeUIntLE = function (t, e, i, r) {
          ((t = +t), (e |= 0), (i |= 0), r) ||
            H(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
          var n = 1,
            s = 0;
          for (this[e] = 255 & t; ++s < i && (n *= 256); )
            this[e + s] = (t / n) & 255;
          return e + i;
        }),
        (h.prototype.writeUIntBE = function (t, e, i, r) {
          ((t = +t), (e |= 0), (i |= 0), r) ||
            H(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
          var n = i - 1,
            s = 1;
          for (this[e + n] = 255 & t; --n >= 0 && (s *= 256); )
            this[e + n] = (t / s) & 255;
          return e + i;
        }),
        (h.prototype.writeUInt8 = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 1, 255, 0),
            h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (h.prototype.writeUInt16LE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : B(this, t, e, !0),
            e + 2
          );
        }),
        (h.prototype.writeUInt16BE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 2, 65535, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : B(this, t, e, !1),
            e + 2
          );
        }),
        (h.prototype.writeUInt32LE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (h.prototype.writeUInt32BE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 4, 4294967295, 0),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (h.prototype.writeIntLE = function (t, e, i, r) {
          if (((t = +t), (e |= 0), !r)) {
            var n = Math.pow(2, 8 * i - 1);
            H(this, t, e, i, n - 1, -n);
          }
          var s = 0,
            a = 1,
            o = 0;
          for (this[e] = 255 & t; ++s < i && (a *= 256); )
            (t < 0 && 0 === o && 0 !== this[e + s - 1] && (o = 1),
              (this[e + s] = (((t / a) >> 0) - o) & 255));
          return e + i;
        }),
        (h.prototype.writeIntBE = function (t, e, i, r) {
          if (((t = +t), (e |= 0), !r)) {
            var n = Math.pow(2, 8 * i - 1);
            H(this, t, e, i, n - 1, -n);
          }
          var s = i - 1,
            a = 1,
            o = 0;
          for (this[e + s] = 255 & t; --s >= 0 && (a *= 256); )
            (t < 0 && 0 === o && 0 !== this[e + s + 1] && (o = 1),
              (this[e + s] = (((t / a) >> 0) - o) & 255));
          return e + i;
        }),
        (h.prototype.writeInt8 = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 1, 127, -128),
            h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (h.prototype.writeInt16LE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : B(this, t, e, !0),
            e + 2
          );
        }),
        (h.prototype.writeInt16BE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 2, 32767, -32768),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : B(this, t, e, !1),
            e + 2
          );
        }),
        (h.prototype.writeInt32LE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 4, 2147483647, -2147483648),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (h.prototype.writeInt32BE = function (t, e, i) {
          return (
            (t = +t),
            (e |= 0),
            i || H(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            h.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (h.prototype.writeFloatLE = function (t, e, i) {
          return j(this, t, e, !0, i);
        }),
        (h.prototype.writeFloatBE = function (t, e, i) {
          return j(this, t, e, !1, i);
        }),
        (h.prototype.writeDoubleLE = function (t, e, i) {
          return V(this, t, e, !0, i);
        }),
        (h.prototype.writeDoubleBE = function (t, e, i) {
          return V(this, t, e, !1, i);
        }),
        (h.prototype.copy = function (t, e, i, r) {
          if (
            (i || (i = 0),
            r || 0 === r || (r = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            r > 0 && r < i && (r = i),
            r === i)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (i < 0 || i >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          (r > this.length && (r = this.length),
            t.length - e < r - i && (r = t.length - e + i));
          var n,
            s = r - i;
          if (this === t && i < e && e < r)
            for (n = s - 1; n >= 0; --n) t[n + e] = this[n + i];
          else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
            for (n = 0; n < s; ++n) t[n + e] = this[n + i];
          else Uint8Array.prototype.set.call(t, this.subarray(i, i + s), e);
          return s;
        }),
        (h.prototype.fill = function (t, e, i, r) {
          if ("string" === typeof t) {
            if (
              ("string" === typeof e
                ? ((r = e), (e = 0), (i = this.length))
                : "string" === typeof i && ((r = i), (i = this.length)),
              1 === t.length)
            ) {
              var n = t.charCodeAt(0);
              n < 256 && (t = n);
            }
            if (void 0 !== r && "string" !== typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" === typeof r && !h.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" === typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < i)
            throw new RangeError("Out of range index");
          if (i <= e) return this;
          var s;
          if (
            ((e >>>= 0),
            (i = void 0 === i ? this.length : i >>> 0),
            t || (t = 0),
            "number" === typeof t)
          )
            for (s = e; s < i; ++s) this[s] = t;
          else {
            var a = h.isBuffer(t) ? t : _(new h(t, r).toString()),
              o = a.length;
            for (s = 0; s < i - e; ++s) this[s + e] = a[s % o];
          }
          return this;
        }));
      var L = /[^+\/0-9A-Za-z-_]/g;
      function K(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function _(t, e) {
        var i;
        e = e || 1 / 0;
        for (var r = t.length, n = null, s = [], a = 0; a < r; ++a) {
          if ((i = t.charCodeAt(a)) > 55295 && i < 57344) {
            if (!n) {
              if (i > 56319) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              if (a + 1 === r) {
                (e -= 3) > -1 && s.push(239, 191, 189);
                continue;
              }
              n = i;
              continue;
            }
            if (i < 56320) {
              ((e -= 3) > -1 && s.push(239, 191, 189), (n = i));
              continue;
            }
            i = 65536 + (((n - 55296) << 10) | (i - 56320));
          } else n && (e -= 3) > -1 && s.push(239, 191, 189);
          if (((n = null), i < 128)) {
            if ((e -= 1) < 0) break;
            s.push(i);
          } else if (i < 2048) {
            if ((e -= 2) < 0) break;
            s.push((i >> 6) | 192, (63 & i) | 128);
          } else if (i < 65536) {
            if ((e -= 3) < 0) break;
            s.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
          } else {
            if (!(i < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            s.push(
              (i >> 18) | 240,
              ((i >> 12) & 63) | 128,
              ((i >> 6) & 63) | 128,
              (63 & i) | 128,
            );
          }
        }
        return s;
      }
      function M(t) {
        return r.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(L, "")).length < 2
            )
              return "";
            for (; t.length % 4 !== 0; ) t += "=";
            return t;
          })(t),
        );
      }
      function k(t, e, i, r) {
        for (var n = 0; n < r && !(n + i >= e.length || n >= t.length); ++n)
          e[n + i] = t[n];
        return n;
      }
    }).call(this, window);
  },
  1773: function (t, e, i) {
    "use strict";
    ((e.byteLength = function (t) {
      var e = u(t),
        i = e[0],
        r = e[1];
      return (3 * (i + r)) / 4 - r;
    }),
      (e.toByteArray = function (t) {
        var e,
          i,
          r = u(t),
          a = r[0],
          o = r[1],
          h = new s(
            (function (t, e, i) {
              return (3 * (e + i)) / 4 - i;
            })(0, a, o),
          ),
          c = 0,
          l = o > 0 ? a - 4 : a;
        for (i = 0; i < l; i += 4)
          ((e =
            (n[t.charCodeAt(i)] << 18) |
            (n[t.charCodeAt(i + 1)] << 12) |
            (n[t.charCodeAt(i + 2)] << 6) |
            n[t.charCodeAt(i + 3)]),
            (h[c++] = (e >> 16) & 255),
            (h[c++] = (e >> 8) & 255),
            (h[c++] = 255 & e));
        2 === o &&
          ((e = (n[t.charCodeAt(i)] << 2) | (n[t.charCodeAt(i + 1)] >> 4)),
          (h[c++] = 255 & e));
        1 === o &&
          ((e =
            (n[t.charCodeAt(i)] << 10) |
            (n[t.charCodeAt(i + 1)] << 4) |
            (n[t.charCodeAt(i + 2)] >> 2)),
          (h[c++] = (e >> 8) & 255),
          (h[c++] = 255 & e));
        return h;
      }),
      (e.fromByteArray = function (t) {
        for (
          var e, i = t.length, n = i % 3, s = [], a = 0, o = i - n;
          a < o;
          a += 16383
        )
          s.push(c(t, a, a + 16383 > o ? o : a + 16383));
        1 === n
          ? ((e = t[i - 1]), s.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
          : 2 === n &&
            ((e = (t[i - 2] << 8) + t[i - 1]),
            s.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
        return s.join("");
      }));
    for (
      var r = [],
        n = [],
        s = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        o = 0,
        h = a.length;
      o < h;
      ++o
    )
      ((r[o] = a[o]), (n[a.charCodeAt(o)] = o));
    function u(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var i = t.indexOf("=");
      return (-1 === i && (i = e), [i, i === e ? 0 : 4 - (i % 4)]);
    }
    function c(t, e, i) {
      for (var n, s, a = [], o = e; o < i; o += 3)
        ((n =
          ((t[o] << 16) & 16711680) +
          ((t[o + 1] << 8) & 65280) +
          (255 & t[o + 2])),
          a.push(
            r[((s = n) >> 18) & 63] +
              r[(s >> 12) & 63] +
              r[(s >> 6) & 63] +
              r[63 & s],
          ));
      return a.join("");
    }
    ((n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63));
  },
  1774: function (t, e) {
    ((e.read = function (t, e, i, r, n) {
      var s,
        a,
        o = 8 * n - r - 1,
        h = (1 << o) - 1,
        u = h >> 1,
        c = -7,
        l = i ? n - 1 : 0,
        f = i ? -1 : 1,
        d = t[e + l];
      for (
        l += f, s = d & ((1 << -c) - 1), d >>= -c, c += o;
        c > 0;
        s = 256 * s + t[e + l], l += f, c -= 8
      );
      for (
        a = s & ((1 << -c) - 1), s >>= -c, c += r;
        c > 0;
        a = 256 * a + t[e + l], l += f, c -= 8
      );
      if (0 === s) s = 1 - u;
      else {
        if (s === h) return a ? NaN : (1 / 0) * (d ? -1 : 1);
        ((a += Math.pow(2, r)), (s -= u));
      }
      return (d ? -1 : 1) * a * Math.pow(2, s - r);
    }),
      (e.write = function (t, e, i, r, n, s) {
        var a,
          o,
          h,
          u = 8 * s - n - 1,
          c = (1 << u) - 1,
          l = c >> 1,
          f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : s - 1,
          g = r ? 1 : -1,
          p = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((o = isNaN(e) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (h = Math.pow(2, -a)) < 1 && (a--, (h *= 2)),
                (e += a + l >= 1 ? f / h : f * Math.pow(2, 1 - l)) * h >= 2 &&
                  (a++, (h /= 2)),
                a + l >= c
                  ? ((o = 0), (a = c))
                  : a + l >= 1
                    ? ((o = (e * h - 1) * Math.pow(2, n)), (a += l))
                    : ((o = e * Math.pow(2, l - 1) * Math.pow(2, n)), (a = 0)));
          n >= 8;
          t[i + d] = 255 & o, d += g, o /= 256, n -= 8
        );
        for (
          a = (a << n) | o, u += n;
          u > 0;
          t[i + d] = 255 & a, d += g, a /= 256, u -= 8
        );
        t[i + d - g] |= 128 * p;
      }));
  },
  1775: function (t, e) {
    var i = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == i.call(t);
      };
  },
});

const getPublicKey = async function () {
  const response = await fetchWithCookie(
    "https://mdkd-api.pinduoduo.com/sixers/api/user/getPasswordPublicKey",
    {
      headers: {
        userAgent,
        Referer: "https://mdkd.pinduoduo.com/",
      },
      method: "GET",
    },
  );
  const res = await response.json();
  return "-----BEGIN PUBLIC KEY-----" + res.result + "-----END PUBLIC KEY-----";
};
jzq(1994);
const run = async function () {
  const n = await getPublicKey();
  console.log("n :>> ", n);
  c = window.getKey(n);
  u = window.encrypt("123456", c, "RSA");
  const password = window.tob64(u);
  console.log("password :>> ", password);
  console.log("password.length :>> ", password.length);
};
run();
