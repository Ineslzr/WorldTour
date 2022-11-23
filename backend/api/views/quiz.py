from api import app,mysql
from api.models import *
from flask import jsonify

@app.route("/Quiz")
def CreateQuiz():
    nom_quiz = Quiz.getNom()
    questions = Question.getQuestions(1)
    quiz = {"questions" : questions}

    i = 0
    while i < len(quiz["questions"]):
        quiz["questions"][i]["choix"] = Choix.getChoix(questions[i]["id_question"])
        i = i+1

    return jsonify(quiz)