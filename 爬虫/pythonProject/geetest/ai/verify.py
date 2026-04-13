import execjs
import requests
from load import load
import hashlib
from datetime import datetime, timezone, timedelta
import subprocess
from functools import partial
from w_params import get_w_params
import time
import ddddocr
import random
subprocess. Popen = partial(subprocess.Popen, encoding='utf-8')

lot_number, payload, process_token = load()

def md5(text):
    return hashlib.md5(text.encode('utf-8')).hexdigest()


# lot_number-"2c81ef9fccca4a60b274b7ad567497d0"
# {
#     "c81ef9fc": {
#         "9560": "74b7"
#     }
# }
#
def get_object_params(lot_number):
    object_name = lot_number[1:9]
    arr = [-4, -8, 14, 15, 18, 19, 20, 21]
    key = "".join(lot_number[i] for i in arr[:4])
    value = "".join(lot_number[i] for i in arr[4:])
    print({object_name: {key: value}})
    return {object_name: {key: value}}

def w_params():
    tz = timezone(timedelta(hours=8))
    now = datetime.now(tz)

    # setLeft = parse_result()
    pow_msg = f"1|0con|md5|{now.isoformat()}|24f56dc13c40dc4a02fd0318567caef5|{lot_number}||aac28440e14306e7"  # aac28440e14306e7 随机值

    return {
        "device_id": "",
        "lot_number": lot_number,
        "pow_msg": pow_msg,
        "pow_sign": md5(pow_msg),  # md5(pow_sign)
        "geetest": "captcha",
        "lang": "zh",
        "ep": "123",
        "biht": "1426265548",
        "XwNA": "adEG",
        **get_object_params(lot_number),
        "em": {"ph": 0, "cp": 0, "ek": "11", "wd": 1, "nt": 0, "si": 0, "sc": 0
               }
    }
def verify_w(w):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh,en;q=0.9,zh-CN;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://www.geetest.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "captcha_v4_user": "e4ffba9b8fe34c0e9fd29145af139295",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2219ce79e08e969e-08d9293a1535de8-26061a51-1296000-19ce79e08ea761%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2F%22%7D%2C%22%24device_id%22%3A%2219ce79e08e969e-08d9293a1535de8-26061a51-1296000-19ce79e08ea761%22%7D",
        "language": "zh",
        "Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773412420,1773497692,1773581518",
        "HMACCOUNT": "BEADA4F7E76EE74D",
        "Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773581573"
    }
    url = "https://gcaptcha4.geetest.com/verify"
    params = {
        "callback": f"geetest_{int(time.time() * 1000)}",
        "captcha_id": "24f56dc13c40dc4a02fd0318567caef5",
        "client_type": "web",
        "lot_number": lot_number,
        "risk_type": "ai",
        "payload": payload,
        "process_token":process_token,
        "payload_protocol": "1",
        "pt": "1",
        "w": w
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    print(response.text)
    print(response)

def main():
    # 补环境
    # ctx = execjs.compile(open("get_w.js",encoding="utf-8").read())
    # w = ctx.call("get_w",w_params())
    # py纯算
    w = get_w_params(w_params())
    verify_w(w)

if __name__ == '__main__':
    main()
