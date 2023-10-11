# Welcome to my Game_Reviews Website
#### Video Games &amp; Reviews with React frontend and Flask backend

## Description
Welcome to our Game Reviews platform! Here, you can explore a wide range of video games and check out reviews contributed by fellow users. Feel free to join in by sharing your own thoughts on the games you've played. Just sign up or log in if you're already a member. Had a change of heart about a review? No worries, you can easily edit or even delete it. And if you're curious about the minds behind your favorite games, we've got info on the publishers too! Happy gaming!


## Features
+ Custom Flask/SQLAlchemy API backend with a React frontend
+ Multiple models for the database with a variety of relations
+ Over 7 client-side routes using React Router v6
+ Full CRUD actions
+ Login/Signup integration with password hashing and authentication
+ Input/User validations and error handling on both frontend and backend
+ Use of external libraries (Bootstrap, Formik &amp; Yup, Bcrypt and more)


## Backend Installation

+ ### Install and configure our environment
```python
pipenv install
```

+ ### Enter the Python shell
```python
pipenv shell
``` 

+ ### Enter the *server* folder
```python
cd server
```

+ ### Run the backend
```python
python app.py
```

## Frontend Installation

+ #### Open a new terminal

+ ### Enter the *client* folder
```react
cd client
```

+ ### Install and configure our environment
```react
npm install
```

+ ### Run the frontend
```react
npm start
```

## Usage
You begin on the home page where you're greeted with a welcome message. On the navbar, you have two options, login or sign up. Once you signup or login with the correct user info, you'll see the navbar change. Now you have a tab for Games where you can view all the video games. You also have All Reviews where you can view all the game reviews every user has written. Next, you have My Reviews where you can see all the reviews you've written. Then, you see Publishers where you can view the all the publishers for the video games. In the Games tab, you can click the Add a Review button and write a new review on the game selected. Just enter your given rating out of 10 and your honest opinion. In the My Reviews tab, you are able to view, edit, or remove the reviews you've written. Editing will let you change the rating you original gave it and/or the review itself. Finally on the far right of the navbar, you have an logout option. Happy Writing!

# Testing
I've created a sample user for testing purposes. Try logging in a Tom Smith.
+ Email: tom@gmail.com
+ Password: 333333


## License
MIT License

Copyright (c) 2023 Harpreet Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.