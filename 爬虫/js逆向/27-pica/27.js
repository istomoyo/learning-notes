/*
 * @Author: tomoyo
 * @Date: 2026-02-28 21:24:57
 * @Last Modified by: tomoyo
 * @Last Modified time: 2026-03-02 00:09:08
 */
// 默认下载全部，只需要在run传入对应作品的id(eg:63b451590b8acc48ca25c778,对应琉璃川椿那部)
// Pica账密

const email = "";
const password = "";

if (!email || !password) {
  throw new Error("email或password缺失！！");
}
const crypto = require("crypto");
const fetchCookie = require("fetch-cookie").default;
const { CookieJar } = require("tough-cookie");
const jar = new CookieJar();
const fetchWithCookie = fetchCookie(fetch, jar);
const UserAgent = require("user-agents");
const userAgent = new UserAgent().toString();
const fs = require("fs");
const path = require("path");
const TOKEN_PATH = path.resolve(__dirname, "token.json");
// 读取本地 token
async function getLocalToken() {
  if (!fs.existsSync(TOKEN_PATH)) {
    const token = await loginFake();
    return token;
  }
  const data = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
  return data.token;
}

// 保存 token
function saveToken(token) {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify({ token }, null, 2), "utf-8");
}
const configInit = function (url, method) {
  const Ia = (e = 32) => {
    const s = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    let t = "";
    for (let a = 0; a < e; a++) t += s.charAt(Math.floor(48 * Math.random()));
    return t;
  };
  const EaFunction = () => {
    return Ia(32).toLowerCase();
  };
  const Ea = EaFunction();
  function Ta(e, s, a) {
    // ===== 1️⃣ 这里填真实值 =====
    const prefix = "https://picaapi.go2778.com/"; // da("picaapi") + "/"
    const r = "C69BAF41DA5ABD1FFEDC6D2FEA56B"; // 第一个ka
    const key =
      "~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn"; // 第二个ka

    // ===== 2️⃣ 拼接字符串 =====
    let data = e.replace(prefix, "") + s + Ea + a + r;
    data = data.toLowerCase();
    console.log("data :>> ", data);
    // ===== 3️⃣ HMAC-SHA256 =====
    const sign = crypto.createHmac("sha256", key).update(data).digest("hex");

    return sign;
  }
  const _a = () => Math.floor(Date.now() / 1e3).toString();
  const e = _a();
  // 本子url "https://picaapi.go2778.com/comics/65feaa3e0e1f9c3023035dbc"
  const signature = Ta(url, e, method);
  console.log("url :>> ", url);
  return { Ea, e, signature };
};

