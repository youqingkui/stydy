#!/usr/bin/env python
# coding=utf-8
__author__ = 'youqingkui'

import socket

def get_remote_machine_info(remote_host):
    try:
        print("IP address: %s" % socket.gethostbyname(remote_host))
    except Exception, e:
        print("%s: %s" % (remote_host, e))

if __name__ == '__main__':
    get_remote_machine_info("www.pytgo.org123.com")



