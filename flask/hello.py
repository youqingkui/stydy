#!/usr/bin/env python
# coding=utf-8

from flask import Flask, request, make_response, redirect, abort
from flask.ext.script import Manager
app = Flask(__name__)
manager = Manager(app)


@app.route('/')
def index():
    user_agent = request.headers.get('User-Agent')
    return "<h1> you brow is %s" % user_agent

@app.route('/bad')
def bad():
    return "<h1>bad</h1>", 400

@app.route('/response')
def response():
    res = make_response('<h1> hi like you</h1>')
    res.set_cookie('name', 'youqing')
    return res

@app.route('/back')
def back():
    abort()
    print("no do this 222 22")
    return redirect("/")

@app.route("/user/<name>")
def user(name):
    return  "<h1>hello, %s</h1>" % name




if __name__ == '__main__':
    manager.run()


