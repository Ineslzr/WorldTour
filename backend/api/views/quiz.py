from api import app,mysql
from api.models import *
from flask import jsonify,request

@app.route("/Quiz/<id_quiz>")
def CreateQuiz(id_quiz):
    quiz = Quiz.createQuiz(id_quiz)
    return jsonify(quiz)

@app.route("/quiz/<user_id>")
def getQuizByRandomTheme(user_id):
    rep = Questionnaire.getQuizIdByTheme(user_id)
    return jsonify(rep)

@app.route("/quiz/creation", methods=["POST"])
def insertNewQuiz():
    infoQuiz = json.loads(request.form.get('infoQuiz'))   
    quiz = json.loads(request.form.get('quiz'))
    rep = Quiz.insertNewQuiz(infoQuiz, quiz)

    return jsonify(rep)


@app.route("/ChoixPays/<Country>")
def getQuizByCountry(Country):
    quiz = Quiz.quizByCountry(Country)
    return jsonify(quiz)

