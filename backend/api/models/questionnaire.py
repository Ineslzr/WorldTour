from api import app,mysql
import json
import random

class Questionnaire():

    def __init__(self):
        return


    @staticmethod
    def insertTheme(user_id, th):
        
        id=str(user_id)
        cur = mysql.connection.cursor()
        cur.execute("UPDATE users SET theme = %s WHERE id = %s", (str(th),str(id)))
        cur.connection.commit()
        cur.close()
        return th

    @staticmethod
    def getRandomTheme(user_id):
        cur = mysql.connection.cursor()
        cur.execute("SELECT u.theme FROM users u where u.id= %s;", (str(user_id)))
        fetchdata = cur.fetchall()
        cur.close()

        theme = fetchdata[0]["theme"].split(",")
        i = random.randint(0,(len(theme)-2))
        return theme[i]

    @staticmethod
    def getQuizIdByTheme(user_id):
        theme = Questionnaire.getRandomTheme(user_id)

        cur = mysql.connection.cursor()
        cur.execute("SELECT q.id_quiz, q.nom, q.Theme FROM quiz q WHERE q.Theme='"+theme+"';")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata

        