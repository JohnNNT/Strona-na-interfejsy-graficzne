from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_home():
    return send_from_directory('', "index.html")

@app.route('/index.html')
def serve_home():
    return send_from_directory('', "index.html")

@app.route('/exchange-market.htm')
def serve_market():
    return send_from_directory('', "exchange-market.htm")

@app.route('/login.htm')
def serve_login():
    return send_from_directory('', "login.htm")

@app.route('/unit-browser.htm')
def serve_units():
    return send_from_directory('', "unit_browser.htm")

@app.route('/your-offers.htm')
def serve_offers():
    return send_from_directory('', "your-offers.htm")

@app.route('/mod-browser.htm')
def serve_mods():
    return send_from_directory('', "mod-browser.htm")

@app.route('/mod-page.htm')
def serve_mod():
    return send_from_directory('', "mod-page.htm")

@app.route('/mod-upload.htm')
def serve_upload():
    return send_from_directory('', "mod-upload.htm")

@app.route('/looking-for-players.htm')
def serve_players():
    return send_from_directory('', "looking-for-players.htm")

@app.route('/my-account.htm')
def serve_account():
    return send_from_directory('', "my-account.htm")

@app.route('/create-account.htm')
def serve_refistration():
    return send_from_directory('', "create-account.htm")

@app.route('/unit-comparison.htm')
def serve_comparison():
    return send_from_directory('',"unit-comparison.htm")