const loginFake = async function () {
  const { Ea, e, signature } = configInit(
    "https://picaapi.go2778.com/auth/sign-in",
    "POST",
  );
  // console.log("{ Ea, e, signature } :>> ", { Ea, e, signature });
  const response = await fetchWithCookie(
    "https://picaapi.go2778.com/auth/sign-in",
    {
      headers: {
        accept: "application/vnd.picacomic.com.v1+json",
        "app-channel": "1",
        "app-platform": "android",
        "app-uuid": "webUUIDv2",
        "app-version": "20251017",
        "cache-control": "no-cache",
        "content-type": "application/json; charset=UTF-8",
        "image-quality": "medium",
        userAgent,
        nonce: Ea,
        signature,
        time: e,
        Referer: "https://manhuabika.com/",
      },
      body: `{"email":"${email}","password":"${password}"}`,
      method: "POST",
    },
  );
  const res = await response.json();
  saveToken(res.data.token);
  // console.log("res :>> ", res);
  return res.data.token;
};
const parseImgList = async function (uuid, order, page = 1) {
  const { Ea, e, signature } = configInit(
    `https://picaapi.go2778.com/comics/${uuid}/order/${order}/pages?page=${page}`,
    "GET",
  );
  const localToken = await getLocalToken();
  // console.log("localToken :>> ", localToken);
  const response = await fetchWithCookie(
    `https://picaapi.go2778.com/comics/${uuid}/order/${order}/pages?page=${page}`,
    {
      headers: {
        accept: "application/vnd.picacomic.com.v1+json",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        "app-channel": "1",
        "app-platform": "android",
        "app-uuid": "webUUIDv2",
        "app-version": "20251017",
        authorization: localToken,
        "cache-control": "no-cache",
        "content-type": "application/json; charset=UTF-8",
        "image-quality": "medium",
        userAgent,
        nonce: Ea,
        signature,
        time: e,
        Referer: "https://manhuabika.com/",
      },
      body: null,
      method: "GET",
    },
  );
  const res = await response.json();
  // console.log("res :>> ", res);
  let imgArr = res.data.pages.docs;
  // console.log("imgArr :>> ", imgArr);
  const resultImgArr = imgArr.map(({ media: { originalName, path } }) => ({
    originalName,
    path: path.replace("tobeimg/", "https://img.picacomic.com/"),
  }));
  // console.log("resultImgArr :>> ", resultImgArr);
  return { imgArr: resultImgArr, pages: res.data.pages.pages };
};
const getOrders = async function (uuid) {
  const { Ea, e, signature } = configInit(
    `https://picaapi.go2778.com/comics/${uuid}/eps?page=1`,
    "GET",
  );
  const localToken = await getLocalToken();
  // console.log("localToken :>> ", localToken);
  const response = await fetchWithCookie(
    `https://picaapi.go2778.com/comics/${uuid}/eps?page=1`,
    {
      headers: {
        accept: "application/vnd.picacomic.com.v1+json",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        "app-channel": "1",
        "app-platform": "android",
        "app-uuid": "webUUIDv2",
        "app-version": "20251017",
        authorization: localToken,
        "cache-control": "no-cache",
        "content-type": "application/json; charset=UTF-8",
        "image-quality": "medium",
        userAgent,
        nonce: Ea,
        signature,
        time: e,
        Referer: "https://manhuabika.com/",
      },
      body: null,
      method: "GET",
    },
  );
  const res = await response.json();
  // console.log("res :>> ", res.data.eps.docs);
  const orderArr = res.data.eps.docs.map(({ order, title }) => ({
    order,
    title,
  }));
  return orderArr;
};
const getDescription = async function (uuid) {
  const { Ea, e, signature } = configInit(
    `https://picaapi.go2778.com/comics/${uuid}`,
    "GET",
  );
  const localToken = await getLocalToken();
  const response = await fetchWithCookie(
    `https://picaapi.go2778.com/comics/${uuid}`,
    {
      headers: {
        accept: "application/vnd.picacomic.com.v1+json",
        "accept-language": "zh,en;q=0.9,zh-CN;q=0.8",
        "app-channel": "1",
        "app-platform": "android",
        "app-uuid": "webUUIDv2",
        "app-version": "20251017",
        authorization: localToken,
        "cache-control": "no-cache",
        "content-type": "application/json; charset=UTF-8",
        "image-quality": "medium",
        userAgent,
        nonce: Ea,
        signature,
        time: e,
        Referer: "https://manhuabika.com/",
      },
      body: null,
      method: "GET",
    },
  );
  const res = await response.json();
  console.log("Description :>> ", res);
  return res.data.comic;
};
// ========== 基础工具函数 ==========

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function safeName(name) {
  return name.replace(/[\\/:*?"<>|]/g, "_");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomDelay(min = 300, max = 1200) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function downloadImage(url, filePath) {
  const delay = randomDelay();
  await sleep(delay);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`下载失败: ${url}`);

  const buffer = await res.arrayBuffer();
  await fs.promises.writeFile(filePath, Buffer.from(buffer));
}

// ========== 并发控制器 ==========

async function concurrentLimit(tasks, limit = 5) {
  const pool = [];
  const executing = [];

  for (const task of tasks) {
    const p = Promise.resolve().then(() => task());
    pool.push(p);

    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(pool);
}

// ========== 主逻辑 ==========

const run = async function (uuid) {
  const orderArr = await getOrders(uuid);
  const Description = await getDescription(uuid);
  const { title, author, pagesCount } = Description;

  const rootDir = path.join(
    __dirname,
    safeName(`${title}-${author}-${pagesCount}`),
  );

  ensureDir(rootDir);

  for (const { order, title: chapterTitle } of orderArr) {
    const chapterDir = path.join(rootDir, safeName(chapterTitle));
    ensureDir(chapterDir);

    console.log(`开始下载章节: ${chapterTitle}`);

    const firstPage = await parseImgList(uuid, order);
    const totalPages = firstPage.pages;

    for (let page = 1; page <= totalPages; page++) {
      const { imgArr } =
        page === 1 ? firstPage : await parseImgList(uuid, order, page);

      const tasks = imgArr.map((img) => {
        return async () => {
          const filePath = path.join(chapterDir, safeName(img.originalName));
          await downloadImage(img.path, filePath);
        };
      });

      await concurrentLimit(tasks, 5);
    }

    console.log(`章节完成: ${chapterTitle}`);
  }

  console.log("全部下载完成");
};
run("644921b09d25a40b2c886cdb");
