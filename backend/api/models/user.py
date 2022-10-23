from api import app,mysql

class User():
    def __init__():
        return 

    @staticmethod
    def getAllUsers():
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata
