from faker import Faker
from models import User
from random import randint, choice as rc
from config import db, app, bcrypt
#import ipdb; ipdb.set_trace()
faker = Faker()

with app.app_context():

    User.query.delete()

    print("Starting seed...")
        # Seed code goes here!

    first_name = faker.name.firstName()
    last_name = faker.name.lastName()
    email = faker.internet.email()
    password = 123456

    user = User(
            first_name=first_name,
            last_name=last_name,
            email=email
                            )
    # We are calling the password_hash setter method here
    user.password_hash = password
    db.session.add(user)
    db.session.commit()