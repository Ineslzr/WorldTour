from api import app,mysql
from api.models import *
from flask import jsonify

@app.route("/Quiz/<id_quiz>")
def CreateQuiz(id_quiz):
    quiz = Quiz.createQuiz(id_quiz)
    return jsonify(quiz)

@app.route("/quiz/<user_id>")
def getQuizByRandomTheme(user_id):
    rep = Questionnaire.getQuizIdByTheme(user_id)
    return jsonify(rep)