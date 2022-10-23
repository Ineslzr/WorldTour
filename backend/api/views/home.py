from api import app,mysql

@app.route("/")
def Home():
    return {"Home": "Welcome"}
    
#juste un test pour vérifier la connexion front back
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2","Member3"]}