// import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/Signup";
// import DrawerAppBar from "./components/Navbar";
import  Nav  from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      {/* <DrawerAppBar /> */}
      <Nav/>
      <SignUp />
      <Footer/>
    </div>
  );
}

export default App;
