import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

/* ================= REGISTER ================= */

export const patientRegisterThunk = createAsyncThunk(
    "patient/register",
    async (
        { patientId, firstName, lastName, email, password, phone, dob, gender, profile },
        { rejectWithValue }
    ) => {
        try {
            const formData = new FormData();

            formData.append("patientId", patientId);
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("phone", phone);
            formData.append("dob", dob);
            formData.append("gender", gender);

            if (profile) {
                formData.append("profile", profile);
            }

            const response = await api.post("patient/register", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Registration failed"
            );
        }
    }
);

/* ================= LOGIN ================= */

export const patientLoginThunk = createAsyncThunk(
    "patient/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await api.post("patient/login", {
                email,
                password,
            });

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

/* ================= LOGOUT ================= */

export const patientLogoutThunk = createAsyncThunk(
    "patient/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.post("patient/logout");
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Logout failed"
            );
        }
    }
);

/* ================= SLICE ================= */

const patientSlice = createSlice({
    name: "patient",
    initialState: {
        patient: null,
        loading: false,
        error: null,
        isPatientAuthenticated: false,
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder

            /* REGISTER */
            .addCase(patientRegisterThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(patientRegisterThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.patient = action.payload.patient;
                state.isPatientAuthenticated = true;
            })
            .addCase(patientRegisterThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* LOGIN */
            .addCase(patientLoginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(patientLoginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.patient = action.payload.patient;
                state.isPatientAuthenticated = true;
            })
            .addCase(patientLoginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            /* LOGOUT */
            .addCase(patientLogoutThunk.fulfilled, (state) => {
                state.patient = null;
                state.isPatientAuthenticated = false;
            });
    },
});

export const { clearError } = patientSlice.actions;

export default patientSlice.reducer;