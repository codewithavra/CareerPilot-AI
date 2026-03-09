/**
 * @copyright 2026 codewithavra
 * @license apache-2.0
 */

/**
 * node modules
 */
import { createBrowserRouter } from "react-router";

/**
 * other modules
 */
import { Login } from "@/features/auth/pages/Login";
import { Register } from "@/features/auth/pages/Register";
import { LandingPage } from "@/features/auth/pages/LandingPage";


export const Router = createBrowserRouter([
    {
        path : '/',
        Component : LandingPage
    },{
        path : '/login',
        Component : Login
    },{
        path : '/register',
        Component : Register
    }
])