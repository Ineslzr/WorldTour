import smtplib, ssl
import getpass
from email.message import EmailMessage
from flask import jsonify


@app.route("/SendMail")
def SendMail():

    email = 'worldtourfrance2022@gmail.com'
    email_password = 'kcnkvfilxkusfhub'
    msg = EmailMessage()
    msg['subject'] = 'Resultat de votre test World Tour'
    msg['from'] = email
    msg['to'] = 'haphuong141198@gmail.com'
    content = 'Le résultat de votre test'
    msg.set_content('votre résultat est')


    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(email, email_password)
    
        smtp.send_message(msg)