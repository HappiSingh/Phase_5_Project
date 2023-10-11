from faker import Faker
from models import User, Game, Review, Publisher, Publisher_Game
from datetime import date
from random import randint as rc
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

    password_1 = "111111"
    password_2 = "222222"
    password_3 = "333333"

    user_1 = User(
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            age = rc(5,70),
            email=faker.email()
                            )
    user_2 = User(
            first_name=faker.first_name(),
            last_name=faker.last_name(),
            age = rc(5,70),
            email=faker.email()
                            )
    user_3 = User(
            first_name="Tom",
            last_name="Smith",
            age = rc(5,70),
            email="tom@gmail.com"
                            )    

    # We are calling the password_hash setter method here
    user_1.password_hash = password_1
    user_2.password_hash = password_2
    user_3.password_hash = password_3
    
    print("Adding to db and commiting...\n")

    db.session.add_all([user_1, user_2, user_3])
    db.session.commit()

    print("Users completed\n")

    game_1 = Game(
        title = "Assassin's Creed 2",
        release_date = date(
            year=2010,
            month=3,
            day=9
        ),
        genre = "Action Adventure"
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
    
    game_3 = Game(
        title = "The Witcher 3: Wild Hunt",
        release_date = date(
            year=2015,
            month=5,
            day=19
        ),
        genre = "Action RPG"
        )
    
    game_4 = Game(
        title = "Grand Theft Auto V",
        release_date = date(
            year=2013,
            month=9,
            day=17
        ),
        genre = "Action-Adventure"
        )
    
    game_5 = Game(
        title = "Minecraft",
        release_date = date(
            year=2011,
            month=11,
            day=18
        ),
        genre = "Sandbox, Survival"
        )
    
    game_6 = Game(
        title = "Fortnite",
        release_date = date(
            year=2017,
            month=7,
            day=25
        ),
        genre = "Battle Royale"
        )
    
    game_7 = Game(
        title = "League of Legends",
        release_date = date(
            year=2009,
            month=10,
            day=27
        ),
        genre = "MOBA"
        )
    
    game_8 = Game(
        title = "The Legend of Zelda: Breath of the Wild",
        release_date = date(
            year=2017,
            month=3,
            day=3
        ),
        genre = "Action-Adventure"
        )
    
    game_9 = Game(
        title = "Batman: Arkham Knight",
        release_date = date(
            year=2015,
            month=6,
            day=23
        ),
        genre = "Action-Adventure"
        )
    
    game_10 = Game(
        title = "God of War (2018)",
        release_date = date(
            year=2018,
            month=4,
            day=20
        ),
        genre = "Action-Adventure"
        )
   
    game_11 = Game(
            title = "Halo 3",
            release_date = date(
                year=2007,
                month=9,
                day=25
            ),
            genre = "First-Person Shooter"
            )

    
    game_12 = Game(
            title = "Dark Souls III",
            release_date = date(
                year=2016,
                month=3,
                day=24
            ),
            genre = "Action RPG"
            )
    
    game_14 = Game(
            title = "World of Warcraft",
            release_date = date(
                year=2004,
                month=11,
                day=23
            ),
            genre = "MMO-RPG"
            )
    
    game_13 = Game(
            title = "Final Fantasy VII Remake",
            release_date = date(
                year=2020,
                month=4,
                day=10
            ),
            genre = "Action RPG"
            )
    
    game_15 = Game(
            title = "The Elder Scrolls V: Skyrim",
            release_date = date(
                year=2011,
                month=11,
                day=11
            ),
            genre = "Action RPG"
            )

    db.session.add_all([game_1, game_2, game_3, game_4, 
                        game_5, game_6, game_7, game_8,
                        game_9, game_10, game_11, game_12,
                        game_13, game_14, game_15,])
    db.session.commit()

    print("Games completed\n")

    review_1 = Review(
        rating = 8,
        comment = """Grand Theft Auto V is a triumph of game design, offering a living, breathing Los Santos filled with an incredible variety of activities.""",
        user_id = 1,
        game_id = 4
    )

    review_2 = Review(
        rating = 7,
        comment = """Minecraft is limitless creativity and endless fun, allowing players to truly make the world theirs.""",
        user_id = 1,
        game_id = 5
    )

    review_3 = Review(
        rating = 9,
        comment = """Breath of the Wild is a masterpiece of adventure gaming, offering a sprawling open world filled with secrets and surprises.""",
        user_id = 1,
        game_id = 8
    )

    review_4 = Review(
        rating = 10,
        comment = """A true game design masterpiece, Breath of the Wild grants players the freedom to tackle challenges in their own way.""",
        user_id = 2,
        game_id = 8
    )

    review_5 = Review(
        rating = 9,
        comment = """The Witcher 3 is a triumph of storytelling and world-building, hooking players with a rich, branching narrative and complex characters.""",
        user_id = 2,
        game_id = 3
    )

    review_6 = Review(
        rating = 6,
        comment = """A gaming phenomenon that has set the standard for competitive play.""",
        user_id = 2,
        game_id = 7
    )

    review_7 = Review(
        rating = 9,
        comment = """The destructible environments and tactical gameplay offer a level of immersion that few games can match.""",
        user_id = 3,
        game_id = 2
    )

    review_8 = Review(
        rating = 10,
        comment = """The richly detailed world of Renaissance Italy, combined with Ezio Auditore's compelling journey for vengeance, creates an experience that's both immersive and emotionally resonant.""",
        user_id = 3,
        game_id = 1
    )
    review_9 = Review(
        rating = 7,
        comment = """The constant updates and events ensure there's always something new and exciting happening in the ever-evolving world of Fortnite.""",
        user_id = 3,
        game_id = 6
    )
    review_10 = Review(
        rating = 9,
        comment = """The three main characters bring unique flavors to the story, creating a narrative tapestry that's thrilling and emotionally resonant.""",
        user_id = 3,
        game_id = 4
    )
    review_11 = Review(
        rating = 8,
        comment = """The landscapes are beautifully rendered, and the attention to detail in every nook and cranny of the world is remarkable.""",
        user_id = 3,
        game_id = 3
    )
    

    db.session.add_all([review_1, review_2, review_3, review_4, review_5, review_6, 
                        review_7, review_8, review_9, review_10, review_11])
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
    
    pub_3 = Publisher(
        name="CD Projekt",
        country="Poland",
        year_founded = "1994"
        )
    
    pub_4 = Publisher(
        name="Rockstar Games",
        country="United States",
        year_founded = "1998"
        )
    
    pub_5 = Publisher(
        name="Mojang Studios",
        country="Sweden",
        year_founded = "2009"
        )
    
    pub_6 = Publisher(
        name="Epic Games",
        country="United States",
        year_founded = "1991"
        )
    
    pub_7 = Publisher(
        name="Riot Games",
        country="United States",
        year_founded = "2006"
        )
    
    pub_8 = Publisher(
        name="Nintendo",
        country="Japan",
        year_founded = "1889"
        )
    
    pub_9 = Publisher(
        name="Warner Bros. Interactive Entertainment",
        country="USA",
        year_founded = "1993"
        )
    
    pub_10 = Publisher(
        name="Sony Interactive Entertainment",
        country="Japan",
        year_founded = "1993"
        )
    
    pub_11 = Publisher(
        name="Microsoft Game Studios",
        country="USA",
        year_founded = "2000"
        )

    pub_12 = Publisher(
        name="FromSoftware",
        country="Japan",
        year_founded = "1986"
        )
    
    pub_13 = Publisher(
        name="Blizzard Entertainment",
        country="USA",
        year_founded = "1991"
        )
    
    pub_14 = Publisher(
        name="Square Enix",
        country="Japan",
        year_founded = "1986"
        )
    
    pub_15 = Publisher(
        name="Bethesda Softworks",
        country="USA",
        year_founded = "1986"
        )

    db.session.add_all([pub_1, pub_2, pub_3, pub_4, 
                        pub_5, pub_6, pub_7, pub_8,
                        pub_9, pub_10 ,pub_11 ,pub_12,
                        pub_13, pub_14, pub_15])
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
    
    pub_game_3 = Publisher_Game(
        count=1,
        game_id=3,
        publisher_id=3
        )
    
    pub_game_4 = Publisher_Game(
        count=1,
        game_id=4,
        publisher_id=4
        )
    
    pub_game_5 = Publisher_Game(
        count=1,
        game_id=5,
        publisher_id=5
        )
    
    pub_game_6 = Publisher_Game(
        count=1,
        game_id=6,
        publisher_id=6
        )
    
    pub_game_7 = Publisher_Game(
        count=1,
        game_id=7,
        publisher_id=7
        )
    
    pub_game_8 = Publisher_Game(
        count=1,
        game_id=8,
        publisher_id=8
        )
    
    pub_game_9 = Publisher_Game(
        count=1,
        game_id=9,
        publisher_id=9
        )
    
    pub_game_10 = Publisher_Game(
        count=1,
        game_id=10,
        publisher_id=10
        )
    
    pub_game_11 = Publisher_Game(
        count=1,
        game_id=11,
        publisher_id=11
        )
    
    pub_game_12 = Publisher_Game(
        count=1,
        game_id=12,
        publisher_id=12
        )
    
    pub_game_13 = Publisher_Game(
        count=1,
        game_id=13,
        publisher_id=13
        )
    
    pub_game_14 = Publisher_Game(
        count=1,
        game_id=14,
        publisher_id=14
        )
    
    pub_game_15 = Publisher_Game(
        count=1,
        game_id=15,
        publisher_id=15
        )
    


    db.session.add_all([pub_game_1, pub_game_2, pub_game_3, pub_game_4, 
                        pub_game_5, pub_game_6, pub_game_7, pub_game_8,
                        pub_game_9, pub_game_10, pub_game_11, pub_game_12,
                        pub_game_13, pub_game_14, pub_game_15])
    db.session.commit()

    print("Publisher_Games completed\n")
   

    print("Seeding completed\n")