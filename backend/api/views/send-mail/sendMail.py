import smtplib, ssl
import getpass
from email.message import EmailMessage

email = 'haphuong141198@gmail.com'
email_password = 'kmvnapjdiknrvdih'
msg = EmailMessage()
msg['subject'] = 'Resultat de votre test'
msg['from'] = 'haphuong141198@gmail.com'
msg['to'] = 'haphuong141198@gmail.com'
msg.set_content('votre résultat est')


with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login(email, email_password)
    
    smtp.send_message(msg)