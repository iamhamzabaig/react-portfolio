import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import "./App.css";

function App() {
  return (
    <div className="dark:bg-slate-900 min-h-screen">
      <h1 class="text-3xl font-bold underline">Hello world!</h1> <ThemeToggle />
    </div>
  );
}

export default App;
