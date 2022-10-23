from api import app,mysql
from api.models import *
from flask import jsonify


@app.route("/Users")
def Users():  
    users = User.getAllUsers()
    return jsonify(users)