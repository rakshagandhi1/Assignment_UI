import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "font-awesome/css/font-awesome.min.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { elements } from "chart.js";
import Counter from "./Components/Counter";
import GraphDetail from "./Components/GraphDetail";
import Details from "./Components/Details";
import User from "./Components/User";
import Github, { githubInfoLoader } from "./Components/Github";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "counter",
//         element: <Counter />,
//       },
//       {
//         path: "graph",
//         element: <GraphDetail />,
//       },
//       {
//         path: "details",
//         element: <Details />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="graph" element={<GraphDetail />} />
      <Route path="counter" element={<Counter />} />
      <Route path="details" element={<Details />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
