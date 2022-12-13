from api import mysql
class Historique():
    
    def __init__(self):
        return

    @staticmethod
    def getNuplet():
        cur = mysql.connection.cursor()
        cur.execute("SELECT nom,score,type,date FROM historique")
        fetchdata = cur.fetchall()
        cur.close()
        return fetchdata
    @staticmethod
    def updateHistorique(nom,score,type,date):    
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO historique (nom,score,type,date) VALUES('"+str(nom)+"','"+str(score)+"','"+str(type)+"','"+str(date)+"')")
        cur.connection.commit()
        cur.close()
        return 1