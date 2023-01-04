from api import app,mysql

class User():

    def __init__(self, name, email, password, role):
        self.name = name
        self.email = email
        self.password = password
        self.role = role


    @staticmethod
    def getAllUsers():
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata


    @staticmethod
    def addUser(name, email, password, role):
        # Créez un curseur pour exécuter des requêtes SQL
        cur = mysql.connection.cursor()

        # Exécutez une requête d'insertion pour ajouter un nouvel utilisateur à la base de données
        cur.execute("INSERT INTO user (name, email, password, role) VALUES (%s, %s, %s, %s)", (name, email, password, role))

        # Commit les changements à la base de données
        mysql.connection.commit()

        # Fermez le curseur
        cur.close()