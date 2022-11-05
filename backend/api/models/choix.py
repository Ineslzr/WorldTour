from api import app,mysql
import json

class Choix():
    
    def __init__():
        return

    @staticmethod
    #Cette méthode récupère les choix pour une question spécifiée en paramètre
    def getChoix(id_question):
        cur = mysql.connection.cursor()
        cur.execute("SELECT c.intitule, c.isCorrect FROM choix c, questions qu where c.id_question = qu.id_question and qu.id_question ="+ str(id_question) +";")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata