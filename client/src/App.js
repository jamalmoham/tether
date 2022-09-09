// import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/Signup";
// import DrawerAppBar from "./components/Navbar";
import  Nav  from "./components/Nav";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import LandingPage from "./components/LandingPage";


function App() {
  return (
    <div className="App">
      {/* <DrawerAppBar /> */}
      <Nav/>
      <LandingPage/>
      {/* <Registration/> */}
      {/* <SignUp/> */}
      <Footer/>
    </div>
  );
}

export default App;
