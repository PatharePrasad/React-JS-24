import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./screens/Register";
import UserList from "./screens/UserList"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import rootReducer from "./store/Reducer";
import Store from "./store/Store";
import Contact from "./screens/Contact";
import { CountProvider } from "./context/CountContext";


const router = createBrowserRouter([
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/UserList",
        element: <UserList />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
]);

function App() {
    return (
        <div>
            <Provider store={Store}>
                <CountProvider>
            <RouterProvider router={router} />
            </CountProvider>
            </Provider>
        </div>
    );
}

export default App;

