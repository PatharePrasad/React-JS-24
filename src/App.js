import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Register from "./screens/Register";
import UserList from "./screens/UserList"

const router = createBrowserRouter([
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/UserList",
        element: <UserList />,
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

