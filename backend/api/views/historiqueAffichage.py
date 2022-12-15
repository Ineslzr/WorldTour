import datetime
import PyPDF2
from api import app
from api.models import *
from flask import jsonify, request


@app.route("/Historique", methods=["POST"])
def affi_historique():
    nupletBD=Historique.getNuplet()
    return jsonify(nupletBD)



# @app.route('/')
# def test():
#     return 'hello'