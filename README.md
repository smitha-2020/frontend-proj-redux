# Front-end Project specification

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/Redux-v.1.9-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4.9-green)
![SASS](https://img.shields.io/badge/SASS-v.4.9-hotpink)

This project requires implementation of TypeScript and SASS.

## Requirement

## Tools 
redux toolkit
Material UI
SCSS
redux-persist for persistence
styled library of Material UI
Jest for unit testing

## Features

1.Used the API endpoint https://fakeapi.platzi.com/ to create an e-commerce website and write unit tests for the each of the reducers.
2.Created  4 pages Home page(static page with categories), product page(displays products and categories to choose from), profile page (only available if user logins), and cart page (displays specific to the user.If logged out cart shows the content of anonymous user)
3.Used redux-toolkit and redux-persist to create 
product reducer: get all products, find a single products, sort products by categories, sort products by price. Create, update and delete a product (enabling update & delete features only for admin of the webapp.
user reducer: Register and Login(once logged in as an admin, he has a full control of the webapp)
cart reducer: add product to cart, remove products, update products's quantity in cart
4.Implemented switch theme using useMemo
5.Implemented Pagination using custom hoook.
6.Implemented Hooks like useState,useEffect
6.Written 4 test suits with upto 20 test cases for the user reducers,category reducer, product reducer, cart reducer.
7.Made use of Material UI icons, and styled library for styling.
## Future Improvements
Modularize the code.
Using styled library through the application.
Testing of UI.
Implementing debounce for the search bar.
Iproving the overall look of the website.

Link to the frontend project https://imaginative-torrone-1d9492.netlify.app/
## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
