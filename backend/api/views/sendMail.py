from email.message import EmailMessage
from flask import jsonify
#from api import app,mysql
from api.models import *

import smtplib, ssl
import getpass


@app.route("/SendMail")
def SendMail():

    receiveur = SendMail.getMail()
    email = 'worldtourfrance2022@gmail.com'
    email_password = 'kcnkvfilxkusfhub'
    msg = EmailMessage()
    msg['subject'] = 'Resultat de votre test World Tour'
    msg['from'] = email
    msg['to'] = receiveur
    #msg['to'] = 'haphuonf141198@gmail.com'
   # content = 'Le résultat de votre test'
    msg.set_content('votre résultat est')


    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(email, email_password)
    
        smtp.send_message(msg)