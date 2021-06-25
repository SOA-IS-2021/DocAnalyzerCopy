from pymongo import MongoClient, collection, results
from pymongo.client_options import ClientOptions

MONGO_URI = 'mongodb://localhost'

client = MongoClient(MONGO_URI)

db = client['DBdocs']

collection = db['documents']


#collection.insert_one({"fileID": "sample.txt", "sentiment":' ', 'offensive': 0, 'employees': 'names' })
#collection.insert_one({"fileID": "sample.pdf", "sentiment":' ', 'offensive': 0, 'employees': 'names' })
#collection.insert_one({"fileID": "sample.docx", "sentiment":' ', 'offensive': 0, 'employees': 'names' })
def updateDB(name, val):
    result = collection.update_one({"fileID": name}, {"$set": {"offensive": val}})


results = collection.find()

for i in results:
    print(i)

