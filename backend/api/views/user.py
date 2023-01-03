from api import app,mysql
from api.models import *
from flask import request, jsonify


@app.route("/Users")
def Users():  
    users = User.getAllUsers()
    return jsonify(users)


@app.route("/SignUpUser", methods=["POST"])
def signup():
    # Récupérez les données du formulaire
    data = request.get_json()
    name = data["name"]
    email = data["email"]
    password = data["password"]
    role = "user"

    # Créez un nouvel utilisateur en utilisant les données du formulaire
    new_user = User(name, email, password, role)

    # Enregistrez l'utilisateur dans la base de données
    User.addUser(name, email, password, role)

    return jsonify({"message": "Utilisateur créé avec succès"})