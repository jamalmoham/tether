import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/Signup";
import DrawerAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <SignUp />
      <DrawerAppBar />
    </div>
  );
}

export default App;
