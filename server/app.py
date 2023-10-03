# app.py
from sqlite3 import IntegrityError
from flask import request, session
from flask_restful import Resource
# import ipdb; ipdb.set_trace()

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

            data = request.get_json()

            new_user = User(
                    first_name=data["first_name"],
                    last_name=data["last_name"],
                    age=data["age"],
                    email=data["email"]
                    )
            new_user.password_hash=data["password"]

            try:
                db.session.add(new_user)
                db.session.commit()

                session['user_id']= new_user.id
                return new_user.to_dict(), 201
            except IntegrityError:
                return {'error': '422 Unprocessable Entity'}, 422

api.add_resource(SignUp, '/signup')


#################################################################################

class Login(Resource):
	def post(self):

            data = request.get_json()
            password = data.get('password')
            email = data.get('email')

            user = User.query.filter(User.email == email).first()
            if user:
                if user.authenticate(password):
					
                    session["user_id"] = user.id
                    return user.to_dict(), 200
            return {"errors" : "Unauthorized"}, 401



api.add_resource(Login, '/login')
























if __name__ == '__main__':
    app.run(port=5555, debug=True)