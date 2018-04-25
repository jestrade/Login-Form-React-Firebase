# Login Form
> This repository contains a single web front end application deployable in Firebase, using Firebase tools.

## Usage
Login form that redirects the user to a protected page. The protected page shows 2 links to Message List and Upload File
> Define the following environment variables in a file named .env to access to the Firebase services

* NODE_ENV=dev
* API_KEY=
* AUTH_DOMAIN=
* DATABASE_URL=
* STORAGE_BUCKET=
* MESSAGING_SENDER_ID=
* PROJECT_ID=

----
## Technologies
* Webpack
* HTML
* CSS(SASS) + Material-UI
* Javascript (React + Redux)
* Firebase (Realtime DB, Authentication, Storage, Functions)

## Run the project
To execute the application you must run the following commands:
* npm install
* npm run build
* npm start


## Firebase 
To start using Firebase integration
* npm install -g firebase-tools
* firebase login --no-localhost
* firebase init

### Hosting
To deploy the application in hosting 
* firebase deploy

### Functions
To deploy and use functions 
* firebase init functions
* cd functions/
* add service-account-credentials.json to functions folder. This file is generated in Firebase Console
* npm install
    firebase deploy --only-functions


### @jestrade