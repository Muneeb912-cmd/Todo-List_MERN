import { Routes, Route, Outlet } from "react-router-dom"; // Import Outlet


import Home from './Pages/Home/Home';
import Contact from "./Pages/Contact/Contact";


const App = () => {
  return (
    <div  style={{ height: "100%", width: "100%" }}>
      <main>
        <Routes>
        {/* <Route path="/login-signup" element={<Login_SignUp />} /> 
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} /> */}
          <Route path="/" element={<Home />} />   
          <Route path="/Contact" element={<Contact />} />   
        </Routes>
        {/* Use Outlet to render nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;
