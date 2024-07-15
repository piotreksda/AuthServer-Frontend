import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Map from "./pages/Map/Map";
import Settings from "./pages/Settings/Settings";
import Statistics from "./pages/Statistics/Statistics";
import Terminal from "./pages/Terminal/Terminal";
import Profile from "./pages/Profile/Profile";
import Permit from "./pages/Permit/Permit";

export default function getRouter(){
    
    return createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "",
          element: <Dashboard/>
        },
        {
          path: "map",
          element: <Map/>
        },
        {
          path: "settings",
          element: <Settings/>
        },
        {
          path: "statistics",
          element: <Statistics/>
        },
        {
          path: "cli",
          element: <Terminal/>
        },
        {
          path: "profile",
          element: <Profile/>
        }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "permit",
      element: <Permit/>
    }
  ]);
}