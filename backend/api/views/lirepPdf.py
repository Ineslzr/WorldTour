from api import app, mysql
from api.models import *
from flask import jsonify,request
from PyPDF2 import PdfFileReader
from PyPDF2 import PdfFileWriter
import base64


@app.route("/openPdf")
def ouvrePdf():
       document = PdfFileReader(open(myFile,'rb'))
       metadata = document.getDocumentInfo()
       print(metadata)

@app.route("/readPdf", methods=['POST', 'GET'])
def lirePdf():
    if request.method == 'POST':
        request_form = request.form
        if request_form.get('filename') and "billet d'avion" in request_form.get('filename'):
            return "billet d'avion"
        if request_form.get('filename') and "ticket d'exposition" in request_form.get('filename'):
            return "ticket d'exposition"
        else:
            return 'billet normal'
        # if request_form.get('datas'):
            # pdf_base64 = request_form.get('datas')
            # pdf_file = base64.b64decode(pdf_base64)
        return str(pdf_file)
    else:
        return 'pas de fichier correct.'

@app.route('/')
def test():
    return 'hello'