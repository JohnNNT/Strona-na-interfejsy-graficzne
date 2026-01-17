from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_home():
    return send_from_directory('', "index.html")

@app.route('/exchange-market.htm')
def serve_market():
    return send_from_directory('', "exchange-market.htm")

@app.route('/exchange-market_pliki/<path:source>')
def give_content():
    return send_from_directory('exchange-market_pliki', source)

@app.route('/Home_pliki/<path:path>')
def give_files():
    return send_from_directory('Home_pliki', path)