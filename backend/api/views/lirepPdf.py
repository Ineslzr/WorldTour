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

@app.route("/readPdf", methods=["POST"],strict_slashes=False)
def test_pdf():
    file= request.files['file_from_react']
    filename = file.filename
    
    if ("billet" and "avion") in filename :
        return jsonify(30)
    elif ("ticket" and "exposition") in filename :
        return jsonify(20)
    else :
        return jsonify("billet normal")




@app.route('/')
def test():
    return 'hello'