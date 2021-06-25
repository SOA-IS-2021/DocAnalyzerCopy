from pymongo import MongoClient, collection, results
from pymongo.client_options import ClientOptions

MONGO_URI = 'mongodb://devroot:devroot@mongo:27017'

client = MongoClient(MONGO_URI)

db = client['DBdocs']

collection = db['documents']


def updateDB(name, val):
    collection.update_one({"fileID": name}, {"$set": {"offensive": val}})


def createSamples():
    collection.insert_one({"fileID": "sample.txt", "sentiment":' ', 'offensive': 0, 'employees': 'names' })
    collection.insert_one({"fileID": "sample.pdf", "sentiment":' ', 'offensive': 0, 'employees': 'names' })
    collection.insert_one({"fileID": "sample.docx", "sentiment":' ', 'offensive': 0, 'employees': 'names' })