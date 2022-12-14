from api import app,mysql
from api.models.question import *
from api.models.choix import *

class Quiz():
    
    def __init__(self):
        return

    @staticmethod
    def getNom():
        cur = mysql.connection.cursor()
        cur.execute("SELECT q.nom FROM quiz q where id_quiz = 1")
        fetchdata = cur.fetchall()
        cur.close()

        return fetchdata

    @staticmethod
    def createQuiz(id_quiz):
        nom_quiz = Quiz.getNom()
        questions = Question.getQuestions(id_quiz)
        quiz = {"questions" : questions}

        i = 0
        while i < len(quiz["questions"]):
            quiz["questions"][i]["choix"] = Choix.getChoix(questions[i]["id_question"])
            i = i+1
        
        return quiz


    @staticmethod
    def insertInfoQuiz(nom,pays,theme):

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO quiz (nom,Pays,Theme) VALUES (%s,%s,%s);",(nom,pays,theme))
        cur.connection.commit()
        id= cur.lastrowid
        cur.close()

        return id

    @staticmethod
    def insertQuestion(id_quiz,intitule):
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO questions (id_quiz,intitule) VALUES (%s,%s);",(str(id_quiz),str(intitule)))
        cur.connection.commit()
        id= cur.lastrowid
        cur.close()

        return id

    @staticmethod
    def insertChoix(id_question, intitule, isCorrect):
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO choix (id_question,intitule,isCorrect) VALUES (%s,%s,%s);",(str(id_question),str(intitule),str(isCorrect)))
        cur.connection.commit()
        cur.close()

        return 

    @staticmethod
    def insertNewQuiz(infoQuiz,quiz):
        nom = infoQuiz["nom"]
        pays = infoQuiz["pays"]
        theme = infoQuiz["theme"]

        id_quiz = Quiz.insertInfoQuiz(nom,pays,theme)
        for question in quiz:
            id_question = Quiz.insertQuestion(id_quiz, question["intitule"])
            for choix in question["choix"]:
                Quiz.insertChoix(id_question,choix["intitule"], choix["isCorrect"])

        return "ok"

    @staticmethod
    def quizByCountry(country):
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM quiz q WHERE q.Pays ='" + country+ "';")
        fetchdata = cur.fetchall()
        cur.close()
        return fetchdata

