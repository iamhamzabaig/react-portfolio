import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen grid grid-cols-12 gap-x-9 transition-all ease-in-out duration-400">
      <div className="sm:col-span-2">
        <Profile />
      </div>
      <div className="sm:col-span-9">
        <Home />
      </div>
      <div className="sm:col-span-1">
        <Header />
      </div>
    </div>
  );
}

export default App;
