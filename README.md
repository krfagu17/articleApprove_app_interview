# Article Approve

This project is a two-part application designed to manage article approval processes. It includes both a backend built with Node.js and Express, and a mobile frontend built with React Native.

## Table of Contents

- [Backend](#backend)
- [Frontend](#frontend)
- [Setup](#setup)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Backend

The backend of this project is a RESTful API built using **Node.js** and **Express**. It also uses **Mongoose** for MongoDB interactions, **JWT** for authentication, and **bcryptjs** for password hashing.

### Key Features:
- API development with **Express.js**
- MongoDB integration using **Mongoose**
- Authentication using **JWT**
- Environment variable management with **dotenv**
- Live reloading during development with **nodemon**

#### Backend `package.json` Highlights:
- **Name**: article_approve
- **Version**: 1.0.0
- **Scripts**:
  - `start`: Starts the server using `nodemon` to monitor the `api/index.js` file.
- **Dependencies**: bcryptjs, cors, dotenv, express, jsonwebtoken, mongoose, nodemon

## Frontend

The frontend is a mobile application built using **React Native**. It supports both Android and iOS platforms and uses **React Navigation** for routing, and **Async Storage** for data persistence on the client side.

### Key Features:
- Mobile development using **React Native**
- Navigation with **React Navigation**
- State management with **Async Storage**
- API requests with **Axios**
- Testing with **Jest**

#### Frontend `package.json` Highlights:
- **Name**: article_approve
- **Version**: 0.0.1
- **Scripts**:
  - `android`: Run the application on Android.
  - `ios`: Run the application on iOS.
  - `start`: Start the React Native bundler.
  - `test`: Run tests using **Jest**.
- **Dependencies**: react, react-native, axios, react-navigation, async-storage
- **DevDependencies**: Typescript, Babel, Jest, Eslint, Prettier

## Setup

### Backend Setup

1. Clone the repository.
2. Navigate to the backend directory.
3. Install dependencies:
   ```bash
   npm install

4.Start the backend server

   ```bash
   npm start

