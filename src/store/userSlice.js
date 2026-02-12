import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const usersThunk = createAsyncThunk('users/usersThunk', async (_, thunkApi) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    return result;
})

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false
    },
    reducers: {
        updateUser: (state, action) => {
            state.loading = true;
        },
        deleteUser: (state, action) => {
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(usersThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(usersThunk.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
    }
});

export const { updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;