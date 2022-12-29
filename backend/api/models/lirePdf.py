import datetime
from api import app,mysql
import json
import PyPDF2
from api.models import *


class LirePdf():

    def __init__(self):
        return

    @staticmethod
    def readPdf(type,file):
        reader=PyPDF2.PdfFileReader(file)
        page1=reader.getPage(0)
        pageExtracted=page1.extractText()
        scoreBD=PdfScore.getScore()
        scoreBD=scoreBD[0]['score']
        key1='réservation'
        key11='départ'
        key12='aéroport'
        key13='vol'
        key2='Exposition'
        key21='heure'
        key22='lieu'
        key23='musée'

        listePays=['France','Allemagne','Espagne','Italie','Egypte']

        if(type=='Avion'): 
            if((type in pageExtracted)or(key1 in pageExtracted)and(key11 in pageExtracted)or(key12 in pageExtracted)or(key13 in pageExtracted)):
                PdfScore.modifyScore(scoreBD+10)
                Historique.updateHistorique('Maroua',15,type,datetime.date.today())
                for pays in listePays:
                    if(pays in pageExtracted):
                        rep =Historique.addPointsToCountry(pays,scoreBD+10,1)
                    
                return { 
                    "typefichier": type,
                    "key": [key1,key11,key12,key13],
                    "score":scoreBD+10}
                
            else: return "erreur non avion"
        elif(type=='Exposition'):
            if((type in pageExtracted)or(key2 in pageExtracted)or(key21 in pageExtracted)or(key22 in pageExtracted)or(key23 in pageExtracted)):
                Historique.updateHistorique('Maroua',3,type,datetime.date.today())
                PdfScore.modifyScore(scoreBD+3)
                for pays in listePays:
                    if(pays in pageExtracted):
                        rep =Historique.addPointsToCountry(pays,scoreBD+3,1)
                return {
                    "typefichier": type,
                    "key":[key2,key21,key22,key23],
                    "score" :scoreBD+3
                }
            else: return "erreur non expo"
        else: return "erreur"