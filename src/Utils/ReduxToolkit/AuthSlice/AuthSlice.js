import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const initialState = {
    email: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
}

export const CreateUser = createAsyncThunk("auth/CreateUser", async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data?.user.email
})

export const SigninUser = createAsyncThunk("auth/SigninUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    // console.log(data)
    return data?.user.email

})




const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading
        },
        setUser: (state, action) => {
            state.email = action.payload
            state.isLoading = false
            state.isSuccess = false
        },
        logOut: (state) => {
            state.email = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(CreateUser.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = "";
        })
            .addCase(CreateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.email = action.payload;
                state.errorMessage = "";

            })
            .addCase(CreateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.email = "";
                state.isError = true;
                state.errorMessage = action.error.message;
            })
            .addCase(SigninUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(SigninUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.email = action.payload;
                state.isError = false;
                state.errorMessage = "";

            })
            .addCase(SigninUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.email = "";
                state.isError = true;
                state.errorMessage = action.error.message;
            })
    }

})
export const { toggleLoading, setUser, logOut } = AuthSlice.actions

export default AuthSlice.reducer