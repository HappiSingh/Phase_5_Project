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

class SignUp(Resource):
	def post(self):

            first_name = request.get_json("first_name")
            last_name = request.get_json("last_name")
            age = request.get_json("age")
            email = request.get_json("email")
            password = request.get_json("password")

            if first_name and last_name and age and email and password:

                new_user = User(
                    first_name=first_name,
                    last_name=last_name,
                    age=age,
                    email=email
                    )
                new_user.password_hash=password

                db.session.add(new_user)
                db.session.commit()

                session['user_id']= new_user.id
                return new_user.to_dict(), 201

            return {'error': '422 Unprocessable Entity'}, 422

api.add_resource(SignUp, '/signup')



if __name__ == '__main__':
    app.run(port=5555, debug=True)