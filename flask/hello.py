#!/usr/bin/env python
# coding=utf-8

from flask import Flask, request, make_response, \
    redirect, abort, render_template, url_for, session, flash
from wtforms import StringField, SubmitField
from wtforms.validators import Required
import os
from threading import Thread


from flask.ext.script import Manager
from flask.ext.bootstrap import Bootstrap
from flask.ext.wtf import Form
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.script import Shell
from flask.ext.migrate import Migrate, MigrateCommand
from flask.ext.mail import Mail
from flask.ext.mail import Message

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'mysql://root:@localhost/flask'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# 邮件配置
app.config['FLASKY_MAIL_SUBJECT_PREFIX'] = '[Flasky]'
app.config['FLASKY_MAIL_SENDER'] = 'Flasky Admin <yuankui@mykar.com>'
app.config['MAIL_SERVER'] = 'smtp.exmail.qq.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')

manager = Manager(app)
bootstrap = Bootstrap(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)


def send_email(to, subject, template, **kwargs):
    msg = Message(app.config['FLASKY_MAIL_SUBJECT_PREFIX'] + subject,
                  sender=app.config['FLASKY_MAIL_SENDER'], recipients=["youqingkui@qq.com", "345742108@qq.com", "youqingkui@foxmail.com"])
    msg.body = render_template(template + '.txt', **kwargs)
    msg.html = render_template(template + '.html', **kwargs)
    print(msg)
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()
    return thr

def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def make_shell_context():
    return dict(app=app, db=db, User=User, Role=Role)

manager.add_command("shell", Shell(make_context=make_shell_context))
manager.add_command('db', MigrateCommand)

class NameForm(Form):
    name = StringField('What is your name?', validators=[Required()])
    submit = SubmitField('Submit')


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    users = db.relationship('User', backref='role')

    def __repr__(self):
        return '<Role %r>' % self.name

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)

    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return '<User %r>' % self.username


@app.route('/', methods = ['GET', 'POST'])
def index():
    name = None
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            session['known'] = False
            if app.config['FLASKY_MAIL_SENDER']:
                send_email(app.config['FLASKY_MAIL_SENDER'], 'New User',
                           'mail/new_user', user=user)
        else:
            session['known'] = True
        session['name'] = form.name.data
        form.name.data = ''
        return redirect(url_for('index'))

    return render_template('index.html', form=form, name=session.get('name'))
    # user_agent = request.headers.get('User-Agent')
    # return "<h1> you brow is %s" % user_agent

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
    return render_template('user.html', name = name)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500




if __name__ == '__main__':
    manager.run()


