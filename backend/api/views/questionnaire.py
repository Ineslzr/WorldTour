from api import app,mysql
from api.models import *
from flask import jsonify,request

@app.route("/Questionnaire", methods=["POST"])
def GetReponseQuestionnaire():  
    reponse = request.form.get('reponse_questionnaire')
    rep = Questionnaire.insertTheme(1,reponse)
    
    return jsonify(rep)

@app.route("/Random")
def getTheme():
    rep = Questionnaire.getRandomTheme(1)
    return jsonify(rep)
