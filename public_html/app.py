from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def serve_home():
    return send_from_directory('', "index.html")

@app.route('/exchange-market.htm')
def serve_market():
    return send_from_directory('', "exchange-market.htm")