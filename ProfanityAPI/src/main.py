from analisis import *
from storage import *
from flask import Flask, jsonify, request
from dbconnect import updateDB, createSamples
import pika
import nltkmodules

app = Flask(__name__)

@app.route('/', methods=['GET'])
def ping():
    print("HOLA")
    return jsonify({"response": "Active"})

#GET method:
@app.route('/samples', methods=['GET'])
def samples():
    createSamples()

#GET method:
@app.route('/analyze/<string:name>', methods=['GET'])
def analyze(name):
    #print(name)
    try:
        nombre = str(name)
        run_storage(nombre)
        if nombre[-1] == "f":
            print(nombre)
            b_w, t_w = fullAnalisisPdf(nombre)
        elif nombre[-1] == "x":
            b_w, t_w = fullAnalisisDocx(nombre) 
        elif nombre[-1] == "t":
            b_w, t_w = fullAnalisisTxt(nombre)
          
        p_total = b_w/t_w*100
        run_storage(nombre,0)
        
        
        updateDB(name, p_total)
        print("Porcentaje ofensivo del documento: " + str(p_total))
        return str(p_total)        

    except Exception as e:
        print(e)
        return(str(e))
    
def callback(ch, method, properties, body):
    print(body.decode("utf-8"))
    analyze(body.decode("utf-8"))
    
    
def brokerListening():
    
    print("Initialize rabbitmq connections")
    credentials = pika.PlainCredentials('guest', 'guest')
    parameters = pika.ConnectionParameters('rabbitmq-server',5672,'/',credentials)
    connection = pika.BlockingConnection(parameters)
    
    channel = connection.channel()
    channel.exchange_declare(exchange='Document-Analyzer', exchange_type='fanout')
    result = channel.queue_declare(queue='Profanity-Queue', durable=True,exclusive=False)
    queue_name = result.method.queue
    channel.queue_bind(exchange='Document-Analyzer', queue=queue_name)


    channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
    print('Waiting for messages from the broker. To exit press CTRL+C')   
    channel.start_consuming() 
    connection.close()
    


if __name__ == "__main__":
    #app.run(host='0.0.0.0', port=3000, debug=True)
    #createSamples()
    brokerListening()






