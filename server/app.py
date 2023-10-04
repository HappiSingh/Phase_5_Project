# app.py
from sqlite3 import IntegrityError
from flask import make_response, request, session
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

# RESTful route syntax
class Reviews(Resource):
	def get(self):
		reviews = [review.to_dict() for review in Review.query.all()]
		return reviews, 200
api.add_resource(Reviews, '/reviews')

# RESTful route syntax
class ReviewByUserID(Resource):
	def get(self, id):

            reviews = Review.query.filter(Review.user_id == id).all()
            results = [result.to_dict() for result in reviews]
            return results, 200

api.add_resource(ReviewByUserID, '/review/user/<int:id>')


class ReviewByID(Resource):
    def get(self, id):
            review = Review.query.filter(Review.id == id).first()
            return review.to_dict(), 200


    def patch(self, id):
            review = Review.query.filter(Review.id == id).first()

            for attr in request.get_json():
                  setattr (review, attr, request.get_json[attr])

            review.rating = int(request.get_json["rating"])
            review.comment = str(request.get_json["comment"])

            try:
                db.session.add(review)
                db.session.commit()

                return review.to_dict(), 200
            except:
                return {}, 422


api.add_resource(ReviewByID, '/review/<int:id>')



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
            password = data["password"]
            email = data["email"]

            user = User.query.filter(User.email == email).first()

            if user:
                if user.authenticate(password):

                    session["user_id"] = user.id
                    return user.to_dict(), 200
            else:
                return {"errors" : "Unauthorized"}, 401



api.add_resource(Login, '/login')

###################################################################################

class CheckSession(Resource):
    def get(self):
            user = User.query.filter(User.id == session.get('user_id')).first()
            if user:
                response = make_response(
                    user.to_dict(),
                    200,
                )
                return response
            else:
                return {"errors": "Unauthorized"}, 401

api.add_resource(CheckSession, '/check_session')


###################################################################################

class Logout(Resource):
      def delete(self):
            if session.get("user_id"):
                  session["user_id"] = None
                  return {}, 204
            return {'errors': 'Unauthorized'}, 401

api.add_resource(Logout, '/logout')






















if __name__ == '__main__':
    app.run(port=5555, debug=True)