import { createSlice } from "@reduxjs/toolkit";
import { registerApi } from "api/authAPI";

const initialState = {
  isLogin: false,
  userInfo: null,
  loading: false,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSucccess(state, action) {
      const { userInfo } = action.payload;
      if (userInfo) {
        state.isLogin = true;
      }
      state.userInfo = userInfo;
      state.loading = false;
      state.error = null;
    },
    registerError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerError } = auth.actions;
export default auth.reducer;

export const register = ({ firstName, lastName, email, password }) => async (
  dispatch
) => {
  try {
    dispatch(registerStart());
    const response = await registerApi({
      firstName,
      lastName,
      email,
      password,
    });
    dispatch(
      registerSuccess({
        userInfo: response.data,
      })
    );
  } catch (error) {
    dispatch(registerError(error.response.data));
  }
};
