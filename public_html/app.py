from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/")
def serve_basic():
    return send_from_directory("","index.html")

@app.route("/index.html")
def serve_home():
    return send_from_directory("","index.html")

@app.route("/exchange-market.htm")
def serve_market():
    return send_from_directory("","exchange-market.htm")

@app.route("/mod-browser.htm")
def serve_mods():
    return send_from_directory("", "mod-browser.htm")

@app.route("/mod-page.htm")
def serve_mod():
    return send_from_directory("", "mod-page.htm")

@app.route("/looking-for-players.htm")
def serve_players():
    return send_from_directory("", "looking-for-players.htm")

@app.route("/unit-browser.htm")
def serve_units():
    return send_from_directory("", "unit-browser.htm")

@app.route("/unit-comparision.htm")
def serve_comparison():
    return send_from_directory("", "unit-comparision.htm")

@app.route("/my-account.htm")
def serve_account():
    return send_from_directory("", "my-account.htm")

@app.route("/login.htm")
def serve_login():
    return send_from_directory("", "login.htm")

@app.route("/create-account.htm")
def serve_registration():
    return send_from_directory("", "create-account.htm")