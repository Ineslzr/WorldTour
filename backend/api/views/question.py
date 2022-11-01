from api import app, mysql
from api.models import *
from flask import jsonify

@app.route("/Question")
def GetQuestion():
    questions = Question.getQuestions(1)
    return jsonify(questions)