# Alsharq-Task

## NOTE
I had to use expo in order to save time, I faced some serious and unexpected issues caused by android studio, java and gradle on my local machine.

## screens
this is a simple project with two screens:
- home : fetches a list of posts from https://jsonplaceholder.typicode.com/posts
- post details : shows the desired post details (title, user id  and post body)..
  this screen will fetch the https://jsonplaceholder.typicode.com/posts/${id}
  in order to get the post data by id, this is the recommended way to apply Single Responsibility Principle

## installation
- clone the repository
```
git clone https://github.com/omarKhatib/alsharq-task.git
```

- install dependencies
```
npm install
```
or with yarn
```
yarn install
```
- start the project
```
npm start
yarn start
```

## routing mechanism
expo-router empliments navigation dynamically and out of box, all routes are placed inside app folder:
- home: the entry point to the app (/app/index.js)
- details: single post details by the provided id (/app/details/[id].js)




