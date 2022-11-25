from flask import Flask
from flask_mysqldb import MySQL


app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'worldtour'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

import api.views
import api.models

