import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "./components/layout/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Board from "./pages/Board";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> }
        ]
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'boards', element: <Home /> },
            { path: 'boards/:boardId', element: <Board /> },
        ]

    }
])


export default router;