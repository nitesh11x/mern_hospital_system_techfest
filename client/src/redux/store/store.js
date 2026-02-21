import { configureStore } from '@reduxjs/toolkit'
import patientReducer from "../slices/patient.slice";
import otpReducer from "../slices/otp.slice";
export const store = configureStore({
    reducer: {
        patient: patientReducer,
        otp: otpReducer
    },

});