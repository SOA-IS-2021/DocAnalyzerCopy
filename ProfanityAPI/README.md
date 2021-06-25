# Profanity API

_API para la deteccion de palabras offensivas en documentos_

## Comenzando 🚀

_Documentos validos_
```
.pdf
.docx
.txt
```
Los `txt` tienen la caracteristica de la deteccion de idioma, por lo que funciona para `ingles`, `español`, `aleman` y `frances`. Los demas formatos solo tienen prioridad `español`.


### Pre-requisitos 📋

_Intalaciones necesarias_

```
python3 -m pip install -r requirements.txt --user
```


## Despliegue 📦

_Se ejecuta corriendo el main.py_
```
python3 main.py
```

Esto levanta el servidor, si se desea analizar el contenido de un archivo es necesario realizar un `GET` de la siguiente manera.
```
http://localhost:3000/analyze/<namefile.ext>
```
Por ejemplo
```
http://localhost:3000/analyze/sample.docx
```

### NOTA 📋

El archivo debe estar en el Azure File Storage.

Si se desea usar tu propio File Storage, solo se debe modificar la linea `50` del storage.py.

```
        account_name='yourAFSName', account_key='yourKey')
```
Ademas de modificar el contenedor, en la linea `53`
```
        container_name = 'yourcontainerName'
```
## Autores ✒️


* **Emanuel Esquivel Lopez** - *Trabajo Inicial* - [ema11412](https://github.com/ema11412) 


