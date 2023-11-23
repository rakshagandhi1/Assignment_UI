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
import { TodoProvider } from "./Contexts";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  // Theme Context
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // useEffect(() => {
  //   document.querySelector("html").classList.remove("light", "dark");
  //   document.querySelector("html").classList.add(themeMode);
  //   // console.log(themeMode)
  // }, [themeMode]);

  // Todo Context
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) =>
    [...prev,{id:Date.now(),...todo}])
    console.log("todo item=>",todo)
  } 

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}:prevTodo))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length > 0){
      console.log('todos',todos)
      setTodos(todos)
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  
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
      <h1 className="bg-orange-600 text-white text-center text-xl m-4 p-4">
        React Router
      </h1>
      <UserContextProvider>
        <Header />
        <Outlet />
        {/* Theme Context */}
        {/* <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
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
      </ThemeProvider> */}

        {/* Todo Context */}
        <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
          <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                Manage Your Todos
              </h1>
              <div className="mb-4">{/* Todo form goes here */}
              <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) =>
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </TodoProvider>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
