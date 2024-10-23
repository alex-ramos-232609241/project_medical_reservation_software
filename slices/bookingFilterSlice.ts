import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ShowBookingFilter {
    id_specialty: number;
    id_professional: number;
}

const initialState = {
    id_specialty:  -1,
    id_professional: -1
}

const bookingFilterSlice = createSlice({
    name: "bookingFilterSlice",
    initialState,
    reducers: {
        changeStateBookingFilter: (state, action: PayloadAction<ShowBookingFilter> ) => {
            state.id_specialty= action.payload.id_specialty;
            state.id_professional= action.payload.id_professional;
        }

    }
});

export const {changeStateBookingFilter} = bookingFilterSlice.actions;
export default bookingFilterSlice.reducer;
