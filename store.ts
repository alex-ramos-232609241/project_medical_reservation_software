import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import accessTokenReducer from "./slices/accessTokenSlice";
import authReducer from "./slices/authSlice";
import calendarReducer from "./slices/calendarSlice";
import bookingFilterReducer from "./slices/bookingFilterSlice";
import notificationReducer from "./slices/notificacionSlice";
import patientReducer from "./slices/patientsSlice";
import paymentReducer from "./slices/paymentSlice";
import productsReducer from "./slices/productsSlice";
import servicesReducer from "./slices/servicesSlice";
import professionalsReducer from "./slices/professionalsSlice";
import specialtiesReducer from "./slices/specialtiesSlice";
import vitalSignsReducer from "./slices/vitalSignsSlice";
import bookingReducer from "./slices/bookingSlice";
import plansReducer from "./slices/plansSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['accessTokenSlice'],
}
const rootReducer = combineReducers({
    accessTokenSlice: accessTokenReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        auth: authReducer,
        users: userReducer,
        patients: patientReducer,
        payments: paymentReducer,
        products: productsReducer,
        services: servicesReducer,
        professionals: professionalsReducer,
        specialties: specialtiesReducer,
        vitalSigns: vitalSignsReducer,
        notification: notificationReducer,
        calendar: calendarReducer,
        bookingsFilter: bookingFilterReducer,
        bookings: bookingReducer,
        plans: plansReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
          })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
