import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { localhost, port } from "../static/development";

export const fetchPhases = () => createAsyncThunk('phases/fetchPhases', async () => {
    const response = await axios.get(`${localhost}/api/v1/phases`);
    return response.data.data.data;
});

const phasesSlice = createSlice({
    name: 'phases',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPhases.fulfilled, (state, action) => {
            state = action.payload;
        });
    },
});

const selectAllPhases = state => state.phases;