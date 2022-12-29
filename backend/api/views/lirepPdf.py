import datetime
from MySQLdb import Date
import PyPDF2
from api import app, mysql
from api.models import *
from flask import jsonify, request


@app.route("/readPdf", methods=["POST"],strict_slashes=False)
def test_pdf():
    type=request.form['option_from_react']
    file= request.files['file_from_react']
    rep = LirePdf.readPdf(type,file)

    return jsonify(rep)


@app.route('/')
def test():
    return 'hello'