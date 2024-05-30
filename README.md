# budget_tracker

Budget tracker in MERN (MongoDb, Express, React, Nodejs)

This repository consist 2 files which is backend and frontend

BACKEND

1. npm init to start and to set entry point (app.js)
2. Package that need to be install is npm install express mongoose cors nodemon
3. .env file consist the MongoDB database url
4. npm install dotenv to install the environment
5. In file controllers consist REStful API of expense and income
6. In file model consist the schema for the database
7. In file routes consist the route API for the database for frontend use to add data, retrives data and delete data
8. npm start to run the server and DB connection (cd backend first)

FRONTEND

1. Package that need to be install is npm install axios chart.js moment react-chartjs-2 react-datepicker styled-components
2. Axios package for request api, moment for date, chart.js for chart in dashboard, styled-components for styling the UI
3. npm start to run the website in localhost (cd frontend first)
4. In file component consist all component for website
5. In file App.js consist the main component for the website
6. In file context consist the api request from backend
7. In file images consist images and background used for website
8. In file style consist style for each div, h1, mainlayout and innerlayout
9. In file utils consist the function for date and time
10. Hosting the website at Github pages the url is https://afiqzaidin03.github.io/budget_tracker/ need to npm run deploy in frontend file
11. and run the DB to see the data together with the website
