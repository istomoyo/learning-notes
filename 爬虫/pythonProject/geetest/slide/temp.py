import requests


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
    "Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773412420,1773497692",
    "HMACCOUNT": "BEADA4F7E76EE74D",
    "Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4": "1773499532"
}
url = "https://gcaptcha4.geetest.com/verify"
params = {
    "callback": "geetest_1773500645987",
    "captcha_id": "24f56dc13c40dc4a02fd0318567caef5",
    "client_type": "web",
    "lot_number": "b38675750e814573a92d560f31b12f47",
    "risk_type": "slide",
    "payload": "AgFD8gWUUuHFx-XvpP7J2ZVZ48lJ1JY-2dDzTGG87kcj2TELXFgSOZUisQzWOKPLFxmQU19GuYj6rsmwcMOVRmuQw94PRJOZpxEqX6EKSRy-krb83lHttq7Cmoj1wbTl23tw6V3rM9hbGU_UEkt2sgR736dJ6EEMUZU92R7cOz60oUXlVba7B-veEgeuzwm5DfUFgoGWv2Zk-O2OhTzJwdm1WWAnR6ZzZD8BwI3t3WGj8vYKSk_SYO1d-FvPZIsGMmr2C4kEFvE85wr6ezwwpZ4EpcPYs-REKKmqmwd8UPpR60-UrED6CL5JOnX3fEwlsdpzb_4uIKyS0H9ZKTtR43f-J-odsL53LM35gEKNGRzGViZSatWFGydCqa2kMBRbArIimbm8UGvzvnTSWPO8HpITjyezMWL1xntCHR01CayWvWYRUD495qE1laO0l_-W_5c2sEyq3jsh-ZPTanzzYQFc0jQ9sUB-84priNez-q_Y82JJnGuyujB4BSh4k9Efn1G07LKYnZrwwAvCG-Q79PFxMYWppDp-5z4mBucab4CgDTApL0tvBxmbpsFE2MGBGmWBqP2Lh76UfaIg33N6yDHmMFR0fpmufeSaugHFjBgqFwzZrzHg0YFz0dx-u0wsNBz03bha-82ifhmL17VOb0qoKzenr-NRNG7USveyyZri5k-ASdZXWbyBZdN8mHNcBDusauYlpjdSC10Q7jnhd8RP-fFzThWhb9MyZFgWYJ9w19Fw6fDfoxn7AYq1buH6gshts8RP_bz4w5VuSxlXDyBbY04s6jKf6rfZ6KzznufQMtHAi0PclXy79cLsvi6gpoXj8BS9biRUMAbHo36CN6lzo6s11XQpduvViHFgOB1b8Mgo4Es3NRWIEz4d6Zen-Eo26qPfJ-Q5sJfRbk-Qm7QIvZiVnoe8IUWWngTAL43Ykjt_XkbOwnnh7ksfRwNe2RRTv34orTDr4yQvdCdw0uEFqs6EA2qMltTTTLSN735tEzzZBsAddoo2-CLwLBUIjMfjmbFHep7eCZn7coRHp7fWLn2m3N13MM25V_hMBanPLelpQx2LxdrnIPCwSk2mhFx6di4I5n29y64vzYpudzVc-qwp_W48t097Fu2Kc0o0M7y7wdJzIHRxcUm1oTT4UKYYRTmM6QoU_RAq_ArWv9JEpf3oxg9l6nZbj1A6_AQDzel0za4z8TCEB4kiPEcl6M4Z5xmlrPvU-ow7goZ1mBBsr4ywS2WDn07IlQ829bFohqDv4n3fO0hV6b6MQXD3HzNlhMVCHPscFENAEcoLO4xjvpyA25h_TYuQ4RmWdgBlOtCV8sNu2XpWUEJASS4nxU0CI0hdXiNpBOIHChp_alhlEEHMT0ifJldaD26wYxdxfkKcwtlnsAtp8v9-IO6PbUWEvhwaL-RyZ0C0tOvPvf2WMInBaPQwDLKvuj27ZjJpbDAvrGxI_w6G_j9E_LvFu-8eKGfZSuujX4Qs9KpcVACs1Lqc9cOiPf2G7H8zFtjCTuZ9jVRrK3aBjeIDOyZB1fG2MiKJC9i8C6LG3N_pbywGwkbVgmMEB-4J1PAnwe34EjopHQiKis2gNzPU8St1fxYQVhgPIZyJSpjpcAknZ-hLy-gd708BnaKhAZ6mnp0SCetRKzyPHOp-AtDTPYFpwRxBM43bwlhc9fzY0T33C1UzwjimwEepOQtnMJDJnYLxrnoFPaRxuvvLF4qD69JgG9PhXu8JQJVYNs9oWVQxHDTOIfm0VONI6HiI1k3whbPETVfj3qlCEm0Inu7ADfXoPtsH01XLf08rPjPkXUkZPBHrA42WfhotZC4mpkOEU3EfTM4cMY3ME4Fbem7FsUtzeLltAL92FnEwtheP3HcRvK3x_k3QqodGgdXiHsSF3d-q4x6D3W2rWim0Cac9MXt3tUoUWheDi1CSMSRpP3zHqhjdvru-7pCPitfK7Uk1bk8gZA5HV08rdGHXViKXCSoUlCHzKQr9D8yIRybV0qRw099SgXqmXWbxlQRGy8-JSU2jbbZnTO3yH7xzomyGiYnwaGguS0_TSQA0FUySYH3cGarpjizypub0xTmzMv_vTL8yBEPsDw-tX-9POPK4WA0kTkbCEF3NK2-Z7HBKLXQYBG9cHqLbx8RWFYCZxDPV3AAoPHs1etYdZuHfmBW0yD8oGqVaoWEZdEiQt5uABfNhw-7p4VLG-JFv0XXPn47ceWfc1zIrQAUQomtWdYQ2UqUoikSekPvoZ_hsRnCqdNevP87gi6V-fcivftMawe0Gn9qFF3COb5CQeel57z5VmzHdfXDHTp5DtGdNqCtEC66LqaCr8iEbF-TleDkvVy2G_jUV3qJeHFUz0yW0HvAtzmIWgPOVLlDXbIeMzLVVXRN-k6gYNyEVLohwAnBXVL2cJ9mHQFuaJZ9JoC05S2SGOo09XOr50RuWCJBgvefaZuTLBUoNaViI31FqpjGi_mMsmvf5AdjQpgNht8DrvXYKzle2NUvi8X-N5nXqXJ3wLkq9NNb7ejfln1xKvf1lNXS9qzs6H6jPEkv8e_upHu-XY6eZdwyhuRqfE-2luWUzrAe9ema0p_vBpbbxOKeZ-TT2UnYwXlzWyAZSxXU7ohIMShmkatX5DhcWKzwtI3AFsv9FKchusd5pwZjaJWnwhS4ExYzA8Me8bWouonq5jM2vpq08FNgAjD3M3A_Mt8K1yoeYE2PBb0MwIz2kb0_lr-OapZ-BuQmS7CkSMl_bnZ1Eaghnt6TwV3kYc3cehztgYxnAr_vrm-mE17UBcgtrrFifi8L7BolufUDtyNRsjvDhtew4xGKR-A_pMyqLBSctMmMPBQUfjq_9SCUjYzfmW6URwZzUI9NwOE-8pngpf4WfVeNXqyf2Jh6vNwLqIWbvHHTPsMjVxGntz4djjZpwvrhT2CIweUrpj2XI_lnyuu9yc59EPyEhVZBEjfMesLKsbNs0-0Xcqsya20OGMYbDtDt2y3kSf2BL8aiqpp-gbyKp2AZlGgJKkYzh2xklja_n7NCt8RR0k8Tr0XHlKaf2v5hJDOWBr8taQ68XcTNQROW5YlySScUiWtqLsfVzclQtpR3WlCk5w-0wUd3F83_GNNc2D_6GlF7L3EcMpYrgSGxcVG5NvmqD4KlVTNBKuCrAaNhktN8gPgIwWBrV7Mp7PIprs-WBJBwv6uQnBtBuCu3PMaOpw6KRBTHVsdAsvPEFYixlj6r3Lcv73N_6DUnWw5j5kpjk34u0CR01ufcx_hUNI5GTDcbbEjA_KX3jND7obuUX97a7HEZVIDxZIyC_PaiJg3w4cmqocLLKZYmQ75VTbPVBLPdfofCLIiXJ2oY7qGxX-SmRwsPlzprBQNjuavcYw-I8xuqCuUQGUL5t4WJsMFwiWbBHZDq_l--ZyDYmavBW6TK_LQJgXRbQm_OMV99EP4_RZev64DIbdqJbRo2YRrsG",
    "process_token": "19d09ac09a766b5157fa5ef71a21fedddf3dca2e2fc0a1b4321bfa0d06ec7fc2",
    "payload_protocol": "1",
    "pt": "1",
    "w": "5ab65f65b5d5ba5db7f5d19bd5096055bda195a44f71c81d61f1a891431954cda5ae789c4bd38803f966d1ec11c766db4c71503fea5c5d14885955dcd2fbb5a01015eb84aef690170bd85570744e57df8b6fd7f1398ccdaa9ab6e1e2b7945cc95b09d0257346d5e5ba3567eb93ed107b2f3187f68ae3b36e3c9a9f772c5b88b26d9bc951c2651af80ede4f3bc2547ca14e77ee5950264b58c93a56b31b0763435f2307def8d036e3d9315526502b8a25fa1ccfd69819c1e4c4784e5e10d119f87d78b618f206b61ec5fc9ddd14a492e991dc8a0977e0139379fa6dc620ecf4fd28e0270fe9c5902eac4f671d590be7c8df327a99db73f62aadff747de63be6b709ae449f5e1352ca97658c5a4cd91f8b2e61892b301f4576b1e9f9c2628f67e5bf54d5379672011190b5e2925d16595d835625221ecf83003f936d72a8640f9d6dad22ea66d8dd2501b244491d4e79c3a691959971dd360ac91856726346e3d809f6a9b64881b3ec932c33726b952f87fb533b837bd28e4815552e8d6da1802ca66fda6a8ce05924085898f8db571038bcebb10e78daf5b0b1577b22ab425362a62a4000533d64ba7dde63ed209371cd603a52a0e0dbd1e1eec4193c56a905c3b796bf9790175043c32729178d58f0e6afa526dc7aa975c7d7f9723118cfd5d605017f3951bb657d09ed8c527bb52d97bff94864012343c3b605d40110131f26f4ee9ddf1d287695fed4a2da1847d796b06d3ee2592668318ed9b701e2313762dea48796a46969af712b754551848009be06c5a63e7eb7fe714715156e80c09ec8e6402421013ff337e42b565f9a7a06a87b33cdcafa72b552c3d2b7ce8f4a11"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)