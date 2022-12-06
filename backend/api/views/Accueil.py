from api import app,mysql
from api.models import *
from flask import jsonify

@app.route("/Home")
def Home():
    return jsonify()