from api import app,mysql
from api.models import *
from flask import jsonify,request

@app.route("/Questionnaire", methods=["POST"])
def GetReponseQuestionnaire():  
    reponse = request.form.get('reponse_questionnaire')
    return jsonify(reponse)