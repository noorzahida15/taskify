import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Tasks from "./screens/Tasks";
import Payment from "./screens/payment";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AppRoutes;
