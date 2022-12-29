from api import app, mysql
from api.models import *
from flask import jsonify

@app.route("/userPoints", methods=['GET'])
def getPointUsers():
    points = PointsUser.getPointsPays(1)
    array = PointsUser.formerArray(points[0])
    return jsonify(array)