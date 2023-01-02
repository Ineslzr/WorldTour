from api import app,mysql

class User():

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


    @staticmethod
    def getAllUsers():
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata


    @staticmethod
    def addUser(name, email, password):
        # Créez un curseur pour exécuter des requêtes SQL
        cur = mysql.connection.cursor()

        # Exécutez une requête d'insertion pour ajouter un nouvel utilisateur à la base de données
        cur.execute("INSERT INTO user (name, email, password) VALUES (%s, %s, %s)", (name, email, password))

        # Commit les changements à la base de données
        mysql.connection.commit()

        # Fermez le curseur
        cur.close()