from faker import Faker
from models import User, Game, Review, Publisher, Publisher_Game
from datetime import date
from random import randint, choice as rc
from config import db, app, bcrypt

faker = Faker()

with app.app_context():

    print("Deleting Current DB data...\n")

    User.query.delete()
    Review.query.delete()
    Game.query.delete()
    Publisher.query.delete()
    Publisher_Game.query.delete()

    print("Deletion of DB data completed\n")

    print("Starting seed...\n")
        # Seed code goes here!

    password_1 = "123456"
    password_2 = "654321"

    user_1 = User(
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            age = 18,
            email=faker.email()
                            )
    user_2 = User(
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            age = 23,
            email=faker.email()
                            )

    # We are calling the password_hash setter method here
    user_1.password_hash = password_1
    user_2.password_hash = password_2
    
    print("Adding to db and commiting...\n")

    db.session.add_all([user_1, user_2])
    db.session.commit()

    print("Users completed\n")

    game_1 = Game(
        title = "Assassin's Creed 2",
        release_date = date(
            year=2010,
            month=3,
            day=9
        ),
        genre = "Action Adventure Game"
        )

    game_2 = Game(
        title = "Battlefield 3",
        release_date = date(
            year=2011,
            month=10,
            day=25
        ),
        genre = "First Person Shooter"
        )

    db.session.add_all([game_1, game_2])
    db.session.commit()

    print("Games completed\n")

    review_1 = Review(
        rating = 7,
        comment = "This is the best game I ever played!",
        user_id = 1,
        game_id = 1
    )

    review_2 = Review(
        rating = 6,
        comment = "This was decent but not too memorable",
        user_id = 1,
        game_id = 2
    )

    review_3 = Review(
        rating = 3,
        comment = "Such a boring game I fell asleep",
        user_id = 2,
        game_id = 1
    )

    review_4 = Review(
        rating = 9,
        comment = "This was so fun playing with my friends after school",
        user_id = 2,
        game_id = 2
    )

    db.session.add_all([review_1, review_2, review_3, review_4])
    db.session.commit()

    print("Reviews completed\n")

    pub_1 = Publisher(
        name="Ubisoft",
        country="France",
        year_founded = "1986"
        )

    pub_2 = Publisher(
        name="Electronic Arts",
        country="California",
        year_founded = "1982"
        )

    db.session.add_all([pub_1, pub_2])
    db.session.commit()


    print("Publisher completed\n")

    pub_game_1 = Publisher_Game(
        count=1,
        game_id=1,
        publisher_id=1
        )

    pub_game_2 = Publisher_Game(
        count=1,
        game_id=2,
        publisher_id=2
        )

    db.session.add_all([pub_game_1, pub_game_2])
    db.session.commit()

    print("Publisher_Games completed\n")
    # import ipdb; ipdb.set_trace()

    print("Seeding completed\n")