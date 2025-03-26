import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './features/globalReducer'

// export const makeStore = () => {
//     return configureStore({
//         reducer: {}
//     })
// }
const store = configureStore({
    reducer: {
        global: globalReducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat([]),
});


export default store;