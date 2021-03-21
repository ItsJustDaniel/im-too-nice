import time
from flask import Flask

APP = Flask(__name__)

@APP.route('/api/')
def get_current_time():
    return {'time': time.time()}