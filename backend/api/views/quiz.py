from api import app,mysql
from api.models import *
from flask import jsonify

@app.route("/Quiz")
def CreateQuiz():
    nom_quiz = Quiz.getNom()
    
    return jsonify(nom_quiz)