/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */
/**
 * node modules
 */
import { RouterProvider } from "react-router"

/**
 * 
 * other modules
 */
import { Router } from "@/app.route"
export const App = ()=>{
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}