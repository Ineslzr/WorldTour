from api import app,mysql
from api.models import *
from email.message import EmailMessage
from flask import jsonify, request

import smtplib, ssl
import getpass


@app.route("/SendMail", methods=["POST"])
def SendMail():

    receiveur = request.form.get('mail')
    score = request.form.get('score')
    email = 'worldtourfrance2022@gmail.com'
    email_password = 'kcnkvfilxkusfhub'
    msg = EmailMessage()
    msg['subject'] = 'Resultat de votre test World Tour'
    msg['from'] = email
    msg['to'] = receiveur
   
    content = 'Bonjour, vous trouverez ci-joitn le résultat de votre test.' + '\n' + 'Le résultat de votre test est: ' 
    msg.set_content(content)


    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(email, email_password)
    
        smtp.send_message(msg)
