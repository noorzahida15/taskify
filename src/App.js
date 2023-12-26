import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./lib/AuthProvider";
// import payment from "./screens/payment";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
