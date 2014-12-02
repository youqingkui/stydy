#!/usr/bin/env python
# coding=utf-8
__author__ = 'youqingkui'

import socket
from binascii import hexlify

def conver_ip4_address():
    for ip_addr in ["192.168.1.1", "127.0.0.1"]:
        packed_ip_addr   = socket.inet_aton(ip_addr)
        unpacked_ip_addr = socket.inet_ntoa(packed_ip_addr)
        print("IP Address: %s => Packed: %s , unpacked: %s" \
              % (ip_addr, hexlify(unpacked_ip_addr), unpacked_ip_addr)
        )

if __name__ == "__main__":
    conver_ip4_address()