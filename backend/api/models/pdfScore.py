from api import mysql

class PdfScore():
    
    def __init__(self):
        return

    @staticmethod
    def getScore():
        cur = mysql.connection.cursor()
        cur.execute("SELECT score FROM pdfusers")
        fetchdata = cur.fetchall()
        cur.close()
        return fetchdata
    
    def modifyScore(score):
        cur = mysql.connection.cursor()
        cur.execute("UPDATE pdfusers SET score = '"+str(score)+"' WHERE id = '1'")
        cur.connection.commit()
        cur.close()
        return 1