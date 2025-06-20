# Phonebook App

A simple React-Redux application for managing your contacts. You can add, delete, and search for contacts. Data is stored using a mock API (MockAPI).

## Features

- Add new contacts with name and phone number
- Delete existing contacts
- Filter contacts by name
- Loading spinner while fetching data
- Error handling for API requests

## Tech Stack

- React
- Redux Toolkit
- Redux Thunk (via `createAsyncThunk`)
- Axios
- React Spinners (`ClipLoader`)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/Charlosus/goit-react-hw-07-phonebook.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## API

This project uses [MockAPI](https://mockapi.io/) for simulating backend interactions. The base URL is:

```
https://685269f30594059b23cd6a72.mockapi.io/api
```

## License

This project is for educational purposes as part of the GoIT React course.
