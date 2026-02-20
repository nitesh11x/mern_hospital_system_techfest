import { configureStore } from '@reduxjs/toolkit'
import patientReducer from "../slices/patient.slice";
export const store = configureStore({
    reducer: {
        patient: patientReducer
    },

});