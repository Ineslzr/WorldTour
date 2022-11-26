from api import app,mysql
from api.models.question import *
from api.models.choix import *

class Quiz():
    
    def __init__(self):
        return

    @staticmethod
    def getNom():
        cur = mysql.connection.cursor()
        cur.execute("SELECT q.nom FROM quiz q where id_quiz = 1")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata

    @staticmethod
    def createQuiz(id_quiz):
        nom_quiz = Quiz.getNom()
        questions = Question.getQuestions(id_quiz)
        quiz = {"questions" : questions}

        i = 0
        while i < len(quiz["questions"]):
            quiz["questions"][i]["choix"] = Choix.getChoix(questions[i]["id_question"])
            i = i+1
        
        return quiz