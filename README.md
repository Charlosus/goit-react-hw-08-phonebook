## 📞 Phonebook App

A full-featured React-Redux application for managing your personal contacts.
Includes user authentication and private routing.

# 🚀 Features

🔐 User registration and login with JWT authentication

📥 Add new contacts with name and phone number

❌ Delete existing contacts

🔍 Filter contacts by name

🔄 Persistent login using Redux + redux-persist

🧭 Protected and restricted routes (e.g. /contacts only for logged-in users)

🚨 Error handling for API requests

🌐 Official GoIT backend API

## 🧰 Tech Stack

React

React Router v6

Redux Toolkit

Redux Thunk (createAsyncThunk)

Axios

redux-persist

Vite

📦 Getting Started Clone the repository:

```bash

git clone https://github.com/Charlosus/goit-react-hw-08-phonebook.git
```
Install dependencies:


```bash

npm install
```
Run the app:


```bash

npm run dev
```

## 🔐 Authentication API

The app uses the official GoIT backend API. Key endpoints include:

POST /users/signup – create new user

POST /users/login – login and receive token

POST /users/logout – logout

GET /users/current – fetch current user using token

Your token is saved in local storage and reloaded on app start.

## 🔒 Route Protection

/contacts is private – available only when logged in

/login and /register are restricted – not available for logged-in users

## 🧪 Demo Credentials

You can use these test credentials or create your own:

Email: karoltest123@example.com

Password: 12345678

## 📄 License

This project is for educational purposes only, as part of the GoIT React course.
