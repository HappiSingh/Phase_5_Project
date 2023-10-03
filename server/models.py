# models.py
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin



from config import db, bcrypt

class User(db.Model, SerializerMixin):

    __tablename__ = "users"

    serialize_only = ("id", "first_name", "last_name", "age", "email",)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(25), nullable=False)
    last_name = db.Column(db.String(25), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())

    reviews = db.relationship("Review", backref="user")

    # Restrict access to the password hash.
    @hybrid_property
    def password_hash(self):
        raise Exception("Password hashes may not be viewed.")

    # Generate a Bcrypt password hash and set it to the _password_hash attribute
    @password_hash.setter
    def password_hash(self, password):
        bcrypt_hash = bcrypt.generate_password_hash(password).decode("utf-8")
        self._password_hash = bcrypt_hash

    # Check if the provided password matches the one stored in the db
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)

    def __repr__(self):
        return (f"User ID: {self.id} \
                 First Name: {self.first_name} \
                 Last Name: {self.last_name} \
                 Age: {self.age} \
                 Email: {self.email} \
                 Created at: {self.created_at}")
    


##############################################################################################
##############################################################################################
##############################################################################################

class Review(db.Model, SerializerMixin):

    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))


    def __repr__(self):
        return (f"Review ID: {self.id} \
                 Rating: {self.rating} \
                 Comment: {self.comment} \
                 Created at: {self.created_at} \
                 Updated at: {self.updated_at} \
                 User ID: {self.user_id} \
                 Game ID: {self.game_id}")


##############################################################################################
##############################################################################################
##############################################################################################

class Game(db.Model, SerializerMixin):

    __tablename__ = "games"

    serialize_only = ("id", "title", "release_date", "genre",)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    genre = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())

    reviews = db.relationship("Review", backref="game")
    publisher_games = db.relationship("Publisher_Game", backref="game")


    def __repr__(self):
        return (f"Game ID: {self.id} \
                 Title: {self.title} \
                 Release Date: {self.release_date} \
                 Genre: {self.genre} \
                 Created at: {self.created_at}")


##############################################################################################
##############################################################################################
##############################################################################################

class Publisher_Game(db.Model, SerializerMixin):

    __tablename__ = "publisher_games"

    id = db.Column(db.Integer, primary_key=True)
    count = db.Column(db.Integer)


    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))
    publisher_id = db.Column(db.Integer, db.ForeignKey("publishers.id"))

    
    def __repr__(self):
        return (f"Publisher_Game ID: {self.id} \
                 count: {self.count} \
                 Game ID: {self.game_id} \
                 Publisher ID: {self.publisher_id}")


##############################################################################################
##############################################################################################
##############################################################################################

class Publisher(db.Model, SerializerMixin):

    __tablename__ = "publishers"

    serialize_only = ("id", "name", "country", "year_founded",)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    year_founded = db.Column(db.Integer, nullable=False)

    publisher_games = db.relationship("Publisher_Game", backref="publisher")


    def __repr__(self):
        return (f"Publisher ID: {self.id} \
                 Name: {self.name} \
                 Country: {self.country} \
                 Year Founded: {self.year_founded}")