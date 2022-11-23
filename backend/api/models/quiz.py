from api import app,mysql

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