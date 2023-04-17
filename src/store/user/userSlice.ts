import { createSlice } from "@reduxjs/toolkit";
import UserType from "../../type/userType";

const USER_INITIAL_STATE: UserType = {
    id: "",
    userName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    pincode: "",
};

const userSlice = createSlice({
    name: "user slice",
    initialState: USER_INITIAL_STATE,
    reducers: {
        addUser(state, actions: { payload: UserType }) {
            console.log(actions.payload);
            return actions.payload;
        },
    },
});

export default userSlice;
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
