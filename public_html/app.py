from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/<path:path>')
def send_report(path):
    # Using request args for path will expose you to directory traversal attacks
    return send_from_directory('', path)