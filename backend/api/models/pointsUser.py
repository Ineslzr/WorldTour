from api import app,mysql
import json

class PointsUser():

    def __init__():
        return 

    @staticmethod
    def getPointsPays(idUser):
        id_user=str(idUser)
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM userspointspays WHERE idUser ="+ id_user+";")
        fetchdata = cur.fetchall()
        cur.close()
        del fetchdata[0]["idUserPointsPays"]
        del fetchdata[0]["idUser"]
        return fetchdata

    @staticmethod
    def formerArray(data):
        array = []
        
        for key in data.keys():
            array.append({"countryName" : key, "points" : data[key]})

        return array

    