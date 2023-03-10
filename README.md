# Tic tac toe

Tic tac toe is a game, in which a docker is running containing a flask https website using self-signed certificate.
The flask server runs a website which is running over html javascript and css, in which you can play tic tac toe.

This project is built as part of a task.

## Usage
Building and running the docker:
docker build -t my-flask-app .
docker run -p 5000:5000 my-flask-app

Then connect to the game in https://<your local ip>:5000/.

Creating your own certificate:
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365