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
    key11='départ'
    key12='aéroport'
    key13='vol'
    key2='Exposition'
    key21='heure'
    key22='lieu'
    key23='musée'
    if(type=='Avion'):
        if((type in pageExtracted)or(key1 in pageExtracted)and(key11 in pageExtracted)or(key12 in pageExtracted)or(key13 in pageExtracted)):
              return jsonify(
                typefichier= type,
                key=[key1,key11,key12,key13],
                score=10
             )
        else: return jsonify("erreur1")
    elif(type=='Exposition'):
        if((type in pageExtracted)or(key2 in pageExtracted)or(key21 in pageExtracted)or(key22 in pageExtracted)or(key23 in pageExtracted)):
              return jsonify(
                typefichier= type,
                key=[key2,key21,key22,key23],
                score=3
             )
        else: return jsonify("erreur2")
    else: return jsonify("erreur")


@app.route('/')
def test():
    return 'hello'