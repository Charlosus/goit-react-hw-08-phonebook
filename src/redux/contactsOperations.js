import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://685269f30594059b23cd6a72.mockapi.io/api'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => { 
        try {
            const response = await axios.get('contacts')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addCont',
    async({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('contacts', {
                name, number});
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`contacts/${contactId}`);
            return contactId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);