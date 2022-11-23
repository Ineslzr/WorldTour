from api import app,mysql
import json

class Question():
    
    def __init__(self):
        return

    @staticmethod
    def getQuestions(id_quiz):
        cur = mysql.connection.cursor()
        cur.execute("SELECT qu.id_question, qu.intitule FROM quiz q, questions qu WHERE q.id_quiz = qu.id_quiz AND q.id_quiz ="+str(id_quiz))
        fetchdata = cur.fetchall()
        cur.close()
        return fetchdata