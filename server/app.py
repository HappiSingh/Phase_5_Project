# app.py
from flask import request, session
from flask_restful import Resource

from config import app, db, api # This line will run the config.py file and initialize our app
from models import User, Game, Publisher_Game, Publisher, Review

# All routes here!

@app.route("/", methods=["GET"])
def index():
    return ('<h1>Project Server</h1>'
           "<h1>Hello from root!</h1>")

#################################################################################
# RESTful route syntax
class Users(Resource):
	def get(self):
		users = [user.to_dict() for user in User.query.all()]
		return users, 200
api.add_resource(Users, '/users')


# RESTful route syntax
class Games(Resource):
	def get(self):
		games = [game.to_dict() for game in Game.query.all()]
		return games, 200
api.add_resource(Games, '/games')

# RESTful route syntax
class Publishers(Resource):
	def get(self):
		publishers = [publisher.to_dict() for publisher in Publisher.query.all()]
		return publishers, 200
api.add_resource(Publishers, '/publishers')

#################################################################################






if __name__ == '__main__':
    app.run(port=5555, debug=True)