# app.py
from sqlite3 import IntegrityError
from flask import make_response, request, session
from flask_restful import Resource
# import ipdb; ipdb.set_trace()

from config import app, db, api # This line will run the config.py file and initialize our app
from models import User, Game, Publisher_Game, Publisher, Review

# All routes here!


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
            if games:
                return games, 200
            else:
               {'error': ['422 Unprocessable Entity']}, 422
api.add_resource(Games, '/games')

# RESTful route syntax
class Publishers(Resource):
	def get(self):
            publishers = [publisher.to_dict() for publisher in Publisher.query.all()]
            if publishers:
                return publishers, 200
            else:
                {'error': ['422 Unprocessable Entity']}, 422
api.add_resource(Publishers, '/publishers')

# RESTful route syntax
class Reviews(Resource):
	def get(self):
		reviews = [review.to_dict() for review in Review.query.all()]
		return reviews, 200
api.add_resource(Reviews, '/reviews')

######################################################################################
class ReviewByGameID(Resource):
	def get(self, id):

            reviews = Review.query.filter(Review.game_id == id).all()
            results = [result.to_dict() for result in reviews]
            return results, 200

api.add_resource(ReviewByGameID, '/review/game/<int:id>')

########################################################################################

# RESTful route syntax
class ReviewByUserID(Resource):
	def get(self, id):

            reviews = Review.query.filter(Review.user_id == id).all()
            if reviews:
                results = [result.to_dict() for result in reviews]
                return results, 200
            else:
                return {"errors" : ["Empty: Write Your First Review"]}, 404

api.add_resource(ReviewByUserID, '/review/user/<int:id>')
####################################################

# Adding new review

class AddReview(Resource):
	def post(self):

            data = request.get_json()

            new_review = Review(
                    rating=data["rating"],
                    comment=data["comment"],
                    user_id=data["id"],
                    game_id=data["game_id"]
                    )

            try:
                db.session.add(new_review)
                db.session.commit()

                return new_review.to_dict(), 201

            except IntegrityError:
                return {'error': ['422 Unprocessable Entity']}, 422


api.add_resource(AddReview, '/review/new')


####################################################
class ReviewByID(Resource):


    def delete(self, id):
            review = Review.query.filter(Review.id == id).first()
            try:
                db.session.delete(review)
                db.session.commit()

                return {}, 204
            except:
                  return {"errors" : ["Doesn't exist"]}, 404


api.add_resource(ReviewByID, '/review/<int:id>')



#################################################################################
class Update(Resource):

    def get(self, id):
            review = Review.query.filter(Review.id == id).first()
            if review:
                return review.to_dict(), 200
            else:
                return {"errors" : ["No review found"]}, 404

    def patch(self, id):
                review = Review.query.filter(Review.id == id).first()

                for attr in request.json:
                    setattr (review, attr, request.json[attr])

                review.rating = int(request.json["rating"])
                review.comment = str(request.json["comment"])

                try:
                    db.session.add(review)
                    db.session.commit()

                    return review.to_dict(), 200
                except:
                    return {'error': ['422 Unprocessable Entity']}, 422

api.add_resource(Update, '/review/update/<int:id>')
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
                return {'error': ['422 Unprocessable Entity']}, 422

api.add_resource(SignUp, '/signup')


#################################################################################

class Login(Resource):
	def post(self):

            data = request.get_json()
            password = data["password"]
            email = data["email"]

            user = User.query.filter(User.email == email).first()

            if user and user.authenticate(password):

                    session["user_id"] = user.id
                    return user.to_dict(), 200
            else:
                return {"errors" : ["401 Unauthorized: Please try again"]}, 401



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
                return {"errors": ["Unauthorized"]}, 401

api.add_resource(CheckSession, '/check_session')


###################################################################################

class Logout(Resource):
      def delete(self):
            if session.get("user_id"):
                  session["user_id"] = None
                  return {}, 204
            return {'errors': ['Unauthorized']}, 401

api.add_resource(Logout, '/logout')






















if __name__ == '__main__':
    app.run(port=5555, debug=True)