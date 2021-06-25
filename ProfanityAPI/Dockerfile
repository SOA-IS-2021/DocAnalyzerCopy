FROM python:3.8

WORKDIR /api

COPY . /api/

RUN pip install -r requirements.txt --user

CMD ["python3","-u","./src/main.py"]



