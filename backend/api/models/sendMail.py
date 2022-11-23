from api import app,mysql
import json

class SendMail():

    def __init__(self):
        return

    @staticmethod
    #Cette méthode récupère le mail que l'user saisit
    def getMail():
        #cur = mysql.connection.cursor()
        #cur.execute("SELECT c.intitule, c.isCorrect FROM choix c, questions qu where c.id_question = qu.id_question and qu.id_question ="+ str(id_question) +";")
        #fetchdata = cur.fetchall()
        #cur.close()

        return 'haphuong141198@gmail.com'