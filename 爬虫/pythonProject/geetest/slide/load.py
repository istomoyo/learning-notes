import json
import time

import requests


def load():
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
        "sajssdk_2015_cross_new_user": "1",
        "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%2219ce79e08e969e-08d9293a1535de8-26061a51-1296000-19ce79e08ea761%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2F%22%7D%2C%22%24device_id%22%3A%2219ce79e08e969e-08d9293a1535de8-26061a51-1296000-19ce79e08ea761%22%7D",
        "Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773412420",
        "HMACCOUNT": "BEADA4F7E76EE74D",
        "language": "zh",
        "Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773412860"
    }
    url = "https://gcaptcha4.geetest.com/load"
    params = {
        "callback": f"geetest_{int(time.time() * 1000)}",
        "captcha_id": "24f56dc13c40dc4a02fd0318567caef5",
        "challenge": "a37a40b1-aaae-4264-82dc-cfe54812a6d0",
        "client_type": "web",
        "risk_type": "slide",
        "lang": "zh"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    response_json = json.loads(response.text[response.text.find("(") + 1:response.text.rfind(")")])
    lot_number = response_json["data"]["lot_number"]
    slice ='https://static.geetest.com/' + response_json["data"]["slice"]
    bg ='https://static.geetest.com/' + response_json["data"]["bg"]
    payload = response_json["data"]["payload"]
    process_token = response_json["data"]["process_token"]
    with open("slice.png", "wb") as f:
        f.write(requests.get(slice).content)
    with open("bg.png", "wb") as f:
        f.write(requests.get(bg).content)
    print(lot_number, slice, bg, payload, process_token)
    return lot_number, payload, process_token

def main():
    load()
if __name__ == '__main__':
    main()