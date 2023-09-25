import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import MA from "../../Pages/Make Announcements";
import GC from "../../Pages/Use Groupchat";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/makeannouncement" element={<MA />}></Route>
      <Route path="/usegroupchat" element={<GC />}></Route>
    </Routes>
  );
}
export default AppRoutes;
