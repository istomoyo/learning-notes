import json

from Crypto.PublicKey import RSA
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.Cipher import PKCS1_v1_5, PKCS1_OAEP


def aes_encrypt(plaintext: str, key: str, iv: str = "0000000000000000") -> str:
    cipher = AES.new(key.encode('utf-8'), AES.MODE_CBC, iv.encode('utf-8'))
    paded = pad(plaintext.encode('utf-8'), AES.block_size)
    ciphertext = cipher.encrypt(paded)
    return ciphertext.hex()

def rsa_encrypt(data: str,
                n_hex: str,
                e_hex: str = "10001",
                output: str = "base64",
                padding: str = "pkcs1") -> str:
    """
    RSA 加密函数

    :param data: 要加密的字符串
    :param n_hex: 公钥 n（十六进制）
    :param e_hex: 公钥 e（默认 10001）
    :param output: 输出格式（base64 / hex）
    :param padding: 填充方式（pkcs1 / oaep）
    :return: 加密结果字符串
    """

    # 构造公钥
    n = int(n_hex, 16)
    e = int(e_hex, 16)
    key = RSA.construct((n, e))
    cipher = PKCS1_v1_5.new(key)
    encrypted_data = cipher.encrypt(data.encode())
    return encrypted_data.hex()

def get_w_params(p):
    p = json.dumps(p,separators=(',', ':'))
    aes_data = aes_encrypt(p, "a1da411f2eb22cbd" )
    rsa_data = rsa_encrypt("a1da411f2eb22cbd", '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81')
    print(len(aes_data))
    return aes_data + rsa_data



if __name__ == "__main__":
    print(len(get_w_params({"setLeft": 84, "passtime": 280, "userresponse": 85.5034329189089, "device_id": "",
                        "lot_number": "579ea79c807041abafa707827b70145c",
                        "pow_msg": "1|0|md5|2026-03-20T23:16:57.588391+08:00|24f56dc13c40dc4a02fd0318567caef5|579ea79c807041abafa707827b70145c||3775d8edfae21115",
                        "pow_sign": "aff39148b72d8e19e926fb6a02be8021", "geetest": "captcha", "lang": "zh", "ep": "123",
                        "biht": "1426265548", "NeJP": "tjPh", "1abafa": "abaf",
                        "em": {"ph": 0, "cp": 0, "ek": "11", "wd": 1, "nt": 0, "si": 0, "sc": 0}})))
