#!/usr/bin/env python
# coding=utf-8

from flask import Flask, request, render_template
from datetime import datetime

from flask.ext.wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import Required


from flask.ext.script import Manager
from flask.ext.bootstrap import Bootstrap
from flask.ext.moment import Moment

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
manager = Manager(app)
bootstrap = Bootstrap(app)
moment = Moment(app)


class NameForm(Form):
    name = StringField('What is your name?', validators=[Required()])
    submit = SubmitField('Submit')




@app.route('/')
def index():
    return render_template('index.html',
                            current_time=datetime.utcnow() )


@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)

@app.route("/browser")
def browser():
    user_agent = request.headers.get('User-Agent')

    return '<p> You browser is %s' % user_agent


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)
