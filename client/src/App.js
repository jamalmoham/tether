import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/Signup";
import DrawerAppBar from "./components/Navbar";
import  Nav  from "./components/Nav";


function App() {
  return (
    <div className="App">
      {/* <DrawerAppBar /> */}
      <Nav/>
      <SignUp />
    </div>
  );
}

export default App;
