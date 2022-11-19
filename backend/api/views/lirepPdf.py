import PyPDF2
from api import app, mysql
from api.models import *
from flask import jsonify, request

@app.route("/readPdf", methods=["POST"],strict_slashes=False)
def test_pdf():
    type=request.form['option_from_react']
    file= request.files['file_from_react']
    reader=PyPDF2.PdfFileReader(file)
    page1=reader.getPage(0)
    pageExtracted=page1.extractText()
    key1='réservation'
    key2='Exposition'
    if(type=='Avion'):
        if((type in pageExtracted)or(key1 in pageExtracted)):
             return jsonify(10)
        else: return jsonify("erreur1")
    elif(type=='Exposition'):
        if((type in pageExtracted)or(key2 in pageExtracted)):
             return jsonify(3)
        else: return jsonify("erreur2")
    else: return jsonify("erreur")


@app.route('/')
def test():
    return 'hello'