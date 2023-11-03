import "./App.css";
import Sidebar from "./Components/Sidebar";
import GraphDetail from "./Components/GraphDetail";
import About from "./Components/About";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./Components/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Cards";
import { ThemeProvider } from "./Components/Theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode,setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode('light');
  }
  const darkTheme = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(themeMode);
    // console.log(themeMode)
  },[themeMode])
  return (
    <div className="App">
      {/* <div>
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
      <div className="row dashboardContainer">
        <div className="col-lg-2 col-sm-4 col-xs-12 sidebarBlock">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-sm-8 col-xs-12 detailsBlock">
          <Counter />
          <GraphDetail />
        </div>
      </div> */}
      <h1 className="bg-orange-600 text-white text-center text-xl m-4 p-4">React Router</h1>
      <UserContextProvider>
      <Header />
      <Outlet />
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
       <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>
      <Footer />
      </UserContextProvider>     
    </div>
  );
}

export default App;
