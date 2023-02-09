# Aero
A small sample project for Varjo.
Why Aero? Everyone knows that figuring out naming is one of the hardest things in programming and since Varjo already has a product name Aero I just borrow the name. (otherwise I'd go for test123)

## Installation
download node.js
download this project
run `npm install` in the root folder of this project
run either `npm run dev` for live server running on localhost:3000 with hot-reload or `npm run start` to build the project and serve it on localhost:5000

## Technology
- node.js - loved and cared for
- react - everybody's favorite
- react-router - very simple way of routing between different pages 
- css-loader - generates class names so I can use the same ones multiple times, helps keeping things organized
- webpack - makes development easier
- eslint - someone needs to check my work
- typescript - nice to have
- axios - makes fetching super simple

## The task:

Your react coding task is to implement a simple application that holds the following
features:

It has a login / signup form
User is able to signup and login
behind login, there should be a protected page for example /dashboard (only
accessable after login)
on the dashboard page, show a dummy list of friends of the logged in user.
In order to do this, use the following API : https://randomuser.me to get a
random list of people.
behind login, there should be protected page ( /profile ) for displaying the
logged in user’s data by username , for example: /profile/john

Now, there’s no need to implement any type of authentication system, or backend at
all. The user credentials can be stored in any state-management of your choice, and
no need to be persisted.

The application does not need to have a fancy design, however the chosen styling
methods and their implementation is scope of the task.