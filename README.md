# Welcome to my Game_Reviews Website
### Video Games &amp; Reviews with React frontend and Flask backend

## Description
Welcome to our Game Reviews platform! Here, you can explore a wide range of video games and check out reviews contributed by fellow users. Feel free to join in by sharing your own thoughts on the games you've played. Just sign up or log in if you're already a member. Had a change of heart about a review? No worries, you can easily edit or even delete it. And if you're curious about the minds behind your favorite games, we've got info on the publishers too! Happy gaming!


## Features
+ Custom Flask/SQLAlchemy API backend with a React frontend
+ Multiple models for the database with a variety of relations
+ Over 7 client-side routes using React Router v6
+ Full CRUD actions
+ Login/Signup integration with password hashing and authentication
+ Input and user validations on both frontend and backend
+ Use of external libraries (Bootstrap, Formik &amp; Yup, Bcrypt and more)


## Backend Installation

### Enter the server folder
```python
cd server
```

### Install and configure our environment
```python
pipenv install
```

### Enter the Python shell
```python
pipenv shell
``` 

### Run the backend
#### Make sure you're still in the server folder
```python
python app.py
```

## Frontend Installation

#### Open a new terminal
### Enter the client folder
```react
cd client
```

### Install and configure our environment
```react
npm install
```

### Run the frontend
```react
npm start
```

## Usage
You begin on the main menu. Here, you are greeted with a welcome message and some options to get started. Use the up-and-down arrows on your keyboard to navigate the options menu. Each option you click will take you to a sub-menu where you select the garden you wish to perform the CRUD actions on. View all vegetables will show a table with all the data fetched from the selected garden. Add a vegetable will take your input, validate it, and create a new entry in the database. Remove a vegetable will delete an entry from the selected garden's database given your input. The Update option will let you update the quantity of your selected vegetable from your garden. Order by will sort the database in ascending order based on quantity for easy viewing. Finally, Exit will close the app. In all other sub-menus, a convenient Home option is provided to return to the main menu. 

## License
MIT License

Copyright (c) 2023 Harpreet Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.