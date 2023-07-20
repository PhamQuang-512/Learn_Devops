from flask import Flask
from pymongo import MongoClient
from flask.json import jsonify
from bson.json_util import dumps
from flask_cors import CORS
import os, json

app = Flask(__name__)
cors = CORS(app)
PORT = int(os.getenv("MONGO_PORT")) | 27017
USERNAME = os.getenv("MONGO_USERNAME")
PASSWORD = os.getenv("MONGO_PASSWORD")
HOST = os.getenv("MONGO_HOST")

# client = MongoClient("mongodb://quang:Quang.0512@database:27017/")
client = MongoClient(host=HOST, port=PORT, username=USERNAME, password=PASSWORD)

db = client['VDT2023']
interns = db.interns


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/interns', methods=['GET'])
def add_data():
    json_data = []
    for intern in interns.find():
        instance = {k: v for k,v in intern.items() if k !='_id' }
        instance['id'] = str(intern['_id'])
        json_data.append(instance)

    return jsonify(json_data)
  
if __name__ == '__main__':
    app.run()