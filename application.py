from flask import Flask, render_template
import http.client

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/buy")
def buy():
    return render_template("buy.html")

    #BUY tab with adobe stock pictures and links
    #instagram tab with updated feed

@app.route("/ig")
def ig():
    return render_template("ig.html")


conn = http.client.HTTPSConnection("instagramdimashirokovv1.p.rapidapi.com")

headers = {
    'x-rapidapi-host': "InstagramdimashirokovV1.p.rapidapi.com",
    'x-rapidapi-key': "8023438b58msh55959bb535cd2c3p14ea6cjsn618c82d777fd"
    }

conn.request("GET", "/feed/10892082462/optional", headers=headers)

res = conn.getresponse()
data = res.read()



@app.route("/contact")
def contact():
    return render_template("contact.html")
    
