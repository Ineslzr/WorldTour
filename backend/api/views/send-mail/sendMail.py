import smtplib
import getpass

email = input("Email:")
pwd = getpass.getpass("Password: ")
addr = input("Send to: ")
msg = input("Message: ")

client = smtplib.SMTP("smtp.gmail.com", 587)
client.starttls()
client.login

client.sendmail(email, addr, msg)
print("sucess")

client.quit()
input()