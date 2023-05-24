import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Mainpage from "../pages/Mainpage";
import Errorpage from "../pages/Errorpage";
  
export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Mainpage/>} errorElement={<Errorpage/>} >
        
    </Route>
))

