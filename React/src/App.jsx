import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Service from "./pages/Service";
import State from "./hooks/State";
import Form from "./hooks/Form";

function App(){
  let name ='vijay'
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home name={name}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
        {/* <Home/>
        <About/>
        <Service/>
        <ContactUs/> */}
    </>
  )
}

export default App;