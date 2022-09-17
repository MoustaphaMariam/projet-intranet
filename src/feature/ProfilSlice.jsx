import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
};

const profilSlice = createSlice({
  name: "user",
  initialState,
});

export default profilSlice.reducer;
