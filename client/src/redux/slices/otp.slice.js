import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

/* ================= SEND OTP ================= */

export const sendOtpThunk = createAsyncThunk(
    "otp/sendOtp",
    async (email, { rejectWithValue }) => {
        try {
            const response = await api.post("/otp/send-otp", { email });
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to send OTP"
            );
        }
    }
);

/* ================= VERIFY OTP ================= */

export const verifyOtpThunk = createAsyncThunk(
    "otp/verifyOtp",
    async ({ email, otp }, { rejectWithValue }) => {
        try {
            const response = await api.post("/otp/verify-otp", {
                email,
                otp,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Invalid OTP"
            );
        }
    }
);

const otpSlice = createSlice({
    name: "otp",
    initialState: {
        loading: false,
        error: null,
        isOtpVerified: false
    },
    reducers: {
        clearOtpError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOtpThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendOtpThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(sendOtpThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(verifyOtpThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtpThunk.fulfilled, (state) => {
                state.loading = false;
                state.isOtpVerified = true;
            })
            .addCase(verifyOtpThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearOtpError } = otpSlice.actions;
export default otpSlice.reducer;